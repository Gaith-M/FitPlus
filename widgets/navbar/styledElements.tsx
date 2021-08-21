import styled from 'styled-components';
import {
  light,
  accent,
  dark,
  dynamicShadow,
  boxShadow,
  space_1,
  space_2,
} from '../../styles/styleConstants';

// -----------------Large Nav Elements-----------------
export const NavbarParentContainer = styled.div`
  width: 100%;
  height: 90px;
  backdrop-filter: blur(2px) saturate(0.7);
  background-color: ${({ className }) =>
    className === 'navbarLight' ? '#fafafa85' : '#15151bab'};
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// -----------------Small Nav Elements-----------------
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
  transition: 0.3s;
  overflow-y: scroll;
  padding: ${`${space_1} ${space_2}`};
  box-shadow: ${boxShadow};
  background-color: ${light};
`;

export const StyledSmallNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SmallNavLink = styled.a`
  width: 100%;
  margin: 5px 0 ${space_1} 0px;
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  color: ${(props) => (props.active ? accent : dark)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  filter: drop-shadow(${dynamicShadow});
  transition: 0.3s ease-out;
  overflow-x: hidden;

  &:hover {
    color: ${accent};
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
