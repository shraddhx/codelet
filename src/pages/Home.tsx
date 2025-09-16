import { useEffect, useRef } from "react";
import backgroundImage from "../assets/homepage_background.jpg";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Hello, I'm Shraddha Mishra",
          "Welcome to my Codelet",
          "This message will self-disrupt soon...",
          ""
        ],
        typeSpeed: 40,
        backSpeed: 25,
        backDelay: 2000,
        loop: false,
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
          bottom: "800px",
          width: "100%",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        <span ref={typedRef}></span>
      </h1>
    </div>
  );
}
