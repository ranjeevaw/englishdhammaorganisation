import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { db } from "./firebase";

import {
  doc,
  getDoc,
  updateDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";


export default function EditAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

const [error, setError] = useState("");
  const isNew = !id;

  const [loading, setLoading] = useState(true);

  const [appointment, setAppointment] = useState({
    name: "",
    purpose: "",
    address: "",
    apt_date: searchParams.get("date") || "",
    apt_time: searchParams.get("time") || "",
    details: "",
    contact_number: "",
  });

const purposeOptions = [
  "Morning Alms - හීල් දානය",
  "Lunch Alms - දවල් දානය",
  "Evening Alms - ගිලන්පස",
];

  useEffect(() => {
    if (isNew) {
      setLoading(false);
      return;
    }

    loadAppointment();
  }, [id]);

const loadAppointment = async () => {
  try {
    const ref = doc(db, "appointments", id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      alert("Appointment not found");
      navigate("/");
      return;
    }

    if (snap.data().deleted === true) {
      alert("This appointment has been deleted.");
      navigate("/");
      return;
    }

    setAppointment((prev) => ({
      ...prev,
      ...snap.data(),
    }));
  } catch (err) {
    console.error(err);
    alert("Failed to load appointment");
  } finally {
    setLoading(false);
  }
};

const handleChange = (field, value) => {
  setError("");

  setAppointment((prev) => ({
    ...prev,
    [field]: value,
  }));
};

const validateAppointment = async () => {
  const q = query(
    collection(db, "appointments"),
    where("apt_date", "==", appointment.apt_date),
    where("purpose", "==", appointment.purpose)
  );

  const snapshot = await getDocs(q);

  const activeAppointments = snapshot.docs.filter(
    (docSnap) => {
      const data = docSnap.data();

      return data.deleted !== true;
    }
  );

  if (isNew) {
    return activeAppointments.length === 0;
  }

  const conflictingDocs = activeAppointments.filter(
    (docSnap) => docSnap.id !== id
  );

  return conflictingDocs.length === 0;
};

const validateRequiredFields = () => {
  if (!appointment.name.trim()) {
    return "Name is required";
  }

  if (!appointment.purpose.trim()) {
    return "Purpose is required";
  }

  if (!appointment.contact_number.trim()) {
    return "Contact number is required";
  }

  if (!appointment.address.trim()) {
    return "Address is required";
  }

  if (!appointment.details.trim()) {
    return "Please provide details of the alms offering and merit transfer intentions";
  }

  return null;
};

const saveAppointment = async () => {
  const validationError = validateRequiredFields();

  if (validationError) {
    setError(validationError);
    return;
  }

  setError("");

  const valid = await validateAppointment();

  if (!valid) {
    setError(
      `${appointment.purpose} has already been booked for ${appointment.apt_date}. Please choose another date or meal slot.`
    );
    return;
  }

  setError("");

  try {
    if (isNew) {
      await addDoc(collection(db, "appointments"), {
        ...appointment,
        deleted: false,
        deletedAt: null,
        deletedBy: null,
        created: new Date(),
        updated: new Date(),
      });

      alert("Appointment created successfully");
    } else {
      await updateDoc(doc(db, "appointments", id), {
        ...appointment,
        updated: new Date(),
      });

      alert("Appointment updated successfully");
    }

    navigate("/");
  } catch (err) {
    console.error(err);
    alert("Failed to save appointment");
  }
};

  const deleteAppointment = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmed) return;

    try {
await updateDoc(doc(db, "appointments", id), {
  deleted: true,
  deletedAt: new Date(),
  deletedBy: "admin",
});

      alert("Appointment deleted");

      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to delete appointment");
    }
  };

  if (loading) {
    return <div style={{ padding: 20 }}>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 800, margin: "20px auto", padding: 20 }}>
      <h2>
        {isNew
          ? "New Appointment"
          : "Edit Appointment"}
      </h2>

      <div style={{ marginBottom: 15 }}>
        <label>Name</label>
        <br />
        <input
          style={{ width: "100%", padding: 8 }}
          value={appointment.name}
          onChange={(e) =>
            handleChange("name", e.target.value)
          }
        />
      </div>

<div style={{ marginBottom: 15 }}>
  <label>Purpose</label>
  <br />
  <select
    style={{
      width: "100%",
      padding: 8,
      fontSize: "16px",
    }}
    value={appointment.purpose}
    onChange={(e) =>
      handleChange("purpose", e.target.value)
    }
  >
    <option value="">-- Select Purpose --</option>

    {purposeOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
</div>

      <div style={{ marginBottom: 15 }}>
        <label>Address</label>
        <br />
        <input
          style={{ width: "100%", padding: 8 }}
          value={appointment.address}
          onChange={(e) =>
            handleChange("address", e.target.value)
          }
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Contact Number</label>
        <br />
        <input
          style={{ width: "100%", padding: 8 }}
          value={appointment.contact_number}
          onChange={(e) =>
            handleChange(
              "contact_number",
              e.target.value
            )
          }
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Date</label>
        <br />
        <input
          type="date"
          style={{ padding: 8 }}
          value={appointment.apt_date}
          onChange={(e) =>
            handleChange("apt_date", e.target.value)
          }
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Time</label>
        <br />
        <input
          type="time"
          style={{ padding: 8 }}
          value={appointment.apt_time}
          onChange={(e) =>
            handleChange("apt_time", e.target.value)
          }
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Details</label>
        <br />
<textarea
  rows={6}
  style={{ width: "100%", padding: 8 }}
  placeholder="Please provide details such as the purpose of this alms offering and the person(s) to whom merits may be transferred."
  value={appointment.details}
  onChange={(e) =>
    handleChange("details", e.target.value)
  }
/>
      </div>

{error && (
  <div
    style={{
      backgroundColor: "#ffe5e5",
      color: "#c62828",
      border: "1px solid #ef9a9a",
      borderRadius: "4px",
      padding: "12px",
      marginBottom: "15px",
      fontWeight: "bold",
    }}
  >
    {error}
  </div>
)}


      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={saveAppointment}>
          Save
        </button>

        <button onClick={() => navigate("/")}>
          Cancel
        </button>

        {!isNew && (
<button
  onClick={() =>
    navigate(`/admin/delete/${id}`)
  }
>
  Delete
</button>
        )}
      </div>
    </div>
  );
}
