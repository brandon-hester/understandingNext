import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <HomePage />
    </div>
  );
}

function Header() {
  return (
    <>
      <h1>Develop. Preview. Ship. 🚀</h1>
    </>
  );
}
function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  function handleClick() {
    console.log("increment liked count");
  }
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like</button>
    </div>
  );
}

export default App;
