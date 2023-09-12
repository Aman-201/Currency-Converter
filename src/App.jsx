import { useCallback, useEffect, useState } from 'react'
import CurrencyBox from './Components/CurrencyBox'
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

import './App.css'
// const arrfunc=async function(currency_arr,setCurrency_arr) {fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_9TVN51XSRp7W5qMHiklAYXycAc3HdBCNwU15Zk1k&currencies=EUR%2CUSD%2CCAD')
// .then( (response) => response.json())
// .then((data) =>{console.log(data.data); Object.keys(data.data).forEach((key)=>{ currency_arr.push(key);   setCurrency_arr( currency_arr)}); console.log("----");console.log(currency_arr) });
// }
function App() {
  const [amount, setAmount] = useState(0)
  const [currency1,setCurrency1]=useState('')
  const [currency2,setCurrency2]=useState('') 
  let [currency_arr,setCurrency_arr]=useState([]);
// arrfunc(currency_arr,setCurrency_arr)
  // useCallback((currency_arr,setCurrency_arr)=>{
  //   setCurrency_arr(currency_arr);
  //     },[setCurrency_arr,currency_arr])
  // useEffect(()=>{
  //   async ()=>{const response =await fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_9TVN51XSRp7W5qMHiklAYXycAc3HdBCNwU15Zk1k&currencies=EUR%2CUSD%2CCAD')
  //   let data=await response.json()
  // console.log("-------------",data.data)
  //   // then((response) => response.json())
  //     Object.keys(data.data).forEach((key)=>{ console.log("0000000000000000000",currency_arr);  setCurrency_arr([...currency_arr,{key:key}]) })
  //    console.log("+++++++++++++++++++++",currency_arr)
    
  //   }
  // },[])
//   (async ()=>{const response =await fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_9TVN51XSRp7W5qMHiklAYXycAc3HdBCNwU15Zk1k&currencies=EUR%2CUSD%2CCAD')
//   let data=await response.json()
// console.log("-------------",data.data)
//   // then((response) => response.json())
//     Object.keys(data.data).forEach((key)=>{ console.log("0000000000000000000",currency_arr);  setCurrency_arr([...currency_arr,{key:key}]) })
//    console.log("+++++++++++++++++++++",currency_arr)
  
  // })();//
const freecurrencyapi = new Freecurrencyapi('fca_live_9TVN51XSRp7W5qMHiklAYXycAc3HdBCNwU15Zk1k');
freecurrencyapi.latest({
 
  
}).then(response => {
  // const data=object.keys(response)
  console.log(response)
  console.log(response.data)
  // console.log(Object.keys(data));
  Object.keys(response.data).forEach((key)=>{ currency_arr.push(key);   setCurrency_arr( currency_arr)}); console.log("----");console.log(currency_arr) });
// });
   return (
    <>
    <div className='backdrop-blur-3xl	mx-5 my-5 px-5 py-5 bg-white/30 flex flex-col static '>
      <CurrencyBox className="  "  amount={amount} setAmount={setAmount} amt_flag={true} currency_arr={currency_arr} currecny={currency1} setCurrency={setCurrency1}/>
      {/* <button className='z-1 top-24  bottom-22 right-1/2 left-auto absolute m-auto bg-blue-500 px-0 py-0'>swap</button> */}
      {/* <CurrencyBox  className=" "  amount={amount} setAmount={setAmount} amt_flag={true} currency_arr={currency_arr} which="to" /> */}
    </div>
    </>
  )
}

export default App
