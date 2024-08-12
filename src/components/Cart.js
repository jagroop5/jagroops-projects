import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";

const Cart=()=>{
    const dispatch=useDispatch();
    const handleClearCart=()=> {
dispatch(clearCart());
    };
    const cartItems=useSelector((store)=>store.cart.items); {/**do not update the whole store when something changes because we are subscribed to the small portion of the store*/}
    return(
<div className=" text-center m-10 p-10"><h1 className=" text-2xl font-bold">cart</h1>
<div  className="w-6/12  m-auto ">
<button className=" p-2 m-2 text-white rounded-lg bg-black  "
onClick={
    handleClearCart
}>clear cart</button>
{cartItems.length==0 && <h1>Cart is empty.Add more items to the cart</h1>}
    <ItemList   items={cartItems}/> {/* 1:41*/ }
</div>
</div>

    );
};
export default Cart;