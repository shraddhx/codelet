import { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/space.jpg";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [showArrow, setShowArrow] = useState(false);

   useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "I'm Shraddha Mishra",
          "Welcome to my Codelet",
        ],
        typeSpeed: 40,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
        onComplete: () => setShowArrow(true),
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        color: "white",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "330px",
          left: "250px",
          width: "100%",
          textAlign: "left",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "lightblue"
        }}
      >
        Hello,
      </h1>

      <h1
        style={{
          position: "absolute",
          top: "400px",
          left: "250px",
          width: "100%",
          textAlign: "left",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "lightblue"
        }}
      >
        <span ref={typedRef}></span>
      </h1>

      {showArrow && (
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "2rem",
            animation: "jump 1s infinite",
            cursor: "default",
            color: "lightblue"
          }}
        >
          ↓
        </div>
      )}

      <style>
        {`
          @keyframes jump {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
}
