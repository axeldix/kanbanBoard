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
        name="description"
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
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  margin: auto;
`;
