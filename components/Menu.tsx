export default function Menu({ isOpen, closeMenu }: any) {

  return (
		<div>
			<div className={`menu-wrapper ${isOpen ? 'is-open' : ''}`}>
				<div className="menu-header">
					<div className="logo-wrapper">
						<picture>
							<source srcSet="/photo/page/creative_with_refine_01/img/logo-title.webp" type="image/webp" />
							<img src="/photo/page/creative_with_refine_01/img/logo-title.png" alt="Creative with Refine" className="w-[190px] md:w-[302.42px]" />
						</picture>
					</div>
					<button className="menu-btn" onClick={closeMenu}>CLOSE</button>
				</div>
				<div className="block h-full overflow-y-auto">
					<div className="menu-list-wrapper">
						<ul className="menu-list">
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 01</span>
											<span className="separator" />
											<span>2026 APRIL</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 02</span>
											<span className="separator" />
											<span>2026 MAY</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 03</span>
											<span className="separator" />
											<span>2026 JUNE</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 04</span>
											<span className="separator" />
											<span>2026 JULY</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
						</ul>
						<ul className="menu-list">
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 05</span>
											<span className="separator" />
											<span>2026 AUGUST</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 06</span>
											<span className="separator" />
											<span>2026 SEPTEMBER</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 07</span>
											<span className="separator" />
											<span>2026 OCTOBER</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 08</span>
											<span className="separator" />
											<span>2026 NOBEMBER</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
						</ul>
						<ul className="menu-list">
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 09</span>
											<span className="separator" />
											<span>2026 DECEMBER</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 10</span>
											<span className="separator" />
											<span>2026 JANUARY</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 11</span>
											<span className="separator" />
											<span>2026 FEBRUARY</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
							<li className="menu-item">
								<a href="" className="item-link">
									<picture className="item-img">
										<source srcSet="/photo/page/creative_with_refine_01/img/img-thumb.webp" type="image/webp" />
										<img src="/photo/page/creative_with_refine_01/img/img-thumb.jpg" alt="" />
									</picture>
									<div>
										<div className="volume-info">
											<span>VOL 12</span>
											<span className="separator" />
											<span>2026 MARCH</span>
										</div>
										<p className="menu-link-ttl">THE INTELLECTUAL JOURNEY</p>
										<p className="menu-link-desc">知的好奇心を刺激する<br />名ホテルへの旅路</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		<div className={`menu-noise-wrapper ${isOpen ? 'is-open' : ''}`}></div>

		</div>
  );
}