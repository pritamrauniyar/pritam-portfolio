import TreeModal from "../../components/TreeModal/TreeModal";
import "./About.css";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <h2>Pritam Rauniyar</h2>

      <h3>Skills</h3>
      <ul>
        <li>Languages: C++, Java, Javascript</li>
        <li>Frameworks: Node.js, React.js</li>
        <li>Database: MySQL, MongoDB</li>
        <li>Other Technologies: Git/GitLab, Jira, Postman, Azure</li>
      </ul>

      <h3>Hobbies & Interests</h3>
      <p>
        I&apos;m an avid mobile games player and have achieved high levels in games
        such as PUBG and Clash of Clans. I also have a passion for travelling
        and have visited various places in Nepal and India. My dream is to
        explore the world throughout my life.
      </p>

      <h3>Education & Experience</h3>
      <TreeModal />
      {/* <VerticalTimeline>
        <VerticalTimelineElement
          date="2015"
          contentStyle={{ background: "#f9f9f9", color: "#010021" }}
          contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
        >
          <h4>Completed Primary School</h4>
          <p>Galaxy English Boarding School, Janakpur, Nepal</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2017"
          contentStyle={{ background: "#f9f9f9", color: "#010021" }}
          contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
        >
          <h4>Completed Secondary School</h4>
          <p>Model Secondary School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2018 - 2022"
          contentStyle={{ background: "#f9f9f9", color: "#010021" }}
          contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
        >
          <h4>Bachelor's Degree</h4>
          <p>
            Electronics and Communication Engineering - Motilal Nehru National
            Institute Of Technology, Allahabad, Prayagraj, India
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2022 - 2023"
          contentStyle={{ background: "#f9f9f9", color: "#010021" }}
          contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
        >
          <h4>Software Development Engineer</h4>
          <p>Ola Electric, Bengaluru, India</p>
        </VerticalTimelineElement>
      </VerticalTimeline> */}
    </div>
  );
};

export default About;
