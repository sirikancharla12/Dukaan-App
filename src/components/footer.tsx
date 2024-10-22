import React from "react";

export const Footer=()=>{
    return (
        <div className="flex justify-center items-center flex-col bg-slate-100 text-black-300 mb-6 gap-2">
    <div>
        ----- Made By
        <a className="pl-1 text-blue-700 font-medium" href="https://twitter.com/ShivamKrandom">Siri Kancharla</a>, 
        inspired by
        <a className="px-1 text-blue-700 font-medium" href="https://twitter.com/subhashchy/status/1744308069751025894?t=MrLV-PSnfsgv0Hg2jTz5JA&amp;s=08">Dukaan App UI</a>
        -----
    </div>
    <div className="text-black-300 underline">
        <a href="">Get the source code</a>
    </div>
</div>

    )
}