
import { Routes, Route, Link } from "react-router-dom";

const Page = ({title, children}) => (
  <div className="page">
    <h1>{title}</h1>
    {children}
  </div>
);

export default function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/events">Events</Link>
        <Link to="/alms-calendar">Alms Calendar</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <Page title="English Dhamma Organisation">
            <p>Welcome to the English Dhamma Organisation.</p>
            <p>Sharing the Buddha's teachings in English for all generations.</p>
          </Page>
        } />
        <Route path="/about" element={
          <Page title="About Us">
            <p>We promote Dhamma education, community service and Buddhist values.</p>
          </Page>
        } />
        <Route path="/events" element={
          <Page title="Events">
            <p>Upcoming sermons, meditation programs and community activities.</p>
          </Page>
        } />
        <Route path="/alms-calendar" element={
          <Page title="Alms Calendar">
            <p>Embed or link your existing alms calendar application here.</p>
          </Page>
        } />
        <Route path="/contact" element={
          <Page title="Contact Us">
            <p>Email: info@example.org</p>
            <p>Address: 9 Bernal East Road, Gembrook</p>
          </Page>
        } />
      </Routes>
    </>
  );
}
