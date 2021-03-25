import React from 'react'
import Users from "./user/pages/Users";
import MainNavigation from "./UIElements/components/MainNavigation";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import UserPlaces from "./place/pages/UserPlaces";


const App = () => {
    return (
        <React.Fragment>
            <Router>
                <MainNavigation/>
                <Switch>
                    <Route path='/' exact>
                        <Users/>
                    </Route>
                    <Route path='/:uId/places' exact>
                        <UserPlaces/>
                    </Route>
                    <Redirect to='/'/>
                </Switch>

            </Router>

        </React.Fragment>

    );
}

export default App;
