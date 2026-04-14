export default function Footer() {
	return (
		<section>
			{/*
			<div className="other-content">
				<h2 className="other-content-ttl">OTHER CONTENTS</h2>
				<div className="mx-[calc(26/390*100vw)] md:mx-[calc(120/1280*100vw)]">

					<div className="hidden md:block">
						<a href="" className="relative">
							<div className="link-ttl z-2">
								<picture className="flex justify-center">
									<source srcSet="/photo/page/2026_intellectual-journey/img/vol-01.webp" type="image/webp" />
									<img src="/photo/page/2026_intellectual-journey/img/vol-01.png" alt="" className="w-[calc(171/1280*100vw)] mb-[calc(31.56/1280*100vw)]" />
								</picture>
								<p className="font-en-garamond text-[calc(45/1280*100vw)] tracking-[0.1em] leading-[1.4]">THE INTELLECTUAL JOURNEY</p>
								<p className="font-en-futura text-[calc(13/1280*100vw)] tracking-[0.12em] leading-[1.31] mb-[calc(33.44/1280*100vw)]">- FLAVORS & NATURE ENCOUNTER -</p>
								<p className="text-[calc(18/1280*100vw)] tracking-[0.02em] leading-[1.78]">食と自然体験、知的好奇心を刺激する旅</p>
							</div>
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-other.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-other.jpg" alt="" />
							</picture>
							<div className="absolute inset-0 bg-black/35 z-1" />
						</a>
					</div>

					<div className="block md:hidden">
						<a href="" className="relative">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-other-sp.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-other-sp.jpg" alt="" />
							</picture>
							<div className="absolute inset-0 bg-black/35" />
						</a>
						<div className="text-[var(--color-secondary)] mt-[15px]">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/vol-01.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/vol-01.png" alt="" className="w-[159px] mb-[11.48px]" />
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
					<a href="https://www.estnation.co.jp/" className="relative">
						<div className="link-ttl">
							<p className="font-en-futura text-[21px] md:text-[26px] tracking-[0.1em]">STORE</p>
							<p className="mt-[21px] text-[12px] tracking-[0.03em] leading-[20.4px] md:leading-[1.5]">
								<span className="block">洗練された空間でライフスタイリストが</span>
								<span className="block">最適なご提案をさせていただきます</span>
							</p>
						</div>
						<picture>
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-store.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-store.jpg" alt="" />
						</picture>
					</a>
				</li>
				<li className="other-item">
					<a href="https://www.estnation.co.jp/store" className="relative">
						<div className="link-ttl">
							<p className="font-en-futura text-[21px] md:text-[26px] tracking-[0.1em]">ONLINE STORE</p>
							<p className="mt-[21px] text-[12px] tracking-[0.03em] leading-[20.4px] md:leading-[1.5]">
								<span className="block">最新情報や厳選されたアイテムを</span>
								<span className="block">オンラインでも探せます</span>
							</p>
						</div>
						<picture>
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-online.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-online.jpg" alt="" />
						</picture>
					</a>
				</li>					
			</ul>
		</section>
	);
}