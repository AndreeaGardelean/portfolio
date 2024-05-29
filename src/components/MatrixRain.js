import React, { useRef, useEffect } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    let letters = '10';
    letters = letters.split('');

    // Setting up the columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Setting up the drops
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    // Loop the animation
    const interval = setInterval(draw, 33);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return <canvas
    ref={canvasRef}
    style={{
      display: 'block',
      width: '100%',
      height: '100%',
      maskImage: 'radial-gradient(circle at center center, black, transparent 75%)',
      WebkitMaskImage: 'linear-gradient(180deg, transparent, black 55%, black 75%, transparent)'
    }}
  />;
};

export default MatrixRain;
