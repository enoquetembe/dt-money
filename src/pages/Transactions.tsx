import { useContext } from 'react'
import { Header } from '../components/Header'
import { PriceHighLight } from '../components/PriceHighlight'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'
import { TableData } from '../components/TableData'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <section className="max-w-[1120px] w-full mx-auto my-16 px-6">
        <SearchForm />
        <table
          className="w-full mt-6  border-separate border-spacing-x-0 
          border-spacing-y-2"
        >
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <TableData width="50%">{transaction.description}</TableData>
                  <TableData>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </TableData>
                  <TableData>{transaction.category}</TableData>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
