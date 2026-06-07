import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Monthly Dhamma Sermon",
    date: "21 June 2026",
    location: "Melbourne Buddhist Centre",
    image: "/images/dhamma-sermon.jpg",
    description:
      "Join us for an inspiring Dhamma sermon followed by meditation and discussion.",
  },
  {
    id: 2,
    title: "Kathina Ceremony",
    date: "15 October 2026",
    location: "English Dhamma Organisation",
    image: "/images/kathina.jpg",
    description:
      "Annual Kathina ceremony with offerings, blessings, and community gathering.",
  },
  {
    id: 3,
    title: "Meditation Retreat",
    date: "12 December 2026",
    location: "Retreat Centre",
    image: "/images/meditation-retreat.jpg",
    description:
      "A one-day retreat focusing on mindfulness, concentration, and loving-kindness.",
  },
];

export default function Events() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="page">
      <h1>Upcoming Events</h1>

      {events.map((event) => (
        <div key={event.id} className="sermon-card">
          <img
            src={event.image}
            alt={event.title}
            className="sermon-image"
            onClick={() => setSelectedImage(event.image)}
            style={{ cursor: "pointer" }}
          />

          <div className="sermon-content">
            <h2>{event.title}</h2>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Location:</strong> {event.location}
            </p>

            <p>{event.description}</p>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div
          className="poster-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="poster-modal">
            <img
              src={selectedImage}
              alt="Event Poster"
              className="poster-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
