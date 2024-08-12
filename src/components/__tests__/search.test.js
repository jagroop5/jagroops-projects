const { render ,screen, fireEvent} = require("@testing-library/react")
const { default: Body } = require("../Body");
const { json } = require("react-router-dom");
import { act } from "react";
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch=jest.fn(()=>{
return Promise.resolve({
    json:()=>{
        return  Promise.resolve(MOCK_DATA);
    }
})
});

it("should render the body component with search button", async()=>{
  await act (async()=>  render(
<BrowserRouter>
         <Body/></BrowserRouter>
    ));
     const searchBtn=screen.getByRole("button ",{name: "search "});
     const searchInput=screen.getByTestId("searchInput");
     fireEvent.change(searchInput,{target:{value:"kfc"}});
     fireEvent.click(searchBtn);
const cards=screen.getAllByTestId("resCard");
     expect(cards.length).toBe(1);});