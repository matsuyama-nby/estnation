"use client";

import { useScrollIndicator } from '@/hooks/useScrollIndicator';

export default function AsideNav() {
  const activeSection = useScrollIndicator();

  return (
		<aside className="fashion-menu">
			<div className="sticky top-[140px]">
				<nav className="menu-links">
					<div className={`indicator ${activeSection === 'womens' ? 'is-womens' : ''}`} />
					<a href="#mens" className="text-[13px] tracking-[0.12em] leading-[1.31]">MEN</a>
					<a href="#womens" className="text-[13px] tracking-[0.12em] leading-[1.31]">WOMEN</a>
				</nav>
			</div>
		</aside>
  );
}