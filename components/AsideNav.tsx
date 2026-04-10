"use client";

import { useScrollIndicator } from '@/hooks/useScrollIndicator';

export default function AsideNav() {
  const activeSection = useScrollIndicator();

  return (
		<aside className="fashion-menu">
			<div className="sticky top-[125.5px] md:top-[140px]">
				<nav className="menu-links">
					<div className={`indicator ${activeSection === 'womens' ? 'is-womens' : ''}`} />
					<a href="#mens" className="link-item">MEN</a>
					<a href="#womens" className="link-item">WOMEN</a>
				</nav>
			</div>
		</aside>
  );
}