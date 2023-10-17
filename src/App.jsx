import { useCallback, useEffect, useState } from 'react'
import CurrencyBox from './Components/CurrencyBox'
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

import './App.css'
// const arrfunc=async function(currency_arr,setCurrency_arr) {fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_9TVN51XSRp7W5qMHiklAYXycAc3HdBCNwU15Zk1k&currencies=EUR%2CUSD%2CCAD')
// .then( (response) => response.json())
// .then((data) =>{console.log(data.data); Object.keys(data.data).forEach((key)=>{ currency_arr.push(key);   setCurrency_arr( currency_arr)}); console.log("----");console.log(currency_arr) });
// }
function App() {
  const [amount1, setAmount1] = useState(0)
  const [amount2, setAmount2] = useState(0)
  const [currency1,setCurrency1]=useState('')
  const [currency2,setCurrency2]=useState('') 
  let [currency_arr,setCurrency_arr]=useState([]);
  let [curr_conversion,setCurr_conversion]=useState({});
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
  useEffect(()=>{
    const freecurrencyapi = new Freecurrencyapi('fca_live_9TVN51XSRp7W5qMHiklAYXycAc3HdBCNwU15Zk1k');
freecurrencyapi.latest({
 
  
}).then(response => {
  // const data=object.keys(response)
  console.log(response)
  console.log(response.data)
  // console.log(Object.keys(data));
  setCurr_conversion(response.data)
  console.log(curr_conversion)

  Object.keys(response.data).forEach((key)=>{  setCurrency_arr( current => [...current, key]);  }); console.log("----");console.log(curr_conversion) });

  },[])
  
// const freecurrencyapi = new Freecurrencyapi('fca_live_9TVN51XSRp7W5qMHiklAYXycAc3HdBCNwU15Zk1k');
// freecurrencyapi.latest({
 
  
// }).then(response => {
//   // const data=object.keys(response)
//   console.log(response)
//   console.log(response.data)
//   // console.log(Object.keys(data));
//   Object.keys(response.data).forEach((key)=>{ currency_arr.push(key);   setCurrency_arr( currency_arr)}); console.log("----");console.log(currency_arr) });
// });
   return (
    <>
    <div className='backdrop-blur-3xl	mx-5 my-5 px-5 py-5 bg-white/30 flex flex-col static '>
      <CurrencyBox className="  "  amount={amount1} setAmount={setAmount1} amt_flag={true} currency_arr={currency_arr} currency={currency1} setCurrency={setCurrency1} curr_conversion={curr_conversion} which='from' amt1={0} curr1={currency1}/>
      <button className='z-1 top-24  bottom-22 right-1/2 left-auto absolute m-auto bg-blue-500 px-0 py-0'>swap</button>
      <CurrencyBox  className=" "  amount={amount2} setAmount={setAmount2} amt_flag={true} currency_arr={currency_arr} currency={currency2} setCurrency={setCurrency2} curr_conversion={curr_conversion} which="to" amt1={amount1} curr1={currency1} />
    </div>
    </>
  )
}

export default App
