import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constant";
import { addItem } from "./CartSlice";

const ItemList=({items})=>{
    // console.log(items)
    const dispatch=useDispatch();
    const handleAddItem=(items)=>{
        //dispatch and Action
        dispatch(addItem(items));   
    }
    return (
        <div>
        <div className="border-gray-200 p-2 m-2  border-b-2 text-left flex" >
        <img src={CDN_URL+items.info.cloudinaryImageId} className="m-4 p-4 w-[250px] rounded-lg bg-gray-600 hover:bg-gray-200"></img>
      <div className="absolute">  <button className="p-2 bg-black text-white mx-16 rounded-lg  shadow-lg  " 
      onClick={ ()=>handleAddItem(items)}>Add+</button></div>
        <div>
        <div className=" py-2">
         <span className="text-lg font-bold text-gray-700">{items.info.name}:</span>
         
         <span className="text-left "> Discount::{items.info.aggregatedDiscountInfoV3.subHeader
}</span>
         <p> Closes By:{items.info.availability.nextCloseTime}</p>
         </div>
        </div>
        </div>
        </div>
    )}

export default ItemList;
{/*  {items.map((item)=>(
                <div key={item.info.id}>
                    <div>
                     <span> {item.info.name}</span> 
                    
                    <span>{item.info.price}</span>
                    </div>
                    <p>{item.info.description}</p>
                </div>
            ))} */}
             {/*
   
        <div className="border-gray-200 p-2 m-2  border-b-2 text-left flex" >
        <img src={CDN_URL+items.info.cloudinaryImageId} className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-200"></img>
      <div className="absolute">  <button className="p-2 bg-black text-white mx-16 rounded-lg  shadow-lg  " 
      onClick={ ()=>handleAddItem(items)}>Add+</button></div>
        <div>
        <div className=" py-2">
         <span className="text-lg font-bold text-gray-200">{items.info.name}:</span>
         
         <span className="text-left "> Discount::{items.info.aggregatedDiscountInfoV3.subHeader
}</span>
         <p> Closes By:{items.info.availability.nextCloseTime}</p>
         </div>
        </div>
        </div>

             */}