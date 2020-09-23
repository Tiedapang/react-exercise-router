import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import MyProfile from './MyProfile';
import Products from './Products'


class App extends Component {
  render() {
    return (

        <BrowserRouter >
            <div className="app">
            <ul>
                <li>
                    <Link to={"/about-us"}>About Us</Link>
                </li>
                <li>
                    <Link to={"/my-profile"}>My Profile</Link>
                </li>
                <li>
                    <Link to={"/products"}>Products</Link>
                </li>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

            </ul>
                <Route exact path={'/'} component={Home}></Route>
                <Route  path={'/products'} component={Products}></Route>
                <Route  path={'/my-profile'} component={MyProfile}></Route>
                <Route  path={'/about-us'} component={AboutUs}></Route>
                <Route path={'/products/:id'} component={Products}></Route>
            </div>
        </BrowserRouter>


    );
  }
}

export default App;
