import React, { useState } from 'react';
import './App.css';
import second from './images/illustration-desk.svg';
import third from './images/third-illustartion.svg';
import fourth from './images/fourth.svg';
import logo from './images/logo1.svg';
import downArrowIcon from './images/icon-arrow-light.svg';
import upArrowIcon from './images/icon-arrow-light.svg';
import icon from './images/icon-small.svg';
import close from './images/close.svg';

function App() {
  const [isProductDropdownVisible, setProductDropdownVisible] = useState(false);
  const [isProductArrowRotated, setProductArrowRotated] = useState(false);

  const [isCompanyDropdownVisible, setCompanyDropdownVisible] = useState(false);
  const [isCompanyArrowRotated, setCompanyArrowRotated] = useState(false);

  const [isConnectDropdownVisible, setConnectDropdownVisible] = useState(false);
  const [isConnectArrowRotated, setConnectArrowRotated] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    console.log('Mobile menu clicked');
    console.log('isMobileMenuVisible before toggle:', isMobileMenuVisible);
    setMobileMenuVisible(!isMobileMenuVisible);
    console.log('isMobileMenuVisible after toggle:', !isMobileMenuVisible);
  };

  const toggleDropdown = (dropdownName) => {
    if (dropdownName === 'product') {
      setProductDropdownVisible(!isProductDropdownVisible);
      setProductArrowRotated(!isProductArrowRotated);
    } else if (dropdownName === 'company') {
      setCompanyDropdownVisible(!isCompanyDropdownVisible);
      setCompanyArrowRotated(!isCompanyArrowRotated);
    } else if (dropdownName === 'connect') {
      setConnectDropdownVisible(!isConnectDropdownVisible);
      setConnectArrowRotated(!isConnectArrowRotated);
    }
  };

  return (
    <div>
      <section className="wrapper">
        <nav>
          <div className="cover">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul className="menulist">
              <li>
                <button className="menu-button" onClick={() => toggleDropdown('product')}>
                  Product
                  <img
                    className={`arrow-icon ${isProductArrowRotated ? 'rotate-icon' : ''}`}
                    src={isProductDropdownVisible ? upArrowIcon : downArrowIcon}
                    alt=""
                  />
                </button>
                {isProductDropdownVisible && (
                  <ul className="dropdown">
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                  </ul>
                )}
              </li>

              <li>
                <button className="menu-button" onClick={() => toggleDropdown('company')}>
                  Company
                  <img
                    className={`arrow-icon ${isCompanyArrowRotated ? 'rotate-icon' : ''}`}
                    src={isCompanyDropdownVisible ? upArrowIcon : downArrowIcon}
                    alt=""
                  />
                </button>
                {isCompanyDropdownVisible && (
                  <ul className="dropdown">
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                  </ul>
                )}
              </li>
              <li>
                <button className="menu-button" onClick={() => toggleDropdown('connect')}>
                  Connect
                  <img
                    className={`arrow-icon ${isConnectArrowRotated ? 'rotate-icon' : ''}`}
                    src={isConnectDropdownVisible ? upArrowIcon : downArrowIcon}
                    alt=""
                  />
                </button>
                {isConnectDropdownVisible && (
                  <ul className="dropdown">
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="button">
            <ul className="mobilemenulist">
              <li>Product
                <img className={`mobiledown f1 ${isProductArrowRotated ? 'rotate-icon' : ''}`} src={downArrowIcon} alt="" onClick={() => toggleDropdown('product')} />
                <ul className={`mobileproduct ${isProductDropdownVisible ? 'show-dropdown' : ''}`}>
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </ul>
              </li>
              <li>Company
                <img className={`mobiledown f2 ${isCompanyArrowRotated ? 'rotate-icon' : ''}`} src={downArrowIcon} alt="" onClick={() => toggleDropdown('company')} />
                <ul className={`mobilecompany ${isCompanyDropdownVisible ? 'show-dropdown' : ''}`}>
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              </li>
              <li>Connect
                <img className={`mobiledown f3 ${isConnectArrowRotated ? 'rotate-icon' : ''}`} src={downArrowIcon} alt="" onClick={() => toggleDropdown('connect')} />
                <ul className={`mobileconnect ${isConnectDropdownVisible ? 'show-dropdown' : ''}`}>
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ul>
              </li>
            </ul>
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
          </div>
          <div className="hamburgericon" onClick={toggleMobileMenu}>
            <img src={icon} alt="" />
          </div>
          <div className="closeicon" onClick={toggleMobileMenu}>
            <img src={close} alt="" />
          </div>
        </nav>
        
        {/* Conditionally render the 'buttons' div based on 'isMobileMenuVisible' */}
        {isMobileMenuVisible && (
          <div className="buttons">
            {/* Render 'Product' dropdown content */}
            <ul className={`mobileproduct ${isProductDropdownVisible ? 'show-dropdown' : ''}`}>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
            {/* Render 'Company' dropdown content */}
            <ul className={`mobilecompany ${isCompanyDropdownVisible ? 'show-dropdown' : ''}`}>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            {/* Render 'Connect' dropdown content */}
            <ul className={`mobileconnect ${isConnectDropdownVisible ? 'show-dropdown' : ''}`}>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        )}
        
        <div className="maincontent">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="buttondiv">
            <button className="start">Start for Free</button>
            <button className="learnmore">Learn More</button>
          </div>
        </div>
      </section>
      
      <section className="secondcontent">
    <h1>Designed for the future</h1>

          <div className="illustrator2">
      <img src={second} alt=""/>
    </div>
    <div className="secondcover">
      <div className="secondtext">
        <h2>Introducing an extensible editor</h2>
        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
          change the looks of a blog.</p>
      </div>
      <div className="secondtext">
        <h2>Robust content management</h2>
        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
      </div>
    </div>
    <div className="illustrator">
      <img src={second} alt=""/>
    </div>
  </section>
  <section className="thirdcontent">
    <img className="mobile" src={third} alt=""/>
    <div className="thirdtext">
      <h1>State of the Art Infrastructure</h1>
      <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
      This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
    </div>
  </section>
  <section className="fourthcontent">
    <img className="mob" src={fourth} alt=""/>
    <div className="fourthtext">
      <div className="one">
        <h1>Free, open, simple</h1>
        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
      </div>
      <div className="one">
        <h1> Powerful tooling</h1>
        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.</p>
      </div>
    </div>
  </section>
      <footer className="footersection">
        <div className="footer">
          <div className="footerimage footertext">
            <img src={logo} alt="" />
          </div>
          <div className="footertext">
            <h5>Product</h5>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </div>
          <div className="footertext">
            <h5>Company</h5>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </div>
          <div className="footertext">
            <h5>Connect</h5>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
