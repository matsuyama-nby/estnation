"use client";

import { useState, useEffect } from 'react';

// 判定対象にするセクションIDの型
type SectionId = 'mens' | 'womens';

export const useScrollIndicator = () => {
  // 初期値 'mens'
  const [activeSection, setActiveSection] = useState<SectionId>('mens');

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = ['mens', 'womens'];
    targets.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
};