export const RevenueCard1=({title,
    showWarning,
    orderCount,
amount})=>{
    return <div className="mt-3" ><div className="flex flex-col  bg-blue-700  rounded shadow-sm  hover:bg-blue-600 text-white ">
        <div className="flex  justify-center flex-col p-4">
            <div className="flex ">
                <div>{title}</div>  <div className=" ml-1 p-1 flex justify-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>

       
        <div className="flex justify-between ">
            <div className="font-semibold text-2xl">
                ₹ {amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium flex flex-col jsutify-center">
                <div className="flex">
                    <div className="text-white-700 ">
                        {orderCount} orders(s)
                    </div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" h-4 size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>

                </div>

            </div> : null}
            </div>


        </div>
        <div>
<Extraline/>
        </div>

    </div></div>
}

const Extraline=()=>{
 return   <div className="text-white text-sm bg-blue-900 flex justify-between py-2 px-6 rounded">
                <div>Next payout date:</div>
                <div>Today, 04:00 PM</div>
            </div>
}