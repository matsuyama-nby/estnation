export default function Footer() {
	return (
		<div>

			<section>
				{/*
				<div className="other-content">
					<h2 className="other-content-ttl">OTHER CONTENTS</h2>
					<div className="mx-[calc(26/390*100vw)] md:mx-[calc(120/1280*100vw)]">

						<div className="hidden md:block">
							<a href="" className="relative">
								<div className="link-ttl z-2">
									<picture className="flex justify-center">
										<source srcSet="/photo/page/creative_with_refine_01/img/vol-01.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/vol-01.png" alt="" className="w-[calc(171/1280*100vw)] mb-[calc(31.56/1280*100vw)]" />
									</picture>
									<p className="font-en-garamond text-[calc(45/1280*100vw)] tracking-[0.1em] leading-[1.4]">THE INTELLECTUAL JOURNEY</p>
									<p className="font-en-futura text-[calc(13/1280*100vw)] tracking-[0.12em] leading-[1.31] mb-[calc(33.44/1280*100vw)]">- FLAVORS & NATURE ENCOUNTER -</p>
									<p className="text-[calc(18/1280*100vw)] tracking-[0.02em] leading-[1.78]">食と自然体験、知的好奇心を刺激する旅</p>
								</div>
								<picture>
									<source srcSet="/photo/page/creative_with_refine_01/img/img-other.webp" type="image/webp" />
									<img src="/photo/page/creative_with_refine_01/img/img-other.jpg" alt="" />
								</picture>
								<div className="absolute inset-0 bg-black/35 z-1" />
							</a>
						</div>

						<div className="block md:hidden">
							<a href="" className="relative">
								<picture>
									<source srcSet="/photo/page/creative_with_refine_01/img/img-other-sp.webp" type="image/webp" />
									<img src="/photo/page/creative_with_refine_01/img/img-other-sp.jpg" alt="" />
								</picture>
								<div className="absolute inset-0 bg-black/35" />
							</a>
							<div className="text-[var(--color-secondary)] mt-[15px]">
								<picture>
									<source srcSet="/photo/page/creative_with_refine_01/img/vol-01.webp" type="image/webp" />
									<img src="/photo/page/creative_with_refine_01/img/vol-01.png" alt="" className="w-[159px] mb-[11.48px]" />
								</picture>
								<p className="font-en-garamond text-[20px] tracking-[0.1em] leading-[1.4]">THE INTELLECTUAL JOURNEY</p>
								<p className="font-en-futura text-[10px] tracking-[0.12em] leading-[1.31] mb-[12.5px]">- FLAVORS & NATURE ENCOUNTER -</p>
								<p className="text-[15px] tracking-[0.02em] leading-[1.78]">食と自然体験、知的好奇心を刺激する旅</p>
							</div>
						</div>
					</div>
				</div>
				*/}
				<ul className="md:flex-gap-none-2col">
					<li className="other-item">
						<a href="https://www.estnation.co.jp/store" className="relative">
							<div className="link-ttl">
								<p className="font-en-futura text-[21px] md:text-[26px] tracking-[0.1em]">STORE</p>
								<p className="mt-[21px] text-[12px] tracking-[0.03em] leading-[20.4px] md:leading-[1.5]">
									<span className="block">洗練された空間でライフスタイリストが</span>
									<span className="block">最適なご提案をさせていただきます</span>
								</p>
							</div>
							<picture>
								<source srcSet="/photo/page/creative_with_refine_01/img/img-store.webp" type="image/webp" />
								<img src="/photo/page/creative_with_refine_01/img/img-store.jpg" alt="" />
							</picture>
						</a>
					</li>
					<li className="other-item">
						<a href="https://www.estnation.co.jp/" className="relative">
							<div className="link-ttl">
								<p className="font-en-futura text-[21px] md:text-[26px] tracking-[0.1em]">ONLINE STORE</p>
								<p className="mt-[21px] text-[12px] tracking-[0.03em] leading-[20.4px] md:leading-[1.5]">
									<span className="block">最新情報や厳選されたアイテムを</span>
									<span className="block">オンラインでも探せます</span>
								</p>
							</div>
							<picture>
								<source srcSet="/photo/page/creative_with_refine_01/img/img-online.webp" type="image/webp" />
								<img src="/photo/page/creative_with_refine_01/img/img-online.jpg" alt="" />
							</picture>
						</a>
					</li>					
				</ul>
			</section>
					<footer className="footer">
				<ul className="sp_only footer__sp-nav">
					<li className="nav-item"><a href="https://www.estnation.co.jp/members">メンバーサービス</a></li>
					<li className="nav-item"><a href="https://www.estnation.co.jp/help">HELP</a></li>
					<li className="nav-item"><a href="https://www.estnation.co.jp/faq">FAQ</a></li>
					<li className="nav-item"><a href="https://www.estnation.co.jp/contact">CONTACT</a></li>
					<li className="nav-item"><a href="https://www.estnation.co.jp/mailmagazine/add">MAIL MAGAZINE</a></li>
				</ul>

				<nav className="footer__nav pc_only">
					<ul className="col col1">
					<li><a href="https://www.estnation.co.jp/members">メンバーサービス</a></li>
					<li><a href="https://www.estnation.co.jp/help">HELP</a></li>
					<li><a href="https://www.estnation.co.jp/faq">FAQ</a></li>
					<li><a href="https://www.estnation.co.jp/contact">CONTACT</a></li>
					<li><a href="https://www.estnation.co.jp/mailmagazine/add">MAIL MAGAZINE</a></li>
					</ul>

					<ul className="col">
					<li><a href="https://www.estnation.co.jp/company">会社概要</a></li>
					<li><a href="https://www.estnation.co.jp/recruit">採用情報</a></li>
					<li><a href="https://www.estnation.co.jp/terms">利用規約</a></li>
					<li><a href="https://www.estnation.co.jp/rules">会員規約</a></li>
					<li><a href="https://www.estnation.co.jp/privacy">個人情報保護方針</a></li>
					<li><a href="https://www.estnation.co.jp/cookie_policy">クッキーポリシー</a></li>
					<li><a href="https://www.estnation.co.jp/legal">特定商取引法に基づく通販の表記</a></li>
					</ul>
					
					<div className="col">
					<ul className="sns-list">
						<li><a target="_blank" href="https://www.instagram.com/estnation_jp"><img width="25" alt="Instagram" src="https://www.estnation.co.jp/assets/front/img/icon/ico-insta-black.svg?1626326653" /></a></li>
						<li><a target="_blank" href="https://www.facebook.com/estnation"><img width="25" alt="Facebook" src="https://www.estnation.co.jp/assets/front/img/icon/ico-fb-black.svg?1626326652" /></a></li>
						<li><a target="_blank" href="https://twitter.com/estnation"><img width="23" alt="X" src="https://www.estnation.co.jp/assets/front/img/icon/ico-x-black.svg?1706753586" /></a></li>
						<li><a target="_blank" href="https://page.line.me/akh7194l"><img width="25" alt="LINE" src="https://www.estnation.co.jp/assets/front/img/icon/ico-line-black.svg?1626326653" /></a></li>
					</ul>
					<dl className="app-link">
						<dt className="app-link__ttl">APP</dt>
						<dd>
						<ul className="app-list">
							<li><a target="_blank" href="https://yappli.plus/estnation/"><img width="134" alt="App Store" src="https://www.estnation.co.jp/assets/front/img/apple-store.svg?1626857567" /></a></li>
							<li><a target="_blank" href="https://yappli.plus/estnation/"><img width="148" alt="Google Play" src="https://www.estnation.co.jp/assets/front/img/google-play-badge.svg?1626857567" /></a></li>
						</ul>
						</dd>
					</dl>
					</div>
				</nav>
				
				<div className="sp_only footer__sp-bottom-nav">
					<ul className="sns-list">
					<li><a target="_blank" href="https://www.instagram.com/estnation_jp"><img width="25" alt="Instagram" src="https://www.estnation.co.jp/assets/front/img/icon/ico-insta-black.svg?1626326653" /></a></li>
					<li><a target="_blank" href="https://www.facebook.com/estnation"><img width="25" alt="Facebook" src="https://www.estnation.co.jp/assets/front/img/icon/ico-fb-black.svg?1626326652" /></a></li>
					<li><a target="_blank" href="https://twitter.com/estnation"><img width="25" alt="Twitter" src="https://www.estnation.co.jp/assets/front/img/icon/ico-twitter-black.svg?1706753585" /></a></li>
					<li><a target="_blank" href="https://page.line.me/akh7194l"><img width="25" alt="LINE" src="https://www.estnation.co.jp/assets/front/img/icon/ico-line-black.svg?1626326653" /></a></li>
					</ul>
					<dl className="app-link">
					<dt className="app-link__ttl"><span className="sp_only">ESTNATION OFFICIAL </span>APP</dt>
					<dd>
						<ul className="app-list">
						<li><a target="_blank" href="https://yappli.plus/estnation/"><img width="134" alt="App Store" src="https://www.estnation.co.jp/assets/front/img/apple-store.svg?1626857567" /></a></li>
						<li><a target="_blank" href="https://play.google.com/store/apps/details?id=li.yapp.app1AEE1E90&hl=ja&gl=US"><img width="148" alt="Google Play" src="https://www.estnation.co.jp/assets/front/img/google-play-badge.svg?1626857567" /></a></li>
						</ul>
					</dd>
					</dl>
					<ul className="sp_only footer__nav__bottom__list">
					<li><a href="https://www.estnation.co.jp/company">会社概要</a></li>
					<li><a href="https://www.estnation.co.jp/recruit">採用情報</a></li>
					<li><a href="https://www.estnation.co.jp/terms">利用規約</a></li>
					<li><a href="https://www.estnation.co.jp/rules">会員規約</a></li>
					<li><a href="https://www.estnation.co.jp/privacy">個人情報保護方針</a></li>
					<li><a href="https://www.estnation.co.jp/cookie_policy">クッキーポリシー</a></li>
					<li><a href="https://www.estnation.co.jp/legal">特定商取引法に基づく通販の表記</a></li>
					</ul>
				</div>
				<p className="foooter__bottom">Copyright © ESTNATION Inc.</p>
				</footer>
		</div>
	);
}