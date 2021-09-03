import { useState } from "react";
import { Modal } from "@material-ui/core";
import Form from "./components/Form";
import Table from "./components/Table";
import { STATES } from "./constants";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalExample from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState([
    {
      name: "practice aikido",
      state: STATES.COMPLETED,
      id: 1,
      descriptions: "make something",
      estimate: 2,
    },
    {
      name: "Code trading bot",
      state: STATES.PLANNED,
      id: 2,
      descriptions: "make something",
      estimate: 2,
    },
    {
      name: "listen Music",
      state: STATES.IN_PROGRESS,
      id: 0,
      descriptions: "make something",
      estimate: 2,
    },
  ]);

  const INITIAL_STATE = {
    name: "",
    descriptions: "",
    estimate: "",
    id: taskList.length + 1,
    state: STATES.PLANNED,
  };

  const [form, setForm] = useState(INITIAL_STATE);

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
  }

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

  const resetForm = () => {
    setForm(INITIAL_STATE);
  };

  const handleSubmitTask = (event) => {
    if (!form.name || !form.descriptions || !form.estimate) {
      alert("Sorry but you must complete all form fields");
      event.preventDefault();
      return;
    }
    const newTask = { ...form };
    setTaskList([...taskList, newTask]);
    resetForm();
    toggle()
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log("i'm here", form)
  };

  return (
    <Container>
      <Header className="header text-center">
        <h3>Tasks Tracker </h3>
        <br />
        <button
          onClick={toggle}
          data-test-id="addTaskButton"
          className="btn btn-primary"
        >
          Add Task
        </button>
      </Header>
      <br />

      {/* <Modal
        open={modal}
        onClose={toggle}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <Form
        handleSubmit={handleSubmitTask}
        handleChange={handleInputChange}
        open={modal}
        onClose={toggle}
        />
      </Modal> */}

      <ModalExample
        open={modal}
        onClose={toggle}
        handleSubmit={handleSubmitTask}
        handleChange={handleInputChange}
      />

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
  background: #fff;
  text-align: center;
  height: 100%;
`;

const Header = styled.div`
  background: #fff;
  height: 200px;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;
