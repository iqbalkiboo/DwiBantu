import React from "react"
import { NavLink, Switch, Route } from "react-router-dom"
import Homepage from "../Content/Homepage";
import Recomendation from "../Content/Recomendation";
import Profile from "../Content/Profile"

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/Recomendation">Recomendation</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
         <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/Recomendation" component={Recomendation} />
            <Route path="/Profile" component={Profile} />
        </Switch>
        </div>
    )
}

export default Navigation;