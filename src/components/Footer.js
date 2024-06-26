import { Container, Row, Col } from "react-bootstrap";
import laptopcode from "../assets/img/laptopcode.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gmail from "../assets/img/gmail.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import github from "../assets/img/MdiGithub.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <img src={laptopcode} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-center">
            <p>Made by Harshad Sonar</p>
            <p>Contact Me:- <a href="tel:8237382014">8237382014</a></p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Harshadsonar" target="_blank">
                <img src={github} alt="Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshad-sonar/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://www.sonarharshad02@gmail.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={gmail} alt="Gmail" />
              </a>
              <a
                href="https://wa.me/8237382014"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={whatsapp} alt="Whatsapp" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
