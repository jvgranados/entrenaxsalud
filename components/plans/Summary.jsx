import { useState } from 'react'

function Summary() {
  const [selected, setSelected] = useState('month')

  const handleClick = ({ target }) => setSelected(target.value)

  return (
    <div className="container mx-auto text-center">
      <h1 className="py-5 text-2xl font-semi text-cobaltBlueDark">PLANES DE PRECIOS</h1>
      <button
        value="month"
        type="button"
        onClick={handleClick}
        className={`mb-4 rounded-l-full price-button mobileS:rounded-r-full mobileM:rounded-r-none sm:mb-0${
          (selected === 'month' && ' selected') || ''
        }`}
      >
        PAGO MENSUAL
      </button>
      <button
        value="year"
        type="button"
        onClick={handleClick}
        className={`mb-4 rounded-r-full price-button mobileS:rounded-l-full mobileM:rounded-l-none sm:mb-0${
          (selected === 'year' && ' selected') || ''
        }`}
      >
        PAGO ANUAL
      </button>
    </div>
  )
}

export default Summary