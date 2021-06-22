import styled from 'styled-components';
import {
  boxShadow,
  accent,
  light,
  accentHover,
} from '../../styles/styleConstants';

const StyledButton = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.3s;
  outline: none;
  border-radius: ${({ noRad }) => (noRad ? '0px' : '2px')};
  width: ${({ w }) => (w ? w : 'auto')};
  padding: ${({ p }) => (p ? p : '10px 20px')};
  margin: ${({ m }) => (m ? m : '0 0 0 0')};
  box-shadow: ${({ noShadow }) => (noShadow ? '' : boxShadow)};
  background-color: ${({ bg }) => (bg ? bg : accent)};
  color: ${({ color }) => (color ? color : light)} !important;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 'inherit')};

  &:hover {
    background-color: ${accentHover};
  }
`;

const FlexButton = styled(StyledButton)`
  flex: ${({ flex }) => flex};
`;

interface buttonInterface {
  w?: string;
  p?: string;
  bg?: string;
  color?: string;
  noShadow?: boolean;
  flex?: string;
  m?: string;
  fontSize?: string;
  handleClick?: () => void;
  noRad?: boolean;
}

const index: React.FC<buttonInterface> = ({
  w,
  bg,
  p,
  color,
  children,
  noShadow,
  flex,
  m,
  fontSize,
  handleClick,
  noRad,
}) => {
  return flex ? (
    <FlexButton
      w={w}
      p={p}
      bg={bg}
      color={color}
      noShadow={noShadow}
      flex={flex}
      m={m}
      fontSize={fontSize}
      onClick={handleClick}
      noRad={noRad}
    >
      {children}
    </FlexButton>
  ) : (
    <StyledButton
      w={w}
      p={p}
      bg={bg}
      m={m}
      color={color}
      noShadow={noShadow}
      fontSize={fontSize}
      onClick={handleClick}
      noRad={noRad}
    >
      {children}
    </StyledButton>
  );
};

export default index;
