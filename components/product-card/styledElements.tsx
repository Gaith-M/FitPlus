import styled from 'styled-components';
import { dark } from '../../styles/styleConstants';

const StyledQTYButton = styled.button`
  flex: 1 1 30%;
  border: none;
  color: #fff;
  background-color: ${dark};
  height: 30px;
  font-weight: bold;
  outline: none;
  transition: 0.3s ease-out;

  &:hover {
    background-color: #5a5a5d;
  }
`;

export default StyledQTYButton;
