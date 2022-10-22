import React, { useEffect, useState } from "react";
// import apiKey from "./config";

//---------------------------Component Imports------------------------//
import SearchForm from "./components/SearchForm";
import MainNav from "./components/MainNav";
import PhotoContainer from "./components/PhotoContainer";

//-----------------------------App----------------------------//
const App = () => {
  const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f4cfeb4644a805a74f5f147d17164b18&tags=puppies&per_page=24&format=json&nojsoncallback=1"
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => setPhotos(responseData.photos.photo))
  //     .catch((error) => {
  //       console.log("Error fetching and parsing data", error);
  //     });
  // }, []);

  const performSearch = (query) => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f4cfeb4644a805a74f5f147d17164b18&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((responseData) => setPhotos(responseData.photos.photo))
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };
  return (
    <React.Fragment>
      <div className="container">
        <SearchForm performSearchFunc={performSearch} />
        <MainNav />
        <PhotoContainer photoData={photos} />
      </div>
    </React.Fragment>
  );
};

export default App;
