// The scrollbar we use in this app comes from  https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/customization.md 
// we found it as a result of this tutorial video: https://www.youtube.com/watch?v=7GO4P0ewVfI
import './App.css'
import React, { useMemo, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AccountCreation from './containers/AccountCreation'
import Explore from './containers/Explore'
import Favorite from './containers/Favorite'
import Recipe from './containers/Recipe'
import { UserCtx } from './containers/Context/user'
import Searches from './containers/Searches'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Scrollbars } from 'react-custom-scrollbars-2'
import Footer from './containers/Footer'

function App() {
    const [user, setUser] = useState({})
    const providerUserValue = useMemo(
        () => ({ user, setUser }),
        [user, setUser]
    )
    return (
        <div className="app">
            <UserCtx.Provider value={providerUserValue}>
                <div className="phone">
                    <Scrollbars
                        className="scrollbar"
                        style={{
                            width: '100%',
                            height: '100%',
                            scrollbarColor: 'blue',
                        }}
                    >
                        <Router>
                            <Switch>
                                <Route
                                    path="/Explore"
                                    exact
                                    component={Explore}
                                />
                                <Route
                                    path="/Favorite"
                                    exact
                                    component={Favorite}
                                />
                                <Route
                                    path="/Recipe"
                                    exact
                                    component={Recipe}
                                />
                                <Route
                                    path="/Searches"
                                    exact
                                    component={Searches}
                                />
                                <Route
                                    path="/"
                                    exact
                                    component={AccountCreation}
                                />
                                <Footer />
                            </Switch>
                        </Router>
                    </Scrollbars>
                </div>
            </UserCtx.Provider>
        </div>
    )
}

export default App
