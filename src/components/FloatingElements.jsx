'use client';

import { useState, useEffect } from 'react';

export default function FloatingElements() {
  const [style, setStyle] = useState({
    left: "50%",
    top: "50%",
    animationDelay: "0s",
    animationDuration: "10s",
    fontSize: "16px"
  });

  useEffect(() => {
    setStyle({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      fontSize: `${Math.random() * 10 + 10}px`,
    });
  }, []);

  return <div style={style}>*</div>;
}
