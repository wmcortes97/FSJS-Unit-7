import React, { useEffect, useState, Component } from "react";
//import apiKey from "./config";

//components
import SearchForm from "./components/SearchForm";
import MainNav from "./components/MainNav";
import PhotoContainer from "./components/PhotoContainer";

//-----------------------------App-------------------------//
const App = () => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f4cfeb4644a805a74f5f147d17164b18&tags=dogs&per_page=24&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((responseData) => setPhotos(responseData));
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <SearchForm />
        <MainNav />
        <PhotoContainer photos={photos} hello="hello" />
      </div>
    </React.Fragment>
  );
};

export default App;
