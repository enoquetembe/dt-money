import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-gray-900 pt-10 pr-3 pb-32 ">
      <div
        className="max-w-[1120px] w-full flex justify-between items-center 
        mx-auto my-0 px-6"
      >
        <img src={Logo} alt="" />
        <button
          type="button"
          className="h-50px bg-green-500 font-bold py-3 px-5  rounded-md
          hover:bg-green-700 transition-colors duration-500"
        >
          New transaction
        </button>
      </div>
    </header>
  )
}
