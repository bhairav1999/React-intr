import React from "react";

const ToggleButton = () => {
  const [activeIndex, setActiveIndex] = React.useState("first");

  const toggleButton = (e) => {
    setActiveIndex(e.target.value);
  };

  return (
    <div>
      <label htmlFor="firstIndex">First Index</label>
      <input
        type="radio"
        name="index"
        id="firstIndex"
        value="first"
        onChange={toggleButton}
        checked={activeIndex === "first"}
      />
      <label htmlFor="secondIndex">Second Index</label>
      <input
        type="radio"
        name="index"
        id="secondIndex"
        value="second"
        onChange={toggleButton}
        checked={activeIndex === "second"}
      />
      {activeIndex === "first" && <p>First</p>}
      {activeIndex === "second" && <p>Second</p>}
    </div>
  );
};

export default ToggleButton;
