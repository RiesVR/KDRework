import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./routes/Homepage";
import RulesList from './routes/RulesList';
import Welcome from './routes/Welcome';

import GeneralRules from './data/rules/general-rules.json';
import JobRules from './data/rules/job-rules.json';
import KdReworkRules from './data/rules/kd-rework-rules.json';
import PropertyRules from './data/rules/property-rules.json';
import RoleplayRules from './data/rules/roleplay-rules.json';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/kdg-rework-rules" element={<RulesList data={KdReworkRules} prefixNumber={1} />} />
          <Route path="/general-rules" element={<RulesList data={GeneralRules} prefixNumber={2} />} />
          <Route path="/property-rules" element={<RulesList data={PropertyRules} prefixNumber={3} />} />
          <Route path="/roleplay-rules" element={<RulesList data={RoleplayRules} prefixNumber={4} />} />
          <Route path="/job-rules" element={<RulesList data={JobRules} prefixNumber={5} />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
