import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋 Hi Everyone, I'm <span className="purple">Mridul M Kumar</span>, a Web Developer. <br />
            Currently studying Computer Science Engineering at the <span className="purple">Indian Institute of Information Technology, Bhopal</span> 
            <br />
            <br />
            I'm dedicated to honing my skills in web development. Alongside, I'm venturing into the fascinating field of <span className="purple">Machine Learning</span>, exploring its potential to drive innovation.
            <br /><br />
            My goal is to leverage both my <span className="purple">Web Development</span> expertise and newfound knowledge in <span className="purple">Machine Learning</span> to create impactful solutions that shape the future of technology.
            <br /><br />Let's collaborate and bring bold ideas to life!
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keeping things simple is my mantra."{" "}
          </p>
          <footer className="blockquote-footer">Mridul M Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
