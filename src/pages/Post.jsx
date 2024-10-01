import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MoveLeft } from 'lucide-react';
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

  subtext {
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

  subtext {
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

  const { id } = useParams();
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              />
              <label>{`Edit Author:`}</label>
              <input
                type={'text'}
                placeholder={'Author'}
                defaultValue={`Post Author`}
              />

              <label>{`Edit Content:`}</label>
              <textarea
                placeholder={'Content'}
                defaultValue={`Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content.`}
              />
              <Button type={'submit'}>{`Save changes`}</Button>
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
          <subtext>{`Post Author`}</subtext>
          <p>{`Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content.`}</p>

          {admin && (
            <Button onClick={() => setEditOpen(true)}>{`Edit post`}</Button>
          )}
        </Wrapper>
      )}
    </>
  );
};
