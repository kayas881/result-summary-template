import React from "react";
import Result from "./components/Results";
import "./App.css";
import Summartt from "./components/Summartt";
function App() {
  return (
    <div className="flex justify-center">
      <Result />
      <Summartt />
    </div>
  );
}

export default App;
