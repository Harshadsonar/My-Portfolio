import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have developed the most interest in front-end technologies because I am a creative person and I really like designing. The best part about this field is I can actually look at my results and interact with it. I have good knowledge of HTML, CSS, javascript, DSA, bootstrap, REACT JS, and redux.<br></br>I've developed projects like podcast-platform, Crypto Tracker app, Github Listing Page, Real-time text analyzer app and many more.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image4" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image5" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image6" />
                                <h5>DSA</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image7" />
                                <h5>OOPS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image8" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  )
}