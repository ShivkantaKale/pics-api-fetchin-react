import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 7z5tMFJFZWb31AvoTEsJyW7boJVW7oePDzNNZ6mSJwY"
    },
    params: {
      query: term
    }
  });

  // console.log(response);
  return response.data.results;
};

export default searchImages;
