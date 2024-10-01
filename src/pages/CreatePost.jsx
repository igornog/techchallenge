import { MoveLeft } from 'lucide-react';
import React from 'react';
import { createPost } from '../services';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.section`
  padding: 4em;
  min-height: 100vh;
  width: -webkit-fill-available;
  background: #e8eddf;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  #back-btn {
    padding: 0 2em;
    position: absolute;
    left: 0;
    top: 0;
    margin: 2em 0;
    font-weight: bold;
    text-decoration: underline;
    color: #333533;
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  input {
    padding: 1em 1.5em;
    font-size: 1em;
    width: 50%;
    border-radius: 30px;
    border: none;
  }

  textarea {
    padding: 1em 1.5em;
    font-size: 1em;
    width: 75vw;
    height: 20vh;
    border-radius: 30px;
    border: none;
  }

  button {
    padding: 1em 4em;
    border-radius: 30px;
    border: none;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    background-color: #000000;
    color: white;
    cursor: pointer;
  }
`;

export const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [content, setContent] = React.useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePostCreation = () => {
    createPost({ title, author, content });
  };

  return (
    <Wrapper>
      <p id={'back-btn'} onClick={() => navigate(`/home`)}>
        {' '}
        <MoveLeft />
      </p>
      <h2>{`Create post`}</h2>
      <Form onSubmit={() => handlePostCreation()}>
        <input
          type={'text'}
          placeholder={'Title'}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type={'text'}
          placeholder={'Author'}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder={'Content'}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type={'submit'}>{`Create`}</button>
      </Form>
    </Wrapper>
  );
};
