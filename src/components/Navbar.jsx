import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/navbar'
import logo from 'assets/images/title.png'

class Navbar extends React.Component {


  handleClick(path) {
    return () => this.props.push(path)
  }

  render() {

    const imageStyle = {
      height: 100,
      backgroundImage: 'url(' + logo + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      verticalAlign: 'middle',
      margin: '0 auto'
    }


    return this.props.withLogo ? (
      <div>
        <div className="container">
          <div className="row">
            <div className="four columns">
              <div className="u-max-full-width">
                <div style={ imageStyle } />
              </div>
            </div>
            <div className="eight columns">
              <div styleName="navbar-spacer"></div>
              <nav styleName="navbar">
                <div styleName="container">
                  <ul styleName="navbar-list">
                    {
                      this.props.links.map(
                        (link, index) => (
                          <li key={ link } styleName="navbar-item">
                            <a styleName="navbar-link" onClick={ this.handleClick(link) }>{ this.props.names[index] }</a>
                          </li>
                        )
                      )
                    }
                  </ul>
                </div>
              </nav>
              <div styleName="navbar-spacer"></div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div className="container">
          <div styleName="navbar-spacer"></div>
          <nav styleName="navbar">
            <div styleName="container">
              <ul styleName="navbar-list">
                {
                  this.props.links.map(
                    (link, index) => (
                      <li key={ link } styleName="navbar-item">
                        <a styleName="navbar-link" onClick={ this.handleClick(link) }>{ this.props.names[index] }</a>
                      </li>
                    )
                  )
                }
              </ul>
            </div>
          </nav>
          <div styleName="navbar-spacer"></div>
        </div>
      </div>
    )
  }
}


export default CSSModules(Navbar, styles)





// TODO paths should be an array passed in from the container










