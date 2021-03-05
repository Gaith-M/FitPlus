import styled from 'styled-components';
import {
  light,
  accent,
  secondaryAccent,
  dark,
  dynamicShadow,
  boxShadow,
  space_1,
  space_2,
} from '../../styles/styleConstants';

// Large Nav Elements
export const StyledNavbarContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: #fafafad6;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const StyledNavbar = styled.div`
  max-width: 1200px;
  width: 88%;
  height: 90px;
  margin: 0 auto;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 6%;
  z-index: 111;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    left: 5%;
    width: 90%;
  }
  @media (max-width: 1000px) {
    left: 4%;
    width: 92%;
  }
  @media (max-width: 800px) {
    left: 3%;
    width: 94%;
  }
  @media (max-width: 600px) {
    left: 2%;
    width: 96%;
  }
  @media (max-width: 500px) {
    left: 1%;
    width: 98%;
  }
`;

export const StyledNav = styled.nav`
  flex: 0 1 50%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

export const StyledUserSectionContainer = styled.span`
  font-size: 2.2em;
  display: flex;
  flex: 0 1 110px;
  justify-content: space-between;
`;

export const StyledLink = styled.a`
  padding: 10px;
  text-transform: capitalize;
  text-decoration: none;
  color: ${(props) => (props.active ? secondaryAccent : dark)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  filter: drop-shadow(${dynamicShadow});
  transition: 0.3s color ease-out;

  &:hover {
    color: ${secondaryAccent};
  }
`;

// Small Nav Elements
export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #3c3c3c96;
  z-index: 999;
  transition: 0.3s;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100vh;
  width: 240px;
  padding: ${`${space_1} ${space_2}`};
  transition: 0.3s;
  box-shadow: ${boxShadow};
  background-color: ${light};
  transform: ${({ ltr, open }) =>
    ltr ? `translateX(${open ? 0 : -115}%)` : `translateX(${open ? 0 : 115}%)`};
`;

export const SmallNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SmallNavLink = styled.a`
  width: 100%;
  margin: ${space_1} 0px;
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  color: ${(props) => (props.active ? secondaryAccent : dark)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  filter: drop-shadow(${dynamicShadow});
  transition: 0.3s ease-out;
  overflow-x: hidden;

  &:hover {
    color: ${secondaryAccent};
  }

  &::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${accent};
    display: inline-block;
    margin-top: 35px;
    transition: 0.3s ease-out;
    transform: translate(-100%, 0px);
  }

  &:hover::after {
    transform: translate(0px, 0px);
  }
`;
