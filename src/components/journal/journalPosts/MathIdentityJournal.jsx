import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class MathIdentityJournal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/PxfVBTZ/math.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                            a mathematical identity (crisis).
                        </h1>
                        <div className="date">03/27/2021</div>
                        <small>
                            Initially published on &thinsp;
                            <a href='https://issuu.com/watiszine/docs/issue_13'>
                            Watiszine.
                            </a>
                        </small>
                    </div>
                </Header>
                <Body>
                    <div className="paragraph">
                        she understands the definition of identity: an equality that 
                        evaluates as true within a given range of validity, regardless 
                        of the circumstances nor values chosen for its variables. 
                        a proof, on the other hand, is an unambiguous argument equating 
                        to a univocal conclusion; a series of assumptions stitched together 
                        by the infallibility of logic. the absolute sense of closure within 
                        mathematics is something she admires, how the meticulously arranged 
                        array of domino is predestined to collapse to a result that aligns 
                        precisely with her expectations. 
                    </div>
                    <div className="paragraph">
                        she once wished to borrow this sentiment of certainty and apply it 
                        upon her own reality, in order for the events and outcomes in her 
                        life to allineate in some calculable way. she once strived to prove 
                        herself into existence, as elegantly as she would scribble out the 
                        words <i>quod erat demonstrandum</i>. when she stares into the draft pages 
                        before her; the map of orderly propositions and abstract symbols simply 
                        gaze back. 
                    </div>
                    <div className="paragraph">
                        does there exists a duality of worlds? she closes her eyes and ponders. 
                        one that divides everything up into categories of precision, and another 
                        one where borders vaguely blend into each other like paint splatters across 
                        a canvas. a world responsible for the building of pipelines and bridges 
                        and another as the birthplace of violins and roses. a world for calculus 
                        and another for sonnets. a world governed by practicality and another 
                        sculpted by imagination. she teeters at the border of the two worlds, 
                        wondering how she has found herself upon the territory of the one instead 
                        of the other.
                    </div>
                    <div className="paragraph">
                        yet at the intersection between the two realms she discovers the capacity 
                        for possibility. opening her eyes again, she is reminded of the infinitude 
                        within the process of becoming. perhaps she was never meant to be defined 
                        as a constant, but more precisely characterized as a work in progress: an 
                        accumulation of every baby step she has ever taken; a myriad of draft papers 
                        scrambled up at nightfall to only be rewritten upon at sunrise. perhaps she 
                        is best defined as one that is constantly evolving, perpetually shifting – 
                        metamorphosing a multitude of times to converge towards who she is meant to be.
                    </div>
                </Body>
                <FooterBar 
                next={JournalInfo['daylight']}/>
            </Wrapper>
        )
    }
}

export default MathIdentityJournal