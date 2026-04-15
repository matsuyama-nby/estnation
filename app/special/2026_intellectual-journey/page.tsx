"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import AsideNav from '@/components/AsideNav';
import Menu from '@/components/Menu';
import { useMenuToggle } from '@/hooks/useMenuToggle';
import { usePageReady } from "@/hooks/usePageReady";
import Script from "next/script";
import { useEffect, useRef } from "react";

export default function Page() {
	const { isOpen, openMenu, closeMenu } = useMenuToggle();
	const isReady = usePageReady();
	// Swiper
	const swiperRef = useRef<any>(null);
	const initSwiper = () => {
		if (swiperRef.current) {
			swiperRef.current.destroy();
		}
		swiperRef.current = new (window as any).Swiper(".swiper", {
			centeredSlides: true,
			slidesPerView: 1.1,
			spaceBetween: 13,
			loop: true,
		});
	}
	// GSAP
	const initGSAP = () => {
		const gsap = (window as any).gsap;
		const ScrollTrigger = (window as any).ScrollTrigger;
		//const tl = gsap.timeline();
		if (!gsap || !ScrollTrigger) return;
		gsap.registerPlugin(ScrollTrigger);
		
		// 画像
		gsap.utils.toArray('img:not(.char img, .init-logo_comp img)').forEach((target: any) => {
			gsap.fromTo(target, {
				clipPath: 'inset(0 100% 0 0)',
			}, {
				clipPath: 'inset(0 0% 0 0)',
				duration: 1.0,
				ease: "power3.inOut",
				scrollTrigger: {
					trigger: target,
					start: 'top 80%',
				}
			});
		});
		// テキスト
		gsap.utils.toArray('h1, h2, h3, .main-content p, dl').forEach((target: any) => {
			gsap.fromTo(target, {
				autoAlpha: 0,
				y: '20px',
			}, {
				autoAlpha: 1,
				y: '0px',
        duration: 1.1,
        stagger: {
			each: .045,
			ease: "power4.out"
        },
				scrollTrigger: {
					trigger: target,
					start: 'top 75%',
				}
			});
		});
		gsap.utils.toArray('.link-ttl').forEach((target: any) => {
			gsap.fromTo(target, {
				clipPath: 'inset(100% 0 0 0)',
				xPercent: -50,
				yPercent: -50,
			}, {
				clipPath: 'inset(0% 0 0 0)',
				xPercent: -50,
				yPercent: -50,
				duration: 1.3,
				scrollTrigger: {
					trigger: target,
					start: 'top 90%',
				}
			});
		});
		// 冒頭ロゴ
		gsap.fromTo('.init-logo', {
			autoAlpha: 0,
		}, {
			autoAlpha: 1,
			clipPath: 'inset(0 0 0% 0)',
			duration: 1.4,
		});

		gsap.fromTo('.char-wrapper .char img', {
			clipPath: 'inset(0 0 100% 0)',
		}, {
			clipPath: 'inset(0 0 0% 0)',
			duration: .4,
		});

		gsap.fromTo('.init-logo .char', {
			yPercent: 60,
		}, {
			yPercent: 0,
			duration: 1.4,
			stagger: {
				from: 'center',
				each: 0.03,
			},
			ease: 'expo.out',
		});

		// ESTNATIONロゴ
		gsap.fromTo('.init-logo_comp', {
			autoAlpha: 0,
			yPercent: 120,
		}, {
			autoAlpha: 1,
			yPercent: 0,
			duration: 1.4,
			ease: 'expo.out',
		});



		// KV画像
		gsap.fromTo('.kv-wrapper img', {
			// clipPath: 'inset(0 100% 0 0)',
			autoAlpha: 0,
		}, {
			// clipPath: 'inset(0 0% 0 0)',
			autoAlpha: 1,
			duration: 1.0,
			ease: "power3.inOut",
			delay: 1.7,
		});
		// KVテキスト
		gsap.fromTo('.kv-ttl-content', {
			yPercent: 25,
		}, {
			yPercent: 0,
			duration: 1.1,
			stagger: {
				each: .045,
				ease: "power4.out"
			},
			delay: 2.0,
		});
	};

return (
	<body className={`${isReady ? "is-ready" : ""}`}>
		{/* Swiperを読み込み、終わったらinitSwiperを実行 */}
		<Script
			src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
			onLoad={initSwiper}
		/>
		{/* GSAP */}
		<Script
			src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
			strategy="afterInteractive"
		/>
		<Script
			src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
			strategy="afterInteractive"
			onLoad={initGSAP}
		/>
		{/* 初期表示画面 */}
		<div className="init-screen">
			<div className="init-logo">
				<div className="char-wrapper">
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-01.png" alt="C" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-02.png" alt="r" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-03.png" alt="e" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-04.png" alt="a" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-05.png" alt="t" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-06.png" alt="i" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-07.png" alt="v" />
					</span>
					{/* <span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-08.png" alt="e" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-09.png" alt=" " />
					</span> */}
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-10.png" alt="w" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-11.png" alt="i" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-12.png" alt="t" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-13.png" alt="h" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-14.png" alt=" " />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-15.png" alt="R" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-16.png" alt="R" />
					</span>
					<span className="char">
						<img src="/photo/page/2026_intellectual-journey/img/logo-17.png" alt="R" />
					</span>
				</div>
				<div className="init-logo_comp">
					<img src="/photo/page/2026_intellectual-journey/img/logo-comp.png" alt="ESTNATION" />
				</div>
			</div>
		</div>
		<Header 
			isOpen={isOpen} 
			openMenu={openMenu} 
		/>
		<div className="fixed-background-filter" />
		<div className="fixed-background" />
		<Menu 
			isOpen={isOpen} 
			closeMenu={closeMenu} 
		/>
		<main className="main-content">
			{/* KV */}
			<div className="kv-wrapper">
				<div className="relative">
					{/* pc */}
					<picture className="hidden md:block">
						<source srcSet="/photo/page/2026_intellectual-journey/img/img-kv.webp" type="image/webp" />
						<img src="/photo/page/2026_intellectual-journey/img/img-kv.jpg" alt="THE INTELLECTUAL JOURNEY" />
					</picture>
					{/* sp */}
					<picture className="block md:hidden">
						<source srcSet="/photo/page/2026_intellectual-journey/img/img-kv-sp.webp" type="image/webp" />
						<img src="/photo/page/2026_intellectual-journey/img/img-kv-sp.jpg" alt="THE INTELLECTUAL JOURNEY" />
					</picture>
					<div className="absolute inset-0 bg-black/35 z-1" />
					<div className="kv-ttl-content z-2">
						<h1 className="font-en-garamond text-[calc(35/390*100vw)] md:text-[calc(45/1280*100vw)] tracking-[0.1em] leading-[1.09] md:leading-[1.4] mb-[calc(16/390*100vw)] md:mb-[calc(5/1280*100vw)]">
							<span className="hidden md:block">THE INTELLECTUAL JOURNEY</span>
							<span className="block md:hidden">THE<br />INTELLECTUAL<br />JOURNEY</span>
						</h1>
						<div className="flex mb-[calc(30/390*100vw)] md:mb-[calc(25/1280*100vw)]">
							<picture className="mx-auto">
								<source srcSet="/photo/page/2026_intellectual-journey/img/vol-01.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/vol-01.png" alt="" className="w-[calc(159/390*100vw)] md:w-[calc(181/1280*100vw)]" />
							</picture>
						</div>
						<p className="text-[calc(15/390*100vw)] md:text-[calc(18/1280*100vw)] tracking-[0.02em] leading-[1.78]">知的好奇心を刺激する名ホテルへの旅路</p>
					</div>
				</div>
			</div>

			<div className="intro">
				<p className="font-en-futura text-[12px] md:text-[13px] tracking-[0.12em] leading-[1.31]">INTRODUCTION</p>
				<p className="basis-[65%] text-[14px] md:text-[15px] leading-[1.86] md:leading-[1.87]">旅の目的は、人の数だけ存在します。日々の喧騒を離れて静謐に身を置き自分と向き合う旅。あるいは未知の体験を求める活動的な旅。その中でも、今、多くの人々が旅に求めているのは「学び」という名の贅沢ではないでしょうか。時代を超えた建築に触れ、自然の中で五感を研ぎ澄ます。洗練された装いで食の芸術を愉しむ。旅は私たちに計り知れない経験と新たな視座を与えてくれます。真の豊かさを求める人々が増えた現代、審美眼を持つプロフェッショナルはどのような地を目的地に選ぶのでしょうか。今回は、デザイン・建築メディア『Ala Champ Magazine』の編集長を務めるジョアンナ・カウェキさんを迎え、「ふふ 東京 銀座」を舞台に知的好奇心を深く刺激する旅の過ごし方を紐解いていきます。</p>
			</div>

			{/* NAVIGATOR */}
			<section className="section !pt-[51px] md:!pt-[43px] pb-[60px] md:!pb-[70px]">
				<h2 className="section-ttl-garamond mb-[29.5px] md:mb-[53px] text-center md:text-left !text-[30px] md:!text-[40px]">NAVIGATOR</h2>
				<div className="md:flex-gap-40-2col flex flex-col md:flex-row">
					<div className="order-2 md:order-1">
						<p className="font-en-futura text-[10px] md:text-[11px] tracking-[0.12em] leading-[1.3] md:leading-[1.27] mb-[10.5px] md:mb-[15px] text-center md:text-left">ALA CHMAP MAGAZINE FOUNDER</p>
						<p className="font-en-garamond text-[25px] md:text-[30px] tracking-[0.1em] leading-[1.2] md:leading-[1.17] mb-[1px] md:mb-[8px] text-center md:text-left">JOANNA KAWECKI</p>
						<p className="text-[11px] md:text-[12px] tracking-[0.02em] leading-[1.67] mb-[26px] md:mb-[30px] text-center md:text-left">ジョアンナ・カウェキ</p>
						<p className="mb-[24.5px] md:mb-[24px]">オーストラリア出身、東京在住の編集者・ジャーナリスト。デザイン/建築メディア『Ala Champ Magazine』のファウンダー。建築、旅、アートといった分野に造詣が深く、2013年に東京へ拠点を移してからはグローバルな視点から日本の建築や、文化を発信している。国内外のビジネスエリートからも高い支持を集め、ファッションを含め様々な分野に精通している。</p>
						<div className="info-wrapper">
							<dl className="info">
								<dt>WEB SITE</dt>
								<dd>
									<a href="https://champ-magazine.com/" target="_blank">CHAMP-MAGAZINE.COM</a>
								</dd>
							</dl>
							<dl className="info">
								<dt>INSTAGRAM</dt>
								<dd>
									<a href="https://www.instagram.com/champ_magazine/" target="_blank">@CHAMP_MAGAZINE</a>
								</dd>
							</dl>
						</div>
					</div>
					<picture className="!basis-[35%] lg:!basis-[22.9%] order-1 md:order-2 mx-auto md:mx-0 mb-[35px] md:mb-0">
						<source srcSet="/photo/page/2026_intellectual-journey/img/img-navigator.webp" type="image/webp" />
						<img src="/photo/page/2026_intellectual-journey/img/img-navigator.jpg" alt="" className="w-[216px] md:w-auto" />
					</picture>
				</div>
			</section>

			<section>
				<div className="section md:flex-gap-40-2col !pt-[15.5px] md:!pt-[19px] !pb-0">
					<p className="font-en-futura text-[13px] tracking-[0.12em] leading-[1.31] font-medium">INFORMAION</p>
					<div className="pt-[38px] md:pt-[6.5px]">
						<h2 className="font-en-garamond text-[23px] md:text-[30px] tracking-[0.1em] leading-[1.17] mb-[1.5px] md:mb-0">FUFU TOKYO GINZA</h2>
						<p className="text-[12px] tracking-[0.02em] leading-[2.75] mb-[26.5px] md:mb-[19.5px]">ふふ 東京 銀座</p>
						<div className="info-wrapper">
							<dl className="info">
								<dt>ADDRESS</dt>
								<dd className="!font-ja">東京都中央区銀座1丁目7-10 ヒューリック銀座ビル</dd>
							</dl>
							<dl className="info">
								<dt>TEL</dt>
								<dd>
									<a href="tel:0570011722">0570-0117-22</a>
								</dd>
							</dl>
							<dl className="info">
								<dt>CHECK-IN / OUT</dt>
								<dd>15:00 / 11:00</dd>
							</dl>
							<dl className="info">
								<dt>WEBSITE</dt>
								<dd>
									<a href="https://www.fufutokyo.jp/" target="_blank">WWW.FUFUTOKYO.JP</a>
								</dd>
							</dl>
						</div>
					</div>
				</div>	

				<section className="section !border-t-0">
					{/* pc */}
					<div className="hidden md:block">
						<div className="flex-gap-40-2col">
							<div>
								<h3 className="section-ttl font-semibold">旅は新たな知識のカケラ<br />を与えてくれる</h3>
								<p className="question-text mb-[26px] font-semibold">今回の企画テーマは「知的好奇心を刺激する名ホテルへの旅路」ですが、ジョアンナさんにとって好奇心を持って旅をする意味と、近年旅行者が都市部のラグジュアリーホテルよりも地方の宿に惹かれる傾向にあるのはなぜだと思いますか。</p>
								<p>
									ジョアンナ・カウェキ（以下J）：日常のあらゆることに好奇心を持つのはとても大切なことです。旅や日々の経験を通じて、私たちは自分自身のことをより深く知り、自分たちが生きる世界への理解を深めることができます。「わからないことを質問する」のを怖がらず挑戦してみてほしいと思います。それは恥ずかしいことではなく、むしろ知性の証です。質問することで、ものがどう作られ、どこから来たのかという新しい知識が手に入ります。<br />
									そして実体験はなにものにも代えがたい財産です。知識を積み重ね、学ぶことは脳の柔軟性を鍛えることにも繋がります。また、今の世界には「共感」や「思いやり」といった価値観がもっと必要だと思います。旅をすることは世界が広大で、かつ「すべてが繋がり合っている場所」であることを実感させてくれる素晴らしい手段なのです。<br />
									そして最近の旅行者は、もちろん全てではないんですが洗練されてはいるもののどこか単調な都市の高級ホテルから離れつつあります。代わって支持されているのは、その土地の風景や伝統に深く根ざした、地方の宿です。こうした宿にはその土地ならではの“情緒”が息づいています。<br />
									この変化の真の原動力は、「その土地の文化にどっぷりと浸かりたい」という切実な思いにあると私は考えています。旅行者はもはや、単に目的地を“訪れる”だけでは満足できません。たとえ数晩であっても、その場所に「溶け込んで暮らしたい」と願っているのです。地方の宿は、そんな願いを心に深く刻み込んでくれる体験なのです。
								</p>
							</div>
							<div className="grid gap-[40px] content-start">
								<picture>
									<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-1.webp" type="image/webp" />
									<img src="/photo/page/2026_intellectual-journey/img/img-hotel-1.jpg" alt="" />
								</picture>
								<div>
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-2.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-hotel-2.jpg" alt="" />
									</picture>
									<p className="photo-caption">ふふ 東京 銀座内にある日本料理「銀座がゆう」では宿泊者がプライベート空間を満喫できるよう全て個室になっているが、レストラン内には大きなカウンターを備え、通り道にも枯山水を模した空間や作品が置かれるなど、個室に入るまでの時間を視覚的に楽しむことができる。</p>
								</div>
							</div>
						</div>
					</div>
					{/* sp */}
					<div className="block md:hidden">
						<picture className="block mx-[calc(-26/390*100vw)] mt-[5px] mb-[45px]">
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-1.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-hotel-1.jpg" alt="" />
						</picture>
						<h3 className="section-ttl font-semibold">旅は新たな知識のカケラ<br />を与えてくれる</h3>
						<p className="question-text mb-[26px] font-semibold">今回の企画テーマは「知的好奇心を刺激する名ホテルへの旅路」ですが、ジョアンナさんにとって好奇心を持って旅をする意味と、近年旅行者が都市部のラグジュアリーホテルよりも地方の宿に惹かれる傾向にあるのはなぜだと思いますか。</p>
						<p className="mb-[47.5px]">
							ジョアンナ・カウェキ（以下J）：日常のあらゆることに好奇心を持つのはとても大切なことです。旅や日々の経験を通じて、私たちは自分自身のことをより深く知り、自分たちが生きる世界への理解を深めることができます。「わからないことを質問する」のを怖がらず挑戦してみてほしいと思います。それは恥ずかしいことではなく、むしろ知性の証です。質問することで、ものがどう作られ、どこから来たのかという新しい知識が手に入ります。<br />
							そして実体験はなにものにも代えがたい財産です。知識を積み重ね、学ぶことは脳の柔軟性を鍛えることにも繋がります。また、今の世界には「共感」や「思いやり」といった価値観がもっと必要だと思います。旅をすることは世界が広大で、かつ「すべてが繋がり合っている場所」であることを実感させてくれる素晴らしい手段なのです。<br />
							そして最近の旅行者は、もちろん全てではないんですが洗練されてはいるもののどこか単調な都市の高級ホテルから離れつつあります。代わって支持されているのは、その土地の風景や伝統に深く根ざした、地方の宿です。こうした宿にはその土地ならではの“情緒”が息づいています。<br />
							この変化の真の原動力は、「その土地の文化にどっぷりと浸かりたい」という切実な思いにあると私は考えています。旅行者はもはや、単に目的地を“訪れる”だけでは満足できません。たとえ数晩であっても、その場所に「溶け込んで暮らしたい」と願っているのです。地方の宿は、そんな願いを心に深く刻み込んでくれる体験なのです。
						</p>
						<picture>
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-2.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-hotel-2.jpg" alt="" />
						</picture>
						<p className="photo-caption">ふふ 東京 銀座内にある日本料理「銀座がゆう」では宿泊者がプライベート空間を満喫できるよう全て個室になっているが、レストラン内には大きなカウンターを備え、通り道にも枯山水を模した空間や作品が置かれるなど、個室に入るまでの時間を視覚的に楽しむことができる。</p>
					</div>
				</section>
			
				<section className="section">
					{/* pc */}
					<div className="hidden md:block">
						<picture>
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-3.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-hotel-3.jpg" alt="" />
						</picture>
						<div className="flex">
							<p className="photo-caption w-[calc((100%-40px)/2)] ml-auto">エントランスには銀箔の作品や、竹籠のアートが飾られ、ふふ 東京 銀座が国内のアーティストに敬意を払いながら伝統作品を現代的にアップデートしている様子が伺える。</p>
						</div>
						<h3 className="section-ttl font-semibold">日本的な美意識を<br />現代の感覚に落とし込む</h3>
						<div className="columns-2 gap-[40px]">
							<p className="question-text font-semibold">今回は地方にも多くの宿を展開する「ふふ 東京 銀座」をご紹介いただきました。この場所が持つ知的好奇心を刺激するポイントはなんでしょうか。また、ふふのような「和モダン」な空間が注目を集める理由を教えてください。</p>
							<p>
								J：ふふは熱海、河口湖、箱根、軽井沢と地方の多くに宿を展開していますが、「ふふ 東京 銀座」であれば日本リゾートの魅力を東京で体感することができます。日本の美意識を大切にする内装や、「おもてなし」、すなわち真のホスピタリティがしっかりと根付いています。おもてなしとは、内面から自然と溢れ出す精神性だと考えています。ふふのスタッフの方々からは、まさにその精神が伝わってきます。<br />
								さらに、本物の空間を作り上げるために、才能豊かで尊敬を集める様々な職人たちに協力してもらうことに細心の注意を払っています。例えば、エレベーターの内部は金沢の銀箔職人によるアートに仕上げられ、エントランスの入り口には「銀座もとじ」による泥染めの掛け軸や精緻に編み込まれた竹の彫刻などの作品が飾られており、日本の伝統文化と職人技の美しさを体感することができます。宿のなかで特にお気に入りの場所はルーフトップです。都会のオアシスのような緑に囲まれながら足湯に浸かってリラックスでき、眼下にはビル群のスカイラインや、銀座の象徴である中央通りのショッピング街を眺めることができる素晴らしい空間になっています。<br />
								ふふにもあるように、現代の日本では伝統的な職人技が持つ普遍的な美しさを再評価し、今の時代に自然にフィットする「現代の視点」で捉え直そうとする動きが多くあると思います。「和モダン」の魅力は昔ながらの雰囲気と、今この瞬間の新しさという、相反する感覚を同時に味わえることだと思います。「侘び寂び」や「間」、そして「無常の美学」といった、長きにわたって磨き上げられた感性を土台にしながら、現代的なミニマリズムを見事に融合させているのです。<br />
								現代人が惹きつけられているのは、ある種の「気付き」からではないでしょうか。それは、日本の伝統デザインはずっと昔から時代を先取りしていました。伝統に現代的なセンスを掛け合わせることは、決して本質を薄めることではありません。むしろ、その本質を再び活性化させ、今の私たちにとって新鮮で、意味深く、そして「静かな特別感」を感じさせてくれるものへと進化させているのです。
							</p>
						</div>
					</div>
					{/* sp */}
					<div className="block md:hidden">
						<h3 className="section-ttl font-semibold">日本的な美意識を<br />現代の感覚に落とし込む</h3>
						<p className="question-text font-semibold">今回は地方にも多くの宿を展開する「ふふ 東京 銀座」をご紹介いただきました。この場所が持つ知的好奇心を刺激するポイントはなんでしょうか。また、ふふのような「和モダン」な空間が注目を集める理由を教えてください。</p>
						<p className="mb-[47.5px]">
							J：ふふは熱海、河口湖、箱根、軽井沢と地方の多くに宿を展開していますが、「ふふ 東京 銀座」であれば日本リゾートの魅力を東京で体感することができます。日本の美意識を大切にする内装や、「おもてなし」、すなわち真のホスピタリティがしっかりと根付いています。おもてなしとは、内面から自然と溢れ出す精神性だと考えています。ふふのスタッフの方々からは、まさにその精神が伝わってきます。<br />
							さらに、本物の空間を作り上げるために、才能豊かで尊敬を集める様々な職人たちに協力してもらうことに細心の注意を払っています。例えば、エレベーターの内部は金沢の銀箔職人によるアートに仕上げられ、エントランスの入り口には「銀座もとじ」による泥染めの掛け軸や精緻に編み込まれた竹の彫刻などの作品が飾られており、日本の伝統文化と職人技の美しさを体感することができます。宿のなかで特にお気に入りの場所はルーフトップです。都会のオアシスのような緑に囲まれながら足湯に浸かってリラックスでき、眼下にはビル群のスカイラインや、銀座の象徴である中央通りのショッピング街を眺めることができる素晴らしい空間になっています。<br />
							ふふにもあるように、現代の日本では伝統的な職人技が持つ普遍的な美しさを再評価し、今の時代に自然にフィットする「現代の視点」で捉え直そうとする動きが多くあると思います。「和モダン」の魅力は昔ながらの雰囲気と、今この瞬間の新しさという、相反する感覚を同時に味わえることだと思います。「侘び寂び」や「間」、そして「無常の美学」といった、長きにわたって磨き上げられた感性を土台にしながら、現代的なミニマリズムを見事に融合させているのです。<br />
							現代人が惹きつけられているのは、ある種の「気付き」からではないでしょうか。それは、日本の伝統デザインはずっと昔から時代を先取りしていました。伝統に現代的なセンスを掛け合わせることは、決して本質を薄めることではありません。むしろ、その本質を再び活性化させ、今の私たちにとって新鮮で、意味深く、そして「静かな特別感」を感じさせてくれるものへと進化させているのです。
						</p>
						<picture className="block mx-[calc(-26/390*100vw)]">
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-3.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-hotel-3.jpg" alt="" />
						</picture>
						<p className="photo-caption">エントランスには銀箔の作品や、竹籠のアートが飾られ、ふふ 東京 銀座が国内のアーティストに敬意を払いながら伝統作品を現代的にアップデートしている様子が伺える。</p>
					</div>
				</section>

				<section className="section">
					{/* pc */}
					<div className="hidden md:block">
						<h3 className="section-ttl font-semibold">着心地の良さを追求することは<br />楽さだけなく、自信にもつながる</h3>
						<p className="question-text font-semibold">全国各地を旅するジョアンナさんが旅の装いについて重要視する部分はなんでしょうか。</p>
						<p className="mb-[40px]">
							J：リネンやオーガニックコットン、ウールなどの天然素材は、着心地が良く、温度を調節してくれるので大好きです。私のスタイルは、白Tシャツやシャツにゴールドのピアスを合わせるだけという、とてもシンプルなもの。これは、あえて無駄を削ぎ落とすことで本質を際立たせる「簡素」という考え方に近いかもしれません。旅では、持ち運べる荷物も時間も限られているからこそ、身に付けるものはすべて、明確な目的と意味を持ったものを選んでいます。<br />
							着心地の良さの重要性は仕事での服装も同じです。服を着て心地よくいられると、自然と自信が湧いてくるもの。自分が愛着を持てて、誇らしく思える服を着ることはとても大切です。なぜなら、それが一日の始まりと終わりの気分にそのまま繋がるからです。最近では、多くの素晴らしいデザイナーが美しいシルエットの服を作っており、どんな場面でもおしゃれでプロフェッショナルに見せることができます。私にとって、服とは“体にまとう建築”のようなものです。それは私たちの体を守るシェルターであり、周囲の環境や「自分は何者であるか」を映し出す鏡でもあるのです。
						</p>
						<div className="flex-gap-40-2col">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-4.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-hotel-4.jpg" alt="" />
							</picture>
							<div>
								<picture>
									<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-5.webp" type="image/webp" />
									<img src="/photo/page/2026_intellectual-journey/img/img-hotel-5.jpg" alt="" />
								</picture>
								<p className="photo-caption">この日ジョアンナさんはローレンマヌーギアンのコートにアンダーカバーのパンツ、マルジェラのブーツという出立ちであった。着心地を追求したミニマルなデザインが特徴のローレンマヌーギアンはリラックスして過ごすことができ、旅先での食事など少しのドレスアップが必要な場面でも重宝する一着となっている。</p>
							</div>
						</div>
					</div>
					{/* sp */}
					<div className="block md:hidden">
						<picture className="block mx-[calc(-26/390*100vw)] mt-[5px] mb-[45px]">
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-4.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-hotel-4.jpg" alt="" />
						</picture>
						<h3 className="section-ttl font-semibold">着心地の良さを追求することは<br />楽さだけなく、自信にもつながる</h3>
						<p className="question-text font-semibold">全国各地を旅するジョアンナさんが旅の装いについて重要視する部分はなんでしょうか。</p>
						<p className="mb-[47.5px]">
							J：リネンやオーガニックコットン、ウールなどの天然素材は、着心地が良く、温度を調節してくれるので大好きです。私のスタイルは、白Tシャツやシャツにゴールドのピアスを合わせるだけという、とてもシンプルなもの。これは、あえて無駄を削ぎ落とすことで本質を際立たせる「簡素」という考え方に近いかもしれません。旅では、持ち運べる荷物も時間も限られているからこそ、身に付けるものはすべて、明確な目的と意味を持ったものを選んでいます。<br />
							着心地の良さの重要性は仕事での服装も同じです。服を着て心地よくいられると、自然と自信が湧いてくるもの。自分が愛着を持てて、誇らしく思える服を着ることはとても大切です。なぜなら、それが一日の始まりと終わりの気分にそのまま繋がるからです。最近では、多くの素晴らしいデザイナーが美しいシルエットの服を作っており、どんな場面でもおしゃれでプロフェッショナルに見せることができます。私にとって、服とは“体にまとう建築”のようなものです。それは私たちの体を守るシェルターであり、周囲の環境や「自分は何者であるか」を映し出す鏡でもあるのです。
						</p>
						<picture>
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-5.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-hotel-5.jpg" alt="" />
						</picture>
						<p className="photo-caption">この日ジョアンナさんはローレンマヌーギアンのコートにアンダーカバーのパンツ、マルジェラのブーツという出立ちであった。着心地を追求したミニマルなデザインが特徴のローレンマヌーギアンはリラックスして過ごすことができ、旅先での食事など少しのドレスアップが必要な場面でも重宝する一着となっている。</p>
					</div>
				</section>

				<section className="section md:flex-gap-40-2col">
					<div>
						<h3 className="section-ttl font-semibold">好奇心を持ち続けることが<br />洗練につながる</h3>
						<p className="question-text font-semibold">エストネーションでは、このコンテンツが一年間続き、そのコンセプトは「Creative with Refine（創造性と教養のある品格）」です。ジョアンナさんにとって「クリエイティブで洗練された人」とはどのような人物ですか？また、エストネーションの空間や店舗から受けるインスピレーションについてもお聞かせください。</p>
						<p className="mb-[47.5px] md:mb-0">
							J：私にとって洗練された人とは、静かな好奇心を持って世界を歩み、常に何かを吸収し、点と点を繋ぎ、他の人が見過ごしてしまうような場所に美しさを見出せる人です。つまり「自分自身に正直であること」だと思っています。自分の直感に従えば、それは自然と新しい旅へと導いてくれるはずです。<br />
							エストネーション六本木ヒルズ店には森美術館やブリコラージュ、ブレッド＆カンパニーを訪れる際に立ち寄ることが多いです。ウェアからジュエリー、コスメ、アイウェアまで、何か新しい興味深いブランドがないかチェックするのに最適なんです。オンラインショッピングは便利ですが、よりパーソナルで触覚的な体験ができる実店舗に足を運ぶのは素晴らしい経験だと思います。デザインの観点からも、マーチャンダイジングやディスプレイ、新しいブランドのラインナップ、そしてどのようなお客様が買い物をしているのかなど、空間全体を観察することを楽しんでいます。
						</p>
					</div>
					<div>
						<picture>
							<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-6.webp" type="image/webp" />
							<img src="/photo/page/2026_intellectual-journey/img/img-hotel-6.jpg" alt="" />
						</picture>
						<p className="photo-caption">角部屋に位置するラグジュアリーコーナースイートでは、一面に配置された窓から銀座の街並みを部屋から眺めることができる。部屋にはふふ熱海から毎日運んでくるという温泉を楽しむことができる。</p>
					</div>
				</section>

			</section>

			{/* fashion */}
			<section className="flex">
				<AsideNav />
				<div className="flex-1 min-w-0 border-t border-t-[var(--color-primary)]">
					<div className="fashion-mainTtl-content">
						<h2 className="section-ttl-garamond mb-[8.5px] lg:mb-[5px]">FEEDING <br className="block md:hidden" />THE MIND LOCALLY</h2>
						<p className="text-[15px] lg:text-[18px] tracking-[0.02em] leading-[1.78] mb-[38.5px] lg:mb-[36.5px] font-semibold">全国を巡る知性を刺激する宿たち</p>
						<p className="lg:max-w-[calc(500/1280*100vw)] text-[14px] lg:text-[15px] leading-[1.87]">ふふ 銀座 東京を舞台に知的好奇心を刺激する旅について語ってくれたジョアンナさん。ここでは東京から離れ、地方にある個性に溢れ様々な角度から知性を刺激してくれる宿を紹介していきます。あなたの旅のメモに入れ、機会があればぜひ訪れてみてください。</p>
					</div>
					{/* MENS */}
					<section id="mens" className="fashion-content">
						<h3 className="section-ttl-garamond-sm mb-[40px] lg:mb-[53px] ml-[calc(26/390*100vw)] lg:ml-[calc(70/1280*100vw)]">RECOMMEND STYLE <br className="block lg:hidden" />FOR MENS</h3>
						{/* 01 */}
						<div className="flex flex-col gap-[40px] lg:flex-gap-none-2col mb-[80px] lg:mb-0 lg:min-w-0">
							<div className="content-info-left order-2 lg:order-1 lg:min-w-0">
								<p className="font-en-futura text-[14px] lg:text-[16px] tracking-[0.1em] leading-[1.31] mb-[28px] !mb-[53.5px]">MENS 01</p>
								<p className="text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.75] mb-[17.5px] lg:mb-[26.5px]">心休まる高級感が<br />成立するセットアップ</p>
								<p className="mb-[24.5px] lg:mb-[34px]">1954年創業の縫製工場をルーツにもつGOOD PEOPLE GOOD STITCHING GOOD PRODUCTとのコラボレーションによって生まれたセットアップ。暑い季節でも心地よく着られる“ウールに代わる素材”を目指して作られた素材と、ほどよいリラックス感が特徴のシルエットにより、歩くことの多い日中から夜のディナーまで幅広いシュチュエーションをカバーしてくれる。</p>
								<div className="info-wrapper">
									<dl className="info min-w-0">
										<dt className="shrink-0">JACKET ¥60,500</dt>
										<dd className="truncate min-w-0">GOOD PEOPLE GOOD STITCHING GOOD PRODUCT FOR ESTNATION</dd>
									</dl>
									<dl className="info min-w-0">
										<dt className="shrink-0">PANTS ¥38,500</dt>
										<dd className="truncate min-w-0">GOOD PEOPLE GOOD STITCHING GOOD PRODUCT FOR ESTNATION</dd>
									</dl>
								</div>
							</div>
							<picture className="order-1 lg:order-2 lg:min-w-0">
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-mens-1.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-mens-1.jpg" alt="" />
							</picture>
						</div>
						{/* 02 */}
						<div className="flex flex-col gap-[40px] lg:flex-gap-none-2col mb-[80px] lg:mb-0">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-mens-2.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-mens-2.jpg" alt="" />
							</picture>
							<div className="content-info-left">
								<p className="font-en-futura text-[14px] lg:text-[16px] tracking-[0.1em] leading-[1.31] mb-[28px] !mb-[53.5px]">MENS 02</p>
								<p className="text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.75] mb-[17.5px] lg:mb-[26.5px]">リゾートムードと<br />気品溢れる装い</p>
								<p className="mb-[24.5px] lg:mb-[34px]">エフォートレスでありながらエレガンスも併せ持つモード界の帝王、ジョルジオ・アルマーニのシャツとパンツ。リネンをベースにした清涼感がありながらもとろけるような質感の生地とアルマーニが得意とするリラックス感のあるカッティングは、エキゾチックな夏の旅の装いに上品さを与えてくれる。</p>
								<div className="info-wrapper">
									<dl className="info">
										<dt>SHIRT ¥184,000</dt>
										<dd>GIORGIO ARMANI</dd>
									</dl>
									<dl className="info">
										<dt>PANTS ¥264,000</dt>
										<dd>GIORGIO ARMANI</dd>
									</dl>
								</div>
							</div>
						</div>
						{/* 03 */}
						<div className="flex flex-col gap-[40px] lg:flex-gap-none-2col">
							<div className="content-info-left order-2 lg:order-1">
								<p className="font-en-futura text-[14px] lg:text-[16px] tracking-[0.1em] leading-[1.31] mb-[28px] !mb-[53.5px]">MENS 03</p>
								<p className="text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.75] mb-[17.5px] lg:mb-[26.5px]">フランスの端正さを感じる<br />カジュアルシャツ</p>
								<p className="mb-[24.5px] lg:mb-[34px]">1968年にアラン・フィガレによって創業された、フランスを代表する老舗シャツメーカーであるフィガレ。卸売りをせずに直営のみでの販売に徹底してきたため国内での認知度は高くないブランドだが、フランスの気品を感じるこのシャツは一枚でも、ジャケットの下に着ても静かに個性を発揮してくれる上に良心的な価格も魅力だ。小ぶりなカラーはノータイでも美しく首元をまとめることができ、カジュアルなドレスアップが求められる旅先での食事シーンなどでも重宝するだろう。</p>
								<dl className="info">
									<dt>SHIRT ¥38,500</dt>
									<dd>FIGARET</dd>
								</dl>
							</div>
							<picture className="order-1 lg:order-2">
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-mens-3.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-mens-3.jpg" alt="" />
							</picture>
						</div>
					</section>
					{/* WOMENS */}
					<section id="womens" className="fashion-content">
						<h3 className="section-ttl-garamond-sm mb-[40px] lg:mb-[53px] ml-[calc(26/390*100vw)] lg:ml-[calc(70/1280*100vw)]">RECOMMEND STYLE <br className="block lg:hidden" />FOR WOMENS</h3>
						{/* 01 */}
						<div className="flex flex-col gap-[40px] lg:flex-gap-none-2col mb-[80px] lg:mb-0">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-womens-1.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-womens-1.jpg" alt="" />
							</picture>
							<div className="content-info-left">
								<p className="font-en-futura text-[14px] lg:text-[16px] tracking-[0.1em] leading-[1.31] mb-[28px] !mb-[53.5px]">WOMENS 01</p>
								<p className="text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.75] mb-[17.5px] lg:mb-[26.5px]">軽やかな色合いとノーカラーが<br />旅の装いを格上げしてくれる</p>
								<p className="mb-[24.5px] lg:mb-[34px]">清涼感のあるリネン素材と軽快な色合いが特徴のESTNATIONのセットアップ。ノーカラーのため、カーディガンのように気軽に羽織ることができ、ウエストゴム仕様のパンツは移動の多い旅でもストレスなく過ごすことができる。元々ノーカラージャケットはフォーマルな装いをより自由に着こなすために生まれたもの。このジャケットを羽織り自由を謳歌する旅を楽しみたい。</p>
								<div className="info-wrapper">
									<dl className="info">
										<dt>JACKET ¥57,200</dt>
										<dd>ESTNATION</dd>
									</dl>
									<dl className="info">
										<dt>PANTS ¥37,400</dt>
										<dd>ESTNATION</dd>
									</dl>
								</div>
							</div>
						</div>
						{/* 02 */}
						<div className="flex flex-col gap-[40px] lg:flex-gap-none-2col mb-[80px] lg:mb-0">
							<div className="content-info-left order-2 lg:order-1">
								<p className="font-en-futura text-[14px] lg:text-[16px] tracking-[0.1em] leading-[1.31] mb-[28px] !mb-[53.5px]">WOMENS 02</p>
								<p className="text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.75] mb-[17.5px] lg:mb-[26.5px]">柔らかな動きが<br />優雅なスタイルを作り出す</p>
								<p className="mb-[24.5px] lg:mb-[34px]">2024AWからウィメンズラインをローンチしたコモリ。同じニット素材で作られたカーディガンとドレスはセットアップのように着用ができ、タイトなシルエットながらニットの柔らかな質感が体に寄り添い、ストレスなく着用することができる。少し荒く編み込まれたニットは夏でも気軽に着用でき、肌寒ければカーディガンを羽織ることもできるなど、汎用性にも優れている。</p>
								<div className="info-wrapper">
									<dl className="info">
										<dt>KNIT ¥90,200</dt>
										<dd>COMOLI</dd>
									</dl>
									<dl className="info">
										<dt>DRESS ¥90,200</dt>
										<dd>COMOLI</dd>
									</dl>
								</div>
							</div>
							<picture className="order-1 lg:order-2">
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-womens-2.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-womens-2.jpg" alt="" />
							</picture>
						</div>
						{/* 03 */}
						<div className="flex flex-col gap-[40px] lg:flex-gap-none-2col">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-womens-3.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-womens-3.jpg" alt="" />
							</picture>
							<div className="content-info-left">
								<p className="font-en-futura text-[14px] lg:text-[16px] tracking-[0.1em] leading-[1.31] mb-[28px] !mb-[53.5px]">WOMENS 03</p>
								<p className="text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.75] mb-[17.5px] lg:mb-[26.5px]">フランス映画から着想を得た<br />ラフで心地よい一着</p>
								<p className="mb-[24.5px] lg:mb-[34px]">クロード・ソーテ監督によるフランス映画の名作『すぎ去りし日の…』に登場するヒロイン がメンズのドレスシャツをラフに羽織る様からインスピレーションを受けた一着。着想源の通りドライながらも心地よい肌触りのリネン素材とメンズも着用できるリラックス感のあるシルエットは肩肘を張らず、様々なスタイリングに合わせることができる。旅行のワードローブに忍ばせておきたい一着だ。</p>
								<dl className="info">
									<dt>SHIRT ¥38,500</dt>
									<dd>FIGARET</dd>
								</dl>
							</div>
						</div>
					</section>
				</div>
			</section>

			{/* hotels */}
			<section className="section-hotel">
				<h2 className="section-ttl-garamond mb-[8.5px] md:mb-[6px]">FEEDING <br className="block md:hidden" />THE MIND LOCALLY</h2>
				<p className="text-[15px] md:text-[18px] tracking-[0.02em] leading-[1.78] mb-[38.5px] md:mb-[36.5px] font-semibold">全国を巡る知性を刺激する宿たち</p>
				<p className="md:max-w-[calc(500/1280*100vw)] text-[14px] md:text-[15px] leading-[1.87]">ふふ 銀座 東京を舞台に知的好奇心を刺激する旅について語ってくれたジョアンナさん。ここでは東京から離れ、地方にある個性に溢れ様々な角度から知性を刺激してくれる宿を紹介していきます。あなたの旅のメモに入れ、機会があればぜひ訪れてみてください。</p>
				{/* 京都 */}
				<section className="hotel-content-box !pt-[44px] md:!pt-[43.5px]">
					{/* pc */}
					<div className="hidden md:block">
						<div className="flex-gap-1-3col mb-[37.5px]">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-1.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-1.jpg" alt="" />
							</picture>
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-2.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-2.jpg" alt="" />
							</picture>
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-3.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-3.jpg" alt="" />
							</picture>
						</div>
					</div>
					{/* sp */}
					<div className="block md:hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] overflow-hidden">
						<div className="swiper w-full ">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-1.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-1.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-2.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-2.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-3.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-3.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-1.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-1.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-2.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-2.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-kyoto-3.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-kyoto-3.jpg" alt="" />
									</picture>
								</div>
							</div>
						</div>
					</div>
					<div className="md:flex-gap-none-2col">
						<div className="md:pr-[64px] pt-[28px] md:pt-0">
							<h3 className="hotel-ttl">THE WESTIN MIYAKO KYOTO KASUIEN</h3>
							<p className="hotel-ttl-ja">ウェスティン都ホテル京都　数寄屋風別館 佳水園</p>
							{/* sp */}
							<div className="block md:hidden">
								<p className="mb-[34.5px]">文化が丁寧に保存されつつ、現代に合わせてアップデートされた美しい一例です。ここは京都でも指折りの特別な場所だと思います。もともとは1959年に建築家・村野藤吾の設計によって建てられた数寄屋造りの建物で、2020年に中村拓志（NAP建築設計事務所）の手によってリノベーションされました。中村は、村野のオリジナルデザインを尊重して残しつつ、彼自身の独創的なエッセンスを加えています。滞在中は、ぜひ建物の細部にまで注目してみてください。こうした本当のしつらえは、今の日本においてますます希少なものとなっているからです。</p>
							</div>
							<div className="info-wrapper">
								<dl className="info">
									<dt>ADDRESS</dt>
									<dd>京都府京都市東山区三条けあげ</dd>
								</dl>
								<dl className="info">
									<dt>TEL</dt>
									<dd>
										<a href="tel:0757717111">075-771-7111</a>
									</dd>
								</dl>
								<dl className="info min-w-0">
									<dt>WEBSITE</dt>
									<dd className="truncate">										
										<a href="https://www.miyakohotels.ne.jp/WESTINKYOTO/STAY/KASUIEN/" target="_blank">WWW.MIYAKOHOTELS.NE.JP/WESTINKYOTO/STAY/KASUIEN/</a>
									</dd>
								</dl>
							</div>
						</div>
						{/* pc */}
						<div className="hidden md:block">
							<p>文化が丁寧に保存されつつ、現代に合わせてアップデートされた美しい一例です。ここは京都でも指折りの特別な場所だと思います。もともとは1959年に建築家・村野藤吾の設計によって建てられた数寄屋造りの建物で、2020年に中村拓志（NAP建築設計事務所）の手によってリノベーションされました。中村は、村野のオリジナルデザインを尊重して残しつつ、彼自身の独創的なエッセンスを加えています。滞在中は、ぜひ建物の細部にまで注目してみてください。こうした本当のしつらえは、今の日本においてますます希少なものとなっているからです。</p>
						</div>
					</div>
				</section>
				{/* 沼津 */}
				<section className="hotel-content-box">
					{/* pc */}
					<div className="hidden md:block">
						<div className="flex-gap-1-3col">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-1.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-numazu-1.jpg" alt="" />
							</picture>
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-2.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-numazu-2.jpg" alt="" />
							</picture>
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-3.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-numazu-3.jpg" alt="" />
							</picture>
						</div>
					</div>
					{/* sp */}
					<div className="block md:hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] overflow-hidden">
						<div className="swiper w-full ">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-1.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-numazu-1.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-2.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-numazu-2.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-3.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-numazu-3.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-1.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-numazu-1.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-2.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-numazu-2.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-numazu-3.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-numazu-3.jpg" alt="" />
									</picture>
								</div>
							</div>
						</div>
					</div>
					<div className="flex">
						<p className="font-en-futura mt-[4px] md:mt-[5px] mb-[12px] md:mb-[22px] ml-auto text-[9px] md:text-[10px] tracking-[0.12em] leading-[1.8]">PHOTO：BEN RICHARDS</p>
					</div>
					<div className="md:flex-gap-none-2col">
						<div className="md:pr-[64px]">
							<h3 className="hotel-ttl">NUMAZUCLUB</h3>
							<p className="hotel-ttl-ja">沼津倶楽部</p>
							{/* sp */}
							<div className="block md:hidden">
								<p className="mb-[34.5px]">「沼津倶楽部」は、静岡県沼津市の富士山と駿河湾を眺めることができる、樹齢数百年の松林の中にひっそりと佇む美しいブティックホテルです。敷地の半分は築110年以上の数寄屋造りの茶室で、もう半分には故・渡辺明氏が設計した傑出したモダニズム建築の集合別邸が広がっています。他では味わえないそのデザインは、時代を超えたような世界へと誘ってくれます。滞在中は、ただゆったりと時の移ろいを楽しんでみてください。自然に囲まれ、鳥のさえずりや穏やかな風を感じるこの場所は、思考を休めたり、新しいアイデアのインスピレーションを得るのに最高の環境です。</p>
							</div>
							<div className="info-wrapper">
								<dl className="info">
									<dt>ADDRESS</dt>
									<dd>静岡県沼津市千本郷林 1907-8</dd>
								</dl>
								<dl className="info">
									<dt>TEL</dt>
									<dd>
										<a href="tel:0559546611">055-954-6611</a>
									</dd>
								</dl>
								<dl className="info">
									<dt>WEBSITE</dt>
									<dd>
										<a href="https://numazu-club.com/" target="_blank">WWW.NUMAZU-CLUB.COM</a>
									</dd>
								</dl>
							</div>
						</div>
						{/* pc */}
						<div className="hidden md:block">
							<p>「沼津倶楽部」は、静岡県沼津市の富士山と駿河湾を眺めることができる、樹齢数百年の松林の中にひっそりと佇む美しいブティックホテルです。敷地の半分は築110年以上の数寄屋造りの茶室で、もう半分には故・渡辺明氏が設計した傑出したモダニズム建築の集合別邸が広がっています。他では味わえないそのデザインは、時代を超えたような世界へと誘ってくれます。滞在中は、ただゆったりと時の移ろいを楽しんでみてください。自然に囲まれ、鳥のさえずりや穏やかな風を感じるこの場所は、思考を休めたり、新しいアイデアのインスピレーションを得るのに最高の環境です。</p>
						</div>
					</div>
				</section>
				{/* 里山 */}
				<section className="hotel-content-box">
					{/* pc */}
					<div className="hidden md:block">
						<div className="flex-gap-1-3col mb-[37.5px]">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-1.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-1.jpg" alt="" />
							</picture>
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-2.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-2.jpg" alt="" />
							</picture>
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-3.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-3.jpg" alt="" />
							</picture>
						</div>
					</div>
					{/* sp */}
					<div className="block md:hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] overflow-hidden">
						<div className="swiper w-full ">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-1.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-1.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-2.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-2.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-3.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-3.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-1.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-1.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-2.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-2.jpg" alt="" />
									</picture>
								</div>
								<div className="swiper-slide">
									<picture>
										<source srcSet="/photo/page/2026_intellectual-journey/img/img-satoyama-3.webp" type="image/webp" />
										<img src="/photo/page/2026_intellectual-journey/img/img-satoyama-3.jpg" alt="" />
									</picture>
								</div>
							</div>
						</div>
					</div>
					<div className="md:flex-gap-none-2col">
						<div className="md:pr-[64px] pt-[28px] md:pt-0">
							<h3 className="hotel-ttl">SATOYAMA JUJO</h3>
							<p className="hotel-ttl-ja">里山十帖</p>
							{/* sp */}
							<div className="block md:hidden">
								<p className="mb-[34.5px]">新潟県南魚沼の奥深くに位置する、美しいブティック旅館です。築数百年の古民家に北欧デザインを融合させたインテリアが特徴です。この宿は、長期の温泉滞在で身体を癒す日本の伝統的な「湯治」のコンセプトに現代的なアプローチで取り組んでいます。地元で採れた旬の食材を使ったオーガニックな料理と、新潟の山々を望む最高の景色を楽しめる天然温泉が魅力的。滞在中は浴衣でリラックスできますが、日中に桑木野シェフと一緒に季節のハーブや山菜を採りに行くなら、歩きやすい靴を忘れずに持参してください。</p>
							</div>
							<div className="info-wrapper">
								<dl className="info">
									<dt>ADDRESS</dt>
									<dd>新潟県南魚沼市大沢1209-6</dd>
								</dl>
								<dl className="info">
									<dt>TEL</dt>
									<dd>
										<a href="tel:0570001810">0570-001-810</a>
									</dd>
								</dl>
								<dl className="info">
									<dt>WEBSITE</dt>
									<dd>
										<a href="https://www.satoyama-jujo.com/" target="_blank">WWW.SATOYAMA-JUJO.COM</a>
									</dd>
								</dl>
							</div>
						</div>
						{/* pc */}
						<div className="hidden md:block">
							<p>新潟県南魚沼の奥深くに位置する、美しいブティック旅館です。築数百年の古民家に北欧デザインを融合させたインテリアが特徴です。この宿は、長期の温泉滞在で身体を癒す日本の伝統的な「湯治」のコンセプトに現代的なアプローチで取り組んでいます。地元で採れた旬の食材を使ったオーガニックな料理と、新潟の山々を望む最高の景色を楽しめる天然温泉が魅力的。滞在中は浴衣でリラックスできますが、日中に桑木野シェフと一緒に季節のハーブや山菜を採りに行くなら、歩きやすい靴を忘れずに持参してください。</p>
						</div>
					</div>
				</section>
			</section>

			
		</main>

		<Footer />
		
	</body>
	);
}