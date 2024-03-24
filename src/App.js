import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./routes/Homepage";
import RulesList from './routes/RulesList';
import GeneralRules from './data/rules/general-rules.json';
import JobRules from './data/rules/job-rules.json';
import KdReworkRules from './data/rules/kd-rework-rules.json';
import PropertyRules from './data/rules/property-rules.json';
import RoleplayRules from './data/rules/roleplay-rules.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "general-rules",
    element: <RulesList data={GeneralRules} prefixNumber={2} />,
  },
  {
    path: "job-rules",
    element: <RulesList data={JobRules} prefixNumber={5} />,
  },
  {
    path: "kdg-rework-rules",
    element: <RulesList data={KdReworkRules} prefixNumber={1} />,
  },
  {
    path: "property-rules",
    element: <RulesList data={PropertyRules} prefixNumber={3} />,
  },
  {
    path: "rolepaly-rules",
    element: <RulesList data={RoleplayRules} prefixNumber={4} />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
