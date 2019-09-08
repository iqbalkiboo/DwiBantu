// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, BrowserRouter, browserHistory, IndexRoute } from "react-router"

// import { index } from "./App/Components/index"
// import { Homepage } from "./App/Components/View/Homepage"
// import { Recomendation } from "./App/Components/View/Recomendation"
// import './index.css';
// import App from './App';
// // import { BrowserRouter, Route } from "react-router-dom"
// import * as serviceWorker from './serviceWorker';
// import "./App/Style/Reset.css"
// import '../node_modules/font-awesome/css/font-awesome.min.css';

// class extends React.Component {
//     render() {
//         return (
//             <Router history={browserHistory}>
//                 <Route path={"/"} component={index} >
//                     <IndexRoute component={Homepage}/>
//                     <Route path={"Recomendation"} component={Recomendation} />
//                     <Route path={"Homepage"} component={Homepage} />
//                 </Route>
//                 <Route path={"Homepage-single"} component={Homepage}/>
//             </Router>
//         );
//     }
// }
// export default App

// ReactDOM.render(
//      (<BrowserRouter>
//      <App />
//      </BrowserRouter>),
//      document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router"
// import { IndexRoute } from "react-router-dom"

import { index } from "./App/Components/index"
import Homepage from "./App/Components/View/Homepage"
import Recomendation from "./App/Components/View/Recomendation"

class App extends React.Component {
     render() {
         return (
             <Router history={browserHistory}>
                 <Route path={"/"} component={index} >
                     <IndexRoute component={Homepage}/>
                     <Route path={"Recomendation"} component={Recomendation} />
                     <Route path={"Homepage"} component={Homepage} />
                 </Route>
                 <Route path={"Homepage-single"} component={Homepage}/>
             </Router>
         );
     }
}

render(<App />, window.document.getElementById("Root"));