import style from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="Display"
      className={style.display}
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
