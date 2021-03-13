import styled from 'styled-components';
import {
  space_3,
  space_4,
  light,
  secondaryLight,
} from '../../styles/styleConstants';

export const StyledFooterContainer = styled.div`
  width: 100%;
  padding: ${space_4} 0 0 0;
  background-color: #363636;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  justify-content: flex-end;
  min-width: 320px;
  margin: ${space_3} 0;

  @media (max-width: 870px) {
    flex: 1 1 100%;
    justify-content: center;
    order: -1;
  }
`;

export const StyledSocialMediaIconContainer = styled.div`
  margin: 0;
  font-size: 1.9em;
  width: 75%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 870px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const StyledFooter = styled.footer`
  width: 88%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

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

export const StyledLi = styled.li`
  color: ${secondaryLight};
  padding-bottom: 15px;
  text-transform: capitalize;
`;

export const StyledCopyRight = styled.div`
  background-color: #171717;
  color: ${light};
  padding: 20px 0;
  text-align: center;
  font-size: 0.9em;
  text-transform: capitalize;
  line-height: 1.4;
`;
