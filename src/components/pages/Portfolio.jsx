import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TechnovaPost from '../projects/caseStudies/TechnovaPost';
import VoicenotedPost from '../projects/caseStudies/VoicenotedPost';
import PortfolioHome from './PortfolioHome'

class Portfolio extends Component{

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/portfolio' exact component={PortfolioHome}/>
                    <Route path='/portfolio/technova' component={TechnovaPost}/>
                    <Route path='/portfolio/voicenoted' component={VoicenotedPost}/>
                    <Route path='/portfolio/mood' component={TechnovaPost}/>
                </Switch>
            </Router>
        )
    }
}

export default Portfolio
