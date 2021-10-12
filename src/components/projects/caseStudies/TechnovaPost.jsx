import React, { Component } from 'react'
import { 
    Hero, 
    Summary, 
    Nutshell, 
    Title,
    Subtitle,
    Content,
    Heading,
    Paragraph,
    Section,
    SectionDivider
 } from '../postStyles'
import Footer from '../../Footer'

class TechnovaPost extends Component {
    render() {
        return (
            <div>
                <Summary>
                    <Hero src="https://i.ibb.co/1ddn0L6/Hero.png"/>
                    <Title>Technova's Hack with Us</Title>
                    <Subtitle>Innovating the design for UWaterloo's first women+ in tech hackathon.</Subtitle>
                    <Nutshell>
                        <div className="nutshellGroup">
                            <div className="nutshellTitle">
                                <i class="far fa-calendar-alt"></i>
                            </div>
                            <div className="nutshellContent">
                                April - August 2021
                            </div>
                        </div>
                        <div className="nutshellGroup">
                            <div className="nutshellTitle">
                                <i class="fas fa-toolbox"></i>
                            </div>
                            <div className="nutshellContent">
                                Branding, UX Mockup, Visual Design.
                            </div>
                        </div>
                        <div className="nutshellGroup">
                            <div className="nutshellTitle">
                                <i class="fas fa-user-friends"></i>
                            </div>
                            <div className="nutshellContent">
                                Team of 6 Designers
                            </div>
                        </div>
                    </Nutshell>
                    <Content>
                        <Section>
                            <Heading>Context ⭐</Heading>
                            <Paragraph>
                                <div className="paragraph">
                                    As the first hackathon hosted by the University of Waterloo that focuses 
                                    on marginalized genders, participants from 30+ countries, including 500 
                                    hackers, 80 volunteers, and 20 organizers, joined together at TechNova's 
                                    Hack with Us for a week of <b> preparing, connecting, and hacking </b>. 
                                    From May to August 2021, I had the opportunity to work alongside 5 other 
                                    designers in order to innovate the brand identity, deliver the website design, 
                                    and create social media content for this inaugural event.
                                </div>
                                <div className="paragraph">
                                    For me, TechNova's mission is about 
                                    <b> building an inclusive and uplifting community </b>. 
                                    I am grateful to have been a part of such a passionate and multidisciplinary 
                                    team, where each individual seeks to contribute to a more inclusive tech 
                                    culture through uplifting the underrepresented individuals ✨
                                </div>
                            </Paragraph>
                        </Section>
                        <SectionDivider/>
                        <Section>
                            <Heading>Process ⭐</Heading>
                            <Paragraph>
                                <h5 className="subheading">1. Branding + Style Guide</h5>
                                <div className="paragraph">
                                    Creating the brand he first thing that the design team was tasked with. 
                                    More specifically, we wanted to establish the logo, colours, and typography 
                                    that will represent our organization. As an inaugural event, these initial 
                                    branding decisions will critically impact how TechNova will be perceived as 
                                    an organization. As a team, we spent many hours brainstorming and exchanging 
                                    feedbacks. Here are some snapshots of our collaborative workspaces on Figma!
                                </div>
                                <div className="paragraph">
                                    The Triple Tile became our logo as it concisely communicates the pillars 
                                    of our values, which are <b> career, community, and community </b>.
                                </div>
                                <div className="paragraph">
                                    We wanted the feelings conveyed by our visual branding to be in congruence 
                                    with the community-centered values held by the organization, so we chose 
                                    vibrant and contrasting tones of pink, teal, and purple for a 
                                    <a href="https://color.adobe.com/create/color-accessibility"> colour blind safe palette </a>
                                    that portrayed a bright and friendly impression. As for typography, 
                                    <a href="https://www.lexend.com/"> Lexend</a>, a font specifically designed 
                                    to accommadate diverse reading needs, was chosen for our wordmark. Quicksand 
                                    and Poppins were respectively selected for subtitles and text.
                                </div>
                                <hr className="subdivider"/>
                                <h5 className="subheading">2. Website UX</h5> 
                                <div className="paragraph">
                                </div>
                                <hr className="subdivider"/>
                                <h5 className="subheading">3. Social Media Graphics</h5> 
                                <div className="paragraph">
                                    As the hackathon is approaching and hacker applications are open, my role as a designer 
                                    became more marketing-oriented — we wanted to encourage engagement by creating a social 
                                    media presence for everyone to stay informed on our event updates.
                                </div>
                            </Paragraph>
                        </Section>
                    </Content>
                </Summary>
                <Footer/>
            </div>
        )
    }
}

export default TechnovaPost