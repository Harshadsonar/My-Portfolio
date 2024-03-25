import { Container, Row, Col } from "react-bootstrap";
import laptopcode from "../assets/img/laptopcode.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gmail from '../assets/img/gmail.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import github from "../assets/img/MdiGithub.svg";


export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} style={{width:"40%"}}>
            <img src={laptopcode} alt="Logo" />
          </Col>
          <Col size={2} sm={2} style={{width:"40%"}}>
            <p>Made by Harshad Sonar</p>
            <p>Contact no : 8237382014</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{width:"20%"}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harshad-sonar/" target="_blank" rel="noreferrer noopener"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:sonarharshad02@gmail.com/" target="_blank" rel="noreferrer noopener"><img src={gmail} alt="Gmail" /></a>
              <a href="https://wa.me/8237382014" target="_blank" rel="noreferrer noopener"><img src={whatsapp} alt="Whatsapp" /></a>
              <a href="https://github.com/Harshadsonar" target="_blank" rel="noreferrer noopener"><img src={github} alt="Github"/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}