import React, { useState, useEffect } from "react";

function DateAndTime() {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return <p>This is the current time: {dateTime}</p>;
}

export default DateAndTime;
