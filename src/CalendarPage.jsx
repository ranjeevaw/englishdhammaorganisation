import { useEffect, useState } from "react";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";

//import { format } from "date-fns";

export const formatLocalDate = (date) =>
  format(date, "yyyy-MM-dd");

export const formatLocalTime = (date) =>
  format(date, "HH:mm");

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const buildDateTime = (dateStr, timeStr) => {
  if (!dateStr) return new Date();

  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = (timeStr || "00:00").split(":").map(Number);

  return new Date(y, m - 1, d, hh, mm);
};

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const eventsRef = collection(db, "appointments");

  useEffect(() => {
    const unsub = onSnapshot(eventsRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const d = doc.data();

        const start = buildDateTime(
          d.apt_date,
          d.apt_time
        );

        // Default appointment duration = 30 minutes
        const end = new Date(
          start.getTime() + 30 * 60000
        );

const eventPropGetter = (event) => {
  if (event.deleted) {
    return {
      style: {
        textDecoration: "line-through",
        opacity: 0.5,
        backgroundColor: "#999",
      },
    };
  }

  return {};
};

return {
  id: doc.id,
title: d.deleted
  ? `[CANCELLED] ${d.name || "No Name"} - ${d.purpose || ""}`
  : `${d.name || "No Name"} - ${d.purpose || ""}`,
  start,
  end,
  raw: d,
  deleted: d.deleted ?? false,
};

      });

      setEvents(data);
    });

    return () => unsub();
  }, []);

const handleSelectSlot = (slotInfo) => {
  const selectedDate = new Date(slotInfo.start);

  const today = new Date();

  const selectedYmd = format(selectedDate, "yyyy-MM-dd");
  const todayYmd = format(today, "yyyy-MM-dd");

  if (selectedYmd < todayYmd) {
    return;
  }

  const apt_date = format(selectedDate, "yyyy-MM-dd");
  const apt_time = format(selectedDate, "HH:mm");

  navigate(
    `/appointment/new?date=${apt_date}&time=${apt_time}`
  );
};

const handleSelectEvent = (event) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(event.start);
  eventDate.setHours(0, 0, 0, 0);

  if (eventDate < today) {
    alert("Past appointments cannot be edited.");
    return;
  }

  navigate(`/appointment/${event.id}`);
};

const dayPropGetter = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cellDate = new Date(date);
  cellDate.setHours(0, 0, 0, 0);

  if (cellDate < today) {
    return {
      style: {
        backgroundColor: "#f3f3f3",
        color: "#999",
      },
    };
  }

  return {};
};

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ margin: "10px" }}>
        📅 Appointments (දානය)  Calendar
      </h2>

      <div style={{ flex: 1 }}>
<Calendar
  localizer={localizer}
  events={events}
  startAccessor="start"
  endAccessor="end"
  selectable
  onSelectSlot={handleSelectSlot}
  onSelectEvent={handleSelectEvent}
  dayPropGetter={dayPropGetter}
  //eventPropGetter={eventPropGetter}
  style={{ height: "100%" }}
/>
      </div>
    </div>
  );
}
