import { Box, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Secoda",
      date: "May 2025 - Aug 2025",
      description:
        "Python, TypeScript, JavaScript, React, HTML, CSS",
      side: "left",
    },
    {
      title: "Software Developer",
      company: "Secoda",
      date: "Sep 2024 - Dec 2024",
      description:
        "Python, TypeScript, JavaScript, React, HTML, CSS",
      side: "right",
    },
    {
      title: "Automation Developer",
      company: "Zoocasa",
      date: "Jan 2024 - Apr 2024",
      description: "GoLang, Cypress, TypeScript, JavaScript, React, HTML, CSS",
      side: "left",
    },
    {
      title: "Quality Assurance Analyst",
      company: "Peekapak",
      date: "Apr 2023 - Aug 2023",
      description:
        "Bash, Cypress",
      side: "right",
    },
  ];

  const [modalOpened, {open, close}] = useDisclosure();
  const [chosenExperience, setChosenExperience] = useState(0);


  const handleOnClick = (index: number) => {
    setChosenExperience(index)
    // modal doesnt work perfectly yet so save for later
    // open()
  }

  return (
    <>
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
        <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "2.5rem" }}>
          Work Experience
        </h1>

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
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          {/* Center timeline line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "4px",
              background: "#a14fff",
              transform: "translateX(-50%)",
            }}
          ></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "60%",
                padding: "20px 40px",
                boxSizing: "border-box",
                textAlign: exp.side === "left" ? "right" : "left",
                left: "50%",
                transform:
                  exp.side === "left" ? "translateX(-100%)" : "translateX(0)",
                marginBottom: "60px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  [exp.side === "left" ? "right" : "left"]: "-10px",
                  width: "20px",
                  height: "20px",
                  background: "#a14fff",
                  borderRadius: "50%",
                  border: "4px solid #240435ff",
                  zIndex: 1,
                }}
              ></div>

              <Box
                style={{
                  background: "#4a1a76",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  border: "1px solid #6c2bb8",
                  cursor: "pointer"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onClick={() => handleOnClick(index)}
              >
                <h3 style={{ margin: "0 0 5px", color: "#fff" }}>{exp.title}</h3>
                <h4
                  style={{
                    margin: "0 0 10px",
                    color: "#d5b3ff",
                    fontWeight: "normal",
                  }}
                >
                  {exp.company} • {exp.date}
                </h4>
                <p style={{ margin: 0, color: "#e8dfff" }}>{exp.description}</p>
              </Box>
            </div>
          ))}
        </div>
      </div>

      <Modal
        opened={modalOpened}
        onClose={close}
        title={experiences[chosenExperience].title}
        zIndex={10000}
        withinPortal
        centered
      >
        <div>hello</div>
      </Modal>
    </>
  );
}
