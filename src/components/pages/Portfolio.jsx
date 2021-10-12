import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TechnovaPost from '../projects/caseStudies/TechnovaPost';
import PortfolioHome from './PortfolioHome'

class Portfolio extends Component{

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/portfolio' exact component={PortfolioHome}/>
                    <Route path='/portfolio/technova' component={TechnovaPost}/>
                    <Route path='/portfolio/voicenoted' component={TechnovaPost}/>
                    <Route path='/portfolio/mood' component={TechnovaPost}/>
                </Switch>
            </Router>
        )
    }
}

export default Portfolio
