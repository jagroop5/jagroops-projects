//header
import { LOGO_URL } from "./utils/constant";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
const Header=()=>{

    const[btnNameReact, setbtnNameReact]=useState("login");
    const OnlineStatus=useOnlineStatus();
    const{loggedInUser}=useContext(UserContext); 
    console.log(loggedInUser);
    //subscribing to the store using a selector
    const cartItems=useSelector((store)=>store.cart.items);
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg m-2" >
<div className=" ">
    <img className="w-[150px]"  src=
{LOGO_URL}/>
</div>
<div className=" flex items-center" >
    <ul className="flex p-4 m-4">
    <li className="px-4">Online status:{OnlineStatus? "on" : "off" }</li>
    <li className="px-4">
    <Link  to="/"> 
     home
     </Link></li>
      
        <li className="px-4">
        <Link to="/about">
            About us
        </Link>
        </li>
        <li className="px-4"> <Link to="/contact">  contact us</Link>
      </li>
      <li className="px-4"> <Link to="/grocery">Grocery</Link>
      </li>
        <li className="px-4"><Link to="/cart"> 🛒-({cartItems.length}items)</Link>
       </li>
        <button className="login px-4" onClick={()=>{
           btnNameReact=="login" ? setbtnNameReact("logout") : setbtnNameReact("login"); 
        }}>{btnNameReact}</button>

<li className="px-4 font-bold">{loggedInUser}</li>
    </ul>
</div>
        </div>
    );
};
export default Header;