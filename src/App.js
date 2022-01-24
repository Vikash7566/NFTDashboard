import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "75%" }}>
          <Topbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
