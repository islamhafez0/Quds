import { useState } from "react";
import Quds1 from "./assets/Quds1.png";
import img1 from "./assets/p1.png";
import img2 from "./assets/p2.png";
import Controlls from "./components/controlls";
function App() {
  const [image, setImage] = useState(true);
  const [rangeValues, setRangeValues] = useState({
    range1: 50,
    range2: 50,
  });
  const handleImageClick = () => {
    setImage(!image);
  };
  const handleRangeChange = (id, value) => {
    const newValue = Math.max(60, value);
    setRangeValues((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };
  const ballOneStyles = {
    width: `${rangeValues.range1}px`,
    height: `${rangeValues.range1}px`,
  };
  const ballTwoStyles = {
    width: `${rangeValues.range2}px`,
    height: `${rangeValues.range2}px`,
  };
  return (
    <div className="main">
      <div className="container">
        <div className="img">
          <img
            onClick={handleImageClick}
            src={image ? img1 : img2}
            alt="palestine"
          />
        </div>
        <div className="palestine">
          <img src={Quds1} alt="quds" />
        </div>
        <div className="balls">
          <div style={ballOneStyles} className="ball ballOne">
            الطوفان
          </div>
          <div style={ballTwoStyles} className="ball ballTwo">
            القدس
          </div>
        </div>
      </div>
      <Controlls onRangeChange={handleRangeChange} />
    </div>
  );
}

export default App;
