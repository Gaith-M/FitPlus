// ---------------Logic Imports---------------
import { useRouter } from 'next/dist/client/router';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/Link';
// ---------------UI Imports---------------
import UserIcon from '../../components/svgs/UserIcon';
import StyledBadge from '../../components/badge';
import LogoIcon from '../../components/svgs/LogoIcon';
import Switch from '../../components/switch-button';
import Popup from 'reactjs-popup';
import { CartIcon } from '../../components/svgs/CartIcon';
import { accent, dark, light } from '../../styles/styleConstants';
import {
  StyledNavbar,
  NavbarParentContainer,
  StyledNav,
} from './styledElements';
import { FlexItem } from '../../components/shared-components/containers';

interface NavInterface {
  numberOfItemsInCart: number;
  className: string;
}

export const LargeNav: React.FC<NavInterface> = ({
  numberOfItemsInCart,
  className,
}) => {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');

  return (
    <NavbarParentContainer className={className}>
      <StyledNavbar>
        <LogoIcon w='90' />
        <StyledNav>
          <Link href='/'>
            <a
              className='largeNavLink'
              style={{
                fontWeight: pathname === '/' ? 'bold' : 'normal',
                color: pathname === '/' ? accent : 'inherit',
              }}
            >{t`navbar.home`}</a>
          </Link>
          <Link href='/blogs'>
            <a
              className='largeNavLink'
              style={{
                fontWeight: pathname === '/blogs' ? 'bold' : 'normal',
                color: pathname === '/blogs' ? accent : 'inherit',
              }}
            >{t`navbar.blog`}</a>
          </Link>
          <Link href='/shop'>
            <a
              className='largeNavLink'
              style={{
                fontWeight: pathname === '/shop' ? 'bold' : 'normal',
                color: pathname === '/shop' ? accent : 'inherit',
              }}
            >{t`navbar.shop`}</a>
          </Link>
          <Link href='/contact'>
            <a
              className='largeNavLink'
              style={{
                fontWeight: pathname === '/contact' ? 'bold' : 'normal',
                color: pathname === '/contact' ? accent : 'inherit',
              }}
            >{t`navbar.contact`}</a>
          </Link>
          <Link href='/about'>
            <a
              className='largeNavLink'
              style={{
                fontWeight: pathname === '/about' ? 'bold' : 'normal',
                color: pathname === '/about' ? accent : 'inherit',
              }}
            >{t`navbar.about`}</a>
          </Link>
        </StyledNav>

        {/* User Related Section */}
        <FlexItem
          minW='110px'
          flex='0 1 110px'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '2.2em',
          }}
        >
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
                  outline: 'none',
                }}
              >
                <UserIcon color={className === 'navbarLight' ? dark : light} />
              </button>
            )}
          >
            <Link href='/login'>
              <a className='userActionsLinks'>login</a>
            </Link>
            <Link href='/sign-up'>
              <a className='userActionsLinks'>sign up</a>
            </Link>
            <Switch />
          </Popup>

          <StyledBadge
            xOffset='24px'
            yOffset='-5px'
            count={numberOfItemsInCart}
          >
            <Link href='/cart'>
              <a>
                <CartIcon color={className === 'navbarLight' ? dark : light} />
              </a>
            </Link>
          </StyledBadge>
        </FlexItem>
      </StyledNavbar>
    </NavbarParentContainer>
  );
};
