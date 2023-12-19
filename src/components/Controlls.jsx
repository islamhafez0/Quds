import React from "react";

const Controlls = ({ onRangeChange }) => {
  return (
    <div className="controlls">
      <div>
        <label htmlFor="range1">تكبير حجم كرة الطوفان</label>
        <input
          type="range"
          id="range1"
          onChangeCapture={(e) => onRangeChange("range1", e.target.value)}
          max={130}
          min={0}
        />
        <label htmlFor="range1">تكبير حجم كرة القدس</label>
        <input
          onChange={(e) => onRangeChange("range2", e.target.value)}
          max={130}
          min={0}
          type="range"
          id="range2"
        />
      </div>
    </div>
  );
};

export default Controlls;
