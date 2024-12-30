import "./Electros.css";
import electroLine from "../../assets/images/ElectroLine.svg";
const electro1 = () => {
  return (
    <div className="solo-electro solo-electro1">
      <img src={electroLine} alt="ElectroLine" />
      <div className="solo-electro12"></div>
      <div className="solo-electro12 late"></div>
    </div>
  );
};

export default electro1;
