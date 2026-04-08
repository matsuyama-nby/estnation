"use client";

import { useScrollIndicator } from '@/hooks/useScrollIndicator';

export default function AsideNav() {
  const activeSection = useScrollIndicator();

  return (
		<aside className="fashion-menu">
			<div className="sticky top-20">
				<nav className="menu-links">
					<div className={`indicator ${activeSection === 'womens' ? 'is-womens' : ''}`} />
					<a href="#mens" className="">MEN</a>
					<a href="#womens" className="">WOMEN</a>
				</nav>
			</div>
		</aside>
  );
}