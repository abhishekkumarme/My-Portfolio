import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="./profile.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I'm Abhishek Kumar, a passionate Full Stack Developer and AI Enthusiast from Patna, Bihar, currently pursuing my MCA at LPU. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy building responsive, scalable web applications.

                I've completed internships in system management and full stack development, and I actively explore AI/ML, working on projects in Python, NLP, and data science. I'm also certified in Python, data science, and web development.

                I love turning ideas into real-world tech solutions and continuously learning emerging technologies like Blockchain and Edge Computing.
              </p>

            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
