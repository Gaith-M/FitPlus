import styled from 'styled-components';
import {
  boxShadow,
  secondaryLight,
  space_1,
  space_2,
} from '../../styles/styleConstants';

export const Container = styled.div`
  padding: ${`${space_2} ${space_1}`};
  background-color: ${secondaryLight};
  box-shadow: ${boxShadow};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  text-transform: capitalize;
  padding: ${`${space_2} 5px`};
  font-size: ${({ FS }) => FS};
`;
