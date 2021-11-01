import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class Bday20Journal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/cJShJRL/20thbday.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                            20th birthday.
                        </h1>
                        <div className="date">07/31/2021</div>
                    </div>
                </Header>
                <Body>
                    <div className="paragraph">
                        I turned 20 earlier this month. Each year, I begin to 
                        feel reflective as midsummer unfolds, reminiscing upon 
                        past events that have been meaningful and feeling star-eyed 
                        in anticipation of what might be ahead.
                    </div>
                    <div className="paragraph">
                        As teenagerhood draws to an end, the gap between how old I 
                        am in actuality and how old I feel like in the interior suddenly 
                        magnifies. I recall at the beginning of the year, someone younger 
                        nonchalantly asked me about how old I would be turning. A sense 
                        of insecurity unexpectedly washed over me as I responded. <i>How am 
                        I turning twenty already, when I essentially have no clue what 
                        is going on?</i>
                    </div>
                    <div className="paragraph">
                        The twenties feels like a defining decade in one's life. Upon 
                        arrival at this milestone, I feel as though I should have already 
                        gathered some clarity about where I ought to be headed towards. 
                        Instead, all I seem to have to offer is but a compilation of things 
                        that I have desired to pursue but lacked the courage to do so. 
                        I felt inevitably unsettled, as I compared where I currently stand 
                        in the timeline of my life to the saturated images featured on 
                        social media timelines. 
                    </div>
                    <div className="paragraph">
                        The sound of the clock ticking amplifies in the background as the 
                        anxiety of falling tugs at my consciousness. Yet my breath steadies 
                        again as I remember that there is no expiration date attached to growth: 
                        a lifetime of becoming unfolds in the process, a lifetime of growth 
                        still awaits before me. 
                    </div>
                    <div className="paragraph">
                        Sifting through the fragments of my memory, I begin to recall the overcast 
                        days and perpetual nights, how daylight nevertheless permeated through 
                        the rainclouds and restored saturation to everything. I recall gazing up 
                        again to be mesmerized by the sight of yet another sunset, enchanted by 
                        what it means to just be alive. I recall the tension that evaporated 
                        from within me upon exhalation, how I always have gathered the strength 
                        that I needed breath by breath. I recall the kindness encountered from 
                        spontaneous interactions, how I no longer feel quite as alone standing 
                        amidst an amorphous sea of crowd. I recall the metamorphosis that have
                        occurred within the span of the past years, the way all the detours guided 
                        towards unexpected scenery. Every step that I have taken contained meaning, 
                        even while not knowing where I was heading towards.
                    </div>
                    <div className="paragraph">
                        In all honesty, I am far from having it figured out. I am still learning 
                        to rewrite the inner script that defined myself according to my deepest 
                        insecurities, attempting to abandon the fears that I once clutched onto 
                        with clammy hands, and tracing my way back to myself after deviating away 
                        time after time. Little by little, I am treading forward and encountering 
                        unexpected strength along the way.
                    </div>
                    <div className="paragraph">
                        Another decade commences. I am thankful to be arriving here, where a lifetime 
                        of growth still awaits ahead. May I gather the courage to grow, along a path 
                        where confidence blossom forth like wildflowers and healing pours in like the daylight. 
                    </div>
                </Body>
                <FooterBar 
                previous={JournalInfo['reopening1']}
                next={JournalInfo['torontotrip1']}/>
            </Wrapper>
        )
    }
}

export default Bday20Journal