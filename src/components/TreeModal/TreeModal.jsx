import { MyContext } from "../MyContext/MyContext";
import "./TreeModal.css";
import { useContext } from "react";
//import { connect } from "react-redux";
//import { fetchJsonData } from "../Redux/Action";

//----------- Redux is used--------------//
const TreeModal = () => {
  //   // const [journeyData, setJourneyData] = useState([]);
  //   // const TreeModal = ({ jsonData, fetchJsonData }) => {
  //   //     const [journeyData, setJourneyData] = useState([]);

  //   useEffect(() => {
  //     console.log("Debugger is running inside useeffect");
  //     fetchJsonData();
  //   }, [fetchJsonData]);

  // console.log("Debugger is running");
  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const response = await fetch("/data/journeyData.json");
  //     const responseData = await response.json();
  //     // console.log(responseData);
  //     setJourneyData(responseData);
  //   };
  //   dataFetch();
  // }, []);

  //---------using context here --------
  const jsonData = useContext(MyContext);
  return (
    <div className="treemodal-container">
      {jsonData &&
        jsonData.map((data, index) => (
          <div key={index} className="treemodal-section">
            <div className="modal-left-section">
              <img src={data.imageSource} alt="journey" className="modal-img" />
              <div className="modal-start-date">From {data.startDate}</div>
              <div className="modal-end-date">To {data.endDate}</div>
            </div>
            <div className="modal-vertical-line"></div>
            <div className="modal-right-section">
              <div className="modal-education-type">{data.type}</div>
              <div className="modal-journey-title">{data.title}</div>
              <div className="modal-journey-desc">{data.desc}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TreeModal;

//----------------- Redux --------------------//

// const mapStateToProps = (state) => ({
//   jsonData: state.jsonData,
// });

// const mapDispatchToProps = {
//   fetchJsonData,
// };

// TreeModal = connect(mapStateToProps, mapDispatchToProps)(TreeModal);
