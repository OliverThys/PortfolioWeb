type ButtonProps = {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold text-[22px] rounded-full px-12 py-6 transition-all duration-300 cursor-pointer outline-none'

  const variants = {
    primary: 'bg-[#007aff] text-white hover:bg-[#007aff]/90 shadow-lg border-none',
    secondary: 'bg-transparent border border-[#007aff] text-[#007aff] hover:bg-[#007aff]/10',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  )
}
