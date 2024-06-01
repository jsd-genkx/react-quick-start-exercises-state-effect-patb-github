import { useState } from "react";

function SetColor() {
  // use useState here
  const [isYellow, setIsYellow] = useState(true);

  return (
    <div>
      {isYellow &&
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
      </div>}
      {/* )} */}

      {!isYellow &&
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
      </div>}
      {/* )} */}

      <button
        className="border rounded px-2 mr-2"
        onClick={() => {setIsYellow(true)}} // set state variable here
      >
        Show Yellow
      </button>
      <button
        className="border rounded px-2 mr-2"
        onClick={() => {setIsYellow(false)}} // set state variable here
      >
        Show Blue
      </button>
    </div>
  );
}

export default SetColor;
