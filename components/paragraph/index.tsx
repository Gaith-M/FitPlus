import React from 'react';
import styled from 'styled-components';
import { letterSpacing, space_1 } from '../../styles/styleConstants';

const StyledParagraph = styled.div`
  text-align: ${({ align }) => (align ? align : 'justify')};
  line-height: 1.85;
  letter-spacing: ${letterSpacing};
  color: ${({ color }) => (color ? color : 'inherit')};
  font-size: ${({ size }) => (size ? size : '1em')};
  margin: ${({ m }) => (m ? `${m}` : `${space_1} 0`)};
`;

interface CompInterface {
  children: React.ReactChild | React.ReactChild[];
  color?: string;
  size?: string;
  letterSpacing?: string;
  m?: string;
  align?: string;
  style?: React.CSSProperties;
}

const index: React.FC<CompInterface> = ({
  children,
  color,
  size,
  letterSpacing,
  m,
  align,
  style,
}) => (
  <StyledParagraph
    color={color}
    size={size}
    letterSpacing={letterSpacing}
    m={m}
    align={align}
    style={style}
  >
    {children}
  </StyledParagraph>
);

export default index;
