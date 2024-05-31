import { useState } from "react";

function StateHook() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="border rounded w-[300px] mb-2" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default StateHook;
