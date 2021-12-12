import { useEffect, useState } from "react";
import "./App.css";
import { apiKey } from "./api/config";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState([]);
  const [newQuery, setNewQuery] = useState("car");
  const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${newQuery}&per_page=24&format=json&nojsoncallback=1`;

  function addSearchQuery(searchQuery) {
    setNewQuery(searchQuery);
  }

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setImages(res.data.photos.photo);
      })
      .catch((error) => {
        console.log(
          "Ecountered an error with fetching and parsing data",
          error
        );
      });
  }, [apiUrl]);

  return (
    <div className="App">
      <h1>Search Photos</h1>
      <SearchInput addSearchQuery={addSearchQuery} />
      <div className="gallery">
        {images.map((image) => (
          <Card
            key={image.id}
            id={image.id}
            farmNumber={image.farm}
            serverNumber={image.server}
            secretNumber={image.secret}
            title={image.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
