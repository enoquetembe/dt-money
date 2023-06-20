import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 rounded-md bg-gray-900 
      text-gray-300 p-4 placeholder:text-gray-500"
      />

      <button
        className="flex items-center gap-3 p-4 border border-green-300 rounded-md
        hover:bg-green-500 hover:border-green-500 text-white transition-colors
        duration-200
        "
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  )
}
