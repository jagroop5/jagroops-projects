import useRestaurantMenu from "./utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantsMenu=()=>{
   
    const{resId}=useParams();
const resInfo=useRestaurantMenu(resId);
const[showIndex,setShowIndex]=useState(null);


if (resInfo==null)  return <Shimmer/>;  

const{name,cuisines}=resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

const{restaurants}=resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle; 

console.log(resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
const categories=resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter((c)=>c.
analytics.context=="seo-data-decdfbde-90be-4c84-b5de-5175eef68c52"
); 
console.log(categories);

return ( 
        
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}


            </h1>
          <p  className="font-bold text-lg " >{cuisines.join(",")}</p>

          {categories.map((category,index)=>(
            //controlled component
            <RestaurantCategory key={category?.info} data={category}
            showItems={index==showIndex ?  true:false}
            setShowIndex={()=>setShowIndex(index    )}
          />))}
        </div>

    );
};
export default RestaurantsMenu;