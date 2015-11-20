import React from 'react';
import { Carousel, CarouselItem, Button } from 'react-bootstrap';
import eiffel from 'assets/images/eiffel.jpg';
import './cover.styl';


export default class Cover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event_id: undefined,
      imgURL: '',
      calledFB: false
    };
  }

  getUpcomingEvent() {
    this.props.FB.api(
      '/cusabor/events',
      'GET',
      {
        access_token: this.props.token,
        "fields":"cover.width(1000)",
        "limit":"1",
        "since":"today"
      },
      function(response) {
        let res = response.data[0];
        this.setState({
          calledFB: true,
          event_id: res.id,
          imgURL: res.cover.source
        });
      }.bind(this)
    );
  }

  render() {

    if (Object.keys(this.props.FB).length !== 0 && !this.state.calledFB)
      this.getUpcomingEvent();

    let UpcomingEvent = (
        <CarouselItem>
          <img src={ this.state.imgURL } />
          <div className="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </CarouselItem>
    );

    return (
      <div>
        <Carousel>


          <CarouselItem>
            <img src={ this.state.imgURL } />
            <div className="carousel-caption">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </CarouselItem>


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

      </div>
    );
  }
}







