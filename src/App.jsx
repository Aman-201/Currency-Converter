import { useState } from 'react'
import CurrencyBox from './Components/CurrencyBox'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [currency1,setCurrency1]=useState('')
  const [currency2,setCurrency2]=useState('') 
  return (
    <>
    <div className='backdrop-blur-3xl	mx-5 my-5 px-5 py-5 bg-white/30 flex flex-col static '>
      <CurrencyBox className="  "  amount={amount} setAmount={setAmount} amt_flag={true} />
      <button className='z-1 top-24  bottom-22 right-1/2 left-auto absolute m-auto bg-blue-500 px-0 py-0'>swap</button>
      <CurrencyBox  className=" " which="to" />
    </div>
    </>
  )
}

export default App
