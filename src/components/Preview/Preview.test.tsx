/** @vitest-environment jsdom */
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Preview from "./Preview";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";

describe("Preview component suite test ", function () {
  let container: null | HTMLDivElement;
  let output: string;
  beforeEach(() => {
    // setup a DOM element as a render target

    container = document.createElement("div");
    document.body.appendChild(container);

    output = "<div>initial html</div>";
    act(() => {
      createRoot(container as Element).render(<Preview output={output} />);
    });
  });

  afterEach(() => {
    // cleanup on exiting
    document.body.removeChild(container!);
    container = null;
  });

  it("should be defined", function () {
    const div = document.getElementById("preview");
    expect(div).not.toBeNull();
  });

  it("should display the given output ", function () {
    const div = document.getElementById("preview");
    expect(div!.innerHTML).toBe(output);
  });
});
