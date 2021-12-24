import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class IndigoJournal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/F33RN7y/20210703233201.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                        indigo. <br/> (a musing on vocation)
                        </h1>
                        <div className="date">12/20/2021</div>
                    </div>
                </Header>
                <Body>
                    <div className='paragraph'>
                    In one of my favourite podcast converations, American research professor &thinsp;
                    <a href="https://onbeing.org/programs/mike-rose-the-deepest-meanings-of-intelligence-and-vocation/ target='_blank' rel='noreferrer'">
                    Mike Rose</a> spoke, 
                    <i>“I grew up a witness to the intelligence of the waitress in motion, the reflective welder, 
                        the strategy of the guy on the assembly line.”</i>
                    </div>
                    <div className='paragraph'>
                    I found it to be beautiful, the articulate appreciation for what is so often overlooked and the acknowledgement of the 
                    glory contained within the seemingly mundane endeavours. Growing up, an opposite sentiment has been instilled within me. 
                    Since childhood, I have had an acute aware of the inequality of consideration we give to different careers. Along with 
                    all the other unspoken social codes, there seemed to exist a hierarchy of vocational pursuits woven into the fabric of the 
                    society. In particular, recognition and monetary abundance are measurements for what is deemed as successful.
                    </div>
                    <div className='paragraph'>
                    It’s almost as if there is a spectrum of hues that range from the palest of azure to the riches of indigo. An individaul 
                    is classfied along the scale, and quantified by the pigmentation of cerulean that they resemble. What a barren and 
                    suffocating perception of the world this would be — leaving an abundance of vibrant colours outside the periphery of 
                    one’s awareness.
                    </div>
                    <div className='paragraph'>
                    As per my grandfather’s advice, education and medication are undoubtedly meaningful pursuits. They provide a practical 
                    contribution to the society all while generating a relatively stable income. However, this makes no difference to the fact 
                    that miserable doctors exist as well as passionate ones. In the same role, another could feel as though they are coming 
                    fully alive through what they are doing while another could dread showing up everyday. Mike Rose mentioned in the same 
                    conversation, <i>“meaningfulness is a more fluid and rich and variable concept [...] than we tend to imagine.”</i>  Perhaps 
                    at the end of the day, there is not really a cookie cutter mold for what a meaningful pursuit consists of. Just as how 
                    individuality cannot be quantified, the concept of meaning does it need be congruent across different individuals.
                    </div>
                    <div className='paragraph'>
                    At the same time, I recognize that these worldviews are invariably chisled by one’s past experiences. For many 
                    first-generation immigrants and individuals like my grandfather, a lifetime of scarcity and struggling to make 
                    the ends meet has cultivated the soil of their beliefs. The freedom to choose one’s career or even the luxury to 
                    ponder upon the meaning of aspirations is a luxury not commonly afforded. But in order to not take for granted 
                    the abundance that is available to me, I shall dwell upon these possibilities and to ponder upon the meaning in 
                    the various vocations that one could pursue.
                    </div>
                    <div className='paragraph'>
                    Consider those at the frontlines, be it delivery persons or transit drivers or grocery employees or our healthworkers. 
                    During the pandemic that has irreversibly shaped our society during the recent year, they have been one of the most 
                    vulnerable populations while simultaneously playing an imperative role in the functioning of our society. 
                    At last we pause and pay due attention to what we once dismissed as trivial.
                    </div>
                    <div className='paragraph'>
                    For a different example, consider the artists underneath the spotlights. Making a career out of something that supposedly 
                    should only remain as a hobby is something a traditional Asian elderly would shake their head at. But I have always held 
                    a particular admiration for them, because it must have required bravery for them to pursue something unconventional. 
                    Sometimes we assume the ease of those who have emerged under the spotlights as an effect of survivorship bias, but 
                    there are countless others who do not end up surviving the odds. Nevertheless, the willingness to try must have been 
                    a worthwhile endeavour in itself. At the very least, they have loved doing something enough to deviate from the path 
                    of least resistance.
                    </div>
                    <div className='paragraph'>
                    At the end of the day I believe that any intentional engagement is worthwhile. The value of our endeavour cannot be 
                    measured by the money we earn nor its perceived status. Horward Thurman articulates it beautifully, <i>“Don’t ask what 
                    the world needs. Ask what makes you come alive, and go do it. Because what the world needs is people who have come 
                    alive.”</i> So many, including myself, have come to perceive the world as a monotonic despite the kaleidoscopic hues that 
                    it encompasses. Perhaps we could begin to reimagine a world where any individual is permitted to show up in the colour 
                    that resonates the most vibrantly to them, to pursue the becoming of whomever they aspire to be.
                    </div>
                    <img src="https://i.ibb.co/6XwX39z/indigo-1.png" alt="indigo 0"/>
                    <img src="https://i.ibb.co/7WZdQ1t/indigo-2.png" alt="indigo 1"/>
                    <img src="https://i.ibb.co/1LSB6bR/indigo-2-1.png" alt="indigo 2"/>
                    <img src="https://i.ibb.co/4mqwF1S/indigo-2-2.png" alt="indigo 3"/>
                    <img src="https://i.ibb.co/MSbL2hV/indigo-2-3.png" alt="indigo 4"/>
                    <img src="https://i.ibb.co/vxxrf1z/indigo-2-4.png" alt="indigo 5"/>
                </Body>
                <FooterBar 
                previous={JournalInfo['founddocumentary']}/>
            </Wrapper>
        )

    }
}

export default IndigoJournal