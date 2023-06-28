import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { TransactionTypeButton } from './TransactionTypeButton'
import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

const createNewTransactionSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof createNewTransactionSchema>

export function NewTransactionModal() {
  const { createNewTransaction } = useContext(TransactionsContext)

  const { control, register, handleSubmit, reset } =
    useForm<NewTransactionFormInputs>({
      resolver: zodResolver(createNewTransactionSchema),
    })

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, type, category, price } = data

    createNewTransaction({
      description,
      type,
      category,
      price,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className="fixed inset-0 w-screen h-screen 
      bg-[#00000075]"
      />
      <Dialog.Content
        className="bg-gray-800 min-w-[32rem] fixed top-1/2 
        left-1/2 translation rounded-md py-10 px-12"
      >
        <Dialog.Title className="font-bold text-base">
          New transaction
        </Dialog.Title>
        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <input
            className="bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 
            rounded-md"
            type="text"
            placeholder="Description"
            {...register('description')}
            required
          />
          <input
            className="bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 
            rounded-md"
            type="text"
            placeholder="Price"
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            className="bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 
            rounded-md"
            type="text"
            placeholder="Category"
            {...register('category')}
            required
          />

          <Controller
            name="type"
            control={control}
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-2 gap-4 mt-2"
                >
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
            }}
          />

          <button
            className="h-14 bg-green-500 font-bold text-white rounded-md 
            px-5 hover:bg-green-700 transition-colors duration-300"
            type="submit"
          >
            Save
          </button>
        </form>
        <Dialog.Close>
          <X
            size={24}
            className="absolute border-none top-6 right-6 leading-[0] text-gray-500"
          />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
