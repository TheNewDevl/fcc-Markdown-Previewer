/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";
import Editor from "./Editor";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from "@testing-library/react";

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
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container as Element);
    container!.remove();
    container = null;
  });

  it("should render", () => {
    act(() => {
      render(<Editor parser={() => {}} />, container as Element);
    });
  });

  it("should render with initial value", function () {
    act(() => {
      render(<Editor parser={() => {}} />, container as Element);
    });
    expect(document.querySelector("textarea")!.value).toEqual(
      initialEditorValue
    );
  });

  it("should update value and call parser two times ( first render and when fire event )", function () {
    const parser = vitest.fn();
    act(() => {
      render(<Editor parser={parser} />, container as Element);
    });
    fireEvent.change(document.querySelector("textarea")!, {
      target: { value: "new text" },
    });
    expect(document.querySelector("textarea")!.value).toEqual("new text");
    expect(parser).toHaveBeenCalledTimes(2);
  });
});
