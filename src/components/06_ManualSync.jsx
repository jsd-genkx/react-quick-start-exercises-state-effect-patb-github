import { useState } from "react";

const ManualSync = () => {
  // declare 3 state variables for name, age and position and assign them an empty string
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  
  // declare a const variable named syncInfo and
  // assign it an anonymous function that runs the set state function,
  // hard code with a name, age and position string values
  const syncInfo = () => {
    setName("Pat");
    setAge("23");
    setPosition("Learner");
  };

  return (
    <div>
      {/* render name, age and position when the sync button is clicked */}
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
