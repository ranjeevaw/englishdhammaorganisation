
const news = [
  "📢 Special Dhamma sermon by Hon. Ven. Kathnoruwe Siri Dhamma himi on 20th June Saturday at 5pm in English Dhamma Temple",
  "🪷 Sunday dhamma school students go on drama escursion on 14th June Sunday at 3pm in Cranbourne Community Theatre",
  "📅 Alms calendar bookings now open",
  "🙏 Sunday Dhamma school kids enthusiastically participated for the Sil program!",
  "📖 Sunday School registrations are open",
  "🌿 Sil program organized comemorating Vesak festival held successfully on May, 2026",
  "🎓 Sunday dhamma school students paricipated for the valuable tour of parliament excursion",
  "🤝 Volunteers needed for upcoming community event, Dhamma sermon by Kathnoruwe Siri Dhamma himi on 20th June, help needed on 19th June to prepare for the event",
];

export default function NewsTicker() {
  return (
    <div className="right-panel">

    <div className="news-card">
      <div className="news-title">📰 Latest News</div>

      <div className="news-window">
        <div className="news-scroll">
          {news.map((item, index) => (
            <div key={index} className="news-row">
              {item}
            </div>
          ))}

          {/* duplicate list for seamless scrolling */}
          {news.map((item, index) => (
            <div key={`copy-${index}`} className="news-row">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>

<div className="donation-card">
  <img
    src={`${import.meta.env.BASE_URL}images/donation.jpg`}
    alt="Donation"
    className="donation-image"
  />

  <h3>🙏 Support the English Dhamma Organisation</h3>

  <p>
    Your generous donations help support Dhamma teachings,
    temple maintenance, community programs, and future projects.
  </p>

  <div className="donation-details">
    <p><strong>Account Name:</strong> ENGLISH DHAMMA ORG</p>
<p>
  <strong>BSB:</strong> 013-542
  <button className="copy-button" onClick={() => navigator.clipboard.writeText("013542")}>
    Copy
  </button>
</p>
<p>
  <strong>Account Number:</strong> 430308072
  <button className="copy-button" onClick={() => navigator.clipboard.writeText("430308072")}>
    Copy
  </button>
</p>
    <p><strong>Reference:</strong> Donation</p>
  </div>
</div>

<div className="kathina-card">
  <img
    src={`${import.meta.env.BASE_URL}images/kathina-robe.jpg`}
    alt="Kathina Robe"
    className="kathina-image"
  />

  <h3>🟡 Kathina Ceremony 2026 Sponsorship Opportunity</h3>

  <p>
    The English Dhamma Temple warmly invites a generous
    benefactor, family, or organization to become the
    principal sponsor of the 2026 Kathina Ceremony.
  </p>

  <p>
    This is a rare and highly meritorious opportunity to
    support the Sangha and contribute towards the
    preservation and propagation of the Buddha's teachings.
  </p>

  <p>
    Please contact us if you would like to discuss this
    special sponsorship opportunity.
  </p>
</div>


</div>

);

}
