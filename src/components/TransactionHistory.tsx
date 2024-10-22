import React from "react";
import { orderData } from "./TableData";
import { Tableinitial } from "./tableinitials";

export const  TransferHistory=()=>{
return <div className="bg-white mt-5">
<Tableinitial/>

    <table className="table-auto w-full text-left ">
        <thead className=" text-sm font-thin ">
            <tr >
            <th  className=" text-sm font-medium px-6 py-3">ORDER ID</th>
            <th className=" text-sm font-medium px-6 py-3">STATUS</th>
            <th className=" text-sm font-medium px-6 py-3">TRANSACTION ID</th>
            <th className=" text-sm font-medium px-6 py-3">REFUND DATE</th>
            <th className=" text-sm font-medium px-6 py-3 text-right" >ORDER AMOUNT</th>
            </tr>
          
        </thead>
        {orderData.map((order)=>{
            return (
                <tbody className="text-sm">
              <tr  >
                <th className="px-6 py-4 text-blue-500 font-medium ">
                    #{order.id}
                </th>
                <td scope="row" className="px-6 py-4  flex items-center  gap-2">
                    {(order.status==="Successful") && <div className="bg-green-500 w-2.5 h-2.5 rounded-full"></div>}
                    {(order.status==="Processing") && <div className="bg-gray-500 w-2.5 h-2.5 rounded-full"></div>}
                    {(order.status==="Failed") && <div className="bg-red-500 w-2.5 h-2.5 rounded-full"></div>}
                    {order.status}
                </td>
                <td  className="px-6 py-4 text-left">{order.transactionID}</td>
                <td className="px-6 py-4 text-left">{order.refundDate}</td>
                <td className="px-6 py-4 text-right">{order.amount}</td>
              </tr>
              <tr className="border px-6 py-4"></tr>
            </tbody>
            )
        })}

    
    </table>
    
</div>
}