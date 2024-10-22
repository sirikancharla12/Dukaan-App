import React from "react";

export const SidebarComponents=({icon,iconName})=>{
return (<div className="flex gap-3 w-full h items-center px-3 py-3 rounded-lg hover:bg-sky-900  ">
    <div className="font-medium">{icon}</div>
    <div className="text-white font-medium">{iconName}</div>
</div>

)
}