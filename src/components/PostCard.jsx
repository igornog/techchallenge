import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.section`
  padding: 4em;
  width: -webkit-fill-available;
  background: #e8eddf;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }

  h2 {
    margin-bottom: 0;
  }

  subtext {
    font-style: italic;
    color: gray;
  }

  p {
    text-align: center;
  }
`;

export const PostCard = ({ id }) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/post/${id}`)}>
      <h2>{`Post Title`}</h2>
      <subtext>{`Post Author`}</subtext>
      <p>{`Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content. Post Content.`}</p>
    </Wrapper>
  );
};
