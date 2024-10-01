import { Pencil, Trash } from 'lucide-react';

import { deletePost } from '../services';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.section`
  padding: 2em 6em;
  background: #e8eddf;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.5em;

    span {
      background-color: #f5cb5c;
      border-radius: 50%;
      padding: 0.5em;
      transition: all 0.3s;

      &:hover {
        background-color: #f5cb5c;
        transform: scale(1.1);
        transition: all 0.3s;
      }
    }

    svg {
      cursor: pointer;
      transition: all 0.3s;
    }
  }

  h2 {
    margin-bottom: 0;
  }

  h3 {
    margin: 0;
  }

  span {
    font-style: italic;
    color: gray;
    margin: 0;
  }

  p {
    text-align: center;
  }
`;

export const AdminPostCard = ({ id }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <span onClick={() => navigate(`/post/${id}`)}>
          <Pencil />
        </span>
        <span onClick={() => deletePost(id)}>
          <Trash />
        </span>
      </div>
      <h2>{`Post Title`}</h2>
      <h3>{`id: ` + id}</h3>
      <span>{`Post Author`}</span>
    </Wrapper>
  );
};
