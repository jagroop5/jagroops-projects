import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory =({data,showItems,setShowIndex})=>{
 const handleClick=()=>{
    setShowIndex();  
 };

        return(
            <div>
<div className=" w-6/12  mx-auto  my-4  bg-gray-50 p-4 shadow-lg ">
<div className="flex justify-between cursor-pointer" onClick={handleClick}>
<span className="font-bold text-lg">{data.info.areaName} ( DeliveryTime:{data.info.sla
.    deliveryTime
} min)</span>
    <span >▼</span>
    </div>
   { showItems && <ItemList items={data}/>}
   
</div>
</div>
   )
}
export default RestaurantCategory;
//<ItemList items={data.info}/>

