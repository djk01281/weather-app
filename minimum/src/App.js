import "./App.css";
import Weather from "./Weather.js";
function App() {
  const countries = [
    "Seoul",
    "Tokyo",
    "Beijing",
    "New York",
    "California",
    "London",
    "Paris",
    "Moscow",
    "Sydney",
  ];
  return (
    <div className="App">
      {countries.map((country) => {
        return <Weather country={country}></Weather>;
      })}
    </div>
  );
}

export default App;
