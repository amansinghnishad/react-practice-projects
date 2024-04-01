import style from "./Buttons.module.css";

const Buttons = () => {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonContainer}>
      {buttons.map((buttons) => (
        <button key={buttons} className={style.button}>
          {buttons}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
