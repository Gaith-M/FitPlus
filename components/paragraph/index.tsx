import styled from 'styled-components';
import {
  dark,
  lineHeight,
  letterSpacing,
  space_1,
} from '../../styles/styleConstants';

const StyledParagraph = styled.div`
  color: ${({ color }) => (color ? color : dark)};
  font-size: ${({ size }) => (size ? size : '1em')};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  margin: ${({ m }) => (m ? `${m} 0` : `${space_1} 0`)};
`;

interface CompInterface {
  children: React.ReactChild | React.ReactChild[];
  color?: string;
  size?: string;
  lineHeight?: string;
  letterSpacing?: string;
  m?: string;
  style?: {};
}

const index: React.FC<CompInterface> = ({
  children,
  color,
  size,
  lineHeight,
  letterSpacing,
  m,
  style,
}) => (
  <StyledParagraph
    color={color}
    size={size}
    lineHeight={lineHeight}
    letterSpacing={letterSpacing}
    m={m}
    style={style}
  >
    {children}
  </StyledParagraph>
);

export default index;
