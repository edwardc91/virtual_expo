import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Intro from "./components/intro";
import BaseNavBar from "./components/baseNavBar";
import WhoWeAre from "./components/whoWeAre";
import Gallery from "./components/gallery";
import FilesRepository from "./components/filesRepository";
import Comments from "./components/comments";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <BaseNavBar/>
                        <Switch>
                            <Route exact path="/" component={() => (
                                <Intro/>
                            )}/>
                            <Route path="/gallery" component={Gallery}/>
                            <Route path="/who" component={WhoWeAre}/>
                            <Route path="/files" component={FilesRepository}/>
                            <Route path="/comments" component={Comments}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
