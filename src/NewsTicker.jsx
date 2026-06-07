
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
  );
}
