import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

// import components
import Navbar from './Navbar'
import SingleMovie from './SingleMovie'
import MovieList from './MovieList'
const App = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Router exact path="/">
                    <MovieList/>
                </Router>
            </Switch>
            <Switch>
                <Route path='/movie/:id'>
                <SingleMovie/>
                </Route>
            </Switch>
    </Router>
    )
}

export default App
