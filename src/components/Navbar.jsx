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


    return (
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
      </div>
    )
  }
}


export default CSSModules(Navbar, styles)



