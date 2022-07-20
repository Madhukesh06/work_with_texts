import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  console.log(alert);

  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="AboutUs"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <div className="container"> */}
      <TextForm
        heading="Enter text below to Change to upperCase"
        mode={mode}
        showAlert={showAlert}
      />
      {/* </div> */}
      {/* <Routes> */}
      {/* <Route */}
      {/* path="about"
          element={
            <div className="container">
              {" "}
              <About mode={mode} />
            </div>
          }
        /> */}
      {/* <Route
          path="textform"
          element={ */}

      {/* {/* }
        // /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
