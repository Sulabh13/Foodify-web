import { useState } from "react";

const twitterIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const facebookIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const instagramIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

// Realistic food image placeholders using gradient patterns
const foodImages = [
  "https://i.pinimg.com/736x/42/c1/3c/42c13c88ca46afa789b62c88f09fb5fd.jpg",
  "https://i.pinimg.com/1200x/71/85/04/718504c749768e2acea31fd4640f8efa.jpg",
  "https://i.pinimg.com/736x/0b/cb/89/0bcb89af5b0bf592adc703131788ef02.jpg",
  "https://i.pinimg.com/736x/03/78/ce/0378ce7050561ab89c574bc964503e9d.jpg",
  "https://i.pinimg.com/1200x/a6/d0/56/a6d0560ea6a03ffe7a29a8de336f1caa.jpg",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=200&h=200&fit=crop",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const hours = [
    { day: "Monday", time: "9:00 – 24:00" },
    { day: "Tuesday", time: "9:00 – 24:00" },
    { day: "Wednesday", time: "9:00 – 24:00" },
    { day: "Thursday", time: "9:00 – 24:00" },
    { day: "Friday", time: "9:00 – 02:00" },
    { day: "Saturday", time: "9:00 – 02:00" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <footer style={{
      backgroundColor: "#1a1a1a",
      color: "#ccc",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      padding: "60px 0 0 0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 48px;
        }

        .footer-col h3 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 20px 0;
          letter-spacing: 0.5px;
        }

        .footer-col p {
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: #999;
          margin: 0 0 20px 0;
        }

        .social-icons {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #2a2a2a;
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaa;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .social-btn:hover {
          background: #e74c3c;
          border-color: #e74c3c;
          color: #fff;
          transform: translateY(-2px);
        }

        .hours-table {
          width: 100%;
          border-collapse: collapse;
        }

        .hours-table tr td {
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          padding: 6px 0;
          color: #999;
          border-bottom: 1px solid #2a2a2a;
        }

        .hours-table tr td:last-child {
          text-align: right;
          color: #ccc;
        }

        .hours-table tr:last-child td {
          border-bottom: none;
        }

        .hours-table tr td.closed {
          color: #e74c3c;
        }

        .newsletter-input {
          width: 100%;
          background: #2a2a2a;
          border: 1px solid #3a3a3a;
          color: #ccc;
          padding: 12px 16px;
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          outline: none;
          box-sizing: border-box;
          margin-bottom: 10px;
          transition: border-color 0.2s;
        }

        .newsletter-input:focus {
          border-color: #e74c3c;
        }

        .newsletter-input::placeholder {
          color: #666;
        }

        .subscribe-btn {
          width: 100%;
          background: #e74c3c;
          color: #fff;
          border: none;
          padding: 13px 20px;
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .subscribe-btn:hover {
          background: #c0392b;
        }

        .subscribe-btn.success {
          background: #27ae60;
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
        }

        .insta-thumb {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .insta-thumb:hover {
          transform: scale(1.05);
        }

        .insta-thumb::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(231, 76, 60, 0);
          transition: background 0.25s ease;
        }

        .insta-thumb:hover::after {
          background: rgba(231, 76, 60, 0.35);
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 50px auto 0;
          padding: 20px 40px;
          border-top: 1px solid #2a2a2a;
          text-align: center;
        }

        .footer-bottom p {
          font-family: 'Lato', sans-serif;
          font-size: 13px;
          color: #666;
          margin: 0;
        }

        .footer-bottom a {
          color: #e74c3c;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }

        @media (max-width: 560px) {
          .footer-inner {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .footer-bottom {
            padding: 20px;
          }
        }
      `}</style>

      <div className="footer-inner">
        {/* Col 1: Brand */}
        <div className="footer-col">
          <h3>Foodify</h3>
          <p>
            Delivering delicious meals with care and quality, crafted to satisfy every craving.
          </p>
          <div className="social-icons">
            <a href="#" className="social-btn" aria-label="Twitter">{twitterIcon}</a>
            <a href="#" className="social-btn" aria-label="Facebook">{facebookIcon}</a>
            <a href="#" className="social-btn" aria-label="Instagram">{instagramIcon}</a>
          </div>
        </div>

        {/* Col 2: Open Hours */}
        <div className="footer-col">
          <h3>Open Hours</h3>
          <table className="hours-table">
            <tbody>
              {hours.map(({ day, time }) => (
                <tr key={day}>
                  <td>{day}</td>
                  <td className={time === "Closed" ? "closed" : ""}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Col 3: Newsletter */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>
            Far far away, behind the word mountains, far from the countries.
          </p>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
          />
          <button
            className={`subscribe-btn${subscribed ? " success" : ""}`}
            onClick={handleSubscribe}
          >
            {subscribed ? "✓ Subscribed!" : "Subscribe"}
          </button>
        </div>

        {/* Col 4: Instagram */}
        <div className="footer-col">
          <h3>Instagram</h3>
          <div className="instagram-grid">
            {foodImages.map((src, i) => (
              <div key={i} className="insta-thumb">
                <img src={src} alt={`Food ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          Copyright ©2026 All rights reserved |{" "}
          This template is made with ♥ by <a href="#">Colorlib</a>
        </p>
      </div>
    </footer>
  );
}