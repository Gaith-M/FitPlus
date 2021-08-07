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
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleTheme } from '../../redux/reducers/theme-slice';
import router, { useRouter } from 'next/router';
import styles from './smallNavStyles.module.scss';
import { removeUser } from '../../redux/reducers/user-slice';

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
  const { locale } = useRouter();
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();

  const paths = [
    { name: 'home', url: '/' },
    { name: 'blogs', url: '/blogs' },
    { name: 'shop', url: '/shop' },
    { name: 'contact', url: '/contact' },
    { name: 'about', url: '/about' },
  ];

  const getLinkName = (str: string) => {
    switch (str) {
      case 'home':
        return t`navbar.home`;
      case 'blogs':
        return t`navbar.blog`;
      case 'shop':
        return t`navbar.shop`;
      case 'contact':
        return t`navbar.contact`;
      case 'about':
        return t`navbar.about`;
    }
  };

  return (
    <>
      <div
        className={styles.smallNavParentContainer}
        style={{
          backgroundColor:
            className === 'navbarLight' ? '#f1f1f18a' : '#15151bde',
        }}
      >
        <LogoIcon w='100' h='60' />
        <div className={styles.flexContainer} style={{ flex: '0 0 100px' }}>
          <MenuIcon
            h='5px'
            color={className === 'navbarLight' ? dark : '#8c8c8c'}
            onClick={() => setToggle(true)}
          />
          <button
            style={{
              backgroundColor: className === 'navbarLight' ? '#fafafa' : '#333',
            }}
            className={styles.toggleThemeButton}
            onClick={() =>
              dispatch(toggleTheme(className === 'navbarLight' ? false : true))
            }
          >
            <img
              style={{ maxWidth: '100%' }}
              src={className === 'navbarLight' ? '/sun.png' : '/darkIcon.png'}
            />
          </button>
        </div>
      </div>
      <Overlay open={toggle} onClick={() => setToggle(false)} />
      <NavWrapper open={toggle}>
        <div className={styles.closeButtonContainer}>
          <span
            className={styles.navCloseButton}
            onClick={() => setToggle(false)}
          >
            X
          </span>
        </div>
        <StyledSmallNav>
          {user ? (
            <>
              <Link href={`/user-details`} passHref>
                <SmallNavLink
                  className='smallNavLink'
                  onClick={() => setToggle(false)}
                >
                  <span className={styles.linkTextContainer}>
                    {user.username}
                  </span>
                </SmallNavLink>
              </Link>
              <Link href={`/`} passHref>
                <SmallNavLink
                  className='smallNavLink'
                  onClick={() => {
                    dispatch(removeUser());
                    router.reload();
                  }}
                >
                  <span
                    className={styles.linkTextContainer}
                  >{t`navbar.logout`}</span>
                </SmallNavLink>
              </Link>
            </>
          ) : (
            <>
              <Link href={`/login`} passHref>
                <SmallNavLink
                  className='smallNavLink'
                  onClick={() => setToggle(false)}
                >
                  <span
                    className={styles.linkTextContainer}
                  >{t`navbar.login`}</span>
                </SmallNavLink>
              </Link>
              <Link href={`/sign-up`} passHref>
                <SmallNavLink
                  className='smallNavLink'
                  onClick={() => setToggle(false)}
                >
                  <span
                    className={styles.linkTextContainer}
                  >{t`navbar.signup`}</span>
                </SmallNavLink>
              </Link>
            </>
          )}
          <Link href='/cart' passHref>
            <SmallNavLink
              className='smallNavLink'
              onClick={() => setToggle(false)}
            >
              <span className={styles.linkTextContainer}>
                <StyledBadge
                  count={numberOfItemsInCart}
                  xOffset={locale === 'en' ? '35px' : '85px'}
                  yOffset='-10px'
                >
                  {t`navbar.cart`}
                </StyledBadge>
              </span>
            </SmallNavLink>
          </Link>
          {/* Main Pages Links */}
          {paths.map((path) => (
            <Link href={path.url} passHref key={path.name}>
              <SmallNavLink onClick={() => setToggle(false)}>
                <span className={styles.linkTextContainer}>
                  {getLinkName(path.name)}
                </span>
              </SmallNavLink>
            </Link>
          ))}
        </StyledSmallNav>
      </NavWrapper>
    </>
  );
};
