import React, { useEffect, useRef } from 'react';

const StatSphere = ({ score , note}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const maxScore = 100; // Valor máximo
    const fillPercentage = score / maxScore; // Calcula el porcentaje
    const fillAngle = Math.PI * 2 * fillPercentage; // Ángulo de relleno

    // Dibuja el círculo base (esfera)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2);
    ctx.fillStyle = '#e0e0e0'; // Color de la esfera
    ctx.fill();

    // Dibuja el círculo relleno según el score
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, 80, -Math.PI / 2, fillAngle - Math.PI / 2);
    ctx.closePath();
    ctx.fillStyle = '#76c7c0'; // Color de relleno
    ctx.fill();

  }, [score]); // Redibuja cuando cambia el score

  return (
    <div className="stat-sphere-container">
      <canvas ref={canvasRef} width={200} height={200} />
      <p>{note}: {score} puntos</p>
    </div>
  );
};

export default StatSphere;
