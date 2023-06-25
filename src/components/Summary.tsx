import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <section>
      <div
        className="max-w-[1120px] w-full grid grid-cols-3 mx-auto my-0 px-6
        gap-8 -mt-20"
      >
        <div className="bg-gray-600 rounded-md p-8">
          <header className="flex items-center justify-between  text-gray-300">
            <span>Incomes</span>
            <ArrowCircleUp size={32} className="text-green-300" />
          </header>

          <strong className="block mt-4 text-4xl">$ 17.200,00</strong>
        </div>

        <div className="bg-gray-600 rounded-md p-8">
          <header className="flex items-center justify-between  text-gray-300">
            <span>Outcomes</span>
            <ArrowCircleDown size={32} className="text-red-300" />
          </header>

          <strong className="block mt-4 text-4xl">$ 17.200,00</strong>
        </div>

        <div className="bg-green-700 rounded-md p-8">
          <header className="flex items-center justify-between  text-gray-300">
            <span>Total</span>
            <CurrencyDollar size={32} className="text-white" />
          </header>

          <strong className="block mt-4 text-4xl">$ 17.200,00</strong>
        </div>
      </div>
    </section>
  )
}
