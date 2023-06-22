import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { TransactionTypeButton } from './TransactionTypeButton'

export function TransactionType() {
  return (
    <RadioGroup.Root className="grid grid-cols-2 gap-4 mt-2">
      <TransactionTypeButton variant="income" value="income">
        <ArrowCircleUp size={24} className="text-green-300" />
        Income
      </TransactionTypeButton>

      <TransactionTypeButton variant="outcome" value="outcome">
        <ArrowCircleDown size={24} className="text-red-300" />
        Outcome
      </TransactionTypeButton>
    </RadioGroup.Root>
  )
}
