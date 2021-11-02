import React, { Component } from 'react';
import GalleryDisplay from '../GalleryDisplay';
import Footer from '../Footer';
import { 
    Wrapper,
    Header, 
    Masonry,
    GalleryTabs
} from './GalleryStyle'
import GalleryItems from '../GalleryItems'
import { Tab } from 'react-bootstrap'

const Landing = () => {
    return (
        <Header>
            <div>
                "To create is to integrate as one with the larger tapestry of art: <br/>
                the way a single star dances among an entire constellation, <br/>
                a riverstream trickles back to the vastness of the ocean, <br/>
                a diffraction of luminosity dissolving into the origin of light. <br/>
                To create is to be simultaneously miniaturized and magnified; <br />
                to dissipate into nothing and dissolve into wholeness with everything."
            </div>
            <header>
                make messy art <br/> & take up space.
            </header>
        </Header>
    )
}

class Gallery extends Component{

    constructor() {
        super();
        this.state = {
            activeTab: 'fullGallery'
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    renderGalleryDisplay = () => {
        const drawings = [
            'quarantine_portraits',
            'daisy_girl',
            'fish_girl',
            'floral_girl',
            'frowny_girl',
            'boba_girl',
            'tea_moon'
        ]
        let drawingsArray = []
        if (this.state.activeTab === "fullGallery" ) {
            for (let i = 0; i < drawings.length; i++) {
                const drawing = GalleryItems[drawings[i]]
                drawingsArray.push(
                    <GalleryDisplay drawing={drawing}/>
                )
            }
        }
        return drawingsArray;
    }

    renderPagedDisplay = () => {
        const projects = [
            'quarantine_portraits'
        ]
        let projectsArray = []
        if (this.state.activeTab === "pagedProjects" ) {
            for (let i = 0; i < projects.length; i++) {
                const project = GalleryItems[projects[i]]
                projectsArray.push(
                    <GalleryDisplay drawing={project}/>
                )
            }
        }
        return projectsArray;
    }

    handleSelect = (selectedTab) => {
        this.setState({
          activeTab: selectedTab
        });
    }

    render () {
        return (
            <Wrapper>
                <Landing/>
                <div>
                    <GalleryTabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                        {/* why is tab rendering logic not working? */}
                        <Tab 
                        eventKey='fullGallery' 
                        title="compilation./" 
                        tabClassName="tab" 
                        activeClassName="active">
                            <Masonry>
                                {this.renderGalleryDisplay()} 
                            </Masonry> 
                        </Tab>
                        <Tab 
                        eventKey='pagedProjects' 
                        title="stories./" 
                        tabClassName="tab" 
                        activeClassName="active">
                            <Masonry>
                                {this.renderPagedDisplay()}
                            </Masonry> 
                        </Tab>
                    </GalleryTabs>
                    </div>
                <Footer/>
            </Wrapper>
        )
    }
}

/* conditional rendering of gallery views */

export default Gallery;