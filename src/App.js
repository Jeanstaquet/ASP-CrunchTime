import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AccountCreation from './containers/AccountCreation'
import Explore from './containers/Explore'
import Favorite from './containers/Favorite'
import RecipeDescription from './containers/RecipeDescription/RecipeDescription'
import Searches from './containers/Searches'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/Explore" exact component={Explore} />
                <Route path="/Favorite" exact component={Favorite} />
                <Route
                    path="/RecipeDescription"
                    exact
                    component={RecipeDescription}
                />
                <Route path="/Searches" exact component={Searches} />
                <Route path="/" exact component={AccountCreation} />
            </Switch>
        </Router>
    )
}

export default App
