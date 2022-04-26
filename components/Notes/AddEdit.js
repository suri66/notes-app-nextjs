import Router from 'next/router';
import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';

function NotesAddEdit() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const validateForm = () => {
    return !title || !description || !status;
  };

  const onSaveClick = () => {
    const isInValidForm = validateForm();

    if (isInValidForm) {
      return alert('Please fill all fields'); // can be done with toast or on blur validation
    }

    const notesList = JSON.parse(localStorage.getItem('notesList') || '[]');

    const note = {
      id: new Date().getTime(),
      title,
      description,
      status,
    };

    notesList.push(note);

    localStorage.setItem('notesList', JSON.stringify(notesList));

    resetForm();

    Router.push('/notes/list');
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setStatus('');
  };

  return (
    <div className="p-4">
      <h4>Add Note</h4>
      <Row className="mt-5">
        <Col xl="1" lg="1" md="1" sm="12" xs="12">
          Title
        </Col>
        <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xl="1" lg="1" md="1" sm="12" xs="12">
          Description
        </Col>
        <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Input
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xl="1" lg="1" md="1" sm="12" xs="12">
          Status
        </Col>
        <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Input
            type="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option value="TO_DO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </Input>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Button color="primary" onClick={onSaveClick}>
            Add Note
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default NotesAddEdit;
