import style from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={style.Calculator}>
        <Display displayValue={calVal}></Display>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </>
  );
}

export default App;
