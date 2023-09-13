import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const MockSetTodos = jest.fn();

describe("AddInput", () => {
  it("should render amout of task left", () => {
    render(<AddInput todos={[]} setTodos={MockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={MockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go to shoping" } });
    expect(inputElement.value).toBe("Go to shoping");
  });
  it("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={MockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go to shoping" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
