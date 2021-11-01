import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class Reopening2Journal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/d2bYShc/ago.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                            Stage 2 reopening /
                        </h1>
                        <div className="date">09/10/2021</div>
                    </div>
                </Header>
                <Body>
                    <div className="poem">
                        <div className="verse">
                            here comes<br/>
                            the first time<br/>
                            after a long time.<br/>
                            the familiar spaces<br/>
                            extend their greeting.<br/>
                            a retrieval of which<br/>
                            I could barely recall in precision<br/>
                            converge and collide<br/>
                            with a flickering of hopeful anticipation<br/>
                            towards what is still foreign.
                        </div>
                        <div className="verse">
                            to be anchored upon<br/>
                            the concrete ground underneath,<br/>
                            to be liberated from<br/> 
                            the technological omnipresence;<br/>
                            a rebellion against the agitation<br/>
                            to be simultaneously elsewhere.<br/>
                            a tide in all its subtlety<br/>
                            surges within.
                        </div>
                        <div className="verse">
                            I tune into<br/>
                            the bustling of midsummer<br/>
                            as the streets reawaken from their slumber,<br/>
                            wishing that I could capture this feeling<br/>
                            like a faded polaroid image<br/>
                            to be kept for eternity<br/>
                            between one's journal pages.
                        </div>
                    </div>
                </Body>
                <FooterBar 
                previous={JournalInfo['torontotrip1']}
                next={JournalInfo['idontwanttobeanyoneelsebutmyselfanymore']}/>
            </Wrapper>
        )
    }
}

export default Reopening2Journal