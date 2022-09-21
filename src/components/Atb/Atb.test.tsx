/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, expect, it } from "vitest";
import { Att } from "./Atb";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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

it("container should have a child defined", () => {
  act(() => {
    render(<Att />, container);
  });
  expect(container!.firstChild).toBeDefined();
});

it("should display the correct text", () => {
  act(() => {
    render(<Att />, container);
  });
  expect(container!.firstChild!.textContent).toBe(
    "Designed and Coded with  by Karl Code"
  );
});
