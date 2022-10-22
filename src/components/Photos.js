import React from "react";

const Photos = (props) => (
  <li>
    <img
      src={`https://live.staticflickr.com/${props.server}/${props.key}_${props.secret}.jpg`}
      alt={props.title}
    />
  </li>
);

export default Photos;
