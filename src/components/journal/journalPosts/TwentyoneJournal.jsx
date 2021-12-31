import React, { Component } from 'react';
import { Body, Header, Wrapper, FooterBar } from '../postStyles'
import JournalInfo from '../JournalInfo'

class TwentyoneJournal extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <img src="https://i.ibb.co/JvwGjh1/IMG-20211225-131616.jpg" alt="cover"/>
                    <div className="info">
                        <h1>
                        a letter of acknowledgment from 2021.
                        </h1>
                        <div className="date">12/30/2021</div>
                    </div>
                </Header>
                <Body>
                    <div className="paragraph">
                    Before we know it, the twilight of another year is approaching us. It has always been a tradition for me 
                    to reflect upon and give closure to what the past year has been prior to shifting my attention to the year 
                    to come. In the past, I’ve often listed out the specific lessons that my experience throughout this year 
                    has taught me. Last year, I decided to exchange the rigidity of bullet points with a compilation of 
                    photographed moments that have felt meaningful to me. As the end of 2021 approaches, the idea of drafting 
                    an acknowledgment letter emerged in my mind — much like what one would find at the closing of a published book. 
                    </div>
                    <div className="paragraph">
                    As I recall on the past year, all of the sentiments converge towards gratitude. Through all that 2021 has been, 
                    I am simply thankful to be here. I’ve always enjoyed reading through these letters of acknowledgment as a 
                    glimpse into the behind-the-scene process behind an authored work, realizing that nothing is really ever brought 
                    into fruition single handly. Just as I am in the continuous process of co-authoring my own narrative, this is 
                    my letter of acknowledgment for the year that is now passing. Thank you, to everyone and everything, that has 
                    made this chapter what it was. Consider this as my love letter to the passengers.
                    </div>
                    <hr/>
                    <div className='paragraph'>
                    As I remember back to the beginning of this year, I recall how brutal the 1B academic term felt. It is far from 
                    the happiest memory to reminsce upon, but nevertheless, I’m grateful to the upperyears who have lended me their 
                    guidance along the way. In particular, to Bruce, my mentor from the Math Mentorship program who dedicatedly showed 
                    up to our bi-weekly meetings and directed me towards various resources. To June, my mentor from Tech+, for helping 
                    to look forward to my co-op term of when I would have more disposable income to spend on food, which is indeed what 
                    ended up happening. To Mark, who reminded me that marks are not defining and gave me a tutorial on git even though 
                    I immediately forgot everything. To Calvin, who is willing to guide me through my design project way after the timeline 
                    of the UW UX Mentorship program ends. Likewise, shoutout to the ISAs from CS136, whom I probably have all individually 
                    met with from the innumerable office hour sessions that I have attended. Your patient debugging and guidance helped me 
                    survive this nightmarish course. I really only decided to continue coding out of consideration of the amount of effort 
                    that I have already invested into this course, and what a waste it would be if I discontinued. I wouldn’t have known
                    back then that a term later, I would finish coding my CS246 final project while thinking maybe this is not so bad after
                    all and I’m not so shit at coding, and tech is turning out to be something that I am hoping to pursue after all. 
                    As a first year undergoing an academic identity crisis (whatever this means), each of you has more or less offered 
                    me some desperately needed perspetive into the university experience.
                    </div>
                    <div className='paragraph'>
                    During a time of lockdown, the few social interactions that I had felt particularly meaningful. In particular, I’m 
                    grateful to Alexandra for our chats about online learning and on occasions, life’s meaning during our brisk winter walks; 
                    to Rann for our WeChat conversations filled with pepe memes and encouragements that made 1B slightly less dreadful; to ayla’s 
                    world discord server for our occasional virtual game nights; and to the small group for our weekly discussions and for being my 
                    only thread of connection to church during the pandemic. I’m also grateful to my counsellors, whom I reached out to through 
                    the university’s mental health services, for listening as I learned to open up for the first time in my life. Oh, also a 
                    thank you to the individuals who participated in my little qurantine project back in February, as I nudged myself outside of my 
                    comfort zone to seek out some solace and sense of connection in this time of isolation. Even as we cease to remain in touch, 
                    our temporal interaction has held a particular significance to me. I probably couldn’t have survived this semester without y’all.
                    </div>
                    <div className='paragraph'>
                    I’m specifically grateful for the few weeks of in-person classes that occurred during March. In all honesty, I felt genuinely 
                    ecstactic from seeing the geese hissing around on campus, or sitting up in the lecture hall while watching the professor 
                    scribbling some incomprehensible calculus expression across the whiteboard. At that point of remote learning, my sense of 
                    motivation has practically evoporated. The brief restoration of in-person classes rekindled some enthusiasm just in time and 
                    just enough to sustain me through the remainder of the academic term, even as the lockdown soon rebegan.
                    </div>
                    <div className='paragraph'>
                    And for the first year of university as a whole. Even for all the crying over disappointing marks and cycling through maladaptive 
                    coping mechanisms and restarting after hitting rock-bottoms, I decided that I no longer want to strive after something that doesn’t 
                    actually mean anything to me, nor only love myself on the condition that I surpass an arbitrary standard. It was the genesis of 
                    deciding that I will take time to engage in what replenishes me even if they are not always considered producitive. It will be 
                    uphill from here.
                    </div>
                    <div className='paragraph'>
                    Winter dissolved into spring and my second year of university began to unfold. It was uphill from here. It was my first time moving away from home, 
                    for a desperately needed change in environment and renewal in routine. For this, I’m thankful to my subletter for a deal that the current Waterloo 
                    housing market could only dream of, and for Lester St for being my homebase during the spring term. Now as I recall it all, the summer was a much 
                    more delightful time to reminisce about.
                    </div>
                    <div className='paragraph'>
                    To my first boyfriend, William, whom I have encountered during this time. Our relationship emerged exactly as I did not anticipate it. 
                    Thank you for taking all the initiatives at the beginning stage of our relationship or otherwise nothing would have ever happened between us. 
                    You are the most different person I have probably ever befriended, let alone dated (obviously), yet we share enough similarities that we are 
                    finishing each other’s sentences and laughing so hard that we run out of breath more than half of the times that we are together. Your openness 
                    and spontaneous energy brings out a different side of me. As someone with the tendency to define her worth according to her productvity, 
                    I’ve learned to lean back and be more at ease from being around you. Certainly, I probably would have not embarked on a lot of adventures 
                    if it were not for you (for example, trying out all the food places in Waterloo, lighting up fireworks on Canada’s Day, taking daytrips to Toronto, 
                    waking up absurdly early to watch the sunrise eclipse, spending an entire week by ourselves in Niagara Falls, and so much more). This is all to say 
                    that the venn diagram between us just happens to work out, for which I’m so very grateful for. Thank you for giving me more than I ask for and for 
                    patiently staying close despite my tendency to pull away whenever I feel upset. Thank you for so much more. You really are the smartest and one 
                    of the most talented person I know, and I’m not even gassing you up so much as to stating an objective fact.
                    </div>
                    <div className='paragraph'>
                    I’m grateful for the extracurricular involvements that I have been a part of. As participation in virtual events began to feel more draining than 
                    stimulating, I stumbled upon the opportunity of joining some student organizations and getting involved in the behind-the-scene process of building 
                    these events. It turned out to be even more rewarding than I had initially expected. So I’m extending gratitude to the individuals that I have worked 
                    with on the TechNova and Tech+ teams, as well as the attendees who showed up to our events for bringing the party. Building whatever small initiatives 
                    to make the student tech community into a less intimidating atmosphere —  this is something that I always hope to engage in, in whatever capacity I could, 
                    throughout the remainder of my undergraduate experience. (On that note, I’m somewhat grateful for the hackathons that I have attended, even though I 
                    will probably never truly enjoy this type of event. But thanks to them, I was given momentum to dig more into tech and design as well as explore 
                    opportunities to get more involved in the student community. And of course, given at least something to mention on my resume and during interviews) 
                    </div>
                    <div className='paragraph'>
                    I have felt somewhat nervous about the outcome of my first co-op term since probably the beginning of university. As such, I’m grateful to my first 
                    co-op employer for the opportunity to build professional experience and learn foundational skills in the exact domain that I hoped to explore. A specific 
                    thank you to my supervisor, who guided me from being a noob in frontend development to being slightly less of a noob. I learned a bunch and look forward 
                    to continue learning more. The fact that the project would be about butterflies and be based in Montreal — my and my mom’s favouritie Canadian city — 
                    was also delightfully unanticipated. At the same time, it absolutely did feel like a break from school, where I was able to rekindle various hobbies that 
                    I didn’t quite make the time for since the start of university. 
                    Alongside that, I’m grateful for the part time employments that took place concurrently as my co-op placement. To Paper, for the interesting students that 
                    I encountered and the rewarding experience of helping another figure something out. To International News, for the customer service position that satisfied 
                    my desire to engage in social interactions with strangers on campus as the university partially returned to in-person operations. The management team is 
                    also one of the kindest that I have encoutered. And of course, thanks for the bread, which I definitely did spend on food like previously mentioned.
                    </div>
                    <div className='paragraph'>
                    Thank you to Emily, for your kind generosity of welcoming me into your home during September and October. I’m grateful for the lighthearted or contemplative 
                    discussions as well as the spontaneous board game research project that took place. To Ayla, for being my long time friend. I’m grateful that we are able to 
                    bond over lighthearted or contemplative conversations that never fail to raise my level serotonin and I cannot wait for more memories to unfold in the upcoming year, 
                    especially as we work on our upcoming project together (details remain unenclosed). To my other friends, for all the miscellaneous adventures that we have embarked on 
                    together, or for the subtle ways that you have inspired me. I hope that we might remain in touch throughout 2022, or perhaps meet each other in real life for the
                    first time if our friendship has only been virtual so far. Even if we end losing touch, thank you anyway. Also a random shout of gratitude to PAC, you really 
                    transformed my workout routine and I really hope that you will be reopened in January.
                    </div>
                    <div className='paragraph'>
                    A shoutout my favourite artists. To Nightly, whose music has been my soundtrack for the summer. To Lany (and Keshi), for an unforgettable first live concert experience. 
                    To Oh Wonder, Boy in Space, and Jeremy Zucker, whose music have felt like soft exhales at the end of the day. Please come to a city near me during 2022. Also, to Ricewine, 
                    who is suprisingly my Spotify top artist, I can’t believe I actually did play your album 461 times as background study music. And of course, thanks to Spotify Premium. 
                    The fact that I’m among the top 4% of Canadian listeners reveals how much you have carried me. In particular, being able to listen to music offline really made a difference 
                    during the summer, as I would go on runs to escape my responsibilities whenever my code refuses to run (which is nearly everyday). 
                    </div>
                    <div className='paragraph'>
                    And finally, I’m indebted to my parents, who are growing increasingly fragile as I gradually grow up. To my father, whom I have not seen in-person for the entire year. 
                    Thank you for your constant heart and care behind-the-scene. I love and miss you, even though I would feel awkward telling you directly because we never quite exchanged 
                    these words while I was growing up. But we both know this in our hearts. To my mother, who has been a constant rock. Thank you for being a presence of serenity and for holding 
                    a vessel for my overspilling distress during the winer. Thank you for giving me the sufficient space and freedom that I needed as summer unfolds. Thank you for welcoming me 
                    home again as autumn draws near its end. You have often told me about how you expected me to gain independence and completely move out as soon as I become an adult, but you 
                    nevertheless continue to accommodate me. It has not always been easy to do so, and I acknowledge the sacrifices you make behind what is easily overlooked. Thank you for your 
                    unconditional love, and for the softness and resillience that you continue to resemble despite so much. Thank you both for everything, endlessly. You mean everything and I 
                    am only who I am because of you.
                    </div>
                    <img src='https://i.ibb.co/x6SH3dD/IMG-20211225-143352-758.webp' alt='merry xmas'/>
                    <hr/>
                    <div className='paragraph'>
                    This is all for now, even as I’m probably forgetting a lot more. I cannot possibly give due credit to every detail that has meant something to me in 2021, but it was 
                    nevertheless worth the attempt. I’m thankful for all the strength that I have encountered in unexpected places, for each fragment of warmth ever extended to me, for 
                    all the courage that I’ve gathered like a bouquet of wildflowers to carry alongside with me for the rest of the journey. I am humbled by it all.
                    </div>
                    <div className='paragraph'>
                    Having put closure to all that was, I can now look towards what could be. Something is emerging in clarity — all I really wish to be is sincere, all I really wish to do 
                    is to show up intentionally to all that holds meaning to me. The past two years have each been turbulent in their own ways. But maybe because of this, the trajectory of 
                    2022 will resemble one of long-awaited growth and blossoming.
                    </div>
                    <div className='paragraph'>
                    So here I am, thankful for another year to come.
                    </div>
                </Body>
                <FooterBar 
                previous={JournalInfo['indigo']}/>
            </Wrapper>
        )
    }
}

export default TwentyoneJournal