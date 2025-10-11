import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders a button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});