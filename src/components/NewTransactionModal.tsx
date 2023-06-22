import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { TransactionType } from './TransactionType'

export function NewTransactionModal() {
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
        <form className="mt-8 flex flex-col gap-4">
          <input
            className="bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 
            rounded-md"
            type="text"
            placeholder="Description"
            required
          />
          <input
            className="bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 
            rounded-md"
            type="text"
            placeholder="Price"
            required
          />
          <input
            className="bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 
            rounded-md"
            type="text"
            placeholder="Category"
            required
          />

          <TransactionType />

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
