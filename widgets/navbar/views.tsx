// ---------------Logic Imports---------------
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/Link';
import useTranslation from 'next-translate/useTranslation';
// ---------------UI Imports---------------
import UserIcon from '../../components/svgs/UserIcon';
import StyledBadge from '../../components/badge';
import LogoIcon from '../../components/svgs/LogoIcon';
import MenuIcon from '../../components/menu-icon';
import Popup from 'reactjs-popup';
import { CartIcon } from '../../components/svgs/CartIcon';
import { dark } from '../../styles/styleConstants';
import {
  StyledNavbar,
  StyledLink,
  StyledNavbarContainer,
  StyledNav,
  StyledUserSectionContainer,
  Overlay,
  SmallNav,
  SmallNavLink,
  NavWrapper,
} from './styledElements';

interface NavInterface {
  numberOfItemsInCart: number;
}

export const LargeViewNav: React.FC<NavInterface> = ({
  numberOfItemsInCart,
}) => {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');
  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <LogoIcon w='90' />
        <StyledNav>
          <Link passHref href='/'>
            <StyledLink active={pathname === '/'}>{t`navbar.home`}</StyledLink>
          </Link>
          <Link passHref href='/blogs'>
            <StyledLink
              active={pathname === '/blogs'}
            >{t`navbar.blog`}</StyledLink>
          </Link>
          <Link passHref href='/shop'>
            <StyledLink
              active={pathname === '/shop'}
            >{t`navbar.shop`}</StyledLink>
          </Link>
          <Link passHref href='/about'>
            <StyledLink
              active={pathname === '/about'}
            >{t`navbar.about`}</StyledLink>
          </Link>
          <Link passHref href='/contact'>
            <StyledLink
              active={pathname === '/contact'}
            >{t`navbar.contact`}</StyledLink>
          </Link>
        </StyledNav>

        <StyledUserSectionContainer>
          <Popup
            className='userActions'
            on='hover'
            trigger={() => (
              <button
                style={{
                  border: 'none',
                  fontSize: '1em',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <UserIcon color={dark} />
              </button>
            )}
          >
            <Link passHref href='/login'>
              <StyledLink>login</StyledLink>
            </Link>
            <Link passHref href='/sign-up'>
              <StyledLink>sign up</StyledLink>
            </Link>
          </Popup>

          <StyledBadge
            xOffset='24px'
            yOffset='-5px'
            count={numberOfItemsInCart}
          >
            <Link href='/cart'>
              <a>
                <CartIcon color={dark} />
              </a>
            </Link>
          </StyledBadge>
        </StyledUserSectionContainer>
      </StyledNavbar>
    </StyledNavbarContainer>
  );
};

export const SmallViewNav: React.FC<NavInterface> = ({
  numberOfItemsInCart,
}) => {
  const { t, lang } = useTranslation('common');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 99,
          width: '100%',
          display: 'flex',
          padding: '0 10px',
          justifyContent: 'space-between',
          backgroundColor: '#ebebebcf',
        }}
      >
        <LogoIcon w='100' h='60' />
        <MenuIcon h='5px' color={dark} onClick={() => setToggle(true)} />
      </div>
      <Overlay open={toggle} onClick={() => setToggle(false)} />
      <NavWrapper open={toggle}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '15px 0',
          }}
        >
          <span
            style={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: 22,
              transition: '0.3s',
            }}
            className='navCloseButton'
            onClick={() => setToggle(false)}
          >
            X
          </span>
        </div>
        <SmallNav>
          <Link href='/user' passHref>
            <SmallNavLink className='smallNavLink'>
              <span className='linkTextContainer'>{t`navbar.user`}</span>
            </SmallNavLink>
          </Link>
          <Link href='/cart' passHref>
            <SmallNavLink className='smallNavLink'>
              <span className='linkTextContainer'>
                <StyledBadge
                  count={numberOfItemsInCart}
                  xOffset='35px'
                  yOffset='-10px'
                >
                  {t`navbar.cart`}
                </StyledBadge>
              </span>
            </SmallNavLink>
          </Link>
          <Link href='/' passHref>
            <SmallNavLink className='smallNavLink'>
              <span className='linkTextContainer'>{t`navbar.home`}</span>
            </SmallNavLink>
          </Link>
          <Link href='/blogs' passHref>
            <SmallNavLink className='smallNavLink'>
              <span className='linkTextContainer'>{t`navbar.blog`}</span>
            </SmallNavLink>
          </Link>
          <Link href='/shop' passHref>
            <SmallNavLink className='smallNavLink'>
              <span className='linkTextContainer'>{t`navbar.shop`}</span>
            </SmallNavLink>
          </Link>
          <Link href='/contact' passHref>
            <SmallNavLink className='smallNavLink'>
              <span className='linkTextContainer'>{t`navbar.contact`}</span>
            </SmallNavLink>
          </Link>
          <Link href='/about' passHref>
            <SmallNavLink className='smallNavLink'>
              <span className='linkTextContainer'>{t`navbar.about`}</span>
            </SmallNavLink>
          </Link>
        </SmallNav>
      </NavWrapper>
    </>
  );
};
