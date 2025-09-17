import profileImage from "../assets/linkedin.jpg";

export default function About() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)",
        width: "100%",
        backgroundColor: "#0c2855",
        color: "white",
        padding: "60px 10%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "20px",
          letterSpacing: "1px",
        }}
      >
        About Me
      </h1>

      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#4fa3ff",
          borderRadius: "2px",
          marginBottom: "50px",
        }}
      ></div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Hi, I'm <span style={{ color: "#4fa3ff" }}>Shraddha Mishra</span>.
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              opacity: 0.9,
            }}
          >
            I'm in my 3B term at the University of Waterloo, studying Computer
            Science. I'm driven by curiosity — whether it's exploring music,
            tackling complex software challenges, or simply tinkering with
            discarded objects.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src={profileImage}
            alt="Shraddha Mishra"
            style={{
              maxWidth: "350px",
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </div>
    </div>
  );
}
