import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Task functionality", () => {
  test("render the state of the task In Progress", () => {
    const state = "In Progress";
    render(<Task state={state} />);
    const taskElement = screen.getByText(/In Progress/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("render the state of the task Completed", () => {
    const state = "Completed";
    render(<Task state={state} />);
    const taskElement = screen.getByText(/Completed/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("render the state of the task Planned", () => {
    const state = "Planned";
    render(<Task state={state} />);
    const taskElement = screen.getByText(/Planned/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("render the state of the task Planned with a default state value", () => {
    render(<Task />);
    const taskElement = screen.getByText(/Planned/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("render a button to delete the task", () => {
    const state = "Planned";
    const { getByText } = render(<Task state={state} />);
    const button = getByText(/Delete/i);
    expect(button).toBeInTheDocument();
  });
});
