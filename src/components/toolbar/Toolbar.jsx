import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { Container } from 'react-bootstrap';

const RichTextEditor = () => {
  const [comments, setComments] = useState('');

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ]
  };

  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'align',
    'color',
    'background'
  ];

  const rteChange = (content, delta, source, editor) => {
    console.log(editor.getHTML()); // rich text
    console.log(editor.getText()); // plain text
    console.log(editor.getLength()); // number of characters
  };

  return (
      <Container>
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={(content, delta, source, editor) => {
            setComments(editor.getHTML());
            rteChange(content, delta, source, editor);
            }}
            value={comments || ''}
        />
      </Container>
  );
};

export default RichTextEditor;
