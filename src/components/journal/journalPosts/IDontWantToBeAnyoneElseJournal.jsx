import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class IDontWantToBeAnyoneElseJournal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/bRbS8RT/IMG-20210924-181601.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                            i don't want to be anyone else but myself anymore.
                        </h1>
                        <div className="date">09/20/2021</div>
                    </div>
                </Header>
                <Body>
                    <div className="paragraph">
                        I used to imagined that there existed two types of people in this world. 
                        Or, in perhaps more accurate terms, there is a spectrum to which individuals 
                        could be categorized along. At one polarity are the ones born with sturdiness 
                        carved into their souls, who carry an air of ease in their laughter and a 
                        glass-like clarity about who they are meant to be. With an unflinching gaze 
                        they stare back, for confidence is as familiar to them as a mother tongue. 
                    </div>
                    <div className="paragraph">
                        On the other end reside the more wobbly ones, with timid eye-contacts and 
                        laughter masked by nervousness, a nebulous idea about who they are and the 
                        spaces they are permitted to occupy. I have always known myself to belong 
                        towards latter, for I never quite felt like simply being myself could be good 
                        enough. A desperation to morph myself into the likeness of someone else has in 
                        some ways defined me all my life. This feeling of inadequacy echoes like a 
                        familiar ache, lingering throughout my adolescence as a muscle memory I am 
                        attempting to erase.
                    </div>
                    <div className="paragraph">
                        With widened eyes I watched the effortless demeanors of those residing on the 
                        other end of the spectrum — envying them for the way they comfortably nestle 
                        into who they are, their skins draping around them as though they actually fit. 
                        How liberating it must feel: to dance with ease as though I unequivocally deserve 
                        the spaces that I occupy, and to freely belong without needing to conceal my contours 
                        and edges. They appeared to be fireproof whereas my insecurities are easily set aflame. 
                        How I desired to borrow that numbness as my own and to callous over my vulnerabilities 
                        so that when rain inevitably arrives, I will only experience wetness instead of feel 
                        the entire storm drench through my skin. This sensitivity that exists as vividly 
                        as an ever-present current of electricity beneath my skin is something that I have 
                        despised myself for since becoming self aware.
                    </div>
                    <div className="paragraph">
                        But all of a sudden I remember standing amidst rushing crowds, feeling overwhelmed
                        by the magnitude of it all. There is something about the myriad souls in co-existence 
                        as me, each one woven with an unparalleled pattern of personalities and perspectives 
                        and preferences. I became simultaneously miniaturized and magnified in light of the 
                        innumerous galaxies of individuals that I will possibly brush my shoulders against, 
                        just as I am a mere ripple yet simultaneously the vast ocean itself: as infinitesimal 
                        as a grain of sand and as infinite as the stars that were birthed since the beginning of time. 
                        Something within me trembles and solidifies: how I long to re-awaken and come vividly 
                        alive to this ordinary and unprecedented life — to the unique array of things that contain
                        meaning to me. But how could I do so, while continuing to loathe the part of me that is the 
                        most human? 
                    </div>
                    <div className="paragraph">
                        Lately I have been hearing a knocking at my soul, like homecoming through a distant 
                        wandering. A yearning to finally let go of my anxiously held fears and to anchor into 
                        something truer and more worthwhile. I know that change eventually and invariably 
                        emerges when the pain of remaining as you are eclipses the pain of evolving into 
                        something new. This is all to say that I am learning to abandon shame and carry my 
                        sensitivities with more grace. Confidence still feels like a foreign tongue but I am 
                        learning to acquaint myself with it anyway. This is all to say that it's been a long 
                        while since I felt like I could show up as the main character in my own life, but this 
                        narrative is nevertheless mine to come alive to and co-create.
                    </div>
                </Body>
                <FooterBar 
                previous={JournalInfo['reopening2']}
                next={JournalInfo['pastimes']}/>
            </Wrapper>
        )
    }
}

export default IDontWantToBeAnyoneElseJournal 