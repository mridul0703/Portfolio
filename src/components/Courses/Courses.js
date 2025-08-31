import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCards";
import Particle from "../Particle";

function Courses() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Courses</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the courses I've completed and certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath="https://via.placeholder.com/300x200/4a90e2/ffffff?text=React+JS"
              title="React JS Complete Course"
              description="Comprehensive React.js course covering fundamentals, hooks, state management, routing, and advanced concepts. Built multiple projects including portfolio, e-commerce, and weather applications."
              link="https://example.com/course1"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CourseCard
              imgPath="https://via.placeholder.com/300x200/00d4aa/ffffff?text=Node.js"
              title="Node.js & Express.js"
              description="Backend development course covering Node.js, Express.js, MongoDB, RESTful APIs, authentication, and deployment. Built full-stack applications with modern architecture."
              link="https://example.com/course2"
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath="https://via.placeholder.com/300x200/ff6b35/ffffff?text=Python+ML"
              title="Python for Machine Learning"
              description="Machine learning course covering Python, pandas, scikit-learn, data preprocessing, model training, and evaluation. Implemented cab fare prediction and other ML projects."
              link="https://example.com/course3"
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath="https://via.placeholder.com/300x200/7c3aed/ffffff?text=Web+Dev"
              title="Web Development Bootcamp"
              description="Full-stack web development bootcamp covering HTML, CSS, JavaScript, responsive design, and modern web technologies. Built multiple responsive websites and applications."
              link="https://example.com/course4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath="https://via.placeholder.com/300x200/059669/ffffff?text=Data+Structures"
              title="Data Structures & Algorithms"
              description="Comprehensive course on data structures, algorithms, problem-solving techniques, and coding interviews. Implemented various algorithms and solved coding challenges."
              link="https://example.com/course5"
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath="https://via.placeholder.com/300x200/dc2626/ffffff?text=Git+GitHub"
              title="Git & GitHub Mastery"
              description="Version control course covering Git fundamentals, branching strategies, collaboration workflows, and GitHub best practices. Learned to manage projects effectively."
              link="https://example.com/course6"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Courses; 