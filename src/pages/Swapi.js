import { useEffect, useState } from "react";

export default function Swapi() {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState("");

  useEffect(() => {
    async function swapiData() {
      await fetch("https://www.swapi.tech/api/people")
        .then((res) => res.json())
        .then((data) => setPeople(data.results))
        .catch((err) => console.error("Get People Error: ", err));

      fetch(`https:www.swapi.tech/api/people/1`)
        .then((res) => res.json())
        .then((data) => console.log(data.properties))
        .catch((err) => console.error(err));
    }

    swapiData();
  }, []);

  return (
    <div className="swapi-container">
      <div className="swapi-header">
        <h1>Hello from swapi</h1>
        <form>
          <select>
            <option>Select Person To Find Out Their Home Planet</option>
            {people.map((person) => (
              <option key={person.uid}>{person.name}</option>
            ))}
          </select>
          <select>
            {people.map((person) => (
              <option key={person.uid}>{person.url}</option>
            ))}
          </select>
        </form>

        <input type="text" onChange={(e) => setPerson(e.target.value)} />
        {person}
      </div>
    </div>
  );
}
