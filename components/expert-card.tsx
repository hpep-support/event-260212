interface ExpertCardProps {
  name: string
  role?: string
  org?: string
  description: string
  borderColor: string
  roleColor?: string
  variant?: "side" | "top"
}

export function ExpertCard({
  name,
  role,
  org,
  description,
  borderColor,
  roleColor,
  variant = "side",
}: ExpertCardProps) {
  const borderClass =
    variant === "top" ? `border-t-4 ${borderColor}` : `border-l-4 ${borderColor}`
  const cardStyle = variant === "top" ? "glass-morphism" : "glass-morphism"
  const padding = variant === "top" ? "p-5" : "p-5"

  return (
    <div className={`expert-card ${cardStyle} ${padding} rounded-2xl ${borderClass}`}>
      <h4 className="font-bold text-lg">
        {name}
        {org && <span className="text-sm font-normal text-slate-500">{` / ${org}`}</span>}
      </h4>
      {role && (
        <p className={`text-xs ${roleColor || "text-slate-600"} mb-2 font-bold uppercase`}>
          {role}
        </p>
      )}
      <p className="text-sm text-slate-600 mt-1">{description}</p>
    </div>
  )
}

export function GlassExpertCard({
  name,
  org,
  description,
  borderColor,
  roleColor,
  role,
}: ExpertCardProps) {
  return (
    <div className={`glass-card p-6 rounded-2xl shadow-sm border-l-4 ${borderColor}`}>
      <h4 className="font-bold text-lg">
        {name}
        {org && <span className="text-sm font-normal text-slate-500">{` / ${org}`}</span>}
      </h4>
      {role && (
        <p className="text-sm text-slate-600 mt-2">
          <span className={`font-bold ${roleColor}`}>{"役割:"}</span> {description}
        </p>
      )}
      {!role && <p className="text-sm text-slate-600 mt-2">{description}</p>}
    </div>
  )
}
