import React, { Component } from 'react';
import Footer from '../Footer';
import { Wrapper, Header } from './GalleryStyle'
{/*import Scribbles from '../Scribbles'*/}


class Gallery extends Component{
    render() {
        return (
            <Wrapper>
                <Header>
                    <caption>
                        "To create is to integrate as one with the larger tapestry of art: <br/>
                        the way a single star dances among an entire constellation, <br/>
                        a riverstream trickles back to the vastness of the ocean, <br/>
                        a diffraction of luminosity dissolving into the origin of light. <br/>
                        To create is to be simultaneously miniaturized and magnified; <br />
                        to dissipate into nothing and dissolve into wholeness with everything."
                    </caption>
                    <header>
                        make messy art & take up space.
                    </header>
                </Header>
                GALLERY IN PROGRESS
                <Footer/>
            </Wrapper>
        )
    }
}

export default Gallery
