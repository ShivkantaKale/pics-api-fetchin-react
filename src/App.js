import "./styles.css";

import { useState } from "react";
import SeacrhBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SeacrhBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
