import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";
import { HashLoader } from "react-spinners";
import whatsapp from '../assets/img/whatsapp.svg';



export const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const { firstName, lastName, email, phone, message} = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/harshadsonar02/google_sheets/TqlCOfuEAPvbyWTJ?tabId=Sheet2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [firstName, lastName, email, phone, message],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => {
        setShowLoader(false); 
        setShowPopup(true); 
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  {(!showPopup && !showLoader) && (
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          value={firstName}
                          placeholder="First Name"
                          onChange={handleChange}
                          autoComplete="on"
            autoSave="on"
            required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          value={lastName}
                          placeholder="Last Name"
                          onChange={handleChange}
                          autoComplete="on"
            autoSave="on"
            required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={email}
                          name="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          autoComplete="on"
            autoSave="on"
            required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={phone}
                          name="phone"
                          placeholder="Phone No."
                          onChange={handleChange}
                          autoComplete="on"
            autoSave="on"
            required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={message}
                          name="message"
                          placeholder="Message"
                          onChange={handleChange}
                          autoComplete="on"
                          autoSave="on"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>Submit</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                  )}
                  {showLoader && (
                   <div className="loader">
                     <p>Submitting...</p>
                     <HashLoader color="rgba(0, 144, 246, 1)" />                   
                     </div>
                 )}
                 {showPopup && (
                   <div className="popup">
                     <div className="popup-content">
                       <h3>Form Submitted Successfully!</h3>
                       <p>DM me using Whatsapp.</p> 
                       <div className="social-icon submit-icon">
                         <a
                           href="https://wa.me/8237382014"
                           rel="noopener nonreferrer"
                           target="_blank"
                         >
                           <img src={whatsapp} alt="Whatsapp" />
                         </a>
                       </div><br /> <br />
                       <button onClick={() => setShowPopup(false)}>Close</button>
                     </div>
                   </div>
                 )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
