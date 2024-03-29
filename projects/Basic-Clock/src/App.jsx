import ClockHeading from "./components/clockHeading";
import Paragraph from "./components/paragraph";
import DateAndTime from "./components/dateAndTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ClockHeading />
      <Paragraph />
      <DateAndTime />
    </div>
  );
}

export default App;
