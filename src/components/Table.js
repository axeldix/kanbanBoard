import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { STATES } from "./../constants";

const Table = ({ handleDelete, handleMove, list }) => {
  const TaskList = ({state}) => {
    const listFiltered = list?.filter((task) => task.state === STATES[state]);
    return listFiltered?.map((task) => (
      <TaskContainer key={task.id}>
        <Task
          task={task}
          key={task.id}
          onDelete={handleDelete}
          moveTask={handleMove}
        />
      </TaskContainer>
    ));
  };

  return (
    <TableStyled>
      <Header>
        <strong>PLANNED</strong>
      </Header>
      <Header>
        <strong>IN PROGRESS</strong>
      </Header>
      <Header>
        <strong>COMPLETED</strong>
      </Header>

      <span>
        <ul>
          <TaskList state={"PLANNED"}/>
        </ul>
      </span>
      <span>
        <ul>         
          <TaskList state={"IN_PROGRESS"}/>
        </ul>
      </span>
      <span>
        <ul>
          <TaskList state={"COMPLETED"}/>
        </ul>
      </span>
    </TableStyled>
  );
};

export default Table;

/*
 * Styles
 */

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #fffb91;
`;

const TaskContainer = styled.li`
  list-style: none;
`;

const Header = styled.h1`
  font-family: "IBM Plex Sans Arabic", sans-serif;
`;
