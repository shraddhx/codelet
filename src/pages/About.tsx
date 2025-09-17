import profileImage from "../assets/linkedin.jpg";

export default function About() {
  return (
    <div
      style={{
        height: "calc(100vh - 100px)",
        width: "100%",
        backgroundColor: "#0c2855ff",
        color: "white",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        About Me
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "600px",
        justifyItems: "center",
        alignItems: "center",
      }}>
        <div>
          <div>Hi, I'm Shraddha Mishra.</div>
          <div> </div>
          <div>
            I'm in my 3b term at the University of Waterloo, studying Computer Science. 
            I'm driven by curiosity, whether it be for music, different software challenges, 
            or simply tinkering with discarded objects.
          </div>
        </div>
        <div>
          <img
            src={profileImage}
            alt="Shraddha Mishra"
            style={{
              maxWidth: "400px",
              maxHeight: "600px",
              width: "100%",
              height: "auto",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

    </div>
  );
}
