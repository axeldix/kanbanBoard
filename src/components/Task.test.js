import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Task functionality", () => {
  test("render the state of the task In Progress", () => {
    const state = {
      name: "practice aikido",
      state: "In Progress",
      id: 1,
      description: "make something",
      estimate: 2,
    };
    render(<Task task={state} />);
    const taskElement = screen.getByText(/In Progress/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("render the state of the task Completed", () => {
    const state = {
      name: "practice aikido",
      state: "Completed",
      id: 1,
      description: "make something",
      estimate: 2,
    };
    render(<Task task={state} />);
    const taskElement = screen.getByText(/Completed/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("render the state of the task Planned", () => {
    const state = {
      name: "practice aikido",
      state: "Planned",
      id: 1,
      description: "make something",
      estimate: 2,
    };
    render(<Task task={state} />);
    const taskElement = screen.getByText(/Planned/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("render the state of the task Planned with a default state value", () => {
    render(<Task />);
    const taskElement = screen.getByText(/Planned/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("render a button to delete the task", () => {
    const state = {
      name: "practice aikido",
      state: "Planned",
      id: 1,
      description: "make something",
      estimate: 2,
    };
    render(<Task task={state} />);
    const button = screen.queryByAltText(/delete icon/i);
    expect(button).toBeInTheDocument();
  });
});
