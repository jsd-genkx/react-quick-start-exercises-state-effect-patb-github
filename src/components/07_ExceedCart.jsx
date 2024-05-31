const ExceedCart = () => {
  // use useState here to declare a state variable named count

  const checkExceedCart = () => {
    // if (count > 5) {
    //   alert("Item exceeded limit (5 item per cart).");
    // }
  };

  // use useEffect here to run checkExceedCart and monitor state change of count

  return (
    <div>
      <h5>You can only buy up to 5 items</h5>
      {/* render the count */}
      <h1>Item in Carts: </h1>
      <button
        className="border rounded py-1 px-2 hover:bg-blue-200 active:bg-teal-200"
        // onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default ExceedCart;
