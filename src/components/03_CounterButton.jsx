import { useState } from "react";

function StateHook() {
  // use useState here
  const [count, setCount] = useState(0);

  function handleClick() {
    // set state variable here
    setCount(prev => prev + 1);
  }

  return (
    <button className="border rounded w-[300px] mb-2" onClick={handleClick}>
      Clicked {count} times 
    </button>
  );
}

export default StateHook;
