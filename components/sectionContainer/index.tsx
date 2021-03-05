import styled from 'styled-components';
import { space_4 } from '../../styles/styleConstants';

const StyledContainer = styled.section`
  margin: ${space_4} 0;
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  flex-wrap: wrap;
`;

interface containerInterface {
  flex?: boolean;
}

const index: React.FC<containerInterface> = ({ children, flex }) => {
  return <StyledContainer flex={flex}>{children}</StyledContainer>;
};

export default index;
