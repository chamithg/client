import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import AllItems from "./components/AllItems";

function App() {
  return (
    <div className="App p-5 d-flex justify-content-center">
      <div>
        <h1>Product manager</h1>
        <Form />
        <AllItems />
      </div>
    </div>
  );
}

export default App;
