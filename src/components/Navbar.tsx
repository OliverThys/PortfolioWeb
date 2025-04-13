import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-black/70 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          Oliver<span className="text-blue-500">Thys</span>
        </Link>
        <div className="space-x-6 hidden md:flex">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-sm font-medium transition duration-300 ${
                pathname === path
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
