"use client";

import { useState, useEffect } from 'react';

// 判定対象にするセクションIDの型
type SectionId = 'mens' | 'womens';

export const useScrollIndicator = () => {
  // 初期値 'mens'
  const [activeSection, setActiveSection] = useState<SectionId>('mens');
  // メニューのtop位置
  const [menuTop, setMenuTop] = useState<number>(0);

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

    const updateMenuPosition = () => {
      const titleContent = document.querySelector('.fashion-mainTtl-content');
      if (titleContent) {
        const height = titleContent.getBoundingClientRect().height;
        setMenuTop(height + 60);
      }
    };

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateMenuPosition);
    };
  }, []);

  return { activeSection, menuTop };
};