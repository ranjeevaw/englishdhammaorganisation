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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ margin: "10px" }}>
        📅 Appointments (දානය)  Calendar
      </h2>

<div
  style={{
    margin: "10px",
    padding: "15px",
    background: "#fff8e8",
    border: "1px solid #e0c97f",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  }}
>
  <h3 style={{ marginTop: 0 }}>
    📝 Booking Instructions
  </h3>

  <ul style={{ marginBottom: 0 }}>
    <li>On Mobile phones long press on an empty cell to start adding a new appointment.</li>
    <li>Select an available future date on the calendar.</li>
    <li>Choose the appropriate meal offering type.</li>
    <li>Complete all required fields in the booking form.</li>
    <li>Only one booking is allowed per meal slot per day.</li>
    <li>Click an existing booking to view or edit it.</li>
    <li>Past appointments cannot be modified.</li>
    <li>If you still have problems please contact us from the Contact Us Page.</li>
  </ul>
</div>

<div
  style={{
    height: "800px",
    margin: "10px",
  }}
>

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
