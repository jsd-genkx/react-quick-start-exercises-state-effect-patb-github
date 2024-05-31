import { useEffect } from "react";

const FirstEffect = () => {
  const greeting = () => {
    alert("Welcome to my web application.");
  };

  useEffect(greeting, []);

  return (
    <div>
      <div className="text">Hello JSD7!</div>
    </div>
  );
};

export default FirstEffect;
