import { expect, test } from "vitest";
import { getSomething } from "../src";

test("gets something", () => {
  expect(getSomething()).toEqual({ foo: 1, bar: "a" });
});
