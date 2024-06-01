import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import compiler from "../../Assets/Projects/codeEditor.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import cabfare from "../../Assets/Projects/cab-fare.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
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
              imgPath={[portfolio]}
              isBlog={false}
              title="Portfolio"
              description="Explore my personalized portfolio crafted with React JS, showcasing my projects, skills, and experiences. Engage with dynamic design, seamless navigation, and interactive elements, reflecting my dedication to innovation and creativity in the digital realm."
              ghLink="https://github.com/mridul0703/Portfolio"
              demoLink="https://mridul0703.vercel.app/"
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
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="Welcome to the Weather App! This application allows you to search for and view weather information for any city. It displays current weather data and supports both Celsius and Fahrenheit temperature units and uses OpenWeather API to fetch the weather data."
              ghLink="https://github.com/mridul0703/Weather-App"
              demoLink="https://mridul-weather-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cabfare}
              isBlog={false}
              title="Cab Fare Prediction (ML)"
              description="This machine learning project focuses on building and evaluating predictive models for cab fare prediction. We perform extensive data processing, cleaning, and feature extraction to prepare the dataset for model training. This project aims to predict cab fares accurately based on various input parameters such as location, no. of passengers and time."
              ghLink="https://github.com/mridul0703/Cab-fare-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compiler}
              isBlog={false}
              title="Web Assmbly Compiler"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/mridul0703/Web-Assembly-Compiler"
                            
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
