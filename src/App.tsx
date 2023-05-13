import { useState } from "react";
import "./App.css";

function App() {
  const [key, setKey] = useState<string>("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log({ event });
    setKey(event.key);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
      tabIndex={0}
      onKeyDown={handleKeyPress}
      onClick={() => {
        console.log("click");
      }}
    >
      <h1>Which key?</h1>
      <p>
        You pressed <code>{key}</code> key
      </p>
    </div>
  );
}

export default App;
