import { describe, expect, it } from "vitest";
import { emailError } from "./email";

describe("emailError", () => {
  it.each(["", "   "])("%j is empty", (v) => {
    expect(emailError(v)).toBe("empty");
  });

  it.each([
    "jan",
    "jan@",
    "jan@seznam",
    "jan@seznam.c",
    "jan novak@seznam.cz",
    "@seznam.cz",
  ])("%s is invalid", (v) => {
    expect(emailError(v)).toBe("invalid");
  });

  it.each([
    "jan@seznam.cz",
    " jan.novak+etf@email.cz ",
    "j@sub.domain.com",
  ])("%s is valid", (v) => {
    expect(emailError(v)).toBeNull();
  });
});
