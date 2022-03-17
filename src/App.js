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
import { Scrollbars } from 'react-custom-scrollbars';

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
                    <Scrollbars className='scrollbar' style={{ width: "100%", height: "100%" }}>
                        <Router>
                            <Switch>
                                <Route path="/Explore" exact component={Explore} />
                                <Route path="/Favorite" exact component={Favorite} />
                                <Route path="/Recipe" exact component={Recipe} />
                                <Route path="/Searches" exact component={Searches} />
                                <Route path="/" exact component={AccountCreation} />
                            </Switch>
                        </Router>
                    </Scrollbars>
                </div>
            </UserCtx.Provider>
        </div>
    )
}

export default App
