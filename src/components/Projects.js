import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/repository-images/Screenshot Podcast Platform.png";
import projImg2 from "../assets/repository-images/Screenshot CryptoTracker.png";
import projImg3 from "../assets/repository-images/Screenshot Text Analyzer App.png";
import projImg4 from "../assets/repository-images/Screenshot My spreadsheet - Google Sheets.png";
import projImg5 from "../assets/repository-images/RamaNavami App.png";
import projImg6 from "../assets/repository-images/Screenshot React Calculator.png";
import projImg7 from "../assets/repository-images/Screenshot Counter Application.png";
import projImg8 from "../assets/repository-images/Screenshot User Authentication system.png";
import projImg9 from "../assets/repository-images/Screenshot of My Portfolio.png";
import projImg10 from "../assets/repository-images/Screenshot dictionary app.png";
import projImg11 from "../assets/repository-images/Screenshot Phoenix Buses.png";
import projImg12 from "../assets/repository-images/Screenshot Signup.png";
import projImg13 from "../assets/repository-images/Screenshot Post Office Application.png";
import projImg14 from "../assets/repository-images/Screenshot OMDB Movie Search Dashboard.png";
import projImg15 from "../assets/repository-images/Screenshot NASA Picture of the day.png";
import projImg16 from "../assets/repository-images/github listing page.png";
import projImg17 from "../assets/repository-images/Movie Ticket Booking App.png";
import projImg18 from "../assets/repository-images/Crypto Currency Chart.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Podcast Platform",
      description: "Web Development",
      imgUrl: projImg1,
      deployedLink : "https://podcast-platform-project.vercel.app/",
    },
    {
      title: "Crypto Tracker",
      description: "Web Development",
      imgUrl: projImg2,
      deployedLink : "https://crypto-tracker-app-rho.vercel.app/",
    },
    {
      title: "Real-time Text Analyzer",
      description: "Web Development",
      imgUrl: projImg3,
      deployedLink : "https://real-time-text-analyzer.vercel.app/",
    },
    {
      title: "Google Sheet App",
      description: "Web Development",
      imgUrl: projImg4,
      deployedLink : "https://harshadsonar.github.io/Google-Sheet-App/",
    },
    {
      title: "RamaNavami App",
      description: "Web Development",
      imgUrl: projImg5,
      deployedLink : "https://rama-navami-app.vercel.app/",
    },
    {
      title: "React Calculator",
      description: "Web Development",
      imgUrl: projImg6,
      deployedLink : "https://harshadsonar.github.io/React-Calculator/",
    },
    {
      title: "Counter App",
      description: "Web Development",
      imgUrl: projImg7,
      deployedLink : "https://counter-app-chi-gold.vercel.app/",
    },
    {
      title: "User Auth System",
      description: "Web Development",
      imgUrl: projImg8,
      deployedLink : "https://harshadsonar.github.io/User-Authentication-System/",
    },
    {
      title: "My Portfolio App",
      description: "Web Development",
      imgUrl: projImg9,
      deployedLink : "https://my-portfolio-three-gamma-27.vercel.app/",
    },
    {
      title: "Dictionary App",
      description: "Web Development",
      imgUrl: projImg10,
      deployedLink : "https://harshadsonar.github.io/dictionary-app/",
    },
    {
      title: "phoenix bus Booking App",
      description: "Web Development",
      imgUrl: projImg11,
      deployedLink : "https://phoenix-bus-booking-app.vercel.app/",
    },
    {
      title: "Signup Page",
      description: "Web Development",
      imgUrl: projImg12,
      deployedLink : "https://harshadsonar.github.io/Frontend-3-Contest-3-July/",
    },
    {
      title: "Post Office App",
      description: "Web Development",
      imgUrl: projImg13,
      deployedLink : "https://harshadsonar.github.io/Post-Office-Application/",
    },
    {
      title: "IMDB Movie App",
      description: "Web Development",
      imgUrl: projImg14,
      deployedLink : "https://harshadsonar.github.io/OMDB-Movie-Search-Dashboard-With-Error-Handling/",
    },
    {
      title: "NASA Picture Page",
      description: "Web Development",
      imgUrl: projImg15,
      deployedLink : "https://harshadsonar.github.io/Frontend-3-Module-Test--August/",
    },
    {
      title: "Github Listing Page",
      description: "Web Development",
      imgUrl: projImg16,
      deployedLink : "https://github-listing-page.vercel.app/",
    },
    {
      title: " Movie Ticket Booking App",
      description: "Web Development",
      imgUrl: projImg17,
      deployedLink : "https://movie-ticket-booking-app-seven.vercel.app/",
    },
    {
      title: "Crypto Currency Chart",
      description: "Web Development",
      imgUrl: projImg18,
      deployedLink : "https://harshadsonar.github.io/Crypto-Currency-Page/",
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
                    I have good knowledge of HTML5, CSS3, javascript, DSA,
                    bootstrap, REACT JS, and redux.
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
