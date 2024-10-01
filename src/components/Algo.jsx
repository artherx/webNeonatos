import React, { useEffect, useRef } from "react";

export default function Algo() {
  const textoMovibleRef = useRef(null); // Usamos ref en lugar de getElementById

  useEffect(() => {
    const textoMovible = textoMovibleRef.current;

    const handleMouseMove = (event) => {
      textoMovible.style.left = `calc(18% - ${event.clientX * 0.03}px)`; // Usamos left y top para evitar issues con translate
      textoMovible.style.top = `calc(10% - ${event.clientY * 0.01}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup para evitar memory leaks
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div class="text-6xl font-bold" ref={textoMovibleRef} style={{ position: "absolute" }}>
      Simulador de Neonatos en Realidad Virtual
    </div>
  );
}
