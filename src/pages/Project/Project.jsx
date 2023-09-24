import "./Project.css";
import { useEffect, useState } from "react";

const Project = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("/data/projectsData.json");
        const responseData = await response.json();
        // console.log(responseData);
        setData(responseData);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="project-container">
      <h1 className="project-header">All Projects</h1>
      <div className="project-grid">
        {Data.map((data, index) => (
          <a
            href={data.link}
            target="_blank"
            rel="noopenner noreferrer"
            key={index}
            className="project-card"
          >
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
