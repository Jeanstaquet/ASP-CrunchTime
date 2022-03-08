import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AccountCreation from './containers/AccountCreation'
import Explore from './containers/Explore'
import Favorite from './containers/Favorite'
import Recipe from './containers/Recipe'
import Searches from './containers/Searches'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="app">
            <div className="phone">
                <Router>
                    <Switch>
                        <Route path="/Explore" exact component={Explore} />

                        <Route path="/Favorite" exact component={Favorite} />
                        <Route path="/Recipe" exact component={Recipe} />
                        <Route path="/Searches" exact component={Searches} />
                        <Route path="/" exact component={AccountCreation} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App
