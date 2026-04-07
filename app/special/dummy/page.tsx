import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "タイトル",
  description: "説明",
};

export default function Page() {
  return (
	<body>
		
			<Header />
    		<main>
					{/* KV */}
					<div className="kv-wrapper">
    		  	<div className="relative">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-kv.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-kv.jpg" alt="THE INTELLECTUAL JOURNEY" />
							</picture>
							<div className="kv-ttl">
								<h1 className="text-[45px] font-en-garamond">THE INTELLECTUAL JOURNEY</h1>
								<p className="text-[13px] font-en-futura">- FLAVORS & NATURE ENCOUNTER -</p>
								<p className="text-[18px]">知的好奇心を刺激する名ホテルへの旅路</p>
							</div>
			  		</div>
					</div>

					<div className="intro">
						<p className="text-[13px] leading-[130%] font-bold">INTRODUCTION</p>
						<p className="basis-[65%] text-[15px] leading-[185%]">旅の目的は、人の数だけ存在します。日々の喧騒を離れて静謐に身を置き自分と向き合う旅。あるいは未知の体験を求める活動的な旅。その中でも、今、多くの人々が旅に求めているのは「学び」という名の贅沢ではないでしょうか。時代を超えた建築に触れ、自然の中で五感を研ぎ澄ます。洗練された装いで食の芸術を愉しむ。旅は私たちに計り知れない経験と新たな視座を与えてくれます。真の豊かさを求める人々が増えた現代、審美眼を持つプロフェッショナルはどのような地を目的地に選ぶのでしょうか。今回は、デザイン・建築メディア『Ala Champ Magazine』の編集長を務めるジョアンナ・カウェキさんを迎え、「ふふ 東京 銀座」を舞台に知的好奇心を深く刺激する旅の過ごし方を紐解いていきます。</p>
					</div>

					<section className="section">
						<h2 className="font-en-garamond text-[40px] tracking-[0.1em] leading-[120%] mb-[53px] font-bold">NAVIGATOR</h2>
						<div className="flex justify-between">
							<div className="basis-[48%]">
								<div className="mb-[40px]">
									<p className="mb-[15px] text-[11px]">ALA CHMAP MAGAZINE FOUNDER</p>
									<p className="tracking-[0.1em] text-[30px] font-en-garamond font-bold mb-[8px]">JOANNA KAWACKI</p>
									<p className="text-[12px]">ジョアンナ・カウェキ</p>
								</div>
								<p className="mb-[30px]">オーストラリア出身、東京在住の編集者・ジャーナリスト。デザイン/建築メディア『Ala Champ Magazine』のファウンダー。建築、旅、アートといった分野に造詣が深く、2013年に東京へ拠点を移してからはグローバルな視点から日本の建築や、文化を発信している。国内外のビジネスエリートからも高い支持を集め、ファッションを含め様々な分野に精通している。</p>
							</div>
							<picture className="w-[238px]">
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-navigator.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-navigator.jpg" alt="" />
							</picture>
						</div>
					</section>

					<section className="section flex justify-between gap-[40px]">
						<div className="basis-[48%] grid gap-[40px]">
							<picture>
								<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-1.webp" type="image/webp" />
								<img src="/photo/page/2026_intellectual-journey/img/img-hotel-1.jpg" alt="" />
							</picture>
							<div>
								<picture>
									<source srcSet="/photo/page/2026_intellectual-journey/img/img-hotel-2.webp" type="image/webp" />
									<img src="/photo/page/2026_intellectual-journey/img/img-hotel-2.jpg" alt="" />
								</picture>
								<p className="text-[11px] mt-[10px]">ふふ 東京 銀座内にある日本料理「銀座がゆう」では宿泊者がプライベート空間を満喫できるよう全て個室になっているが、レストラン内には大きなカウンターを備え、通り道にも枯山水を模した空間や作品が置かれるなど、個室に入るまでの時間を視覚的に楽しむことができる。</p>
							</div>
						</div>
						<div className="flex-1">
							<h2 className="mb-[60px] text-[20px] tracking-[0.02em]">旅は新たな知識のカケラ<br />を与えてくれる</h2>
							<p className="mb-[38px]">今回の企画テーマは「知的好奇心を刺激する名ホテルへの旅路」ですが、ジョアンナさんにとって好奇心を持って旅をする意味と、近年旅行者が都市部のラグジュアリーホテルよりも地方の宿に惹かれる傾向にあるのはなぜだと思いますか。</p>
							<p>ジョアンナ・カウェキ（以下J）：日常のあらゆることに好奇心を持つのはとても大切なことです。旅や日々の経験を通じて、私たちは自分自身のことをより深く知り、自分たちが生きる世界への理解を深めることができます。「わからないことを質問する」のを怖がらず挑戦してみてほしいと思います。それは恥ずかしいことではなく、むしろ知性の証です。質問することで、ものがどう作られ、どこから来たのかという新しい知識が手に入ります。 そして実体験はなにものにも代えがたい財産です。知識を積み重ね、学ぶことは脳の柔軟性を鍛えることにも繋がります。また、今の世界には「共感」や「思いやり」といった価値観がもっと必要だと思います。旅をすることは世界が広大で、かつ「すべてが繋がり合っている場所」であることを実感させてくれる素晴らしい手段なのです。 そして最近の旅行者は、もちろん全てではないんですが洗練されてはいるもののどこか単調な都市の高級ホテルから離れつつあります。代わって支持されているのは、その土地の風景や伝統に深く根ざした、地方の宿です。こうした宿にはその土地ならではの“情緒”が息づいています。 この変化の真の原動力は、「その土地の文化にどっぷりと浸かりたい」という切実な思いにあると私は考えています。旅行者はもはや、単に目的地を“訪れる”だけでは満足できません。たとえ数晩であっても、その場所に「溶け込んで暮らしたい」と願っているのです。地方の宿は、そんな願いを心に深く刻み込んでくれる体験なのです。</p>
						</div>
					</section>

				</main>
			<Footer />
		
	</body>
  );
}