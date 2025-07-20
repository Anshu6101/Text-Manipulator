import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import Alert from "./components/Alert";

// import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether darkmode is enabled or not.

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0D1E2F";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Utils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to Analyze"
                  mode={mode}
                />
              }
            />
          </Routes> */}
          <Textform
            showAlert={showAlert}
            heading="Enter the text to Analyze"
            mode={mode}
          />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
