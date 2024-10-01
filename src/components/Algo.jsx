import React, { useEffect, useRef } from 'react';

export default function Algo() {
    const textoMovibleRef = useRef(null); // Usamos ref en lugar de getElementById

    useEffect(() => {
        const textoMovible = textoMovibleRef.current;

        const handleMouseMove = (event) => {
            textoMovible.style.position = 'absolute';
            textoMovible.style.left = `${event.clientX}px`;  // Usamos left y top para evitar issues con translate
            textoMovible.style.top = `${event.clientY}px`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup para evitar memory leaks
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div ref={textoMovibleRef} style={{ position: 'absolute' }}>Este texto seguirá al mouse</div>;
}
