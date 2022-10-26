import React, { useEffect } from "react";
import NotFound from "./NotFound";
import Photos from "./Photos";
import { useLocation, useParams } from "react-router-dom";

const PhotoContainer = ({ photoData, performSearch }) => {
  const location = useLocation();
  let params = useParams();

  useEffect(() => {
    if (params.tag) {
      performSearch(params.tag);
    } else {
      const pathname = location.pathname.substring(1);
      performSearch(pathname);
    }
  }, [params.tags, location.pathname]);

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
