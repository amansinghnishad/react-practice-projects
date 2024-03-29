function DateAndTime() {
  let date = new Date().toLocaleDateString();
  let Time = new Date().toLocaleTimeString();
  return (
    <p>
      This is the current time:{date}-{Time};
    </p>
  );
}

export default DateAndTime;
