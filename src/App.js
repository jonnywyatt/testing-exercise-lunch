import "./App.css";
import { formatTeamMemberDetails } from "./formatTeamMemberDetails";

function App() {
  const lunch = formatTeamMemberDetails();
  return (
    <div className="App">
      <h1>Team lunch for today:</h1>
      <p>{lunch}</p>
    </div>
  );
}

export default App;
