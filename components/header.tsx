export default function Header({ isOpen, openMenu }: any) {

	return (
		<header className={`header-wrapper ${isOpen ? 'is-open' : ''}`}>
			<div className="header" />
			<div className="header-content">
				<div className="logo-wrapper">
					<picture>
						<source srcSet="/photo/page/creative_with_refine/common/img/logo-title.webp" type="image/webp" />
						<img src="/photo/page/creative_with_refine/common/img/logo-title.png" alt="Creative with Refine" className="w-[190px] md:w-[302.42px]" />
					</picture>
				</div>
				{/*
				{!isOpen &&
					<button className="menu-btn" onClick={openMenu}>MENU</button>
				}
				*/}
			</div>
		</header>
	);
}