import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JournalHome from './JournalHome';
/* importation of journal posts */
import PastimesJournal from '../journal/journalPosts/PastimesJournal'
import IDontWantToBeAnyoneElseJournal from '../journal/journalPosts/IDontWantToBeAnyoneElseJournal'
import Reopening2Journal from '../journal/journalPosts/Reopening2Journal';
import AugTOTripJournal from '../journal/journalPosts/AugTOTripJournal';
import Bday20Journal from '../journal/journalPosts/Bday20Journal';
import Reopening1Journal from '../journal/journalPosts/Reopening1Journal';
import DaylightJournal from '../journal/journalPosts/DaylightJournal';
import MathIdentityJournal from '../journal/journalPosts/MathIdentityJournal';
import WinterSurvivalJournal from '../journal/journalPosts/WinterSurvivalJournal';
import BeingBelongingJournal from '../journal/journalPosts/BeingBelongingJournal';
import FoundDocumentaryJournal from '../journal/journalPosts/FoundDocumentaryJournal';


/* STREAMLINE DIS PROCESS */

class Journal extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/journal' exact component={JournalHome}/>
                    <Route path='/journal/pastimes' component={PastimesJournal}/>
                    <Route path='/journal/idontwanttobeanyoneelsebutmyselfanymore' component={IDontWantToBeAnyoneElseJournal}/>
                    <Route path='/journal/reopening2' component={Reopening2Journal}/>
                    <Route path='/journal/torontotrip1' component={AugTOTripJournal}/>
                    <Route path='/journal/twenty' component={Bday20Journal}/>
                    <Route path='/journal/reopening1' component={Reopening1Journal}/>
                    <Route path='/journal/daylight' component={DaylightJournal}/>
                    <Route path='/journal/amathematicalidentitycrisis' component={MathIdentityJournal}/>
                    <Route path='/journal/asurvivalguidefortheseason' component={WinterSurvivalJournal}/>
                    <Route path='/journal/beingbelonging' component={BeingBelongingJournal}/>
                    <Route path='/journal/founddocumentary' component={FoundDocumentaryJournal}/>
                </Switch>
            </Router>
        )
    }
}

export default Journal