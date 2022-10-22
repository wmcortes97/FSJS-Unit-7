import React from "react";
// REFERENCE:  `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
const Photos = (props) => (
  <li>
    <img
      src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
      alt={props.title}
    />
  </li>
);

export default Photos;
