import React, {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from "./Home";
class AboutUs extends Component {
    render(){
        return(

                <div>
                    <p>Company: ThoughtWorks Local.</p>
                    <p>Location: Xi'an</p>
                    <p>For more information,please</p>
                    <p>view our <Link to={"/"}>website</Link></p>
                </div>


        );
    }

}
export default AboutUs;
