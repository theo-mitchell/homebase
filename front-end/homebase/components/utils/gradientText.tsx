import { useState } from "react";

const GradientText = (props) => {
  const [gradient, setGradient] = useState("blue");

  return <div style={{ color: gradient }}>{props.children}</div>;
};

export default GradientText;
