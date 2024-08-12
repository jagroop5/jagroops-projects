import { render ,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/rescardMocks.json";
import "@testing-library/jest-dom";
it("it should render resstaurantcard  component with props data ",()=>{
    render (<RestaurantCard resData ={MOCK_DATA}/>);
 const name= screen.getByText("Zahra Restaurant & Cafe");
 expect(name).toBeInTheDocument();
})