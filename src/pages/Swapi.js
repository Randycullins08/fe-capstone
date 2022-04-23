import { useState } from "react";

// TODO: have search render indivdual info

const urls = [
  "https://www.swapi.tech/api/people",
  "https://www.swapi.tech/api/planets",
  "https://www.swapi.tech/api/starships",
  "https://www.swapi.tech/api/species",
];

export default function Swapi() {
  const [url, setUrl] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  function handleSelectCategory(e) {
    const request = search ? url + "/?name=" + search : url;

    fetch(request)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.result || data.results);
      })
      .catch((err) => console.error("Get Swapi Error: ", err));
  }

  return (
    <div className="swapi-container">
      <div className="swapi-header">
        <h1>Hello from swapi</h1>
        <select onChange={(e) => setUrl(e.target.value)}>
          <option>Select Option</option>
          {urls.map((url) => {
            return (
              <option key={url} value={url}>
                {url.split("/").at(-1)}
              </option>
            );
          })}
        </select>
        {url && (
          <>
            <input
              type="text"
              placeholder="Enter a search parameter"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSelectCategory}>Search</button>
          </>
        )}

        {results.map((result) => (
          <ul key={result.uid}>
            <li>{result.name}</li>
          </ul>
        ))}

        {console.log(results)}

        {/* {results.map((result) => (
          <div>{JSON.stringify(result.properties.name)}</div>
        ))} */}
      </div>
    </div>
  );
}
