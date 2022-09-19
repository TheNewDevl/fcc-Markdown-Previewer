import './App.scss';
import Preview from "./components/Preview/Preview";
import {useState} from "react";
import {marked} from 'marked';
import Editor from "./components/Editor/Editor";
import hljs from "highlight.js"

function App() {
    const [areaValue, setAreaValue] = useState<string>("")


    const handleOutput = (areaValue: string) => {
        marked.setOptions({
            breaks: true,
            gfm: true,
            highlight: function (code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'javascript';
                return hljs.highlight(code, {language}).value;
            },
        })
        setAreaValue(() => marked.parse(areaValue))
    }

    return (
        <div className="App">
            <Editor parser={handleOutput}/>
            <Preview output={areaValue}/>
        </div>
    )
}

export default App
