import { useState } from "react";

const SingleColorPicker = ({ color, value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={0}
        max={255}
      />
    </div>
  );
};

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (value) => {
    setRValue(value);
  };

  const handleGChange = (value) => {
    setGValue(value);
  };

  const handleBChange = (value) => {
    setBValue(value);
  };

  const getBackgroundColor = () => {
    return `rgb(${rValue}, ${gValue}, ${bValue})`;
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: getBackgroundColor(),
        }}
      ></div>
      <div>
        <SingleColorPicker
          color="r"
          value={rValue}
          onChange={() => {
            /* ... */
          }}
        />

        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={() => {
            /* ... */
          }}
        />

        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={() => {
            /* ... */
          }}
        />
      </div>
    </div>
  );
};

export default RGBColorPicker;
