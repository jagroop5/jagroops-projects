import React,{lazy,Suspense, useEffect, useState}from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantsMenu from "./components/RestaurantMenu";
import UserContext from "./components/UserContext";
import { Provider  } from "react-redux";
import Cart from "./components/Cart";
//import Grocery from "./Grocery";

import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import AppStore from "./components/AppStore";

const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
    const[userName,setUserName]=useState();
useEffect(()=>{
const data={
    name:"Jagroop singh"
}
setUserName(data.name);
},[])

    return(
        <Provider store={AppStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            <Header/>
        
           <Outlet/>
        </div> 
        </UserContext.Provider>
        </Provider>
    );
};
const appRouter=createBrowserRouter([
    
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantsMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
           
        ],
        errorElement:<Error/>,

    },
     
     
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);