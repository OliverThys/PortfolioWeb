import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0f3c] to-[#0a0e66] text-white px-6 py-28 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* 🌌 Glow arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="absolute w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,_#4f46e5_10%,_transparent_70%)] blur-[160px] opacity-40 animate-pulse" />
        <div className="absolute w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#7c3aed_10%,_transparent_70%)] blur-[180px] opacity-30 animate-pulse" />
      </div>

      {/* 📫 Contenu principal */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-white text-[72px] font-extrabold tracking-tight mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          Let's Connect
        </h2>
        <p className="text-white/80 text-[24px] md:text-[28px] mb-10 leading-[1.8]">
          Got a project, idea, or opportunity? I’d love to hear from you. <br className="hidden md:inline" />
          Drop me a message anytime.
        </p>
        <a
          href="mailto:oliverthys.dev@gmail.com"
          className="inline-block bg-white text-black text-[20px] font-semibold px-[48px] py-[18px] rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          oliverthys.dev@gmail.com
        </a>

        {/* 🔙 Retour à l'accueil */}
        <div className="mt-10">
          <Link
            to="/"
            className="inline-block text-white/60 text-[18px] underline hover:text-white transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
