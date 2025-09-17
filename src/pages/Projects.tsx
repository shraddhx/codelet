import { Box } from "@mantine/core";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Secoda",
      date: "May 2025 - Aug 2025",
      description: "Built a Secoda AI chatbot for MS Teams, wrote a few agents to better Secoda AI .",
      side: "left",
    },
    {
      title: "Software Developer",
      company: "Secoda",
      date: "Sep 2024 - Dec 2024",
      description: "Managed projects: announcement flow, templates flow, icon selector.",
      side: "right",
    },
    {
      title: "Automation Developer",
      company: "Company C",
      date: "Jan 2024 - Apr 2024",
      description: "Unit tests, cypress tests, also frontend work",
      side: "left",
    },
    {
      title: "Quality Assurance Analyst",
      company: "Peekapak",
      date: "Apr 2023 - Aug 2023",
      description: "Wrote cypress test suite, wrote scripts for encrypting data.",
      side: "right",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        padding: "50px 20px",
        background: "#240435ff",
        color: "white",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Work Experience</h1>

      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#a14fffff",
          borderRadius: "2px",
          marginBottom: "50px",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          maxWidth: "800px",
          margin: "0 auto",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            bottom: "0",
            width: "4px",
            background: "#0c2855",
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>
    </div>
  );
}
