import React from "react";
import { useState } from "react";

const Color = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [Color, setColor] = useState("#ccc");

  const handleCreateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * hex.length);
      hexColor += hex[random];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRGBColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(`rgb(${red},${green},${blue})`);
    setColor(`rgb(${red},${green},${blue})`);
  };

  return (
    <div className="container">
      <div className="btns">
        <button
          className="btn"
          onClick={() => {
            setTypeOfColor("hex");
            handleCreateHexColor();
          }}>
          Create HEX Color
        </button>
        <button
          className="btn"
          onClick={() => {
            setTypeOfColor("rgb");
            handleCreateRGBColor();
          }}>
          Create RGB Color
        </button>
      </div>
      <div
        className="colors"
        style={{
          backgroundColor: Color,
        }}>
        <h1>{typeOfColor.toUpperCase()} Color</h1>
        <h2>{Color}</h2>
      </div>
    </div>
  );
};

export default Color;
