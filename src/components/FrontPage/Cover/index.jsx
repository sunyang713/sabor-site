import React from 'react';
import { Carousel, CarouselItem, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import Event from 'components/lib/Event';


import teamPic from 'assets/images/team.jpg';
import relevePic from 'assets/images/releve.jpg';
import './cover.styl';


export default class Cover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event_id: undefined,
      name: '',
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
        "fields":"name,cover",
        "limit":"1",
        "since":"today"
      },
      function(response) {
        let res = response.data[0];

        /* FACEBOOK SUCK MY DICK */
        let fullResPic = res.cover.source.replace(/\/[a-z][0-9]+x[0-9]+\//, '/');

        this.setState({
          calledFB: true,
          name: res.name,
          event_id: res.id,
          imgURL: fullResPic
        });
      }.bind(this)
    );
  }

  render() {

    if (Object.keys(this.props.FB).length !== 0 && !this.state.calledFB)
      this.getUpcomingEvent();


    let UpcomingEvent = '';

    if (this.state.event_id)
      UpcomingEvent = (
        <CarouselItem>
          <img src={ this.state.imgURL } />
          <div className="carousel-caption">
            <Event
              id={ this.state.event_id }
              FB={ this.props.FB }
              token={ this.props.token }
              openModal={ this.props.openModal }
              IsCarouselItem
            />
          </div>
        </CarouselItem>
      );

    return (
      <div>
        <Carousel>

          { UpcomingEvent }
          <CarouselItem>
            <Link to="team">
              <img href="#" src={ teamPic } />
            </Link>
          </CarouselItem>

          <CarouselItem>
            <Link to="team">
              <img src={ relevePic } />
              <div className="carousel-caption">
                <h3>Releve</h3>
                <p>Our highschool outreach program</p>
              </div>
            </Link>
          </CarouselItem>


        </Carousel>

      </div>
    );
  }
}







