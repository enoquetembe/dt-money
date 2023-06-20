import { Header } from '../components/Header'
import { PriceHighLight } from '../components/PriceHighlight'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'
import { TableData } from '../components/TableData'

export function Transactions() {
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
            <tr>
              <TableData width="50%">Website Development</TableData>
              <TableData>
                <PriceHighLight variant="income">$ 100,00</PriceHighLight>
              </TableData>
              <TableData>Sell</TableData>
            </tr>

            <tr>
              <TableData width="50%">Debt</TableData>
              <TableData>
                <PriceHighLight variant="outcome">-$ 50,00</PriceHighLight>
              </TableData>
              <TableData>Sold</TableData>
            </tr>

            <tr>
              <TableData width="50%">Website Development</TableData>
              <TableData>
                <PriceHighLight variant="income">$ 100,00</PriceHighLight>
              </TableData>
              <TableData>Sell</TableData>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
