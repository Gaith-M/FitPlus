import styled from 'styled-components';
import { space_2 } from '../../styles/styleConstants';
import Button from '../button';
import { FlexContainer } from '../shared-components/containers';

const StyledSearchBar = styled.input`
  min-width: 300px;
  width: 100%;
  height: 37px;
  padding: 0 10px;
  border: none;
  outline: none;
  font-weight: bold;
`;

interface compInterface {
  w?: string;
  m?: string;
  handleClick?: () => void;
  text?: string;
}

const index: React.FC<compInterface> = ({
  w = '60%',
  m = '0 auto',
  handleClick = () => console.log('test'),
  text,
}) => {
  return (
    <FlexContainer w={w} justify='center' m={m}>
      <StyledSearchBar type='text' placeholder={text || 'search'} />
      <Button w='100px' noShadow={true} handleClick={handleClick}>
        {text || 'go'}
      </Button>
    </FlexContainer>
  );
};

export default index;
