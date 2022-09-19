import {Window} from "../Window/Window";
import {ChangeEvent} from "react";

type EditorProps = {
    parser: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Editor = ({parser}: EditorProps) => {

    return (
        <Window windowTitle="Editor">
            <textarea onChange={parser} name="editor" id="editor"
                      placeholder="Enter your markdown text here"></textarea>
        </Window>
    )
}

export default Editor