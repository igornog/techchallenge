import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.section`
  margin: 2em 0;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

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
`;

export const Search = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Input />
      <SearchButton>{`Buscar`}</SearchButton>
      <div>
        <Button>{`Admin Console`}</Button>
        <Button onClick={() => navigate(`/create-post`)}>
          {`Create a New Post`}
        </Button>
      </div>
    </Wrapper>
  );
};
