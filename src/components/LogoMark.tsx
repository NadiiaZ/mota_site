interface LogoMarkProps {
  className?: string
}

/**
 * The two-arrow "motion" mark from the MOTA identity sheet: one red chevron
 * and one ink/cream chevron interlocking to suggest forward motion and
 * transformation between formats.
 */
export default function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10 L22 20 L6 30"
        stroke="#FF4D3D"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 18 L26 28 L42 38"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
