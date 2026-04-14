// hooks/useScrollPosition.ts
"use client";
import { useState, useEffect } from "react";

export const usePageReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 最初からスクロールされている場合は即表示（リロード時）
    //if (window.scrollY > 0) {
    //  setIsReady(true);
    //  return;
    //}
    
    // 少し遅延させて表示
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return isReady;
};