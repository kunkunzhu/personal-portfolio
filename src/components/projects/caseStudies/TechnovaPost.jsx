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
    SectionDivider,
    Wrapper
 } from '../postStyles'
import Footer from '../../Footer'

class TechnovaPost extends Component {
    render() {
        return (
            <Wrapper>
                <Summary>
                    <Hero src="https://i.ibb.co/1ddn0L6/Hero.png"/>
                    <Title>Technova's Hack with Us</Title>
                    <Subtitle>Innovating the design for UWaterloo's first women+ in tech hackathon.</Subtitle>
                    <div style={{width: "50%"}}>
                        <Nutshell>
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
                                    <td>April - </td>
                                    <td>Branding</td>
                                    <td>Figma</td>
                                    <td>6 designers</td>
                                </tr>
                                <tr>
                                    <td> August 2021</td>
                                    <td>UX Prototyping</td>
                                    <td></td>
                                    <td>(20 organizers)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Visual Design</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Nutshell>
                    </div>
                    </Summary>
                    <Content>
                        <Section>
                            <Heading>Context ⭐</Heading>
                            <Paragraph>
                                <div className="paragraph">
                                    As the first hackathon hosted by the University of Waterloo that focuses 
                                    on marginalized genders, participants from 30+ countries, including 500 
                                    hackers, 80 volunteers, and 20 organizers, joined together at TechNova's 
                                    Hack with Us for a week of <b> preparing, connecting, and hacking</b>. 
                                    From May to August 2021, I had the opportunity to work alongside 5 other 
                                    designers in order to innovate the brand identity, deliver the website design, 
                                    and create social media content for this inaugural event.
                                </div>
                                <div className="paragraph">
                                    For me, TechNova's mission is about 
                                    <b> building an inclusive and uplifting community</b>. 
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
                                    feedbacks. <br/>
                                </div>
                                <img 
                                src="https://i.ibb.co/jVP2Drm/1-ideations.png" 
                                alt="Here are some snapshots of our collaborative workspaces on Figma!"
                                className="imgDisplay"/>
                                <div className="paragraph">
                                    The Triple Tile became our logo as it concisely communicates the pillars 
                                    of our values, which are <b> career, community, and community</b>.
                                    We wanted the feelings conveyed by our visual branding to be in congruence 
                                    with the community-centered values held by the organization, so we chose 
                                    vibrant and contrasting tones of pink, teal, and purple for a &thinsp;
                                    <a href="https://color.adobe.com/create/color-accessibility">colour blind safe palette</a>
                                    &thinsp;that portrayed a bright and friendly impression. As for typography, &thinsp;
                                    <a href="https://www.lexend.com/">Lexend</a>, a font specifically designed 
                                    to accommadate diverse reading needs, was chosen for our wordmark. Quicksand 
                                    and Poppins were respectively selected for subtitles and text.
                                </div>
                                <img 
                                src="https://i.ibb.co/BsxvKwK/1-typography.png" 
                                alt="typography & logo marks"
                                className="imgDisplay"/>
                                <img 
                                src="https://i.ibb.co/dmy4J77/1-color.png" 
                                alt="color schemes"
                                className="imgDisplay"/>
                                <hr className="subdivider"/>
                                <h5 className="subheading">2. Website UX</h5> 
                                <div className="paragraph">
                                    I supported our project manager, Jasmine, and our design lead, Brittney, 
                                    in creating the website for the hackathon, which serves as a one-stop location for 
                                    all the relevant information regarding the event.
                                </div>
                                <img 
                                src="https://i.ibb.co/B4kwvp3/2-problem.png" 
                                alt="define the problem" 
                                style={{width: "70%", marginLeft: "8rem"}}/>
                                <div className="paragraph">
                                    Different users (e.g. hackers, mentors, and sponsers) will have different priorities 
                                    in mind while visiting the hackathon site. For the single-page application, we defined 
                                    the navigation bar with the most important sections of the website, so that individuals 
                                    can easily be directed the section of the website that is the most meaningful to them and 
                                    perform their desired actions.
                                </div>
                                
                                <div className="paragraph">
                                    However, we wanted to especially prioritize the experience 
                                    of the hackers and ensure that they can find the information they need with ease. This is 
                                    reflected in the top-to-bottom hierachy of the webpage.
                                </div>
                                <div className="imgRow">
                                    <img src="https://i.ibb.co/RjbNsWf/2-navbar.png" alt="nav bar" className="smallerDisplay"/>
                                    <img src="https://i.ibb.co/qmVDXXz/2-userjourney.png" alt="hacker user journey" className="smallerDisplay"/>
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
                <Footer/>
            </Wrapper>
        )
    }
}

export default TechnovaPost