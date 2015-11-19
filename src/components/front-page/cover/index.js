import React from 'react';
import { Carousel, CarouselItem, Button } from 'react-bootstrap'
import eiffel from '../../../../assets/images/eiffel.jpg'
import './cover.styl'


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


        { carouselInstance }

      </div>
    )
  }
}

export default Cover;


const carouselInstance = (
  <Carousel>
    <CarouselItem>
      <img src={ eiffel } />
      <div className="carousel-caption">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </CarouselItem>
    <CarouselItem>
      <img src={ eiffel } />
      <div className="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </CarouselItem>
    <CarouselItem>
      <img src={ eiffel } />
      <div className="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </CarouselItem>
  </Carousel>
);


