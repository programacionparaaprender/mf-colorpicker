import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import useColors from "./hooks/useColors";
import ColorPicker from "./components/ColorPicker";

const App = () => {
  const { color, colorListado, handleChangeColor, handleSubmitSaveColor} = useColors();
  return (
    <div className="container">
      <ColorPicker 
        color={color} 
        colorListado={colorListado} 
        handleChangeColor={handleChangeColor} 
        handleSubmitSaveColor={handleSubmitSaveColor} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
