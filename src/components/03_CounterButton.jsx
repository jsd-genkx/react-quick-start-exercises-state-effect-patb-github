function StateHook() {
  // use useState here

  function handleClick() {
    // set state variable here
  }

  return (
    <button className="border rounded w-[300px] mb-2" onClick={handleClick}>
      {/* Clicked {count} times */}
    </button>
  );
}

export default StateHook;
