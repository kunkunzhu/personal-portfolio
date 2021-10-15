import React, { Component } from 'react'
import { 
    Hero, 
    Summary, 
    Nutshell, 
    Title,
    Home,
    Subtitle,
    Heading,
    Paragraph,
    Section,
    SectionDivider,
    Wrapper
 } from '../postStyles'
import Footer from '../../Footer'

class VoicenotedPost extends Component {
    render() {
        return (
            <Wrapper>
                <Home to="/portfolio">
                    <i class="fas fa-arrow-circle-left"></i>
                </Home>
                <Summary>
                    <Hero src="https://i.ibb.co/5xYM2z2/Hero.png"/>
                    <Title>Voicenoted.</Title>
                    <Subtitle>Reimagining the podcast experience through notetaking functionality.</Subtitle>
                    <Nutshell responsive>
                        <thead>
                            <tr>
                                <th><i class="far fa-calendar-alt"></i></th>
                                <th><i class="fas fa-toolbox"></i></th>
                                <th><i class="fas fa-tools"></i></th>
                                <th><i class="fas fa-user-friends"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>36 Hours</td>
                                <td>UX Prototyping</td>
                                <td>Figma</td>
                                <td>Emily Yu</td>
                            </tr>
                            <tr>
                                <td>[HTN 2021]</td>
                                <td>Frontend Development</td>
                                <td>React</td>
                                <td>Max Huang</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Visual Design</td>
                                <td>Node.js</td>
                                <td>Jacquelyn Yu</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Firebase</td>
                                <td>Kun Zhu</td>
                            </tr>
                        </tbody>
                    </Nutshell>
                </Summary>
                <Section>
                    <Paragraph>
                        <hr className="subdivider"/>
                        <div className="paragraph">
                            Hack the North is the largest hackathon that occurs annually in Canada.
                            During this year's virtual weekend-long event, I collaborated with 3 other
                            individuals to build a digital product within the time constraint of 36 hours. 
                            As a team, we worked together for the first time to ideate the product, create 
                            the prototype, implement the functionalities, and finally present our pitch.
                        </div>
                    </Paragraph>
                </Section>
                <SectionDivider/>
                <Section>
                    <Heading
                    style={{textTransform: "lowercase"}}>
                        identifying the problem. ⭐
                    </Heading>
                    <Paragraph>
                        <div className="paragraph">
                            After some secondary research, we identified an increasing trend in audio-based 
                            learning and content consumption. In fact, <b>74% of users state that they go to
                            podcasts as a resource for learning new things.</b> As such, we decided to focus 
                            our project on the question:
                        </div>
                        <div className="quote">
                            "How might we improve the podcast-listening experience in order to enhance learning?"
                        </div>
                        <div className="paragraph">
                            Due to the limited time constraint of the hackathon, conducting primary research did
                            not seem feasible. Instead, we discussed our experience with audio-based learning among 
                            the team in order to brainstorm our solution. A common pain point is brought up: 
                        </div>
                        <div className="paragraph">
                            <b>Notetaking has long been an integral part of the learning process</b>, however, there has 
                            not been a convenient way for people to take notes on audio format of information. Most 
                            platforms simply do not have a way for users to record meaningful clips of audio content, 
                            nor to integrate these clips into their customized notes. 
                        </div>
                        <div className="paragraph">
                            We began to imagine a way to seamlessly integrate the functionality of notetaking into 
                            audio-learning experience. A mobile-first application is decided upon, as most users listen to 
                            podcast through their mobile devices. From here, <b>Voicenoted</b> — an audio notetaking mobile
                            application — is ideated.
                        </div>
                    </Paragraph>
                </Section>
                <SectionDivider/>
                <Section>
                    <Heading
                    style={{textTransform: "lowercase"}}>
                        defining the solution. ⭐
                    </Heading>
                    <Paragraph>
                        <img 
                        src="https://i.ibb.co/6ykbdH5/userflow.png"
                        alt="user journey map"/>
                        <img
                        src="https://i.ibb.co/nMbMjGm/userflowsketch.png"
                        alt="user flow sketch"/>
                        <img
                        src="https://i.ibb.co/vQ2HYjW/lofi1.png"
                        alt="low fidelity wireframe for listen + note functions"/>
                        <img
                        src="https://i.ibb.co/YDJJk6z/lofi2.png"
                        alt="low fidelity wireframe for organize + share functions"/>
                    </Paragraph>
                    <Paragraph>
                        <img
                        src="https://i.ibb.co/LphDrRw/stylebrainstorm.png"
                        alt="style brainstorm"/>
                        <img
                        src="https://i.ibb.co/DD6xNmT/styleguide.png"
                        alt="style guide"/>
                    </Paragraph>
                </Section>
            </Wrapper>
        )
    }
}

export default VoicenotedPost