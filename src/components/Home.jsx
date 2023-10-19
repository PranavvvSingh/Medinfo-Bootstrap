import React, { useState, useEffect } from "react";
import Article from "./Article.jsx";
import axios from "axios";

export default function Posts({ url }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => console.log("Error fetching data!"));
  }, []);

  return (
    <>
      {results.map((res) => (
        <Article
          key={res.id}
          name={res.name}
          description={res.description}
          tags={res.tags}
          source={res.source}
          sourceUrl={res.sourceUrl}
        />
      ))}
    </>
  );
}
