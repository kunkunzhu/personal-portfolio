import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class PastimesJournal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/2KZjfx9/e4af9a39-5eda-4a99-8a6a-1568d99de602.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                            Go where you encounter peace.
                        </h1>
                        <div className="date">10/22/2021</div>
                    </div>
                </Header>
                <Body>
                    <div className="paragraph">
                        As a child, time was liquid and I poured it into the 
                        vessels of my various pastimes. Hours pass while I weave 
                        up intricate daydreams, oblivious to the reality yet fully 
                        alive. Nowadays, the hours have instead become the vessels 
                        that I feel obliged to allocate portions of productivity into. 
                        Nevertheless I remain wide-eyed before creativity, but often 
                        finding myself merely admiring from a distance — as though 
                        awestruck by its possibility while simultaneously fearful 
                        over its fragility. For a brief moment, I begin to wonder 
                        if I have been neglecting what's the most meaningful to me to 
                        gather dust on the back shelf of my to-do list instead.
                    </div>
                    <div className="italicize">
                        Go where you encounter peace.
                    </div>
                    <div className="paragraph">
                        I hear the prompting from somewhere within, but I ignore it 
                        to consider what feels like a more urgent question in the moment — 
                        are pastimes merely a way to pass my time? How could I possibly 
                        afford them when there already exist a myriad of pending tasks 
                        lingering in the peripheral of my awareness? At a spare moment, 
                        the sound of clock ticking amplifies in the background. I feel 
                        agitated from the absence of activity, desperate to fill this vacancy 
                        with anything at all. I reach for my phone, scrolling through timelines 
                        featuring lives that appear exponentially more interesting than my own. 
                        The internal chaos magnifies until numbness resides at my fingertips. 
                        I do not encounter peace.
                    </div>
                    <div className="italicize">
                        Go where you encounter peace.
                    </div>
                    <div className="paragraph">
                        Once again I hear the prompting. Finally I arrive before the empty 
                        journal pages, attempting to disentangle my messy yarn ball of thoughts 
                        and tame the blaring static inside of my mind. Peace re-emerges like a 
                        quiet rising tide, a revolution in all its sublety. There is something 
                        deeply soothing about an aimless pilgrimage without any defined aim in 
                        sight, where I abandon the need to rush through the motions and encounter 
                        the reminder — I am here to create and grow, instead of merely to produce.  
                        At the border between my being and doing, I unearth an inkling of what it 
                        means to be human —setting aside the need to strive after an arbitrary standard.
                    </div>
                    <div className="paragraph">
                        <i>I want to show up to things sincerely</i>, I scribble across my journal page, 
                        <i> not perfectly nor efficiently, just sincerely</i>.
                    </div>
                </Body>
                <FooterBar 
                previous={JournalInfo['idontwanttobeanyoneelsebutmyselfanymore']}
                next={JournalInfo['asurvivalguidefortheseason']}/>
            </Wrapper>
        )
    }
}

export default PastimesJournal