import React from 'react'
import styled from "styled-components";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Add a new Task</h1>
      <label>Name</label>
      <input type="text" name="name" onChange={handleChange}></input>
      <label>Description</label>
      <input
        type="text"
        name="descriptions"
        onChange={handleChange}
      ></input>
      <label>Estimate</label>
      <input type="text" name="estimate" onChange={handleChange}></input>
      <br />
      <input type="submit" value="Submit"></input>
    </FormContainer>
  );
};

export default Form

/*
* Styles
*/

const FormContainer = styled.form`
  font-family: "IBM Plex Sans Arabic", sans-serif;
  background: #bfe6d4;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 22px;
`;
