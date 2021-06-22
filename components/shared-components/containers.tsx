import styled from 'styled-components';

interface containerInterface {
  w?: string;
  m?: string;
  p?: string;
  bg?: string;
  color?: string;
  style?: {};
  className?: string;
}

interface flexContainerInterface extends containerInterface {
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'end';
  wrap?: 'wrap';
  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
}

interface flexItemInterface extends containerInterface {
  minW: string;
  flex: string;
  style?: {};
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
  flex-wrap: ${({ wrap }) => (wrap === 'wrap' ? 'wrap' : 'no-wrap')};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'row'};
`;

export const FlexItem: React.FC<flexItemInterface> = styled(Container)`
  min-width: ${({ minW }) => minW};
  flex: ${({ flex }) => (flex ? flex : '1 1 100%')};
`;
