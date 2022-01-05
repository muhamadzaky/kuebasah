import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const ActionFilterByText = ({ placeholder, searchText, onChangeText, onSearch }) => (
  <Form className="d-flex">
    <FormGroup className="mb-2 mb-sm-0">
      <Input
        placeholder={placeholder}
        className="br-0 fixed-fc-height"
        value={searchText}
        onChange={onChangeText}
      />
    </FormGroup>
    <Button className="ms-2" color="primary" onClick={onSearch}>
      Search
    </Button>
  </Form>
);

export default ActionFilterByText;
