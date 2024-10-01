import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../context/userContext';

const Wrapper = styled.section`
  margin: 2em 0;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 100%;
  max-width: 500px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1em;
  }
`;

const Input = styled.input`
  padding: 1em 1.5em;
  font-size: 1em;
  width: 75%;
  border-radius: 30px;
  border: none;
`;

const SearchButton = styled.button`
  padding: 1em 4em;
  border-radius: 30px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  background-color: #f5cb5c;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    color: white;
    transition: all 0.3s;
  }
`;

const Button = styled.button`
  padding: 0.5em 2em;
  border-radius: 30px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  background-color: #000000;
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }
`;

export const Search = () => {
  const navigate = useNavigate();
  const { admin } = useUserStore();

  return (
    <Wrapper>
      <Input />
      <SearchButton>{`Search`}</SearchButton>
      {admin && (
        <div>
          <Button
            onClick={() => navigate(`/admin-console`)}
          >{`Admin Console`}</Button>
          <Button onClick={() => navigate(`/create-post`)}>
            {`Create a New Post`}
          </Button>
        </div>
      )}
    </Wrapper>
  );
};
