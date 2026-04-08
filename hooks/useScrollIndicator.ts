"use client";

import { useState, useEffect } from 'react';

// 判定対象にするセクションIDの型
type SectionId = 'mens' | 'womens';

export const useScrollIndicator = () => {
  // 初期値 'mens'
  const [activeSection, setActiveSection] = useState<SectionId>('mens');

  useEffect(() => {
    // 判定基準の設定
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // 中央20%のエリアで判定
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // セクションが判定エリアに入った（isIntersecting）時のみ更新
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // HTML上の id="mens" と id="womens" を持つ要素を監視
    const targets = ['mens', 'womens'];
    targets.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // クリーンアップ（ページ遷移時などに監視を解除）
    return () => observer.disconnect();
  }, []);

  return activeSection;
};