import { useEffect } from "react";

const FirstEffect = () => {
  // create a const variable and assign a greeting message as a string
  const greet = () => {
    alert("Hello, World!");
    console.log("hello")
  }
  // use useEffect here to trigger greeting
  useEffect(greet, []);

  return (
    <div>
      <div className="text">Hello JSD7!</div>
    </div>
  );
};

export default FirstEffect;
