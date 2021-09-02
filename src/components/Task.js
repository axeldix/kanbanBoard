import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import { trashIcon, arrowRightIcon, checkIcon } from "../icons/index";

const Task = ({ task, onDelete, moveTask }) => {
  return (
    <TaskContainer>
      <h2>Name: I'm a Task</h2>
      <h4>State: {task.state}</h4>
      <h4>Description: {task.description}</h4>
      <h4>Estimate: {task.estimate}</h4>

      <button onClick={() => onDelete(task.id)}>
        <img src={trashIcon} alt="delete icon" />
      </button>

      {task.state === "In Progress" && (
        <button onClick={() => moveTask(task)}>
          <img src={checkIcon} alt="check icon" />
        </button>
      )}

      {task.state === "Planned" && (
        <button onClick={() => moveTask(task)}>
          <img src={arrowRightIcon} alt="arrow icon" />
        </button>
      )}
    </TaskContainer>
  );
};

Task.defaultProps = {
  task: {
    state: "In Progress",
    id: 0,
    description: "make something",
    estimate: 2,
  },
};

Task.propTypes = {
  task: Proptypes.oneOf(["Planned", "In Progress", "Completed"]),
};

/*
 * Styles
 */

const TaskContainer = styled.div`
  border: 1px solid yellow;
  margin: 0.5em;
`;

export default Task;
