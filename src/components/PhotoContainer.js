import React, { useEffect } from "react";
import NotFound from "./NotFound";
import Photos from "./Photos";
import { useParams } from "react-router-dom";

const PhotoContainer = ({ photoData, performSearch }) => {
  let params = useParams();
  //   console.log("from photocontainer:", params);
  //   console.log("using params.tag", params.tag);

  useEffect(() => {
    if (params !== "puppies") {
      performSearch(params.tag);
    }
  }, [params, performSearch]);

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
