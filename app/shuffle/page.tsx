import type { Metadata } from "next"
import { ShuffleHero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { GlassExpertCard } from "@/components/expert-card"
import { ShuffleFooter } from "@/components/footer"

export const metadata: Metadata = {
  title: "イノベーティブDAO - シャッフル版",
  description: "21名のエキスパートによる知の融合 - シャッフル版ユニット構成",
}

const navItems = [
  { href: "#group1", label: "1. 伝統×先端", hoverColor: "hover:text-indigo-600" },
  { href: "#group2", label: "2. 実業×教育", hoverColor: "hover:text-emerald-600" },
  { href: "#group3", label: "3. AI×組織", hoverColor: "hover:text-violet-600" },
  { href: "#group4", label: "4. アート×実務", hoverColor: "hover:text-amber-600" },
  { href: "#group5", label: "5. ウェルビーイング", hoverColor: "hover:text-rose-600" },
]

export default function ShufflePage() {
  return (
    <>
      <ShuffleHero />
      <Navigation items={navItems} switchLabel="通常版へ" switchHref="/" />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-32">
          {/* Group 1 */}
          <section id="group1" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="unit-label text-indigo-600 text-xs uppercase">Unit 01</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  {"「伝統×先端」"}<br />{"グローバル・ブランディング・ユニット"}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {"日本の精神性や伝統工芸を、シリコンバレーのテック視点と外資系金融のロジックで再構築し、世界市場へ「プレミアムな日本ブランド」として輸出します。"}
                </p>
                <div className="video-container rounded-2xl shadow-xl overflow-hidden bg-slate-200">
                  <iframe src="https://drive.google.com/file/d/1T__qITGJJqno8MtEextg8l5EIgmTigfX/preview" allow="autoplay" title="Unit 01 video" />
                </div>
              </div>
              <div className="grid gap-4">
                <GlassExpertCard name="内野 明美 氏" org="やまとの心さきわい舎" role="役割" roleColor="text-indigo-600" borderColor="border-indigo-600" description="「やまとの心」という精神的バックボーンの提供。" />
                <GlassExpertCard name="Jay Yamamoto 氏" org="Glias, Inc." role="役割" roleColor="text-indigo-600" borderColor="border-indigo-600" description="シリコンバレーでの経験を活かしたテック実装と海外進出支援。" />
                <GlassExpertCard name="舟木 香織 氏" org="喜結－kimusubi－" role="役割" roleColor="text-indigo-600" borderColor="border-indigo-600" description="水引アートによる具体的プロダクトのデザインと伝統の現代化。" />
                <GlassExpertCard name="Johnny Yoo 氏" org="WeWork Japan" role="役割" roleColor="text-indigo-600" borderColor="border-indigo-600" description="グローバルな投資戦略と事業開発のリード。" />
              </div>
            </div>
          </section>

          {/* Group 2 */}
          <section id="group2" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="lg:order-2">
                <span className="unit-label text-emerald-600 text-xs uppercase">Unit 02</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  {"「実業×教育」"}<br />{"次世代ものづくりエコシステム"}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {"製造現場のリアルな課題を、探究型学習や脳科学の知見で解決し、「働く喜び」と「技術継承」を同時に実現する、地域密着型かつ未来志向のグループです。"}
                </p>
                <div className="video-container rounded-2xl shadow-xl overflow-hidden bg-slate-200">
                  <iframe src="https://drive.google.com/file/d/1wbsiqvo52Z3yTcpuf4gDMq06jdeYXP5F/preview" allow="autoplay" title="Unit 02 video" />
                </div>
              </div>
              <div className="grid gap-4 lg:order-1">
                <GlassExpertCard name="青木 与人 氏" org="株式会社ATP" role="役割" roleColor="text-emerald-600" borderColor="border-emerald-600" description="柔軟な発想を持つ製造拠点の提供と実務的な多角化。" />
                <GlassExpertCard name="炭谷 俊樹 氏" org="神戸情報大学院大学ラーンネット" role="役割" roleColor="text-emerald-600" borderColor="border-emerald-600" description="現場で自ら問いを立てる「探究型人材」の育成メソッド提供。" />
                <GlassExpertCard name="秋月 智佳 氏" org="大浩ホールディングス株式会社" role="役割" roleColor="text-emerald-600" borderColor="border-emerald-600" description="「ネジロボ」を通じた子供たちへのものづくり教育の実践。" />
                <GlassExpertCard name="高橋 一暢 氏" org="Brain training Labo" role="役割" roleColor="text-emerald-600" borderColor="border-emerald-600" description="脳科学に基づいた職人のパフォーマンス最大化とメンタル支援。" />
              </div>
            </div>
          </section>

          {/* Group 3 */}
          <section id="group3" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="unit-label text-violet-600 text-xs uppercase">Unit 03</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  {"「AI×組織美学」"}<br />{"人間中心のDX変革ユニット"}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {"単なる効率化としてのIT導入ではなく、企業の「美学」や「意識」を言語化した上で、AIやSNSを駆使して組織を内側から劇的に変容させます。"}
                </p>
                <div className="video-container rounded-2xl shadow-xl overflow-hidden bg-slate-200">
                  <iframe src="https://drive.google.com/file/d/1cBbYef-slofhPPlSbfBM0nlxiYqmWkYd/preview" allow="autoplay" title="Unit 03 video" />
                </div>
              </div>
              <div className="grid gap-4">
                <GlassExpertCard name="高本 実祐 氏" org="株式会社ForTwo" role="役割" roleColor="text-violet-600" borderColor="border-violet-600" description="生成AIを活用した業務改善と、データに基づく組織変革。" />
                <GlassExpertCard name="白砂 なぎさ 氏" org="フリーランス" role="役割" roleColor="text-violet-600" borderColor="border-violet-600" description="企業の「美学」を整え、採用を通じて文化を定着させる調律。" />
                <GlassExpertCard name="庄司 誉幸 氏" org="株式会社Academia Links" role="役割" roleColor="text-violet-600" borderColor="border-violet-600" description="「意識学」によるリーダーの意識変容とビジョン統合。" />
                <GlassExpertCard name="各務 文人 氏" org="株式会社RetaAgora" role="役割" roleColor="text-violet-600" borderColor="border-violet-600" description="デジタル面でのブランディングとSNSを通じた外部発信の最適化。" />
              </div>
            </div>
          </section>

          {/* Group 4 */}
          <section id="group4" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="lg:order-2">
                <span className="unit-label text-amber-600 text-xs uppercase">Unit 04</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  {"「アート×実務」"}<br />{"ソーシャル・ビジネス・アクセラレーター"}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {"アートの感性と社会課題解決の志を、泥臭い営業力と財務戦略で裏打ちし、持続可能なソーシャルビジネスを加速させるグループです。"}
                </p>
                <div className="video-container rounded-2xl shadow-xl overflow-hidden bg-slate-200">
                  <iframe src="https://drive.google.com/file/d/1Vt6qDgdv19Rmuwu5s9Ib0RZDFcfAWRO8/preview" allow="autoplay" title="Unit 04 video" />
                </div>
              </div>
              <div className="grid gap-4 lg:order-1">
                <GlassExpertCard name="香川 智彦 氏" org="株式会社Brave EGGs" role="役割" roleColor="text-amber-600" borderColor="border-amber-600" description="アートを通じた社会課題の提起と、仕掛け人としての構想。" />
                <GlassExpertCard name="青井 北斗 氏" org="株式会社Nouma" role="役割" roleColor="text-amber-600" borderColor="border-amber-600" description="戦略を実行に移し、泥臭く結果を出す「右腕」としての営業支援。" />
                <GlassExpertCard name="長谷川 秀夫 氏" org="武蔵野大学" role="役割" roleColor="text-amber-600" borderColor="border-amber-600" description="社会起業を支えるための強固な財務戦略と経営管理の指南。" />
                <GlassExpertCard name="塩沢 顕里 氏" org="株式会社シナプシス" role="役割" roleColor="text-amber-600" borderColor="border-amber-600" description="プロジェクトを円滑に回すためのきめ細やかな実務的経営サポート。" />
              </div>
            </div>
          </section>

          {/* Group 5 */}
          <section id="group5" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="unit-label text-rose-600 text-xs uppercase">Unit 05</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  {"「ウェルビーイング×知略」"}<br />{"新時代の資産・コミュニティ構想"}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {"身体の健康、知的な囲碁、そして不動産・金融資産の守りを統合し、経営者のQOL（生活の質）と資産価値を最大化するライフスタイルを提案します。"}
                </p>
                <div className="video-container rounded-2xl shadow-xl overflow-hidden bg-slate-200">
                  <iframe src="https://drive.google.com/file/d/1R0RsqyOLoSrkBxBuvwp558Dkdfmr233O/preview" allow="autoplay" title="Unit 05 video" />
                </div>
              </div>
              <div className="grid gap-4">
                <GlassExpertCard name="安倍 勇作 氏" org="善水株式会社" role="役割" roleColor="text-rose-600" borderColor="border-rose-600" description="「酵素」を軸とした、生命を元気にする健康・環境事業の提供。" />
                <GlassExpertCard name="仲山 仁之助 氏" org="株式会社囲碁社" role="役割" roleColor="text-rose-600" borderColor="border-rose-600" description="囲碁を通じた知的交流と、多様なネットワークの接続。" />
                <GlassExpertCard name="井上 正大 氏" org="株式会社上野不動産" role="役割" roleColor="text-rose-600" borderColor="border-rose-600" description="証券と不動産の両面からの、長期的かつ堅実な資産防衛。" />
                <GlassExpertCard name="池田 哲哉 氏" org="学びの道教育研究所" role="役割" roleColor="text-rose-600" borderColor="border-rose-600" description="PBLによる、生涯を通じた学びの場づくり。" />
                <GlassExpertCard name="玉置 幸世 氏" org="Y Tパートナーズ" role="役割" roleColor="text-rose-600" borderColor="border-rose-600" description="複雑な意思決定を整理し、経営者が真に望む人生へ導く伴走。" />
              </div>
            </div>
          </section>
        </div>
      </main>

      <ShuffleFooter />
    </>
  )
}
