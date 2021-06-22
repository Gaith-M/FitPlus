// ---------------Logic Imports---------------
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/Link';
// ---------------UI Imports---------------
import StyledBadge from '../../components/badge';
import LogoIcon from '../../components/svgs/LogoIcon';
import MenuIcon from '../../components/menu-icon';
import { dark } from '../../styles/styleConstants';
import {
  Overlay,
  StyledSmallNav,
  SmallNavLink,
  NavWrapper,
} from './styledElements';
import { FlexContainer } from '../../components/shared-components/containers';
import { useAppDispatch } from '../../redux/hooks';
import { toggleTheme } from '../../redux/reducers/theme-slice';

interface NavInterface {
  numberOfItemsInCart: number;
  className: string;
}

export const SmallNav: React.FC<NavInterface> = ({
  numberOfItemsInCart,
  className,
}) => {
  const { t } = useTranslation('common');
  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();

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
          backgroundColor:
            className === 'navbarLight' ? '#f1f1f18a' : '#15151bde',
        }}
      >
        <LogoIcon w='100' h='60' />
        <FlexContainer
          justify='space-between'
          align='center'
          style={{ flex: '0 0 100px' }}
        >
          <MenuIcon
            h='5px'
            color={className === 'navbarLight' ? dark : '#8c8c8c'}
            onClick={() => setToggle(true)}
          />
          <button
            style={{
              padding: 3,
              height: 35,
              width: 35,
              backgroundColor: className === 'navbarLight' ? '#fafafa' : '#333',
              borderRadius: 4,
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              boxShadow: 'rgb(148 148 148 / 65%) 0px 0px 9px 0px',
              backdropFilter: 'blur(2px) saturate(0.3)',
            }}
            onClick={() =>
              dispatch(toggleTheme(className === 'navbarLight' ? false : true))
            }
          >
            <img
              style={{ maxWidth: '100%' }}
              src={className === 'navbarLight' ? '/sun.png' : '/darkIcon.png'}
            />
          </button>
        </FlexContainer>
      </div>
      <Overlay open={toggle} onClick={() => setToggle(false)} />
      <NavWrapper open={toggle}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '5px 0',
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
        <StyledSmallNav>
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
        </StyledSmallNav>
      </NavWrapper>
    </>
  );
};
