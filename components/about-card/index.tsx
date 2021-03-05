import styled from 'styled-components';
import {
  secondaryLight,
  boxShadow,
  space_1,
  space_2,
} from '../../styles/styleConstants';

const StyledCard = styled.div`
  width: ${({ w }) => (w ? w : '100%')};
  height: ${({ h }) => (h ? h : 'auto')};
  padding: ${({ p }) => (p ? p : `${space_1} ${space_2}}`)};
  margin: ${({ m }) => (m ? m : `${space_1} ${space_2}}`)};
  background: ${({ bg }) => (bg ? bg : secondaryLight)};
  box-shadow: ${boxShadow};
`;

const FlexCard = styled(StyledCard)`
  flex: ${({ percent }) => `0 1 ${percent}%`};
`;

interface compInterface {
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  bg?: string;
  flex?: number;
  children: React.ReactChild | React.ReactChild[];
}

const index: React.FC<compInterface> = ({ w, h, p, bg, m, flex, children }) => {
  return flex ? (
    <FlexCard w={w} h={h} p={p} bg={bg} m={m} percent={flex}>
      {children}
    </FlexCard>
  ) : (
    <StyledCard w={w} h={h} p={p} bg={bg} m={m}>
      {children}
    </StyledCard>
  );
};

export default index;
