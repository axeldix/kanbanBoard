import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";

const ModalExample = ({ open, onClose, handleSubmit, handleChange }) => {
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

export default ModalExample;

/*
 * Styles
 */

const FormContainer = styled.form`
  font-family: "IBM Plex Sans Arabic", sans-serif;
  /* background: #bfe6d4; */
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 22px;
`;
