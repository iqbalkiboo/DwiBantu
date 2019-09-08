import React from "react";
// import { render } from "react-dom"
// import { Router, Route, browserHistory, IndexRoute} from "react-router"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// import logo from './logo.svg';
import "./App.css";
import { Header, Homepage} from "./App/Components"
import Content from "./App/Components/View"

class App extends React.Component {
   render (){
       return (
         
         <div>
          
           <Header />
          
           <Content />
             <Homepage />
          
           <Footer />
          
         </div>



//         // <div className="App">
//         //   <header className="App-header">
//         //     <img src={logo} className="App-logo" alt="logo" />
//         //     <p>
//         //       Edit <code>src/App.js</code> and save to reload.
//         //     </p>
//         //     <a
//         //       className="App-link"
//         //       href="https://reactjs.org"
//         //       target="_blank"
//         //       rel="noopener noreferrer"
//         //     >
//         //       Learn React
         //     </a>
         //   </header>
         // </div>
       ); 
   }
 }

 export default App;


// export default () => (
//   <div>
//     <Header />
//   </div>
// )