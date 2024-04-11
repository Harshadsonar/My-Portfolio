/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import laptopcode from '../assets/img/laptopcode.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import gmail from '../assets/img/gmail.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavigationBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={laptopcode} alt="LaptopCode" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#resumeNow" className={activeLink === 'resume'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>
              <a href="https://drive.google.com/file/d/1FN4EBqUq-qxsLZ8sy9I__oY7mxcbejr3/view?usp=drive_link" target="_blank">Resume</a>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/harshad-sonar/" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
                <a href="https://www.sonarharshad02@gmail.com/" target="_blank"><img src={gmail} alt="Gmail" /></a>
                <a href="https://wa.me/8237382014" target="_blank"><img src={whatsapp} alt="Whatsapp"/></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}