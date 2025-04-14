import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './ProjectCarousel.css'

const mealmasterImage = new URL('../assets/mealmaster.png', import.meta.url).href
const spaceviewImage = new URL('../assets/Spaceview.png', import.meta.url).href

const projects = [
  {
    title: 'MealMaster',
    description:
      'Simplify your life with an intelligent meal planner that turns your recipes into ready-to-use shopping lists.',
    image: mealmasterImage,
    link: 'https://app-b06ccd5c-a957-48db-be92-2ff06031cbd7.cleverapps.io/',
  },
  {
    title: 'SpaceView',
    description:
      'Experience the solar system like never before with a real-time 3D simulation built using React and Three.js.',
    image: spaceviewImage,
    link: 'https://spaceviewfinal-ibep.vercel.app/',
  },
]

export default function ProjectCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      className="w-full max-w-6xl h-[800px] md:h-[850px] rounded-2xl overflow-hidden"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[800px] md:h-[850px]">
            {/* ✅ Image de fond */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
              style={{
                backgroundImage: `url('${project.image}')`,
              }}
            ></div>

            {/* ✅ Contenu centré avec marge latérale */}
            <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 z-20 w-full px-[40px] max-w-[calc(100%-80px)]">
              <div className="bg-black/60 backdrop-blur-md rounded-[24px] px-[48px] py-[40px] max-w-[1280px] mx-auto shadow-[0_12px_32px_rgba(0,0,0,0.6)] text-center">
                <h3 className="text-white text-[42px] md:text-[56px] font-extrabold mb-[20px] tracking-tight leading-[1.2] drop-shadow-[0_6px_12px_rgba(0,0,0,0.8)]">
                  {project.title}
                </h3>
                <p className="text-white/90 text-[18px] md:text-[22px] font-light mb-[30px] leading-[1.7] max-w-[900px] mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="view-project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
