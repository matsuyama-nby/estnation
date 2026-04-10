export default function Header({ isOpen, openMenu }: any) {

	return (
		<header className="header">
			<div className="relative">
				<div className="logo-wrapper">
					<picture className="block mb-[11.15px] md:mb-[17px]">
						<source srcSet="/photo/page/2026_intellectual-journey/img/logo-title.webp" type="image/webp" />
						<img src="/photo/page/2026_intellectual-journey/img/logo-title.png" alt="Creative with Refine" className="w-[190px] md:w-[302.42px]" />
					</picture>
					<div className="flex">
						<picture className="mx-auto">
							<source srcSet="/photo/page/2026_intellectual-journey/img/vol-01.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/vol-01.png" alt="" className="w-[149px] md:w-[154px]" />
						</picture>
					</div>
				</div>
				{!isOpen &&
					<button className="menu-btn" onClick={openMenu}>MENU</button>
				}
			</div>
		</header>
	);
}