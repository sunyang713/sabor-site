import React from 'react'
// import FadeThrough from 'components/FadeThrough'
import FadeThrough from 'react-fadethrough'
import config from 'assets/config.json'
import images from 'assets/images/cover'
import title from 'assets/images/title.png'
import merge from 'toolbox/merge'

export default class Cover extends React.Component {

  render() {
    const imageStyle = {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      display: 'flex'
    }
    const titleStyle = {
      backgroundImage: 'url(' + title + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      margin: '0 auto',
      height: '50%',
      width: '50%',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
      filter: 'drop-shadow(10px 10px 8px black)'
    }
    return (
      <div style={ imageStyle }>
        <FadeThrough
          delay={ config.coverInterval }
          height={ '100vh' }
          width={ '100vw' }
        >
        {
          images.map(
            (image) => (
              <div
                style={ merge({ backgroundImage: 'url(' + image + ')' }, imageStyle) }
                key={ image }
              >
                <div style={ titleStyle } />
              </div>
            )
          )
        }
        </FadeThrough>
      </div>
    )
  }
}



