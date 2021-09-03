import { useState } from "react";
import { Modal } from "@material-ui/core";
import Form from "./components/Form";
import Table from "./components/Table";
import { STATES } from "./constants";
import styled from "styled-components";

function App() {
  const [taskList, setTaskList] = useState([
    {
      name: "practice aikido",
      state: STATES.COMPLETED,
      id: 1,
      description: "make something",
      estimate: 2,
    },
    {
      name: "Code trading bot",
      state: STATES.PLANNED,
      id: 2,
      description: "make something",
      estimate: 2,
    },
    {
      name: "listen Music",
      state: STATES.IN_PROGRESS,
      id: 0,
      description: "make something",
      estimate: 2,
    },
  ]);

  const INITIAL_STATE = {
    name: "",
    description: "",
    estimate: "",
    id: taskList.length + 1,
    state: STATES.PLANNED,
  };

  const [form, setForm] = useState(INITIAL_STATE);

  const [openModal, setOpenModal] = useState(false);

  const handleDelete = (taskId) => {
    const listFiltered = taskList.filter((elem) => taskId !== elem.id);
    setTaskList(listFiltered);
  };

  const handleMove = (task) => {
    const listFiltered = taskList.filter((elem) => task.id !== elem.id);
    setTaskList([
      ...listFiltered,
      {
        ...task,
        state:
          task.state === STATES.PLANNED ? STATES.IN_PROGRESS : STATES.COMPLETED,
      },
    ]);
  };

  const handleAddTask = () => {
    setOpenModal(!openModal);
  };

  const resetForm = () => {
    setForm(INITIAL_STATE);
  };

  const handleSubmitTask = (event) => {
    if (!form.name || !form.description || !form.estimate ) {
      alert('Sorry but you must complete all form fields')
      event.preventDefault();
      return
    }
    const newTask = { ...form };
    setTaskList([...taskList, newTask]);
    resetForm();
    setOpenModal(!openModal);
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container>
      <Header>
        Tasks Tracker <br />
        <button onClick={handleAddTask}>Add Task</button>
      </Header>
      <br />
      <Modal
        open={openModal}
        onClose={handleAddTask}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form
          handleSubmit={handleSubmitTask}
          handleChange={handleInputChange}
        />
      </Modal>

      <Table
        handleDelete={handleDelete}
        handleMove={handleMove}
        list={taskList}
      />
    </Container>
  );
}

export default App;

/*
 * Styles
 */

const Container = styled.div`
  background: #0054dbcb;
  text-align: center;
  height: 100%;
`;

const Header = styled.header`
  background: #0054dbcb;
  display: flex;
  direction: column;
  min-height: 20vh;
  align-items: center;
  justify-content: center;
`;
