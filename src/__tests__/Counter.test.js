import React, { Component } from "react";
import { render, cleanup } from "react-testing-library";
import Counter from "../components/Counter";

test("<Counter />", () => {
  const wrapper = render(<Counter />);
  wrapper.debug();
  expect(wrapper.getByTestId("0").tagName).toBe("BUTTON");
});
