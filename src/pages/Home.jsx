import { PostCard } from '../components/PostCard';
import { Search } from '../components/Search';
import styled from 'styled-components';
import { useUserStore } from '../context/userContext';

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

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
    }
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;

    &:before {
      border-radius: 50%;
    }
  }
`;

const LoginSimulator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 1em;
  top: 0;
`;

export const Home = () => {
  const { admin, setAdmin } = useUserStore();

  return (
    <Wrapper>
      <LoginSimulator>
        <p>Logged as admin:</p>
        <Switch>
          <input
            checked={admin}
            type='checkbox'
            onChange={() => setAdmin(!admin)}
          />
          <span className='slider round'></span>
        </Switch>
      </LoginSimulator>
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
