// import Header from "./Part/Header";
// // import Main from "./View/Main"
// import Homepage from "./View/Homepage"
// import Footer from "./Part/Footer";

// export {
//     Header, Homepage, Footer
// }


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