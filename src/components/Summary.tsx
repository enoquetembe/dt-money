import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../utils/formatter'
import { useSummary } from '../hooks/useSummary'

export function Summary() {
  const summary = useSummary()
  return (
    <section>
      <div className="max-w-[1120px] w-full mx-auto my-0 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 -mt-20">
          <div className="bg-gray-600 rounded-md p-8">
            <header className="flex items-center justify-between text-gray-300">
              <span>Incomes</span>
              <ArrowCircleUp size={32} className="text-green-300" />
            </header>

            <strong className="block mt-4 text-4xl">
              {priceFormatter.format(summary.income)}
            </strong>
          </div>

          <div className="bg-gray-600 rounded-md p-8">
            <header className="flex items-center justify-between text-gray-300">
              <span>Outcomes</span>
              <ArrowCircleDown size={32} className="text-red-300" />
            </header>

            <strong className="block mt-4 text-4xl">
              {priceFormatter.format(summary.outcome)}
            </strong>
          </div>

          <div className="bg-green-700 rounded-md p-8">
            <header className="flex items-center justify-between text-gray-300">
              <span>Total</span>
              <CurrencyDollar size={32} className="text-white" />
            </header>

            <strong className="block mt-4 text-4xl">
              {priceFormatter.format(summary.total)}
            </strong>
          </div>
        </div>
      </div>
    </section>
  )
}
