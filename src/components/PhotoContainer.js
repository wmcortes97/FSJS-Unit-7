import React from "react";
import NotFound from "./NotFound";
import Photos from "./Photos";
import { useParams } from "react-router-dom";

const PhotoContainer = ({ photoData, paramTag }) => {
  const params = useParams();
  console.log("hi from photocontainer:", params);

  paramTag(params);

  let photoList;

  if (photoData.length > 0) {
    photoList = photoData.map((photo) => (
      <Photos
        server={photo.server}
        id={photo.id}
        secret={photo.secret}
        title={photo.title}
        key={photo.id}
      />
    ));
  } else {
    photoList = <NotFound />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photoList}</ul>
    </div>
  );
};

export default PhotoContainer;
