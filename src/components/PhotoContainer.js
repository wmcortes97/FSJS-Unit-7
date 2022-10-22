import React from "react";
// import NotFound from "./NotFound";
import Photos from "./Photos";

// REFERENCE:  `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
const photoContainer = ({ photoData }) => {
  let photoList = photoData.map((photo) => (
    <Photos
      server={photo.server}
      key={photo.id}
      secret={photo.secret}
      title={photo.title}
    />
  ));

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photoList}
        {/* <NotFound /> */}
      </ul>
    </div>
  );
};

export default photoContainer;
