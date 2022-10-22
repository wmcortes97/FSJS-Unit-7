import React from "react";
// import NotFound from "./NotFound";
import Photos from "./Photos";

const photoContainer = ({ photoData }) => {
  let photoList = photoData.map((photo) => (
    <Photos
      server={photo.server}
      id={photo.id}
      secret={photo.secret}
      title={photo.title}
      key={photo.id}
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
