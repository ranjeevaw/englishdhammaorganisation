import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Monthly Dhamma Sermon",
    date: "21 June 2026",
    location: "Melbourne Buddhist Centre",
    photos: [
      `${import.meta.env.BASE_URL}images/sermon1.jpg`,
      `${import.meta.env.BASE_URL}images/sermon2.jpg`,
      `${import.meta.env.BASE_URL}images/sermon3.jpg`,
    ],
    description:
      "Join us for an inspiring Dhamma sermon followed by meditation and discussion.",
  },
  {
    id: 2,
    title: "Kathina Ceremony",
    date: "15 October 2026",
    location: "English Dhamma Organisation",
    photos: [
      `${import.meta.env.BASE_URL}images/kathina1.jpg`,
      `${import.meta.env.BASE_URL}images/kathina2.jpg`,
      `${import.meta.env.BASE_URL}images/kathina3.jpg`,
    ],
    description:
      "Annual Kathina ceremony with offerings and blessings.",
  },
];

export default function Events() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="page">
      <h1>Upcoming Events</h1>

      {events.map((event) => (
        <div key={event.id} className="sermon-card">
<div className="event-gallery">
  {event.photos.map((photo, index) => (
    <img
      key={index}
      src={photo}
      alt={`${event.title} ${index + 1}`}
      className="gallery-thumb"
      onClick={() => setSelectedImage(photo)}
    />
  ))}
</div>
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
