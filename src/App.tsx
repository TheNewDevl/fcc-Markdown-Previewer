import "./App.scss";
import Preview from "./components/Preview/Preview";
import { useState } from "react";
import Editor from "./components/Editor/Editor";
import DOMPurify from "dompurify";
import { Att } from "./components/Atb/Atb";
import { markedInstance } from "./Utils/marked";

function App() {
  const [areaValue, setAreaValue] = useState<string>("");

  const handleOutput = (areaValue: string) => {
    setAreaValue(() => DOMPurify.sanitize(markedInstance.parse(areaValue)));
  };

  return (
    <div className="App">
      <Editor parser={handleOutput} />
      <Preview output={areaValue} />
      <Att />
    </div>
  );
}

export default App;
