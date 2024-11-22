"use client"
import { useEffect } from "react";

const createFallingElement = (className: string) => {
    const element = document.createElement("div");
    element.classList.add(className);
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.animationDuration = Math.random() * 4 + 8 + "s";
    element.style.transform = `scale(${Math.random() * 0.1+0.4})`;
    document.body.appendChild(element);
  
    setTimeout(() => {
      element.remove();
    }, 10000);
  };
  
  const Snowfall: React.FC = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        createFallingElement("snowflake");
        if (Math.random() > 0.9) {
          createFallingElement("leaf");
        }
      }, 180);
  
      return () => clearInterval(interval);
    }, []);
  
    return null;
  };
  
  export default Snowfall;
  