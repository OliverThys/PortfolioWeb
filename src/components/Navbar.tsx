import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="w-full bg-[#1c1c1e]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-10 py-5 flex justify-center">
        <ul className="flex list-none">
          {navItems.map(({ name, path }) => (
            <li key={name} className="mx-4">
              <Link
                to={path}
                className={`text-white text-base font-light tracking-wide transition-opacity duration-200 ${
                  pathname === path
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
