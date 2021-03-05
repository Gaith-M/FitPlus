import styled from 'styled-components';
import { space_2 } from '../../styles/styleConstants';
import Button from '../button';

const StyledSearchbarContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin: ${space_2} auto;
`;

const StyledSearchBar = styled.input`
  min-width: 320px;
  width: 80%;
  height: 37px;
  padding: 0 10px;
  border: none;
  outline: none;
  font-weight: bold;
`;

const index = () => {
  return (
    <StyledSearchbarContainer>
      <StyledSearchBar type='text' placeholder='search' />
      <Button w='100px' noShadow={true}>
        Go
      </Button>
    </StyledSearchbarContainer>
  );
};

export default index;
