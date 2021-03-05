import React from 'react';
import styled from 'styled-components';

interface containerInterface {
  w?: string;
  m?: string;
  p?: string;
  bg?: string;
  style?: {};
}

interface flexContainerInterface extends containerInterface {
  align?: string;
  justify?: string;
  wrap?: boolean;
}

export const Container: React.FC<containerInterface> = styled.div`
  width: ${({ w }) => (w ? w : '100%')};
  margin: ${({ m }) => (m ? m : '0')};
  padding: ${({ p }) => (p ? p : '0')};
  background-color: ${({ bg }) => (bg ? bg : 'transparent')};
`;

export const FlexContainer: React.FC<flexContainerInterface> = styled(
  Container
)`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
`;

export const FlexItem = styled(Container)`
  flex: ${({ flex }) => (flex ? flex : '1 1 100%')};
`;
