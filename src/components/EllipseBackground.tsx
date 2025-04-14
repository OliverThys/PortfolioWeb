export default function EllipseBackground() {
    return (
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="ellipseGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff20" />
            <stop offset="100%" stopColor="#ffffff05" />
          </radialGradient>
  
          {/* Tracés des ellipses */}
          <path id="ellipse1" d="M 500 300 a 300 200 0 1 1 -0.1 0" fill="none" />
          <path id="ellipse2" d="M 500 250 a 350 250 0 1 1 -0.1 0" fill="none" />
          <path id="ellipse3" d="M 500 200 a 400 300 0 1 1 -0.1 0" fill="none" />
        </defs>
  
        {/* Groupe global scale + centrage */}
        <g transform="scale(1.35) translate(-130 -130)">
          {/* Ellipses visibles */}
          <use href="#ellipse1" stroke="url(#ellipseGradient)" strokeWidth="1" />
          <use href="#ellipse2" stroke="url(#ellipseGradient)" strokeWidth="1" />
          <use href="#ellipse3" stroke="url(#ellipseGradient)" strokeWidth="1" />
  
          {/* Boule ellipse 1 - plus rapide */}
          <circle r="4" fill="white">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#ellipse1" />
            </animateMotion>
          </circle>
  
          {/* Boule ellipse 2 - plus rapide */}
          <circle r="4" fill="white" opacity="0.7">
            <animateMotion dur="11s" repeatCount="indefinite" rotate="-auto">
              <mpath href="#ellipse2" />
            </animateMotion>
          </circle>
  
          {/* Boule ellipse 3 - plus rapide */}
          <circle r="4" fill="white" opacity="0.4">
            <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
              <mpath href="#ellipse3" />
            </animateMotion>
          </circle>
        </g>
      </svg>
    )
  }
  