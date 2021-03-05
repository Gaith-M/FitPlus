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
  border-radius: 2px;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.3s;
  outline: none;
  padding: ${({ p }) => (p ? `${p} 20px` : '10px 20px')};
  box-shadow: ${({ noShadow }) => (noShadow ? '' : boxShadow)};
  background-color: ${({ bg }) => (bg ? bg : accent)};
  color: ${({ color }) => (color ? color : light)} !important;
  width: ${({ w }) => (w ? w : 'auto')};
  margin: ${({ m }) => (m ? m : '0 0 0 0')};

  &:hover {
    background-color: ${accentHover};
  }
`;

const FlexButton = styled(StyledButton)`
  flex: ${({ flex }) => `0 1 ${flex}%`};
`;

interface buttonInterface {
  w?: string;
  p?: string;
  bg?: string;
  color?: string;
  children: React.ReactChild;
  noShadow?: boolean;
  flex?: number;
  m?: string;
  handleClick?: () => void;
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
  handleClick,
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
      onClick={handleClick}
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
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
};

export default index;
