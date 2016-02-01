import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/navbar'
import logo from 'assets/images/logo.png'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

// TODO FIX THIS
class NavigationBar extends React.Component {

  handleClick(path) {
    return () => this.props.push(path)
  }


  renderLinks() {
    return this.props.links.map((link, index) => (
      <NavItem eventKey={ index } onClick={ this.handleClick('/' + link) }>
        <div key={ link + index } className="text-uppercase">
          { link }
        </div>
      </NavItem>
    ))
  }


  renderHomeLinks() {
    return this.props.links.map((link, index) => (
      <NavItem eventKey={ index } onClick={ this.handleClick('/' + link) }>
        <div key={ link + index } className="text-uppercase" styleName="nav-item-spacer">
          { link }
        </div>
      </NavItem>
    ))
  }

  /**
   * This puts the logo in no matter what.
   */
  renderLogo() {
    const imageStyle = { backgroundImage: 'url(' + logo + ')' }
    return (
      <Navbar.Brand>
        <a href="" onClick={ this.handleClick('/home') }>
          <div style={ imageStyle } styleName="image" />
        </a>
      </Navbar.Brand>
    )
  }

  /**
   * This logo only appears on mobile, since the cover-hero element already says "sabor" in big letters.
   */
  renderHomeLogo() {
    const imageStyle = { backgroundImage: 'url(' + logo + ')' }
    return (
      <Navbar.Brand>
        <a href="" onClick={ this.handleClick('/home') }>
          <div style={ imageStyle } styleName="image responsive-brand" />
        </a>
      </Navbar.Brand>
    )
  }


  renderNavHome() {
    return (
      <div styleName="center-links-collapse">
        <div styleName="center-links">
          <Nav>
            {
              this.props.links.map((link, index) => (
                <NavItem eventKey={ index } onClick={ this.handleClick('/' + link) }>
                  <div key={ link + index } className="text-uppercase" styleName="nav-item-spacer">
                    { link }
                  </div>
                </NavItem>
              ))
            }
          </Nav>
        </div>
      </div>
    )
  }


  renderNav() {
    return (
      <Nav pullRight>
        {
          this.props.links.map((link, index) => (
            <NavItem eventKey={ index } onClick={ this.handleClick('/' + link) }>
              <div key={ link + index } className="text-uppercase">
                { link }
              </div>
            </NavItem>
          ))
        }
      </Nav>
    )
  }

  render() {
    return (
      <div styleName={ this.props.home ? "fixed-top-responsive" : "fixed-top-responsive container-fluid" }>
        <Navbar>
          <Navbar.Header>
            {
              this.props.home ?
                this.renderHomeLogo()
              : this.renderLogo()
            }
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {
              this.props.home ?
                this.renderNavHome()
              : this.renderNav()
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}


export default CSSModules(NavigationBar, styles, { allowMultiple: true })

