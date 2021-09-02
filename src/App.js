import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import styled from "styled-components";

function App() {
const [taskList, setTaskList] = useState([
  { state: "In Progress", id: 0, description: "make something", estimate: 2 },
  { state: "Completed", id: 1, description: "make something", estimate: 2 },
  { state: "Planned", id: 2, description: "make something", estimate: 2 },
]);

  const handleDelete = (taskId) => {
    const listFiltered = taskList.filter((elem) => taskId !== elem.id);
    setTaskList( listFiltered )
  }

  const handleMove = (task) => {
    const listFiltered = taskList.filter((elem) => task.id !== elem.id);
    setTaskList([...listFiltered, {...task, state: (task.state ==="Planned" ? "In Progress" : "Completed")}]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Table>
          <span>
            <strong>PLANNED</strong>
          </span>
          <span>
            <strong>IN PROGRESS</strong>
          </span>
          <span>
            <strong>COMPLETED</strong>
          </span>

          {taskList?.map((task) => (
            <>
              <span>
                {task.state === "Planned" && (
                  <Task task={task} onDelete={handleDelete} moveTask={handleMove}/>
                )}
              </span>
              <span>
                {task.state === "In Progress" && (
                  <Task task={task} onDelete={handleDelete} moveTask={handleMove}/>
                )}
              </span>
              <span>
                {task.state === "Completed" && (
                  <Task task={task} onDelete={handleDelete} moveTask={handleMove}/>
                )}
              </span>
            </>
          ))}
        </Table>
      </header>
    </div>
  );
}

export default App;

/*
 * Styles
 */

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
`;
