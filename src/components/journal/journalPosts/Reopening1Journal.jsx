import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class Reopening1Journal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/7tLbsD5/stage1reopening.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                            Stage 1 Reopening.
                        </h1>
                        <div className="date">06/22/2021</div>
                    </div>
                </Header>
                <Body>
                    <div className="paragraph">
                        This past Friday, Ontario entered into its initial stage of 
                        reopening. After two months of lockdown and over a year of quarantine, 
                        the landscape slowly reawakens from its slumber. At sundown, the 
                        uptown was buzzing with activity and patios brimming with visitors. 
                        For a brief moment, a sense of Deja Vu surged within me as I stood 
                        disoriented amidst the lively street.
                    </div>
                    <div className="paragraph">
                        Without a surprise, the opportunity to visit places again brought many 
                        delight. Like the rest of the population, I have felt somewhat stagnant 
                        and disoriented over the past year. The limitation of physical geography 
                        felt like a metaphor for the imperceptible, as I grew increasingly 
                        claustrophobic within the perimeter of activity that confined me. 
                    </div>
                    <div className="paragraph">
                        I remember thinking out loud while walking with someone through a familiar park lane, <br/>
                        <i>"When was the last time you felt inspired and reinvigorated from the physical space around you?"</i>
                        , I asked. 
                    </div>
                    <div className="paragraph">
                        On the day of the reopening, I spontaneously found myself in the city 
                        of Toronto, meandering through bustling streets while rushing by countless 
                        passengers. In contrast to the suburban quietude, the towering architectures 
                        and the variety of individuals passing through them reawakened something in me. 
                    </div>
                    <div className="paragraph">
                        A little while back, I recall moving out from home and into my current student 
                        apartment at the beginning of May. The few kilometers of distance transported me 
                        to an entirely different part of town. Upon embarking on a new term, I cherished 
                        the renewed momentum gathered from this change in environment.
                    </div>
                    <div className="paragraph">
                        The second most recent time occurred in March, when lockdown was temporarily lifted 
                        and in-person classes became restored for a brief while. Sitting in the spacious 
                        lecture hall for the first time since university began, I suddenly felt an almost 
                        euphoric sense of joy, touched by this glimpse of a campus lifestyle that I have 
                        daydreamed about since high school.
                    </div>
                    <div className="paragraph">
                        Rewinding even further back. In the previous October, I remember feeling vividly 
                        inspired by the suburban landscape upon returning to the Canadian city-town after numerous 
                        flight cancellations. I  stared mesmerized into the cerulean sky, half a world away 
                        from the technicolored cityscapes that I have been immersed in for the past year.   
                    </div>
                    <div className="paragraph">
                        In some ways, a shift in my physical geography often echoed an inhalation of fresh air 
                        for my soul. Time and time again, I am reshaped by an dimension of possibilities outside 
                        of the routines and perspectives I have grown accustomed to. Despite how many things 
                        seemed to have remained stationary, I could nevertheless recall quite an array of times 
                        from my recent past when that same sense of reinvigoration has washed over me.
                    </div>
                    <div className="paragraph">
                        A couple of weeks ago on a particularly humid day, I walked along that same path when I 
                        had thought aloud. Countless cotton-like clouds adorned the spacious canvas above and 
                        the leaves gently glistened underneath the daylight. Individuals scattered across the 
                        landscape, headed towards various directions and engrossed in their own worlds. Animals 
                        pranced around and laughter-filled chatters were occasionally heard. Everything appeared 
                        vivid and enlivened. A sense of renewal pulsed within me even as I treaded along my typical 
                        route. My feet were anchored upon the ground underneath me, yet my head was in the cloud, 
                        mesmerized and elsewhere. 
                    </div>
                    <hr/>
                    <div className="paragraph">
                        Upon reopening, I am looking forward to physically showing up to spaces again. For many, 
                        the interruption of quarantine resembled a discontinuity in how one expected life to 
                        unfold. In subtle and irreversible ways, we have changed and grown from who we were prior 
                        to the lockdown. As the world gradually reopens, I attempt to re-anchor myself upon where 
                        I currently stand, in light of the miscellaneous changes that have occurred.
                    </div>
                    <div className="paragraph">
                        I am grateful for the shifting of things in this season, for the inhalation of new hopes and 
                        potentiality for new beginnings. There have been new strength gathered, as well as hopes that 
                        I am attempting to rediscover. Looking ahead, I will nevertheless reencounter all the strength 
                        I need along the way, tracing my way back to precisely where I need to arrive at.
                    </div>
                </Body>
                <FooterBar 
                previous={JournalInfo['daylight']}
                next={JournalInfo['twenty']}/>
            </Wrapper>
        )
    }
}

export default Reopening1Journal