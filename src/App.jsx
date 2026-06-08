import Calendar from "./Calendar"; // adjust path if different
import Events from "./Events";
import { Routes, Route, Link } from "react-router-dom";
import AppointmentNew from "./EditAppointment";
import AppointmentDetails from "./EditAppointment";
import AdminDelete from "./AdminDelete";
import NewsTicker from "./NewsTicker";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Page = ({title, children}) => (
  <div className="page">
    <h1>{title}</h1>
    {children}
  </div>
);

export default function App() {

  const [showPoster, setShowPoster] = useState(false);

const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


const sendContactEmail = async (e) => {
  e.preventDefault();

  try {

    await emailjs.send(
      "service_xtf9mt7",
      "template_opk6ili",
      {
        from_name: contactForm.name,
        from_email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
      },
      "8G68XWPnW2CkhVGMW"
    );

//    alert("Message sent successfully.");

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (err) {

    console.error(err);

    alert(
      "Failed to send message. Please try again."
    );
  }
};


  return (
    <>

<nav className="nav">
<img
  src={`${import.meta.env.BASE_URL}logo.jpeg`}
  alt="Logo"
  className="logo"
/>
  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about">About Us</Link>
    <Link to="/events">Events</Link>
    <Link to="/alms-calendar">Alms Calendar</Link>
    <a
      href="https://ranjeevaw.github.io/englishdhammasundayschool/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Sunday School
    </a>

    <Link to="/contact">Contact Us</Link>
  </div>
</nav>

      <Routes>
<Route
  path="/"
  element={
    <div className="home-layout">
      
<Page title="English Dhamma Organisation">
  <div className="home-content">

<div className="hero-banner">
  <h1>May All Beings Be Happy</h1>

  <p>
    Sharing the teachings of the Buddha through wisdom,
    compassion and mindfulness.
  </p>
</div>

    <div className="welcome-card">
      <h2>Welcome</h2>

      <p>
        The English Dhamma Organisation is dedicated to sharing the teachings
        of the Buddha in a way that is accessible to people of all ages and
        backgrounds.
      </p>

      <p>
        Through Dhamma discussions, meditation programs, Sunday School
        activities, almsgiving opportunities, and community service projects,
        we strive to create a supportive environment for spiritual growth and
        personal development.
      </p>
    </div>

    <div className="quote-card">
      <h3>Thought for the Day</h3>

      <blockquote>
        "Mind precedes all phenomena. Mind is their chief; they are all
        mind-made."
      </blockquote>

      <p>— Dhammapada Verse 1</p>
    </div>

<div className="sermon-card">

  <img
    src={`${import.meta.env.BASE_URL}sermon.jpg`}
    alt="Weekly Dhamma Sermon"
    className="sermon-image"
  />

  <div className="sermon-content">

    <h3>🎙️ Featured Dhamma Sermon</h3>

    <h2>
      The Path to Inner Peace Through Mindfulness
    </h2>

    <p>
      Join Ven. Kathnoruwe Siri Dhamma Thero for an
      inspiring Dhamma sermon exploring how mindfulness,
      wisdom, and compassion can help us overcome stress,
      cultivate inner peace, and live more meaningful lives.
    </p>

    <p>
      This discussion focuses on practical ways to
      apply the Buddha's teachings in our daily lives,
      helping us develop clarity, kindness, and emotional
      balance.
    </p>

<button
  className="sermon-button"
  onClick={() => setShowPoster(true)}
>
  Register Now
</button>

  </div>

</div>

    <div className="activities-card">
      <h3>Our Activities</h3>

      <ul>
        <li>🪷 Poson Sil program on 27th June, All are welcome!</li>
        <li>📖 Spread the word! We welcome students for our Dhamma school!</li>
        <li>🎓 English Dhamma Sunday School</li>
        <li>🙏 Almsgiving & Merit Sharing Programs, Go to the Alms calendar and reserve your date for Alms giving programs!</li>
        <li>🌱 Dhamma school special excursions. Parliament tour, Free Kids Drama, Many more to come!</li>
        <li>🤝 Volunteer Opportunitiea, get in touch with our reverend to find out how you can voluenteer for various activities such as maintaining our beautiful Dhamma Temple garden and premises maintenance.</li>
      </ul>
    </div>

  </div>
</Page>

      <NewsTicker />

    </div>
  }
/>


<Route
path="/about"
element={ <Page title="About Us">

  <div className="about-page">

    <div className="about-card">
      <h2>Who We Are</h2>

      <p>
        The English Dhamma Organisation was established in 2021 with the aim
        of sharing the teachings of the Buddha with the Australian community
        through the English language.
      </p>

      <p>
        Our vision was inspired by the growing need to make Buddhist
        teachings more accessible to younger generations, particularly among
        Sri Lankan Australians whose primary language is increasingly
        English.
      </p>

      <p>
        We recognized that many children and descendants of Sri Lankan
        migrants are growing up in an English-speaking environment. By
        teaching the Dhamma in English, we hope to help them develop a
        deeper understanding of Buddhist principles while maintaining a
        meaningful connection to their cultural and spiritual heritage.
      </p>
    </div>

    <div className="about-card">
      <h2>Our Mission</h2>

      <p>
        Our mission is to foster a compassionate, knowledgeable, and
        spiritually enriched community grounded in Buddhist values.
      </p>

      <p>
        We strive to create opportunities for people of all ages and
        backgrounds to learn, practice, and benefit from the timeless
        teachings of the Buddha.
      </p>
    </div>

    <div className="about-card">
      <h2>Our Institutions</h2>

      <h3>🪷 English Dhamma Temple</h3>

      <p>
        Located in the peaceful and picturesque surroundings of Gembrook,
        Victoria, our temple provides a tranquil environment for meditation,
        Dhamma discussions, religious observances, and community gatherings.
      </p>

      <p>
        <strong>Address:</strong><br />
        9 Bernal East Road, Gembrook, Victoria, Australia
      </p>

      <hr />

      <h3>🎓 English Dhamma Sunday School</h3>

      <p>
        Our Sunday School is dedicated to educating children and young
        adults in Buddhist teachings, ethics, culture, and traditions
        through the medium of English.
      </p>

      <p>
        <strong>Website:</strong><br />
        <a
          href="https://ranjeevaw.github.io/englishdhammasundayschool/"
          target="_blank"
          rel="noopener noreferrer"
        >
          English Dhamma Sunday School
        </a>
      </p>
    </div>

    <div className="about-card">
      <h2>Community and Tradition</h2>

      <p>
        We are committed to maintaining the highest standards in all our
        activities and events. From weekly Dhamma programs to major
        religious celebrations, we endeavor to preserve and promote the rich
        traditions of Buddhism with sincerity and dedication.
      </p>

      <p>
        Our annual Katina Ceremony stands as a testament to the passion,
        devotion, and collective effort of our community. These events not
        only strengthen our spiritual foundations but also bring people
        together in friendship, generosity, and service.
      </p>
    </div>

    <div className="about-card">
      <h2>Looking to the Future</h2>

      <p>
        The English Dhamma Organisation is a community-based initiative,
        built upon the generosity and participation of its members and
        supporters.
      </p>

      <p>
        We warmly invite everyone to join us in our vision of growing
        together according to Buddhist principles of wisdom, compassion, and
        mindfulness.
      </p>

      <p>
        Together, we can ensure that the teachings of the Buddha continue to
        inspire future generations and that our temple and educational
        programs remain a lasting source of guidance, learning, and
        spiritual development for many years to come.
      </p>
    </div>

    <div className="leadership-section">

      <div className="leader-card">
        <img
          src={`${import.meta.env.BASE_URL}president.jpg`}
          alt="President"
          className="leader-photo"
        />

        <h3>Mrs. Janaki Rajaguru</h3>

        <p className="leader-title">
          President
        </p>

        <p>
Our President is Mrs. Janaki Rajaguru, the wife of well-known businessman Mr. Anura Bannaka who is a Graduate of Migration Law, completing her graduate degree in Univesrity Of Victoria University. Mrs. Rajaguru founded the English Dhamma Organisation with the vision of disseminating Buddhist teachings in the English language, particularly for the Sri Lankan community living in Australia. With a strong background and experience in Australian community and political engagement, Mrs. Rajaguru currently leads and manages the English Dhamma Organisation with great dedication and compassion. Under her leadership, the beautiful English Dhamma Temple, located on the scenic mountainside of Gembrook, was recently built and generously donated to the community. Known for her calm nature, leadership qualities, and excellent people-management skills, she has successfully organised many religious, cultural, and community events together with the members of the English Dhamma Organisation. Her vision is to make the teachings of Lord Buddha more accessible to people seeking Buddhist knowledge in English, especially the younger generation and Sunday School children who are more familiar with the English language.
        </p>
      </div>

      <div className="leader-card">
        <img
          src={`${import.meta.env.BASE_URL}chief-incumbent.jpg`}
          alt="Chief Incumbent"
          className="leader-photo"
        />

        <h3>Ven. Sewanagala Nandarathana Thero</h3>

        <p className="leader-title">
          Chief Incumbent
        </p>

        <p>
Our Chief Incumbent is the Most Venerable Rev. Sewanagala Nandarathana Thero. He entered the monastic order at Siththamgalla Raja Maha Viharaya and pursued his higher studies under the guidance of the Most Venerable Agalabada Piyasiri Maha Nayaka thero and later stayed with Ven Seevali Thero in Ratnapura. After completing his higher education at the University of Kelaniya, he migrated to Australia and currently serves as the Chief Incumbent of the English Dhamma Temple located at 9 Beenak Road, Gembrook. The Thero is well known on YouTube, where several of his Dhamma sermons and teachings have reached millions of viewers worldwide. It is a great blessing and privilege for the students of our Sunday School to learn Buddhist doctrine under his guidance and benefit from his extensive knowledge of Buddhist philosophy and teachings.
        </p>
      </div>

    </div>

  </div>

</Page>

}
/>


<Route path="/events" element={<Events />} />

<Route path="/alms-calendar" element={<Calendar />} />
<Route
  path="/appointment/new"
  element={<AppointmentNew />}
/>
<Route path="/admin/delete/:id" element={<AdminDelete />} />
<Route
  path="/appointment/:id"
  element={<AppointmentDetails />}
/>

<Route
  path="/contact"
  element={
    <Page title="Contact Us">

      <div className="contact-page">

        <div className="contact-details">

          <div className="contact-card">
            <h2>📍 Organisation Contact</h2>

            <p>
              <strong>Address:</strong><br />
              9 Bernal East Road, Gembrook
            </p>

            <p>
              <strong>Email:</strong><br />
              englishdhamma21@gmail.com
            </p>

            <p>
              <strong>Phone:</strong><br />
              +61 406 422 873
            </p>
          </div>

          <div className="contact-card">
            <h2>👨‍💼 President</h2>

            <p>
              <strong>Name:</strong><br />
              Mrs. Janaki Rajaguru
            </p>

            <p>
              <strong>Phone:</strong><br />
              +61 406 422 873
            </p>

            <p>
              <strong>Email:</strong><br />
              englishdhamma21@gmail.com
            </p>
          </div>

          <div className="contact-card">
            <h2>🙏 Reverend</h2>

            <p>
              <strong>Name:</strong><br />
              Ven. Sewanagala Nandarathana
            </p>

            <p>
              <strong>Phone:</strong><br />
              +61 493 494 963
            </p>

            <p>
              <strong>Email:</strong><br />
              snanda9511@gmail.com
            </p>
          </div>

        </div>

        <div className="contact-form-card">
          <h2>✉️ Send Us a Message</h2>
<form
    onSubmit={(e) => {
      e.preventDefault();
      sendContactEmail(e);
      alert("Thank you for your message.");
    }}
  >

<input
  type="text"
  placeholder="Your Name"
  value={contactForm.name}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      name: e.target.value,
    })
  }
  required
/>

<input
  type="email"
  placeholder="Your Email"
  value={contactForm.email}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      email: e.target.value,
    })
  }
  required
/>


<input
  type="text"
  placeholder="Subject"
  value={contactForm.subject}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      subject: e.target.value,
    })
  }
  required
/>


<textarea
  rows="6"
  placeholder="Your Message"
  value={contactForm.message}
  onChange={(e) =>
    setContactForm({
      ...contactForm,
      message: e.target.value,
    })
  }
  required
/>


            <button type="submit">
              Send Message
            </button>
          </form>

        </div>

      </div>

    </Page>
  }
/>

</Routes>

<footer className="footer">
  <div className="footer-content">

    <div className="footer-section">
      <h3>🪷 English Dhamma Organisation</h3>
      <p>
        Sharing the Buddha's teachings in English for all generations.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/alms-calendar">Alms Calendar</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact</h3>

      <p>📍 9 Bernal East Road, Gembrook</p>
      <p>📧 englishdhamma21@gmail.com</p>
      <p>📞 +61 406 422 873</p>
    </div>

  </div>

  <div className="footer-bottom">
<p>
  "Sabbe Sattā Bhavantu Sukhitattā" •
  May all beings be happy •
  © {new Date().getFullYear()} English Dhamma Organisation
</p>
  </div>
</footer>

    {showPoster && (
      <div
        className="poster-overlay"
        onClick={() => setShowPoster(false)}
      >
        <div
          className="poster-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-button"
            onClick={() => setShowPoster(false)}
          >
            ✕
          </button>

          <img
            src={`${import.meta.env.BASE_URL}kathn.jpg`}
            alt="Event Poster"
            className="poster-image"
          />
        </div>
      </div>
    )}

    </>
  );


}
