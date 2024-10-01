import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MoveLeft } from 'lucide-react';
import { editPost } from '../services';
import styled from 'styled-components';
import { useUserStore } from '../context/userContext';

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

  h2 {
    margin-bottom: 0;
  }

  span {
    font-style: italic;
    color: gray;
  }

  p {
    padding: 0 4em;
  }

  #back-btn {
    position: absolute;
    padding: 0 2em;
    left: 0;
    top: 0;
    margin: 2em 0;
    font-weight: bold;
    text-decoration: underline;
    color: #333533;
    cursor: pointer;
  }
`;

const ModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.section`
  padding: 4em;
  width: 75%;
  background: #e8eddf;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  h2 {
    margin-bottom: 0;
  }

  span {
    font-style: italic;
    color: gray;
  }

  p {
    padding: 0 4em;
  }

  #back-btn {
    position: absolute;
    padding: 0 2em;
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
  margin: 2em 0;

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
`;

const Button = styled.button`
  padding: 0.75em 2em;
  border-radius: 30px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  background-color: #000000;
  color: white;
  cursor: pointer;
`;

export const Post = () => {
  const navigate = useNavigate();
  const { admin } = useUserStore();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const { id } = useParams();
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEdit = () => {
    editPost({ postId: id, title, author, content });
  };

  return (
    <>
      {editOpen ? (
        <ModalWrapper>
          <Modal>
            <Form>
              <label>{`Edit Title:`}</label>
              <input
                type={'text'}
                placeholder={'Title'}
                defaultValue={`Post Title ` + id}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>{`Edit Author:`}</label>
              <input
                type={'text'}
                placeholder={'Author'}
                defaultValue={`Post Author`}
                onChange={(e) => setAuthor(e.target.value)}
              />

              <label>{`Edit Content:`}</label>
              <textarea
                placeholder={'Content'}
                defaultValue={`Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content.`}
                onChange={(e) => setContent(e.target.value)}
              />
              <Button
                type={'submit'}
                onClick={handleEdit}
              >{`Save changes`}</Button>
            </Form>
          </Modal>
        </ModalWrapper>
      ) : (
        <Wrapper>
          <p id={'back-btn'} onClick={() => navigate(`/home`)}>
            {' '}
            <MoveLeft />
          </p>
          <h2>{`Post Title ` + id}</h2>
          <span>{`Post Author`}</span>
          <p>{`Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content.`}</p>

          {admin && (
            <Button onClick={() => setEditOpen(true)}>{`Edit post`}</Button>
          )}
        </Wrapper>
      )}
    </>
  );
};
