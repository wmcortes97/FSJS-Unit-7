import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import apiKey from "./config";

//---------------------------Component Imports------------------------//
import SearchForm from "./components/SearchForm";
import MainNav from "./components/MainNav";
import PhotoContainer from "./components/PhotoContainer";
import FourOFour from "./components/FourOFour";

//-----------------------------App----------------------------//
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const performSearch = (query = "puppies") => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((responseData) => setPhotos(responseData.photos.photo))
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
    setLoading(false);
    //console.log(loading);
  };

  useEffect(() => {
    performSearch();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <SearchForm performSearchFunc={performSearch} />
        <MainNav search={performSearch} />
        <Routes>
          <Route path="/" element={<Navigate to="/puppies" />} />
          <Route
            path="/puppies"
            element={
              <PhotoContainer
                photoData={photos}
                performSearch={performSearch}
              />
            }
          />
          <Route
            path="/kittens"
            element={
              <PhotoContainer
                photoData={photos}
                performSearch={performSearch}
              />
            }
          />
          <Route
            path="/hamsters"
            element={
              <PhotoContainer
                photoData={photos}
                performSearch={performSearch}
              />
            }
          />
          <Route
            path="/search/:tag"
            element={
              <PhotoContainer
                photoData={photos}
                performSearch={performSearch}
              />
            }
          />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
