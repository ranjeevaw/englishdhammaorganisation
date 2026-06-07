import { useState } from "react";

const events = [
  {
    id: 1,
    type: "upcoming",
    title: "Special Dhamma Sermon",
    date: "20 June 2026, 5PM",
    location: "English Dhamma Temple",
    photos: [
      `${import.meta.env.BASE_URL}images/sermon2.jpg`,
      `${import.meta.env.BASE_URL}images/sermon3.jpg`,
    ],
    description:
      "Join us for an inspiring Dhamma sermon by renowned Hon Ven Kathnoruwe Siri Dhamma Himi. please register using the Register Now button in the Home page.",
  },
  {
    id: 2,
    type: "upcoming",
    title: "Poson Sil Program",
    date: "27 June 2026",
    location: "English Dhamma Temple",
media: [
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}images/sermon2.jpg`,
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}images/sermon3.jpg`,
  },
]
    description:
      "Annual Kathina ceremony with offerings and blessings.",
  },
  {
    id: 3,
    type: "past",
    title: "Maliyadeva OBA English Dhamma Temple Garden cleaning and car park creation project",
    date: "31 May 2026",
    location: "English Dhamma Temple",
    media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/vesak1.jpg`,
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/vesak2.jpg`,
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}images/vesak3.mp4`,
    },
    ],
    description:
      "Maliyadeva college OBA members organised a labor donation event where they cleaned the garden of the English Dhamma Temple, planted new plants, removed old shed to make space for the car park and enact a wall to support the car park space.",
  },
];

export default function Events() {
  const [selectedImage, setSelectedImage] = useState(null);

const upcomingEvents = events.filter(
  (event) => event.type === "upcoming"
);

const pastEvents = events.filter(
  (event) => event.type === "past"
);

const renderEvents = (eventList) =>
  eventList.map((event) => (
    <div key={event.id} className="sermon-card">
      <div className="event-gallery">
{event.media.map((item, index) => (
  item.type === "image" ? (
    <img
      key={index}
      src={item.src}
      alt={`${event.title} ${index + 1}`}
      className="gallery-thumb"
      onClick={() => setSelectedImage(item.src)}
    />
  ) : (
    <video
      key={index}
      className="gallery-thumb"
      controls
      preload="metadata"
    >
      <source src={item.src} type="video/mp4" />
      Your browser does not support video playback.
    </video>
  )
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
  ));

return (
  <div className="page">
    <h1>Events</h1>

    <h2>📅 Upcoming Events</h2>
    {renderEvents(upcomingEvents)}

    <h2 style={{ marginTop: "40px" }}>
      📸 Past Events
    </h2>
    {renderEvents(pastEvents)}

    {selectedImage && (
      <div
        className="poster-overlay"
        onClick={() => setSelectedImage(null)}
      >
        <div className="poster-modal">
          <img
            src={selectedImage}
            alt="Event"
            className="poster-image"
          />
        </div>
      </div>
    )}
  </div>
);

}
