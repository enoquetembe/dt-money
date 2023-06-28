import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { fetchTransactions } = useContext(TransactionsContext)

  function handleSearchTransactions(data: SearchInputs) {
    fetchTransactions(data.query)
  }

  return (
    <form
      className="flex gap-4"
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        {...register('query')}
        type="text"
        placeholder="Search"
        className="flex-1 rounded-md bg-gray-900 
        text-gray-300 p-4 placeholder:text-gray-500"
      />

      <button
        disabled={isSubmitting}
        className="flex items-center gap-3 p-4 border border-green-300 rounded-md
        hover:bg-green-500 hover:border-green-500 text-white transition-colors
        duration-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  )
}
