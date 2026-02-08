import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import compiler from "../../Assets/Projects/codeEditor.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import cabfare from "../../Assets/Projects/cab-fare.png";
import plantDisease from "../../Assets/Projects/plantDisease.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import jobportal from "../../Assets/Projects/jobportal.png";
import devops_vm from "../../Assets/Projects/devops_vm.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobportal}
              isBlog={false}
              title="Job Portal"
              description="A full-stack Job Application Portal with React + Vite frontend and Node.js + Express + MongoDB backend. Supports Admin, Employer, and Applicant roles with role-based access and JWT authentication. Features include job posting, applications, resume previews/uploads, and a responsive UI. Built with a modular, scalable architecture using MVC and RESTful APIs for easy maintenance."
              ghLink="https://github.com/mridul0703/Job-Application-Portal-Backend"
              demoLink="https://jobapplicationportal.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              description="Cara is an advanced online marketplace, solely frontend-driven, providing a smooth shopping experience for users. With responsive design, it's accessible on all devices, featuring key pages like home, product listings, cart, and checkout. It includes user authentication, search, and payment integration for security. An admin dashboard ensures effortless management."
              ghLink="https://github.com/mridul0703/Cara-An-ecommerce-website"
              demoLink="https://mridul0703.github.io/Cara-An-ecommerce-website/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Explore my personalized portfolio crafted with React JS, showcasing my projects, skills, and experiences. Engage with dynamic design, seamless navigation, and interactive elements, reflecting my dedication to innovation and creativity in the digital realm."
              ghLink="https://github.com/mridul0703/Portfolio"
              demoLink="https://mridul0703.vercel.app/"
            />
          </Col>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plantDisease}
              isBlog={false}
              title="Plant Disease Detection Model using CNN (ML)"
              description="The Plant Disease Prediction Model is a deep learning project for plant disease detection. It uses CNN/Transfer Learning with image preprocessing, augmentation, and evaluation through accuracy/loss metrics. The model was trained and tested on leaf image datasets to ensure reliable performance."
              ghLink="https://github.com/mridul0703/Plant-Disease-Prediction-Model"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
