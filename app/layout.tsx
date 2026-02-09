import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "Innovative DAO - 21 Experts Knowledge Blend",
  description:
    "AI活用手法『ナレッジブレンド』を用いた「イノベーティブDAO」によるクリエイティブトライアル。21名のエキスパート陣による五つの共創ユニット。",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
