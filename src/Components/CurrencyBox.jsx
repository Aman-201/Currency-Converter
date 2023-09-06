function CurrencyBox({amount=0,currency="America"})
{
    return (
       <div className="bg-white flex my-3">
        <div className="px-4 ">
            <p className=" my-0">From</p>
            <p className=" py-2"></p>
            <p className="">{amount}</p>
        </div>
        <div className="px-4 my-auto">
            <button>+</button>
            <button>-</button>
        </div>
        <div className="px-4 ">
            <p>Currency Type</p>
            <p className=" py-2"></p>
            <p>{currency}</p>
        </div>
       </div>
    )
}
export default CurrencyBox