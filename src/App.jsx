import { Routes, Route } from "react-router-dom";
import CalendarPage from "./CalendarPage";
import EditAppointment from "./EditAppointment";
import AdminDelete from "./AdminDelete";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
      <Route path="/appointment/new" element={<EditAppointment />} />
      <Route path="/appointment/:id" element={<EditAppointment />} />
<Route
  path="/admin/delete/:id"
  element={<AdminDelete />}
/>
    </Routes>
  );
}
