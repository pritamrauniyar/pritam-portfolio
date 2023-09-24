import "./Journey.css";
import "../utility.css";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../MyContext/MyContext";
import TreeModal from "../TreeModal/TreeModal";
const Journey = () => {
  // const [journeyData, setJourneyData] = useState([]);

  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const response = await fetch("/data/journeyData.json");
  //     const responseData = await response.json();
  //     // console.log(responseData);
  //     setJourneyData(responseData);
  //   };
  //   dataFetch();
  // }, []);
  //-------- Data retrived through mycontext---//
  const jsonData = useContext(MyContext);

  return (
    <div className="journey-section">
      <hr />
      <section>
        <span className="text-grey">Starting to till now</span>
        <div className="title"> My Journey</div>
        <div className="vertical-line-container">
          <TreeModal />
        </div>
        <div className="horizontal-line">
          {jsonData &&
            jsonData.map((data, index) => (
              <div className="vertical-line" key={index}>
                <img
                  src={data.imageSource}
                  alt="journey"
                  className="journey-img"
                />
                <div className="start-date">{data.startDate}</div>
                <div className="end-date">{data.endDate}</div>
                <div className="education-type">{data.type}</div>
                <div className="journey-title">{data.title}</div>
                <div className="journey-desc">{data.desc}</div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
export default Journey;
