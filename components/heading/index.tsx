import styled from 'styled-components';
import { dark, space_2 } from '../../styles/styleConstants';

const StyledH1 = styled.h1`
  width: 100%;
  flex: 1 1 100%;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ color }) => (color ? color : dark)};
  margin-bottom: ${space_2};
  font-size: 48px;
  font-size: ${({ s }) => (s ? s : 'auto')};
`;
const StyledH2 = styled.h2`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  color: ${({ color }) => (color ? color : dark)};
  margin-bottom: ${space_2};
  font-size: 48px;
  font-size: ${({ s }) => (s ? s : 'auto')};
`;
const StyledH3 = styled.h3`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: ${space_2};
  color: ${({ color }) => (color ? color : dark)};
  font-size: 48px;
  font-size: ${({ s }) => (s ? s : 'auto')};
`;

const StyledParagraph = styled.p`
  width: 100%;
  flex: 1 1 100%;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: ${space_2};
  color: ${({ color }) => (color ? color : dark)};
  font-size: 48px;
  font-size: ${({ s }) => (s ? s : 'auto')};
`;

interface compInterface {
  lvl: number | string;
  children: React.ReactChild | React.ReactChild[];
  CN?: string;
  s?: string;
}

const index: React.FC<compInterface> = ({ children, lvl, CN, s }) => {
  switch (lvl) {
    case 1:
      return (
        <StyledH1 className={CN} s={s}>
          {children}
        </StyledH1>
      );
    case 2:
      return (
        <StyledH2 className={CN} s={s}>
          {children}
        </StyledH2>
      );
    case 3:
      return (
        <StyledH3 className={CN} s={s}>
          {children}
        </StyledH3>
      );
    case 'display':
      return <StyledParagraph s={s}>{children}</StyledParagraph>;
  }
};

export default index;
