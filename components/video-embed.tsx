interface VideoEmbedProps {
  src: string
}

export function VideoEmbed({ src }: VideoEmbedProps) {
  return (
    <div className="video-container rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
      <iframe src={src} allow="autoplay" title="Unit video" />
    </div>
  )
}
