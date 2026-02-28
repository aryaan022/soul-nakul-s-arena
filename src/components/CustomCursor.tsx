import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;
      requestAnimationFrame(animate);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const overLink = () => setHovering(true);
    const outLink = () => setHovering(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, .cursor-pointer").forEach((el) => {
        el.addEventListener("mouseenter", overLink);
        el.addEventListener("mouseleave", outLink);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      observer.disconnect();
    };
  }, []);

  // Hide on touch devices
  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;
  if (isTouchDevice) return null;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          width: clicking ? 8 : hovering ? 16 : 10,
          height: clicking ? 8 : hovering ? 16 : 10,
          borderRadius: "50%",
          background: hovering
            ? "hsl(185 100% 50% / 0.9)"
            : "hsl(185 100% 50%)",
          boxShadow: `0 0 ${hovering ? 20 : 10}px hsl(185 100% 50% / 0.6)`,
          transition: "width 0.15s, height 0.15s, box-shadow 0.15s",
        }}
      />
      {/* Trail ring */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          borderRadius: "50%",
          border: `1.5px solid hsl(185 100% 50% / ${hovering ? 0.5 : 0.25})`,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
};

export default CustomCursor;
