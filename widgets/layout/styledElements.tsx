import styled from 'styled-components';

const StyledLayout: React.FC = styled.div`
  max-width: 1200px;
  width: 88%;
  margin: 0 auto;
  background-color: inherit;

  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 1000px) {
    width: 92%;
  }
  @media (max-width: 800px) {
    width: 94%;
  }
  @media (max-width: 600px) {
    width: 96%;
  }
  @media (max-width: 500px) {
    width: 98%;
  }
`;

export default StyledLayout;
