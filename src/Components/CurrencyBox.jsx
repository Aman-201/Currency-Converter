function CurrencyBox({amount=0,setAmount,currency="America",amt_flag=false,which="from"})
{
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
            <input type="dropdown" id="country" value={currency} className="mx-auto w-20"/>
        </div>
       </div>
    )
}
export default CurrencyBox