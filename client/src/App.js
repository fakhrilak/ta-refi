import React from 'react'
import Dashboard from 'views/Dashboard.js';
import Login from 'views/Login';
import Category from "./views/category"
import Navbar from "./components/Navbar"
import SideBar from "./components/Sidebar"
import Foother from 'components/Foother';
import Product from 'views/Product';
import Register from "views/Register"
import { Provider } from "react-redux";
import store from "./redux/store/store"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
const App = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="relative md:ml-64 bg-blueGray-100 ">
                <Navbar/>
                <SideBar/>
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/category" component={Category}/>
                    <Foother/>
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </div>
        </BrowserRouter>
        </Provider>
    )
}

export default App
