/* eslint-disable no-undef */
interface TableDataProps {
  width?: string
  children: React.ReactNode
}

export function TableData({ width, children }: TableDataProps) {
  return (
    <td
      className="bg-gray-700 py-5 px-8 first:rounded-l-md last:rounded-r-md"
      width={width}
    >
      {children}
    </td>
  )
}
