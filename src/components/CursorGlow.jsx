import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 rounded-full opacity-70 blur-xl"
      style={{
        width: 50,
        height: 50,
        backgroundColor: "rgba(180, 150, 255, 0.7)", // purple glow color
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        zIndex: 9999,
      }}
    />
  );
}
