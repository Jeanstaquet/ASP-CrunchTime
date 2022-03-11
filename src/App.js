import './App.css'
import React, {useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AccountCreation from './containers/AccountCreation'
import Explore from './containers/Explore'
import Favorite from './containers/Favorite'
import Recipe from './containers/Recipe'
import Searches from './containers/Searches/Searches';
import Footer from './Footer'
import Modal from './Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState("");

    const test = (param) => {
        setModalData(param);
        setOpenModal(true);
    }

    return (
        <div className="app">
            <div className="phone">
                <div className="wrapper">
                <Router>
                    <Switch>
                        <Route path="/Explore" exact component={Explore} />

                        <Route path="/Favorite" exact component={Favorite} />
                        <Route path="/Recipe" exact component={Recipe} />
                        <Route path="/Searches" exact component={Searches} />
                        <Route path="/" render={() => <AccountCreation func={test}/>} />
                    </Switch>
                    <Footer />
                </Router>
                {openModal ? (
                    <Modal data={modalData} onClose={() => setOpenModal(false)} />
                ) : null
                }
                
                </div>
            </div>
        </div>
    )
}

export default App
