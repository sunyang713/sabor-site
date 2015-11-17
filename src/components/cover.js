import React from 'react';
import { Carousel, CarouselItem, Jumbotron, Button } from 'react-bootstrap'
import eiffel from '../../resources/images/eiffel.jpg'
import './styles/cover.styl'


class Cover extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: '',
  //     name: '',
  //     description: ''
  //   };
  // }

  // componentDidMount() {

  // }

  render() {

    return (

      <div>

        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>

        { carouselInstance }

      </div>
    )
  }
}

export default Cover;




const ControlledCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, selectedDirection) {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  },

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <CarouselItem>
          <img src={ require("../../resources/images/eiffel.jpg") }/>
          <div className="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={ require("../../resources/images/eiffel.jpg") }/>
          <div className="carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={ require("../../resources/images/eiffel.jpg") }/>
          <div className="carousel-caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </CarouselItem>
      </Carousel>
    );
  }
});






const carouselInstance = (
  <Carousel>
    <CarouselItem>
      <img src={ require("../../resources/images/eiffel.jpg") } />
      <div className="carousel-caption">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </CarouselItem>
    <CarouselItem>
      <img src={ require("../../resources/images/eiffel.jpg") } />
      <div className="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </CarouselItem>
    <CarouselItem>
      <img src={ require("../../resources/images/eiffel.jpg") } />
      <div className="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </CarouselItem>
  </Carousel>
);











