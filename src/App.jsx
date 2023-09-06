import { useState } from 'react'
import CurrencyBox from './Components/CurrencyBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='backdrop-blur-3xl	mx-5 my-5 px-5 py-5 bg-white/30 flex flex-col static '>
      <CurrencyBox className="  " />
      <button className='z-1 top-24  bottom-22 right-1/2 left-auto absolute m-auto bg-blue-500 px-0 py-0'>swap</button>
      <CurrencyBox  className=" " />
    </div>
    </>
  )
}

export default App
