/** @vitest-environment jsdom */
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import { fireEvent } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";

describe("App", function () {
  let container: null | HTMLDivElement;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      createRoot(container as Element).render(<App />);
    });
  });

  afterEach(() => {
    // cleanup on exiting
    document.body.removeChild(container!);
    container = null;
  });

  it("should display the default value ", function () {
    expect(
      document
        .querySelector("#preview")!
        .textContent!.includes("This is a Markdown Previewer")
    ).toBe(true);
  });

  it("Preview text content should be updated when textArea value changes", function () {
    fireEvent.change(document.querySelector("textarea")!, {
      target: { value: "update" },
    });
    expect(document.querySelector("#preview")!.textContent).toBe("update\n");
  });

  it("markdown textArea content should be parsed", function () {
    fireEvent.change(document.querySelector("textarea")!, {
      target: { value: "# h1" },
    });
    expect(document.querySelector("#preview")!.innerHTML).toBe(
      '<h1 id="h1">h1</h1>\n'
    );
  });

  it("should parse code classes", function () {
    fireEvent.change(document.querySelector("textarea")!, {
      target: {
        value: `
\`\`\`
function sum(a, b)
\`\`\`
        `,
      },
    });
    expect(document.querySelector("#preview")!.innerHTML).toBe(
      '<pre><code><span class="hljs-keyword">function</span> <span class="hljs-title function_">sum</span>(<span class="hljs-params">a, b</span>)\n</code></pre>\n'
    );
  });
});
