import { useState } from "react";
import Hello from "./Components/Hello";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Hello />
        </div>
      </Router>
    </>
  );
}

export default App;