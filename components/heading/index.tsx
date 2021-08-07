import { CSSProperties } from 'react';
import styled from 'styled-components';
import { dark, space_4 } from '../../styles/styleConstants';

interface headingInterface {
  m?: string;
  CN?: string;
  s?: string;
  color?: string;
  style?: {};
  className?: string;
}

const StyledH1: React.FC<headingInterface> = styled.h1`
  width: 100%;
  flex: 1 1 100%;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ color }) => (color ? color : 'inherit')};
  margin: ${({ m }) => (m ? m : `0 0 ${space_4} 0`)};
  font-size: ${({ s }) => (s ? s : '48px')};
`;
const StyledH2: React.FC<headingInterface> = styled.h2`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  color: ${({ color }) => (color ? color : 'inherit')};
  margin: ${({ m }) => (m ? m : `0 0 ${space_4} 0`)};
  font-size: ${({ s }) => (s ? s : '48px')};
`;
const StyledH3: React.FC<headingInterface> = styled.h3`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  margin: ${({ m }) => (m ? m : `0 0 ${space_4} 0`)};
  color: ${({ color }) => (color ? color : 'inherit')};
  font-size: ${({ s }) => (s ? s : '48px')};
`;
const StyledH4: React.FC<headingInterface> = styled.h4`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  color: ${({ color }) => (color ? color : 'inherit')};
  margin: ${({ m }) => (m ? m : `0 0 ${space_4} 0`)};
  font-size: ${({ s }) => (s ? s : '48px')};
`;
const StyledH5: React.FC<headingInterface> = styled.h5`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  margin: ${({ m }) => (m ? m : `0 0 ${space_4} 0`)};
  color: ${({ color }) => (color ? color : 'inherit')};
  font-size: ${({ s }) => (s ? s : '48px')};
`;
const StyledH6: React.FC<headingInterface> = styled.h5`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  margin: ${({ m }) => (m ? m : `0 0 ${space_4} 0`)};
  color: ${({ color }) => (color ? color : 'inherit')};
  font-size: ${({ s }) => (s ? s : '48px')};
`;

const StyledParagraph: React.FC<headingInterface> = styled.p`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  margin: ${({ m }) => (m ? m : `0 0 ${space_4} 0`)};
  color: ${({ color }) => (color ? color : 'inherit')};
  font-size: ${({ s }) => (s ? s : '48px')};
`;

interface compInterface {
  lvl: 1 | 2 | 3 | 4 | 5 | 6 | 'display';
  m?: string;
  children: React.ReactChild | React.ReactChild[];
  CN?: string;
  s?: string;
  color?: string;
  style?: CSSProperties;
}

const index: React.FC<compInterface> = ({
  children,
  lvl,
  CN,
  s,
  m,
  color,
  style,
}) => {
  switch (lvl) {
    case 1:
      return (
        <StyledH1 className={CN} m={m} color={color} s={s} style={style}>
          {children}
        </StyledH1>
      );
    case 2:
      return (
        <StyledH2 className={CN} m={m} color={color} s={s} style={style}>
          {children}
        </StyledH2>
      );
    case 3:
      return (
        <StyledH3 className={CN} m={m} color={color} s={s} style={style}>
          {children}
        </StyledH3>
      );
    case 4:
      return (
        <StyledH4 className={CN} m={m} color={color} s={s} style={style}>
          {children}
        </StyledH4>
      );
    case 5:
      return (
        <StyledH5 className={CN} m={m} color={color} s={s} style={style}>
          {children}
        </StyledH5>
      );
    case 6:
      return (
        <StyledH6 className={CN} m={m} color={color} s={s} style={style}>
          {children}
        </StyledH6>
      );
    case 'display':
      return (
        <StyledParagraph className={CN} m={m} s={s} color={color} style={style}>
          {children}
        </StyledParagraph>
      );
  }
};

export default index;
