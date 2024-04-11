import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/repository-images/Screenshot Podcast Platform.png";
import projImg2 from "../assets/repository-images/Screenshot CryptoTracker.png";
import projImg3 from "../assets/repository-images/Screenshot Text Analyzer App.png";
import projImg4 from "../assets/repository-images/Screenshot My spreadsheet - Google Sheets.png";
import projImg5 from "../assets/repository-images/Screenshot Phoenix Buses.png";
import projImg6 from "../assets/repository-images/Screenshot React Calculator.png";
import projImg7 from "../assets/repository-images/Screenshot Counter Application.png";
import projImg8 from "../assets/repository-images/Screenshot User Authentication system.png";
import projImg9 from "../assets/repository-images/Screenshot of My Portfolio.png";
import projImg10 from "../assets/repository-images/Screenshot dictionary app.png";
import projImg11 from "../assets/repository-images/Screenshot Youtube Clone.png";
import projImg12 from "../assets/repository-images/Screenshot Signup.png";
import projImg13 from "../assets/repository-images/Screenshot Post Office Application.png";
import projImg14 from "../assets/repository-images/Screenshot OMDB Movie Search Dashboard.png";
import projImg15 from "../assets/repository-images/Screenshot NASA Picture of the day.png";
import projImg16 from "../assets/repository-images/Screenshot Multiple Timers App.png";
import projImg17 from "../assets/repository-images/Screenshot MeShop.png";
import projImg18 from "../assets/repository-images/Screenshot online bookstore app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Podcast Platform",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Crypto Tracker",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Real-time Text Analyzer",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Google Sheet App",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "phoenix bus Booking App",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "React Calculator",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Counter App",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "User Auth System",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "My Portfolio App",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Dictionary App",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Youtube App",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "Signup Form",
      description: "Design & Development",
      imgUrl: projImg12,
    },
    {
      title: "Post Office App",
      description: "Design & Development",
      imgUrl: projImg13,
    },
    {
      title: "IMDB Movie App",
      description: "Design & Development",
      imgUrl: projImg14,
    },
    {
      title: "NASA Picture Page",
      description: "Design & Development",
      imgUrl: projImg15,
    },
    {
      title: "Multiple Timer App",
      description: "Design & Development",
      imgUrl: projImg16,
    },
    {
      title: "MeShop App",
      description: "Design & Development",
      imgUrl: projImg17,
    },
    {
      title: "Podcast ",
      description: "Design & Development",
      imgUrl: projImg18,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={2}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have good knowledge of HTML, CSS, javascript, DSA,
                    bootstrap, REACT JS, and redux.{" "}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 6).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(6,12).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.slice(12,18).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Tab 1" />
    </section>
  );
};
