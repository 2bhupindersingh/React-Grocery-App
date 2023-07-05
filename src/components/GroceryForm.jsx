import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const GroceryForm = ({ handleSubmit, handleInputChange, inputVal }) => {
  return (
    <>
      <Form onSubmit={handleSubmit} className="d-flex flex-wrap mb-3">
        <Form.Group  className="me-2" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            name="inputVal"
            value={inputVal}
            placeholder="Type here..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </>
  );
};

export default GroceryForm;
