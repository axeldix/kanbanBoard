import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalAddTask = ({ open, onClose, handleSubmit, handleChange }) => {
  return (
      <Modal isOpen={open} toggle={onClose}>
        <ModalHeader toggle={onClose}>Add a new Task!</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="descriptions"
                onChange={handleChange}
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Estimate</label>
              <input
                type="text"
                name="estimate"
                onChange={handleChange}
                className="form-control"
              ></input>
            </div>
            <br />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit} type='submit'>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  );
};

export default ModalAddTask;