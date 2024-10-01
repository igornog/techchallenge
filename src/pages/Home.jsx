import { PostCard } from '../components/PostCard';
import { Search } from '../components/Search';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2em;
  height: 100%;
  min-height: 100vh;
  background: #333533;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: white;
  text-align: center;
`;

export const Home = () => {
  return (
    <Wrapper>
      <Title>{`Posts`}</Title>
      <Search />

      <PostWrapper>
        <PostCard id={1} />
        <PostCard id={2} />
        <PostCard id={3} />
        <PostCard id={4} />
      </PostWrapper>
    </Wrapper>
  );
};
