import './App.scss';
import Preview from "./components/Preview/Preview";
import {ChangeEvent, useState} from "react";
import {marked} from 'marked';
import Editor from "./components/Editor/Editor";

function App() {
    const [areaValue, setAreaValue] = useState<string>("")

    const handleOutput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAreaValue(() => marked.parse(e.target.value))
    }

    return (
        <div className="App">
            <Editor parser={handleOutput}/>
            <Preview output={areaValue}/>
        </div>
    )
}

export default App
