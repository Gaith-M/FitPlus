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
import { dark, light } from '../../styles/styleConstants';
import { NavbarParentContainer } from './styledElements';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeUser } from '../../redux/reducers/user-slice';
import styles from './largeNavStyles.module.scss';

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

  const dispatch = useAppDispatch();
  const { user } = useAppSelector(({ user }) => user);
  const router = useRouter();

  return (
    <NavbarParentContainer className={className}>
      <div className={styles.largeNavContainer}>
        <LogoIcon w='90' />
        <nav className={styles.largeNav}>
          <Link href='/'>
            <a
              className={`${styles.largeNavLink} ${
                pathname === '/' && styles.largeNavSelected
              } `}
            >{t`navbar.home`}</a>
          </Link>
          <Link href='/blogs'>
            <a
              className={`${styles.largeNavLink} ${
                pathname === '/blogs' && styles.largeNavSelected
              }`}
            >{t`navbar.blog`}</a>
          </Link>
          <Link href='/shop'>
            <a
              className={`${styles.largeNavLink} && ${
                pathname === '/shop' && styles.largeNavSelected
              }`}
            >{t`navbar.shop`}</a>
          </Link>
          <Link href='/contact'>
            <a
              className={`${styles.largeNavLink} && ${
                pathname === '/contact' && styles.largeNavSelected
              }`}
            >{t`navbar.contact`}</a>
          </Link>
          <Link href='/about'>
            <a
              className={`${styles.largeNavLink} && ${
                pathname === '/about' && styles.largeNavSelected
              }`}
            >{t`navbar.about`}</a>
          </Link>
        </nav>

        {/* User Related Section */}
        <div className={styles.userLinksContainer}>
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
            {user ? (
              <>
                <Link href={`/user-details`}>
                  <a className='userActionsLinks'>{user.username}</a>
                </Link>
                <button
                  className={styles.logoutButton}
                  onClick={() => {
                    dispatch(removeUser());
                    router.reload();
                  }}
                >
                  {t`navbar.logout`}
                </button>
              </>
            ) : (
              <>
                <Link href='/login'>
                  <a className='userActionsLinks'>{t`navbar.login`}</a>
                </Link>
                <Link href='/sign-up'>
                  <a className='userActionsLinks'>{t`navbar.signup`}</a>
                </Link>
              </>
            )}
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
        </div>
      </div>
    </NavbarParentContainer>
  );
};
