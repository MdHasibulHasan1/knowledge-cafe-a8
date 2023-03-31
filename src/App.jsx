import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blogs from "./componens/blogs/Blogs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Blogs></Blogs>
    </div>
  );
}
export default App;
