import React, {useState, useContext} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';

const RichTextEditor = () => {
  const [comments, setComments] = useState('');
  const {text} = useContext(UserContext)

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

  console.log("Text", text)
  return (
      <Container>
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={(content, delta, source, editor) => {
            setComments(text !=null || "" ? text : editor.getHTML());
            rteChange(content, delta, source, editor);
            }}
            value={text != null && text.length > 0 ? text.map((text) => {return(text)}) : comments}
        />
      </Container>
  );
};

export default RichTextEditor;
