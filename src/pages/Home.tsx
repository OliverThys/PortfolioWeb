import illustration from '../assets/Oliver-Thys-Logo.png'
import Button from '../components/Button'
import EllipseBackground from '../components/EllipseBackground'
import ProjectCarousel from '../components/ProjectCarousel'



export default function Home() {
  const slogan: string = "Full Stack Developer. Designed with purpose."

  return (
    <>
      {/* SECTION HERO */}
      <section className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 overflow-hidden font-sans">
        <EllipseBackground />

        {/* 🌕 Glow en arrière-plan */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="absolute w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_center,_white_20%,_transparent_70%)] blur-[160px] opacity-50 animate-pulse" />
          <div className="absolute w-[1600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#f43f5e_10%,_transparent_80%)] blur-[240px] opacity-40 animate-pulse" />
        </div>
        

        <h1 className="text-[80px] font-semibold tracking-tight z-10 leading-[1.1] animate-slide-up">
          Oliver Thys
        </h1>

        <img
          src={illustration}
          alt="Oliver Thys"
          className="w-[500px] h-[500px] object-contain mb-12 z-10 drop-shadow-[0_10px_40px_rgba(255,255,255,0.15)] animate-fade-in"
        />

        {/* ✍️ Slogan animé */}
        <p className="flex justify-center flex-wrap gap-[2px] mt-6 z-10 text-[36px] font-light text-white/70">
          {[...slogan].map((char: string, i: number) => (
            <span
              key={i}
              className="animate-letter"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>


        {/* 🔘 CTA */}
        <div className="flex flex-row flex-wrap justify-center gap-[14px] mt-12 z-10">
          <Button
            label="See Projects"
            variant="primary"
            onClick={() => {
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-[200px] h-[60px]"
          />
          <Button
            label="Contact Me"
            variant="secondary"
            onClick={() => {
              window.location.href = '/contact'
            }}
            className="w-[200px] h-[60px]"
          />
        </div>

        <p className="text-sm text-white/40 mt-12 z-10" />
      </section>

      {/* 🔲 Transition blanche */}
      <div className="w-full h-[80px] bg-white z-10 relative" />

      {/* SECTION PROJECTS */}
      <section
        id="projects"
        className="min-h-screen w-full bg-gradient-to-b from-[#0a0f3c] to-[#0a0e66] text-white flex flex-col items-center px-6 pt-10 pb-20"
      >
        <h2 className="text-[64px] font-semibold -mt-12 mb-10 animate-fade-in">
          Projects
        </h2>
        <ProjectCarousel />
      </section>


    </>
  )
}
