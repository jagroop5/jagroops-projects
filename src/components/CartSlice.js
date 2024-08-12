const { createSlice } = require("@reduxjs/toolkit");

const CartSlice=createSlice({
    name:'cart',
    initialState:{
items:[]
    },
    reducers:{

        addItem:(state,action)=>{
            //vanialla redux we cant mutate states returning is mandatory  but in redux toolkit  we have to mutate the states and returning is not mandatory 
state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            {/**rtk-either mutate the new state or return a new state with empty for eg:- return {items:[]} */}
state.items.length=0;
        },
    },
});
export const{addItem,removeItem,clearCart}=CartSlice.actions;
export default CartSlice.reducer;