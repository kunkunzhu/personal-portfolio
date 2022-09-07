import React, { Component } from 'react';
// import { Modal } from 'react-bootstrap' -> figure out how modal works!
import { 
    DrawingCard, 
    Drawing, 
    Visual,
    VisualCard,
    ModalCard,
    Image } 
from './pages/GalleryStyle'

class GalleryDisplay extends Component {

    constructor() {
        super();
        this.state = { show: false };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
        console.log("show");
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    render () {
        const containsPages = this.props.drawing.pages;
        if (containsPages !== "0") {
            return (
            <VisualCard href={containsPages} target='_blank' rel='noreferrer'>
                <Visual src={this.props.drawing.image}/> 
            </VisualCard>
            )
        } else {
            return (
                <>
                <DrawingCard onClick={this.showModal} >
                    <div className="browser">
                        <i class="far fa-plus-square"></i>
                        <i class="far fa-minus-square"></i>
                    </div>
                    <Drawing src={this.props.drawing.image}/> 
                </DrawingCard>
                { this.show &&
                    <ModalCard 
                    onClick={this.hideModal} 
                    onHide={this.hideModal}
                    centered={true}>
                        <div>
                            <Image src={this.props.drawing.image} alt={this.props.drawing.title}/>
                        </div>
                        <div>
                            <div className="title">
                                <div className="title">
                                    {this.props.drawing.title} ({this.props.drawing.date})
                                </div>
                            </div>
                        </div>
                    </ModalCard>
                }
                </>
            )
        }
    }
}

export default GalleryDisplay