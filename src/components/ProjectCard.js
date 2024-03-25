import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, deployedLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={deployedLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#FFF" }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt="proj" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br />
            {deployedLink && <i>Click Here</i>}
          </div>
        </div>
      </a>
    </Col>
  );
};
