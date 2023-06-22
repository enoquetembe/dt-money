import * as RadioGroup from '@radix-ui/react-radio-group'

interface TransactionTypeButtonProps {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
  variant: 'income' | 'outcome'
  value: string
}

export function TransactionTypeButton({
  children,
  variant,
  value,
}: TransactionTypeButtonProps) {
  return (
    <RadioGroup.Item
      value={value}
      className={`bg-gray-700 flex items-center justify-center gap-2 p-4 
      rounded-md text-gray-300 data-[state="checked"]:text-white
      data-[state="checked"]:${
        variant === 'income' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {children}
    </RadioGroup.Item>
  )
}
