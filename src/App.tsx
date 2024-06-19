import "./App.css";
import { apiUrl } from "./utils/api_url";

function App() {
  return (
    <>
      <h1>NewsNest with MightyMeld</h1>
      <h2>{apiUrl}</h2>
    </>
  );
}

export default App;
