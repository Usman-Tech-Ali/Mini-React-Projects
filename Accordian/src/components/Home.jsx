import React from "react";
import data from "./data";
import { useState } from "react";

const Home = () => {
  const [selected, setselected] = useState(false);
  const [multiSelection, setmultiSelection] = useState(false);
  const [multiItems, setMultiItems] = useState([]);

  function handleSingleSelection(itemId) {
    if (selected === itemId) {
      setselected(null);
    } else {
      setselected(itemId);
    }
  }

  function handleMultiSelection(itemId) {
    let cpyMultiItems = [...multiItems];
    const index = cpyMultiItems.indexOf(itemId);
    if (index === -1) {
      cpyMultiItems.push(itemId);
    } else {
      cpyMultiItems.splice(index, 1);
    }
    setMultiItems(cpyMultiItems);
  }

  return (
    <div className="wrapper">
      <h1>Interactive Accordion</h1>
      <button onClick={() => setmultiSelection(!multiSelection)}>
        {multiSelection ? "Enable Single Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                className="title"
                onClick={() =>
                  multiSelection
                    ? handleMultiSelection(item.id)
                    : handleSingleSelection(item.id)
                }>
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {multiSelection ? (
                multiItems.indexOf(item.id) !== -1 && (
                  <div className="content">{item.answer}</div>
                )
              ) : selected === item.id ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
