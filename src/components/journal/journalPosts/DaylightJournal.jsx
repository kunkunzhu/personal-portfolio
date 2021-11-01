import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class DaylightJournal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/4t53wXz/daylight.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                            Daylight /
                        </h1>
                        <div className="date">02/05/2021</div>
                        <small>
                            Initially published on &thinsp;
                            <a href='https://www.redpocketmagazine.ca/vol-3/poem/daylight'>
                            the Red Pocket Magazine.
                            </a>
                        </small>
                    </div>
                </Header>
                <Body>
                    <div className="poem">
                        <div className="verse">
                            <i>What does<br/>
                            strength mean to you?</i><br/>
                            She asks and I respond:<i> daylight</i>.<br/>
                            the willingness to stay through the night<br/>
                            and forsake the ashes of yesterday<br/>
                            upon the sight of the sunrise.
                        </div>
                        <div className="verse">
                            <i>What do you<br/>
                            define as healing?</i><br/>
                            She asks and I respond:<br/> 
                            the luminescence of sunrise,<br/>
                            penetrating through the wintry night.<br/>
                            The way shadows collapse into dawn,<br/>
                            a sunlight-drenched hour<br/>
                            not previously seen -<br/>
                            the remedy at<br/>
                            daybreak.
                        </div>
                        <div className="verse">
                            <i>Stay<br/>
                            for another day. </i><br/>
                            I hear her whisper.<br/>
                            There will be sunlight<br/>
                            pouring in over the windowsill;<br/>
                            the watercolour blend of sunset every night;<br/>
                            No matter how strenuous the<br/>
                            next breath feels,<br/>
                            I always find<br/>
                            it again.
                        </div>
                    </div>
                </Body>
                <FooterBar 
                previous={JournalInfo['amathematicalidentitycrisis']}
                next={JournalInfo['reopening1']}/>
            </Wrapper>
        )
    }
}

export default DaylightJournal