/* eslint-disable no-undef */
interface PriceHighLightProps {
  variant: 'income' | 'outcome'
  children: React.ReactNode
}

export function PriceHighLight({ variant, children }: PriceHighLightProps) {
  return (
    <span
      className={`${
        variant === 'income' ? 'text-green-300   ' : 'text-red-300'
      }`}
    >
      {children}
    </span>
  )
}
