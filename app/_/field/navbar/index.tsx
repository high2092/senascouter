import Link from 'next/link'

const TABS: Tab[] = [
  {name: '스펙 시뮬레이터', href: '/'},
  {name: '데미지 시뮬레이터', href: '/damage-simulator'},
]

export function Navbar() {
  return (
    <nav className="h-[40px] bg-black/90 text-white">
      <ul className="flex h-full *:flex-1">
        {TABS.map((tab) => (
          <li key={tab.name} className="">
            <NavItem {...tab} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

interface Tab {
  name: string
  href: string
}

function NavItem({name, href}: Tab) {
  return (
    <Link href={href} className="flex h-full w-full items-center justify-center">
      {name}
    </Link>
  )
}
