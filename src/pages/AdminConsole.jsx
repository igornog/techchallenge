import { AdminPostCard } from '../components/AdminPostCard';
import { MoveLeft } from 'lucide-react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.section`
  padding: 2em;
  height: 100%;
  min-height: 100vh;
  background: #333533;
  display: flex;
  flex-direction: column;
  align-items: center;

  #back-btn {
    position: absolute;
    padding: 0 2em;
    left: 0;
    top: 0;
    margin: 2em 0;
    font-weight: bold;
    text-decoration: underline;
    color: #ffffff;
    cursor: pointer;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1em;
  margin: 2em 0;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: white;
  text-align: center;
`;

export const AdminConsole = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <p id={'back-btn'} onClick={() => navigate(`/home`)}>
        <MoveLeft />
      </p>
      <Title>{`Admin Console`}</Title>

      <PostWrapper>
        <AdminPostCard id={1} />
        <AdminPostCard id={2} />
        <AdminPostCard id={3} />
        <AdminPostCard id={4} />
      </PostWrapper>
    </Wrapper>
  );
};
