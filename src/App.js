import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import LogIn from './components/Login/Login';
import Header from './components/Header/Header';
import React, { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
import AddProduct from './components/Dashboard/AddProduct';
import ManageProduct from './components/Dashboard/ManageProduct';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser,'app.js')
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <PrivateRoute  path="/Admin">
          <Header></Header>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/Orders">
          <Header></Header>
            <Orders />
           
          </PrivateRoute>
          <Route path="/LogIn">
          <Header></Header>
            <LogIn />
          </Route>
          
          <Route path="/addProduct">
              <Header></Header>
            <AddProduct></AddProduct>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <PrivateRoute path="/CheckOut/:id">
          <Header></Header>
            <CheckOut></CheckOut>

          </PrivateRoute>
           
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
