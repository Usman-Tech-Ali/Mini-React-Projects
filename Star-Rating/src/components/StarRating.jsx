import { useState } from "react";
import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars }) => {
  const [StarRating, setStarRating] = useState(0);

  const [hover, setHover] = useState(0);

  function handleClick(getCurrIndex) {
    // console.log(getCurrIndex);
    setStarRating(getCurrIndex);
  }

  function handleMouseEnter(getCurrIndex) {
    // console.log(getCurrIndex);
    setHover(getCurrIndex);
  }

  function handleMouseLeave() {
    // console.log(getCurrIndex);
    setHover(StarRating);
  }

  return (
    <div className="stars">
      {Array.from({ length: noOfStars }, (_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || StarRating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
