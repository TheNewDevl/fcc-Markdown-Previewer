/**
 * @vitest-environment jsdom
 */
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import { afterEach, beforeEach, expect, it } from "vitest";
import { Att } from "./Atb";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";

let container: null | HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  act(() => {
    createRoot(container as Element).render(<Att />);
  });
});

afterEach(() => {
  // cleanup on exiting
  document.body.removeChild(container!);
  container = null;
});

it("container should have a child defined", () => {
  expect(container!.firstChild).toBeDefined();
});

it("should display the correct text", () => {
  expect(container!.firstChild!.textContent).toBe(
    "Designed and Coded with  by Karl Code"
  );
});
