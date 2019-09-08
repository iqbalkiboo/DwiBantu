import React, { Component } from "react"
import "../../Style/Reset.css"
import "../../Style/Header.css"
import "../../Style/cafaeble.main-1.0.css"
import "../../Style/cafaeble.index-1.0.css"
import logo from "../../Asset/img/logo.png"
import { Link } from "react-router-dom"
// import Homepage from "../View/Homepage"
// import Recomendation from "../View/Recomendation"

 //tinggal masukin Textfield https://material-ui.com/components/app-bar/ 

// class Header extends Component{
const Header = (props) => {
  //  render(){
     return(
       <div>
         <div className="header">
           <ul class="un-log">
             <li><a to="#"><img src={logo} alt="logo" /></a></li>
             <li><Link to={"/Homepage"} class="is-on"><i class="fa fa-home"></i> Homepage</Link></li>
             <li><Link to={"/Recomendation"}><i class="fa fa-star"></i> Recommendation</Link></li>
             {/* <li><a href="#"><i class="fa fa-compass"></i> Discover</a></li> */}
               <li>
                  <i class="fa fa-search"></i><input type="text" placeholder="Search cafe here..." />
                  <div class="for-auto">
                    <div class="search-empty" >No results found, please change the keywords.</div>
                  </div>  
               </li> 
             <li><a to="#">Register <i class="fa fa-plus-circle"></i></a></li>
             <li><a to="#">Sign In <i class="fa fa-sign-in"></i></a></li>
           </ul>
               <a to="#" class="nav-mobile"><i class="fa fa-navigation-menu"></i></a>
         </div>
       </div>
     );
};

export default Header;