export default function Footer() {
  return (
    <footer className="relative bg-[#0b0a2a] text-gray-400 text-sm py-8 px-4 text-center border-t border-white/10 mt-24 shadow-[inset_0_12px_24px_rgba(255,255,255,0.05)]">
      <div className="max-w-6xl mx-auto">
        <p className="tracking-wider text-[14px] text-white/70">
          © {new Date().getFullYear()}{' '}
          <span className="text-white font-semibold hover:text-blue-400 transition duration-300 cursor-pointer">
            Oliver Thys
          </span>{' '}
          — All rights reserved.
        </p>
      </div>
    </footer>
  )
}
