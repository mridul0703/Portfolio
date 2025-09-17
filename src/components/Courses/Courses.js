import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCards";
import Particle from "../Particle";
import ml from "../../images/ml.jpg";
import oops from "../../images/oops.jpg";
import os from "../../images/os.jpg";

function Courses() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Courses</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the courses I've designed for everyone.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={[ml]}
              title="Machine Learning"
              description="Welcome to the Complete Machine Learning Course! This repository is designed as a self-paced, structured syllabus for learners at all levels — beginner, intermediate, and advanced."
              link="https://github.com/mridul0703/Machine-Learning"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={[oops]}
              title="Object Oriented Programming"
              description="This Course covers everything from the fundamentals of classes and objects to advanced concepts like templates, design patterns, system design, and expert-level C++ features. Each module is broken into chapters with theory, coding examples, and projects."
              link="https://github.com/mridul0703/Object-Oriented_Programming"
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath={[os]}
              title="Operating System"
              description="A complete series to understand the internal working of Operating Systems. This roadmap is designed for students, developers, and enthusiasts to learn OS concepts with structure and clarity."
              link="https://github.com/mridul0703/Operating-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Courses; 

