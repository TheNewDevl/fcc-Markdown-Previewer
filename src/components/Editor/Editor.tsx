import {Window} from "../Window/Window";
import {ChangeEvent, useEffect, useRef} from "react";
import "./Editor.scss"

type EditorProps = {
  parser: (value: string) => void
}

const initialEditorValue = `# This is a Markdown Previewer
## You can write here all markdown you want and see the result in real time.
### Look at these examples :

Some inline-code, \`<div>This is a div</div>\`...

\`\`\`
// Also multi-line code :

function sum(a, b) {
  return a + b
}
\`\`\`

[Links](https://docs.framasoft.org/fr/grav/markdown.html), **bold** text and more...

> ## Block Quotes !
....
>

TABLES of course:

1st header | Second Header 
------------ | ------------- 
1st col | 2nd col
1st col | 2nd col 

- Unordered lists.
  - nested.

1. Ordered Lists.
1. ...
1. ...

Also images :
![JS illustration](../../../public/js-img.png)
`;

const Editor = ({parser}: EditorProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.value = initialEditorValue
      parser(textAreaRef.current.value)
    }
  }, [])

  return (
    <Window windowTitle="Editor">
      <textarea ref={textAreaRef}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => parser(e.target.value)}
                name="editor" id="editor"
                placeholder="Enter your markdown text here">
      </textarea>
    </Window>
  )
}

export default Editor