import { Something } from "./types";

export { Something };

export function getSomething(): Something {
  return {
    foo: 1,
    bar: "a",
  };
}
