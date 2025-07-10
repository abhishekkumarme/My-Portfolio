import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="rgb(19, 135, 129)">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="March 2024 - April 2024"
              iconStyle={{ background: "rgb(19, 135, 129)", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Faculty Member (Technical Trainer)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                CodeBucket Solution Pvt. Ltd.
              </h4>
              <p>
                Conducted training sessions for BPSC Computer Science Teachers, developed structured learning modules, and organized hands-on workshops on data structures and algorithms.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="March 2024 - April 2024"
              iconStyle={{ background: "rgb(19, 135, 129)", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Web Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                DevTown Community
              </h4>
              <p>
                Built and deployed MERN stack projects, integrated third-party APIs for real-time data, and developed a performance tracking dashboard using React and Chart.js.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
