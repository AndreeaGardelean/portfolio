import React, { useEffect } from "react";
import "../css/cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursorInner = document.getElementById("inner-cursor");
    const cursorOutline = document.getElementById("outline-cursor");

    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      cursorInner.style.left = `${mouseX}px`;
      cursorInner.style.top = `${mouseY}px`;

      cursorOutline.animate(
        { left: `${mouseX}px`, top: `${mouseY}px` },
        { duration: 500, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  });

  return (
    <div id="cursor">
      <div id="inner-cursor" className="cursor-inner"></div>
      <div id="outline-cursor" className="cursor-outline"></div>
    </div>
  );
};

export default Cursor;
