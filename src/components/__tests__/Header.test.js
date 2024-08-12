import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AppStore from "../AppStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
test("i",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole("button");
    expect  (loginButton).toBeInTheDocument();
});
test("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole("button",{name:"login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name: "logout"});
    expect  (logoutButton).toBeInTheDocument();
});