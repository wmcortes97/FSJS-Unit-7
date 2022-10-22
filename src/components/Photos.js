import React from "react";

const Photos = (props) => {
  return (
    <li>
      <img
        src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
        alt=""
      />
    </li>
  );
};

export default Photos;
