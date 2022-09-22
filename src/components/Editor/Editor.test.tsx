/**
 * @vitest-environment jsdom
 */
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";
import Editor from "./Editor";
import { act } from "react-dom/test-utils";
import { fireEvent } from "@testing-library/react";
import { createRoot } from "react-dom/client";

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
describe("Editor component suite test ", function () {
  let container: null | HTMLDivElement;
  const parser = vitest.fn();

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      createRoot(container as Element).render(<Editor parser={parser} />);
    });
  });

  afterEach(() => {
    // cleanup on exiting
    document.body.removeChild(container!);
    container = null;
    parser.mockClear();
  });

  it("should render", () => {});

  it("should render with initial value", function () {
    expect(document.querySelector("textarea")!.value).toEqual(
      initialEditorValue
    );
  });

  it("should update value and call parser two times ( first render and when fire event )", function () {
    fireEvent.change(document.querySelector("textarea")!, {
      target: { value: "new text" },
    });
    expect(document.querySelector("textarea")!.value).toEqual("new text");
    expect(parser).toHaveBeenCalledTimes(2);
  });
});
