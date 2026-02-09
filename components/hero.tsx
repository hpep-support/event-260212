export function Hero() {
  return (
    <header className="gradient-dark text-white py-24 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <circle cx="20" cy="20" r="15" fill="white" />
          <circle cx="80" cy="80" r="20" fill="white" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-block px-4 py-1 border border-blue-400 rounded-full text-blue-300 text-sm mb-6 tracking-widest font-bold">
          Happy Planet Earth Project
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Innovative DAO<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-2xl md:text-4xl">
            {"五つの共創ユニット"}
          </span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            {"こちらは、AI活用手法の１つである"}
            <span className="text-white font-bold">{"『ナレッジブレンド』"}</span>
            {"を用いた、"}
            <span className="text-white font-bold">{"「イノベーティブDAO」"}</span>
            {"によるクリエイティブトライアルです。"}
          </p>
          <p className="text-gray-400 text-md leading-relaxed">
            {"選りすぐられた"}
            <span className="text-white font-bold">{"21名"}</span>
            {"のエキスパート陣が、それぞれの専門性と背景、そして生まれるであろうシナジーを融合させ、社会に新しい価値を実装するための「ユニット」を構成しました。"}
          </p>
        </div>
      </div>
    </header>
  )
}

export function ShuffleHero() {
  return (
    <header className="gradient-bg text-white py-24 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 border border-blue-400 rounded-full text-blue-300 text-sm mb-6 tracking-widest font-bold">
          Happy Planet Earth Project
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          {"イノベーティブDAO"}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-2xl md:text-4xl">
            {"五つの共創ユニット"}
          </span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            {"こちらは、AI活用手法の１つである"}
            <span className="text-white font-bold">{"『ナレッジブレンド』"}</span>
            {"を用いた、"}
            <span className="text-white font-bold">{"「イノベーティブDAO」"}</span>
            {"によるクリエイティブトライアルです。"}
          </p>
          <p className="text-gray-400 text-md leading-relaxed">
            {"選りすぐられた"}
            <span className="text-white font-bold">{"21名"}</span>
            {"の多彩なエキスパート陣が、それぞれの専門性と背景、そして生まれるであろうシナジーを融合させ、社会に新しい価値を実装するための「共創ユニット」を構成しました。"}
          </p>
        </div>
      </div>
    </header>
  )
}
