import Router from 'next/router';
import React, { useState, useEffect } from 'react';

import { Button, Col, Row } from 'reactstrap';
import ListTable from './ListTable';
import styles from './Notes.module.css';

function NotesList() {
  const [toDoNotes, setToDoNotes] = useState([]);
  const [inProgressNotes, setInProgressNotes] = useState([]);
  const [doneNotes, setDoneNotes] = useState([]);

  useEffect(() => {
    if (typeof window) {
      const notesList = JSON.parse(localStorage.getItem('notesList') || '[]');

      setToDoNotes(notesList.filter((note) => note.status === 'TO_DO'));
      setInProgressNotes(
        notesList.filter((note) => note.status === 'IN_PROGRESS')
      );
      setDoneNotes(notesList.filter((note) => note.status === 'DONE'));
    }
  }, []);

  return (
    <div className="p-4">
      <h4>Notes List</h4>
      <Row>
        <Col>
          <Button
            className={styles.createButton}
            onClick={() => Router.push('/notes/add')}
          >
            Create
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>To Do</h5>
          <ListTable data={toDoNotes} />
        </Col>
        <Col>
          <h5>In Progress</h5>
          <ListTable data={inProgressNotes} />
        </Col>
        <Col>
          <h5>Done</h5>

          <ListTable data={doneNotes} />
        </Col>
      </Row>
    </div>
  );
}

export default NotesList;
