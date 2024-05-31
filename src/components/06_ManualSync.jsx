import { useState } from "react";

const ManualSync = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  const syncInfo = () => {
    setName("Spock");
    setAge(99);
    setPosition("Commander");
  };

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Position: {position}</h3>
      <button
        className="border rounded py-1 px-2 hover:bg-blue-200 active:bg-teal-200"
        onClick={() => {
          syncInfo();
        }}
      >
        Sync Info
      </button>
    </div>
  );
};

export default ManualSync;
