export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 inline-block px-4 py-1 bg-white/10 rounded-full text-xs tracking-widest text-blue-300">
          KNOWLEDGE BLEND & INNOVATIVE DAO
        </div>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          {"21名のエキスパートによる「知の融合」が、停滞した現代社会に"}
          <br className="hidden md:block" />
          {"真のイノベーションと、新たなコミュニティの形を実装します。"}
        </p>
        <div className="h-px bg-white/10 mb-8" />
        <p className="text-gray-500 text-xs tracking-wider uppercase">
          {"© 2024 Innovative DAO Creative Trial. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}

export function ShuffleFooter() {
  return (
    <footer className="bg-slate-950 text-white py-20 px-6 text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs">
          Knowledge Blend & Innovative DAO
        </p>
        <h3 className="text-2xl font-bold mb-6 italic">Creative Trial: 21 Experts Synergy</h3>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          {"21名のエキスパートによる「知の融合」が、停滞した現代社会に"}
          <br className="hidden md:block" />
          {"真のイノベーションと、新たなコミュニティの形を実装します。"}
        </p>
        <div className="h-px bg-white/10 mb-8" />
        <p className="text-gray-500 text-xs">
          {"© 2024 Innovative DAO Creative Trial. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
