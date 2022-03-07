import './App.css'
import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AccountCreation from './containers/AccountCreation'
import Explore from './containers/Explore'
import Favorite from './containers/Favorite'
//import RecipeDescription from './containers/RecipeDescription/RecipeDescription'
import Searches from './containers/Searches'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [color, setColor] = useState('lightgrey');
    
    const setbgc = (val) => {
        //console.log(val);
        setColor(val);
    }

    useEffect(() => {
        setbgc(color);
    }, [color]);

    return (
        <div className="app" style={{backgroundColor: color}}>
            <div className="phone">
                <div className="wrapper">
                <Router>
                    <Switch>
                        <Route path="/Explore" exact component={Explore} />
                        <Route path="/Favorite" exact component={Favorite} />
                        
                        <Route path="/Searches" exact component={Searches} />
                        <Route path="/" exact component={AccountCreation} />
                    </Switch>
                </Router>
                <Footer bgc={color} bgcFunc={setbgc}/>
                </div>
            </div>
        </div>
    )
}

export default App
