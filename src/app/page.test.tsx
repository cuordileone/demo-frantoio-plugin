import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("renders the hero heading and the primary CTA to the products page", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /scopri i nostri oli/i });
    expect(cta).toHaveAttribute("href", "/i-nostri-oli");
  });

  it("lists all three product references", () => {
    render(<Home />);
    expect(screen.getByText("Coratina")).toBeInTheDocument();
    expect(screen.getByText("Ogliarola")).toBeInTheDocument();
    expect(screen.getByText("Riserva del Frantoiano")).toBeInTheDocument();
  });
});
