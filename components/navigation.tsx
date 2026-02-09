import Link from "next/link"

interface NavItem {
  href: string
  label: string
  hoverColor: string
}

interface NavigationProps {
  items: NavItem[]
  switchLabel: string
  switchHref: string
}

export function Navigation({ items, switchLabel, switchHref }: NavigationProps) {
  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex overflow-x-auto gap-6 md:gap-10 py-4 text-xs md:text-sm font-bold whitespace-nowrap scrollbar-hide justify-start md:justify-center flex-grow">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={`text-slate-600 ${item.hoverColor} transition-colors`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          href={switchHref}
          className="hidden md:block ml-4 text-xs font-bold px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-colors whitespace-nowrap"
        >
          {switchLabel}
        </Link>
      </div>
      <div className="md:hidden px-4 pb-2 text-right">
        <Link href={switchHref} className="text-xs font-bold text-slate-900 underline">
          {switchLabel}
        </Link>
      </div>
    </nav>
  )
}
