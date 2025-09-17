import { useState } from "react";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const infoCards = [
    { title: "Email", value: "shraddha.mishra1205@gmail.com" },
    { title: "Phone", value: "+1 (647) 514-1821" },
    { title: "Location", value: "Toronto, Canada" },
    { title: "LinkedIn", value: "https://linkedin.com/in/shraddhx-mishra/" },
    { title: "GitHub", value: "https://github.com/shraddhx" },
    { title: "Portfolio", value: "https://957453.wixsite.com/thesocialnetwork" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #061939ff, #120a6bff)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px", fontWeight: 700 }}>
        Contact Me
      </h1>

      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#4fa3ff",
          borderRadius: "2px",
          marginBottom: "60px",
        }}
      ></div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          width: "100%",
          maxWidth: "1100px",
          alignItems: "center",
        }}
      >
        {/* Left: Contact Form */}
        <form
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(6px)",
            padding: "50px 40px",
            borderRadius: "24px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        >
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea
            placeholder="Your Message"
            rows={5}
            style={{ ...inputStyle, resize: "none" }}
          />
          <button
            type="submit"
            style={{
              background:
                "linear-gradient(90deg, #4f69ffff, #89a4ffff)",
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: "16px",
              fontSize: "1.2rem",
              cursor: "pointer",
              fontWeight: 600,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(79, 79, 255, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={(e) => {
              e.preventDefault();
              setMessageSent(true);
            }}
          >
            {messageSent ? "Message Sent!" : "Send Message"}
          </button>
        </form>

        {/* Right: Contact Info Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "25px",
          }}
        >
          {infoCards.map((card, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(5px)",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(79, 85, 255, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.2)";
              }}
            >
              <h3 style={{ margin: "0 0 8px", color: "#4fa3ff", fontWeight: 600 }}>
                {card.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  wordBreak: "break-word",
                  color: "#f4e6f2",
                  fontSize: "0.95rem",
                }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "15px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "1rem",
  outline: "none",
};
