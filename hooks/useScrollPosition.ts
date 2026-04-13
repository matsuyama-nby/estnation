// hooks/useScrollPosition.ts
"use client";
import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.7;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    if (window.scrollY > threshold) {
      setIsScrolled(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};