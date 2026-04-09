export default function Menu({ isOpen, closeMenu }: any) {

  return (
		<div className={`menu-wrapper ${isOpen ? 'is-open' : ''}`}>
			<div className="relative">
				<div className="logo-wrapper">
					<picture className="block mb-[17px]">
						<source srcSet="/photo/page/2026_intellectual-journey/img/logo-title.webp" type="image/webp" />
						<img src="/photo/page/2026_intellectual-journey/img/logo-title.png" alt="" className="w-[302.42px]" />
					</picture>
					<div className="flex">
						<picture className="mx-auto">
							<source srcSet="/photo/page/2026_intellectual-journey/img/vol-01.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/vol-01.png" alt="" className="w-[154px]" />
						</picture>
					</div>
				</div>
				<button className="menu-btn" onClick={closeMenu}>CLOSE</button>
			</div>
			<div className="menu-list-wrapper">
				<ul className="menu-list">
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
				</ul>
				<ul className="menu-list">
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
				</ul>
				<ul className="menu-list">
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
					<li>
						<img src="/photo/page/2026_intellectual-journey/img/test-dummy.png" alt="" />
					</li>
				</ul>
			</div>
		</div>
  );
}