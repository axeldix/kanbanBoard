import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import { trashIcon, arrowRightIcon, checkIcon } from "../icons/index";
import { STATES } from './../constants'

const Task = ({ task, onDelete, moveTask }) => {
  return (
    <TaskContainer data-test-id="task">
      <h2>Name: {task.name}</h2>
      <Details>State: {task.state}</Details>
      <Details>Description: {task.descriptions}</Details>
      <Details>Estimate: {task.estimate}</Details>

      <button onClick={() => onDelete(task.id)} title="Delete Task">
        <img src={trashIcon} alt="delete icon" />
      </button>

      {task.state === STATES.IN_PROGRESS && (
        <button onClick={() => moveTask(task)} title="Set Complete">
          <img src={checkIcon} alt="check icon" />
        </button>
      )}

      {task.state === STATES.PLANNED && (
        <button onClick={() => moveTask(task)} title="Set In Progress">
          <img src={arrowRightIcon} alt="arrow icon" />
        </button>
      )}
    </TaskContainer>
  );
};

Task.defaultProps = {
  task: {
    name: "Code trading bot",
    state: STATES.PLANNED,
    id: 2,
    descriptions: "make something",
    estimate: 2,
  },
};

Task.propTypes = {
  task: Proptypes.shape({
    name: Proptypes.string,
    state: Proptypes.string,
    id: Proptypes.number,
    descriptions: Proptypes.string,
    estimate: Proptypes.number,
  }),
};

/*
 * Styles
 */

const TaskContainer = styled.div`
  background: #f44b37;
  border: 1px solid yellow;
  margin: 0.5em;
  padding: 12px;
  `;

const Details = styled.h4`
  font-family: "IBM Plex Sans Arabic", sans-serif;
  text-align: left;
`;

export default Task;
