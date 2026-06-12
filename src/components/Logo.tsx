import { Link } from "react-router-dom"
import logoSrc from "../assets/logo.png"

const sizes = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
  xl: "h-14 w-14",
} as const

type LogoProps = {
  size?: keyof typeof sizes
  className?: string
  showText?: boolean
  textClassName?: string
}

export function Logo({
  size = "md",
  className = "",
  showText = false,
  textClassName = "text-[18px] font-extrabold tracking-tight",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logoSrc}
        alt="Infill"
        className={`${sizes[size]} object-contain shrink-0`}
      />
      {showText && (
        <span className={`text-primary ${textClassName}`}>Infill</span>
      )}
    </span>
  )
}

type BrandLinkProps = {
  to?: string
  size?: keyof typeof sizes
  showText?: boolean
  className?: string
}

export function BrandLink({
  to = "/",
  size = "md",
  showText = true,
  className = "",
}: BrandLinkProps) {
  return (
    <Link
      to={to}
      className={`hover:opacity-80 transition-opacity ${className}`}
    >
      <Logo
        size={size}
        showText={showText}
        textClassName="font-headline-lg-mobile text-headline-lg-mobile font-extrabold tracking-tighter"
      />
    </Link>
  )
}
