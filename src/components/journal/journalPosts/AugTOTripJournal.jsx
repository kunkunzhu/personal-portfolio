import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class AugTOTripJournal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/kHKZcKh/toronto2.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                            End-of-summer toronto trip.
                        </h1>
                        <div className="date">08/31/2021</div>
                    </div>
                </Header>
                <Body>
                    <div className="paragraph">
                        When heading towards Toronto that morning, I got disoriented in my 
                        hometown and subsequently missed my train. After changing route and 
                        repurchasing tickets, I arrived at downtown only to lose my way a few 
                        more times before finally navigating towards the right direction. Upon 
                        returning, I stepped onto the wrong bus but still somehow made it home 
                        in the end.
                    </div>
                    <div className="paragraph">
                        My mom calls it the <i>traveler's tuition</i>. She is not talking about the 
                        time and money that you deliberately set aside in anticipation of a 
                        particular trip. Rather, she is referring to the unforeseen detours, 
                        delayed departures, and unexpected deviations from the original plan. 
                        For as soon as you alight upon foreign territory, the certainty of 
                        knowing what occurs next becomes one of the first things to abandon. 
                        Miscellaneous accidents and serendipities unfold as though they have 
                        been predestined in the plotline, yet this spontaneity is at the very 
                        soul of adventure.
                    </div>
                    <div className="paragraph">
                        I nevertheless consider it as a necessity, to periodically depart from 
                        the current routines for the sake of visiting somewhere new - to reawaken 
                        from the slumber of mundanity and feel reinvigorated by a familiar rush of 
                        adrenaline. The sobriety of being on the way is a remedy from rigidity. 
                        I am willing to commit to the unpredictability along the way, trusting 
                        that each detour will be worthwhile.
                    </div>
                    <img src="https://i.ibb.co/hM6tgPy/toronto1.jpg" alt="toronto graffiti wall"/>
                </Body>
                <FooterBar 
                previous={JournalInfo['twenty']}
                next={JournalInfo['reopening2']}/>
            </Wrapper>
        )
    }
}

export default AugTOTripJournal