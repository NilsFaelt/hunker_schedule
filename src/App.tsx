import "./App.css";
import { DisplayCalendar } from "./calendar/DisplayCalendar.component";
import scheduleFeb from "./schdules-data/schedules.data.json";

function App() {
  return (
    <div>
      <h1>HUNKER SCHEMA</h1>
      <DisplayCalendar month='Februari' schedule={scheduleFeb} />
    </div>
  );
}

export default App;
