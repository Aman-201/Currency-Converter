function CurrencyBox({amount=0,setAmount,currency_arr,amt_flag=false,which="from",currency="",setCurrency})
{
    console.log("===================")
    console.log(currency_arr)

    return (
       <div className="bg-white flex my-3">
        <div className="px-4 ">
            <p className=" my-0">{which}</p>
            <p className=" py-2"></p>
            <p className="">{amount}</p>
        </div>
        {(amt_flag==true)? <div className="px-4 my-auto">
            <button onClick={()=>{setAmount(amount+1)}}>+</button>
            <button onClick={()=>{if(amount>0)setAmount(amount-1)}}>-</button>
        </div>:<div className=" mx-auto my-auto"></div>}
        {/* {(amt_flag==true)
        {
            <div className="px-4 my-auto">
            <button onClick={()=>{setAmount(amount+1)}}>+</button>
            <button onClick={()=>{setAmount(amount+1)}}>-</button>
        </div>

        }} */}
      
        <div className="px-4 ">
            <p >Currency Type</p>
            <p className=" py-2"></p>
            {/* <label htmlFor="country">{currency}</label> */}
            <label htmlFor="country" className="mx-auto w-20">{currency}</label>

{/* <select name="country" id="country" onChange={()=>{ currency_arr.map((val,idx)=>{
        // console.log("\\\\\\\\\\\\\\\\\\",val);
        
        <option value={val}>{val}</option>})}}> */}

<select name="country" id="country" onChange={(e)=>{console.log(e.target.value); setCurrency(e.target.value)}}>
  
    {console.log(",,,,,,,,,,,,",currency_arr)}
{ currency_arr.map((val)=>(
        // console.log("\\\\\\\\\\\\\\\\\\",val)
        
        <option value={val}>{val}</option>))}

    {/* {currency_arr.forEach((val,idx)=>{
        console.log("\\\\\\\\\\\\\\\\\\",val.key);
        <option value={val}>yuiyi</option>
    })} */}
</select>
            {/* <input type="dropdown" id="country" value={currency} className="mx-auto w-20"/> */}
        </div>
       </div>
    )
}
export default CurrencyBox