import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("renders the scaffold's Deploy Now link pointing at vercel.com/new", () => {
    render(<Home />);
    const deployLink = screen.getByRole("link", { name: /deploy now/i });
    expect(deployLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://vercel.com/new"),
    );
  });
});
