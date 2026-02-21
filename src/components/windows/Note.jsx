import { useState, useEffect } from 'react';
import MacWindow from './MacWindow';
import './note.scss';

const Note = ({ windowName, windowProps }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/note.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error fetching note.txt:', error));
  }, []);

  return (
    <MacWindow windowName={windowName} windowProps={windowProps} title="note.txt">
      <div className="note-content">
        <pre>{content}</pre>
      </div>
    </MacWindow>
  );
};

export default Note;
