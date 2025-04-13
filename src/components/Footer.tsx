export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 text-sm py-6 border-t border-white/10 text-center mt-20">
        <p>
          © {new Date().getFullYear()} <span className="text-white">Oliver Thys</span> — All rights reserved.
        </p>
      </footer>
    )
  }
  