import React from 'react'
import styled from 'styled-components';
import Task from "./Task";
import {STATES} from './../constants'

const Table = ({ handleDelete, handleMove, list}) => {
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
          {list?.map((task) => (
            <>
              {task.state === STATES.PLANNED && (
                <TaskContainer key={task.id}>
                  <Task
                    task={task}
                    key={task.id}
                    onDelete={handleDelete}
                    moveTask={handleMove}
                  />
                </TaskContainer>
              )}
            </>
          ))}
        </ul>
      </span>
      <span>
        <ul>
          {list?.map((task) => (
            <>
              {task.state === STATES.IN_PROGRESS && (
                <TaskContainer key={task.id}>
                  <Task
                    task={task}
                    key={task.id}
                    onDelete={handleDelete}
                    moveTask={handleMove}
                  />
                </TaskContainer>
              )}
            </>
          ))}
        </ul>
      </span>
      <span>
        <ul>
          {list?.map((task) => (
            <>
              {task.state === STATES.COMPLETED && (
                <TaskContainer key={task.id}>
                  <Task
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    moveTask={handleMove}
                  />
                </TaskContainer>
              )}
            </>
          ))}
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