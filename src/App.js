import { Route, Routes as Router } from "react-router-dom";
import CardView from "./components/CardView";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<CardView />} />
      </Router>
    </div>
  );
}

export default App;
