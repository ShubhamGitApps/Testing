import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", {
    target: { name: /Add/i },
  });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render same text passed into the title props", () => {
    render(<MockTodo />);
    addTask(["Go to shopping"]);
    const divElement = screen.getByText("Go to shopping");
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items", () => {
    render(<MockTodo />);
    addTask(["Go to shopping", "dance practice", "do yoga"]);
    const divElements = screen.getAllByTestId("test-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not have completed class when initially render", () => {
    render(<MockTodo />);
    addTask(["Go to shopping"]);
    const divElement = screen.getByText("Go to shopping");
    expect(divElement).not.toHaveClass("todo-item-active");
  });
  it("task should have completed class when initially render", () => {
    render(<MockTodo />);
    addTask(["Go to shopping"]);
    const divElement = screen.getByText("Go to shopping");
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active");
  });
});
