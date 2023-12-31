import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it("should render same text passed into title prop", () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop", () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByRole("heading", { name: "My header" });
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title props", () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title props", () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByTestId("Header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// FIND BY

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

//Query By

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it("should render same text passed into title prop", async() => {
//     render(<Header title="My header" />);
//     const headingElements = screen.findAllByRole("heading");
//     expect((await headingElements).length).toBe(2);
//   });
