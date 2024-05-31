function SetColor() {
  // use useState here
  return (
    <div>
      {/* {color === "yellow" && ( */}
      <div
        className="border rounded flex justify-center items-center"
        style={{
          width: "150px",
          height: "150px",
          margin: "12px",
          background: "yellow",
        }}
      >
        YELLOW
      </div>
      {/* )} */}

      {/* {color === "blue" && ( */}
      <div
        className="border rounded flex justify-center items-center"
        style={{
          width: "150px",
          height: "150px",
          margin: "12px",
          background: "aqua",
        }}
      >
        BLUE
      </div>
      {/* )} */}

      <button
        className="border rounded px-2 mr-2"
        onClick={() => {}} // set state variable here
      >
        Show Yellow
      </button>
      <button
        className="border rounded px-2 mr-2"
        onClick={() => {}} // set state variable here
      >
        Show Blue
      </button>
    </div>
  );
}

export default SetColor;
