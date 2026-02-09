import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { ExpertCard } from "@/components/expert-card"
import { VideoEmbed } from "@/components/video-embed"
import { Footer } from "@/components/footer"

const navItems = [
  { href: "#group1", label: "1. 戦略・財務", hoverColor: "hover:text-indigo-600" },
  { href: "#group2", label: "2. 実業イノベ", hoverColor: "hover:text-emerald-600" },
  { href: "#group3", label: "3. 教育・組織", hoverColor: "hover:text-violet-600" },
  { href: "#group4", label: "4. AI・マーケ", hoverColor: "hover:text-amber-600" },
  { href: "#group5", label: "5. 文化・インパクト", hoverColor: "hover:text-rose-600" },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <Navigation items={navItems} switchLabel="シャッフル版へ" switchHref="/shuffle" />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-32">
          {/* Unit 1 */}
          <section id="group1" className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="text-indigo-600 font-black text-xs uppercase tracking-widest">Unit 01</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{"グローバル・経営戦略・ファイナンス"}</h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  <span className="font-bold text-slate-800">{"テーマ：世界基準の経営基盤と資産戦略の構築"}</span><br />
                  {"グローバルな視座、金融・財務の専門性、そして不動産やテックへの知見を融合させ、企業のステージを一段階引き上げるための「経営の参謀」グループです。"}
                </p>
                <VideoEmbed src="https://drive.google.com/file/d/1LNmVqg_5VFZxzylJZ1u0aiI7W0xF1hQf/preview" />
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4">
                <ExpertCard name="長谷川 秀夫 氏" role="戦略的CFO・経営管理最高顧問" roleColor="text-indigo-600" borderColor="border-indigo-600" description="東芝やコーエーでのCFO経験とアカデミックな知見で、強固な財務戦略を指南します。" />
                <ExpertCard name="Johnny Yoo (ジョニー・ユー) 氏" role="グローバル事業開発・投資戦略" roleColor="text-indigo-600" borderColor="border-indigo-600" description="ゴールドマンサックス等の金融経験と、WeWork Japan CEOとしての実績で海外展開を牽引します。" />
                <ExpertCard name="Jay Yamamoto 氏" role="テックトレンドと実装" roleColor="text-indigo-600" borderColor="border-indigo-600" description="AdobeやNTTでの日米経験を活かし、ブロックチェーンやAIの技術的裏付けを支援します。" />
                <ExpertCard name="井上 正大 氏" role="資産管理と実務的経営" roleColor="text-indigo-600" borderColor="border-indigo-600" description="証券コンサル経験と地域密着型不動産経営の視点で、堅実な資産防衛と運用を担います。" />
                <ExpertCard name="玉置 幸世 氏" role="経営者の思考整理・意思決定支援" roleColor="text-indigo-600" borderColor="border-indigo-600" description="外資系金融出身のエグゼクティブコーチとして、リーダーの孤独な決断を後押しします。" />
              </div>
            </div>
          </section>

          {/* Unit 2 */}
          <section id="group2" className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 lg:order-2">
                <span className="text-emerald-600 font-black text-xs uppercase tracking-widest">Unit 02</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{"ものづくり・素材・実業イノベーション"}</h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  <span className="font-bold text-slate-800">{"テーマ：技術と情熱で「新たな実業価値」を生み出す"}</span><br />
                  {"製造現場の現場力、新素材、そして健康・環境への配慮を掛け合わせ、持続可能なビジネスモデルを開発するグループです。"}
                </p>
                <VideoEmbed src="https://drive.google.com/file/d/1G_0E2S2Vb8Uiy5EVc2KT7-Fnrkg1Q1yb/preview" />
              </div>
              <div className="lg:col-span-7 lg:order-1 flex flex-col gap-4">
                <ExpertCard name="青木 与人 氏" role="製造現場の革新と多角化" roleColor="text-emerald-600" borderColor="border-emerald-600" description="商社から製造業へ転換した柔軟な発想で、アイデアを形にする生産拠点を担います。" />
                <ExpertCard name="安倍 勇作 氏" role="健康・環境事業の実践" roleColor="text-emerald-600" borderColor="border-emerald-600" description="建築業での成功体験と、酵素水事業による理念で、ヘルスケア分野の商品開発を主導します。" />
                <ExpertCard name="秋月 智佳 氏" role="次世代育成と製造の融合" roleColor="text-emerald-600" borderColor="border-emerald-600" description="「ネジロボ」を通じた教育活動で、ものづくりの楽しさを次世代に伝えます。" />
              </div>
            </div>
          </section>

          {/* Unit 3 */}
          <section id="group3" className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="text-violet-600 font-black text-xs uppercase tracking-widest">Unit 03</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{"次世代教育・人材組織開発・意識変革"}</h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  <span className="font-bold text-slate-800">{"テーマ：人の「内面」と「可能性」を科学し、組織をアップデートする"}</span><br />
                  {"教育、脳科学、意識のメカニズムなど、多角的なアプローチで「人」の成長と組織の活性化を支援します。"}
                </p>
                <VideoEmbed src="https://drive.google.com/file/d/1UoJlYD_fV7LHwkR6KmeqO3ZcLNWE60r3/preview" />
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4">
                <ExpertCard name="炭谷 俊樹 氏" role="探究型学習のパイオニア" roleColor="text-violet-600" borderColor="border-violet-600" description="マッキンゼー出身の論理思考と「ラーンネット」での実践知で人材育成を指南します。" />
                <ExpertCard name="池田 哲哉 氏" role="プロジェクト型学習（PBL）の実践" roleColor="text-violet-600" borderColor="border-violet-600" description="幼児から社会人まで、協働して課題解決する力を育むプログラムを設計します。" />
                <ExpertCard name="庄司 誉幸 氏" role="意識のメカニズム解明" roleColor="text-violet-600" borderColor="border-violet-600" description="「意識学」により感情と行動の設計図を読み解き、根本的なチームビルディングを促します。" />
                <ExpertCard name="高橋 一暢 氏" role="脳科学メンタルトレーニング" roleColor="text-violet-600" borderColor="border-violet-600" description="SBT理論に基づき、脳の仕組みからパフォーマンスを最大化させます。" />
                <ExpertCard name="白砂 なぎさ 氏" role="組織の美学と採用ブランディング" roleColor="text-violet-600" borderColor="border-violet-600" description="企業の美学を整え、採用を通じて組織文化の定着を支援する「調律者」です。" />
              </div>
            </div>
          </section>

          {/* Unit 4 */}
          <section id="group4" className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 lg:order-2">
                <span className="text-amber-600 font-black text-xs uppercase tracking-widest">Unit 04</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{"ビジネス加速・テック・マーケティング"}</h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  <span className="font-bold text-slate-800">{"テーマ：AIとマーケティングで企業の成長速度を最大化する"}</span><br />
                  {"最新のAI技術とSNS戦略、そして泥臭い営業実行力を組み合わせ、売上拡大を「実務」として請け負うグループです。"}
                </p>
                <VideoEmbed src="https://drive.google.com/file/d/18D-cnGaH3MYQoNhp8iWSjZNPf9EeYVR5/preview" />
              </div>
              <div className="lg:col-span-7 lg:order-1 flex flex-col gap-4">
                <ExpertCard name="高本 実祐 氏" role="AI実装とコミュニティ運営" roleColor="text-amber-600" borderColor="border-amber-600" description="生成AIを活用した業務改善や組織変革をスピード感を持って実行します。" />
                <ExpertCard name="各務 文人 氏" role="Web・SNSマーケティング支援" roleColor="text-amber-600" borderColor="border-amber-600" description="戦略から広告運用まで、デジタル面でのブランディングをトータルで支えます。" />
                <ExpertCard name="青井 北斗 氏" role="営業代行と実行支援" roleColor="text-amber-600" borderColor="border-amber-600" description="「売上を直に作る」実行部隊として、企業の右腕となり戦略を形にします。" />
                <ExpertCard name="塩沢 顕里 氏" role="実務派経営支援" roleColor="text-amber-600" borderColor="border-amber-600" description="少数精鋭でクライアントの課題に柔軟に対応し、プロジェクト進行をサポートします。" />
              </div>
            </div>
          </section>

          {/* Unit 5 */}
          <section id="group5" className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="text-rose-600 font-black text-xs uppercase tracking-widest">Unit 05</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{"文化・芸術・ソーシャルインパクト"}</h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  <span className="font-bold text-slate-800">{"テーマ：伝統と革新の融合による「精神的豊かさ」の発信"}</span><br />
                  {"囲碁、水引、日本古来の精神性を現代アートや社会貢献と融合させ、新しい価値観を世界へ発信するグループです。"}
                </p>
                <VideoEmbed src="https://drive.google.com/file/d/1mNH4J3y_0GRaKkhZOQdf3z-uDdeGRRtS/preview" />
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ExpertCard name="内野 明美 氏" variant="top" borderColor="border-rose-600" description="「やまとの心」を背景とした精神的バックボーンと文化伝承を担当。" />
                <ExpertCard name="仲山 仁之助 氏" variant="top" borderColor="border-rose-600" description="囲碁を通じた知的交流と、多様なネットワークの接続を担います。" />
                <ExpertCard name="舟木 香織 氏" variant="top" borderColor="border-rose-600" description="水引アートによる伝統の現代化と具体的プロダクトのデザイン。" />
                <ExpertCard name="香川 智彦 氏" variant="top" borderColor="border-rose-600" description="アートを通じた社会課題解決と、仕掛け人としての構想を推進。" />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
