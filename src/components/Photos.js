import React from "react";

const Photos = (props) => (
  <li>
    <img
      src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
      alt={props.title}
    />
  </li>
);

export default Photos;
