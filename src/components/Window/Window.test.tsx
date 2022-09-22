/**
 * @vitest-environment jsdom
 */

// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Window } from "./Window";
import { act } from "react-dom/test-utils";
import { fireEvent } from "@testing-library/react";
import { createRoot } from "react-dom/client";

describe("Window component suite test ", function () {
  let container: null | HTMLDivElement;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      createRoot(container as Element).render(
        <Window children={<p>Hello</p>} windowTitle={windowTitle} />
      );
    });
  });

  afterEach(() => {
    // cleanup on exiting
    document.body.removeChild(container!);
    container = null;
  });

  const windowTitle: string = "window title";

  it("can display the given title", function () {
    const h1 = document.querySelector("section header h1");
    expect(h1).not.toBeNull();
    expect(h1!.textContent).toBe(windowTitle);
  });

  it("section should have the expected className", function () {
    const section = document.querySelector("section");
    expect(section!.classList.contains("window")).toBe(true);
  });

  it("btn should have the expected text content", function () {
    const btn = document.querySelector("button");
    expect(btn!.textContent).toBe("Full Screen");
  });

  it("should update section className and btn text", function () {
    const btn = document.querySelector("button");
    const section = document.querySelector("section");

    fireEvent.click(btn!);

    expect(btn!.textContent).toBe("X");
    expect(section!.classList.contains("window")).toBe(true);
    expect(section!.classList.contains("full-screen")).toBe(true);
  });

  it("should render the passed child", function () {
    const children = document.querySelector("section main p");
    expect(children).not.toBeNull();
    expect(children!.textContent).toBe("Hello");
  });
});
