import React from 'react'
import Dashboard from 'views/Dashboard.js';
import Login from 'views/Login';
import Category from "./views/category"
import Navbar from "./components/Navbar"
import SideBar from "./components/Sidebar"
import UserRoute from "./components/UserRoute"
import Foother from 'components/Foother';
import Product from 'views/Product';
import Register from "views/Register"
import { Provider } from "react-redux";
import store from "./redux/store/store"
import Form_Product from "./views/Form_Product"
import { BrowserRouter, Router, Switch, Redirect } from 'react-router-dom';
import { setAuthToken } from 'config/API';
const App = () => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
   
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="relative md:ml-64 bg-blueGray-100 bg-pink-500">
                <div className="bg-pink-500">
                    <Navbar/>
                    <SideBar/>
                </div>               
                <Switch>
                    <UserRoute path="/register" component={Register}/>
                    <UserRoute path="/product" component={Product}/>
                    <UserRoute path="/dashboard" component={Dashboard} />
                    <UserRoute path="/login" component={Login} />
                    <UserRoute path="/category" component={Category}/>
                    <UserRoute path="/add-product" component={Form_Product}/>
                </Switch>
                <div>
                    <div className="mt-10"/>
                    <Foother/>
                </div>
            </div>
        </BrowserRouter>
        </Provider>
    )
}

export default App
