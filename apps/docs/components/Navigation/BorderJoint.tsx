import { cn } from 'ui'

interface BorderJointProps {
  omitArm?: 'left' | 'right'
  className?: string
}

const OMIT_ARM_CLASS_NAMES = {
  left: '[clip-path:inset(0_0_0_7px)]',
  right: '[clip-path:inset(0_7px_0_0)]',
} as const

export const BorderJoint = ({ omitArm, className }: BorderJointProps) => (
  <span
    aria-hidden
    className={cn(
      'pointer-events-none absolute z-10 hidden size-3.75 items-center justify-center bg-background',
      omitArm ? OMIT_ARM_CLASS_NAMES[omitArm] : null,
      className
    )}
  >
    <svg width="7" height="7" viewBox="0 0 7 7" className="text-border">
      <path d="M0 3.5H7M3.5 0V7" stroke="currentColor" />
    </svg>
  </span>
)
