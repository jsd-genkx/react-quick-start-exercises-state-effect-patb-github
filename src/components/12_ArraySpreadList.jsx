import { useState } from "react";

let nextId = 0;

export default function ArraySpreadList() {
  const [name, setName] = useState("");
  const [inspiringPeople, setInspiringPeople] = useState([]);

  return (
    <>
      <h1>Inspiring people:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setInspiringPeople(
            [...inspiringPeople,
            {id: nextId++, name: name}
            ]
          );
          // use spread operator to create a new array with properties and values of the array artists
          // pass in new properties values as an object with a unique id and name
        }}
      >
        Add
      </button>
      <ul>
        {inspiringPeople.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}
