// --------------------------Components & Styled Elements--------------------------
import Link from 'next/Link';
import Facebook from '../../components/svgs/Facebook';
import Twitter from '../../components/svgs/Twitter';
import YouTubeIcon from '../../components/svgs/YouTube';
import Instagram from '../../components/svgs/Instagram';
import LogoIcon from '../../components/svgs/LogoIcon';
import {
  StyledFooterContainer,
  StyledFooter,
  StyledLi,
  StyledCopyRight,
  StyledLogoContainer,
  StyledSocialMediaIconContainer,
} from './styledElements';
import useTranslation from 'next-translate/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <StyledFooterContainer>
      <StyledFooter>
        <div className='socialMediaParentContainer'>
          <StyledSocialMediaIconContainer>
            <a href='https://www.youtube.com' target='_blank'>
              <YouTubeIcon color='#49494aff' />
            </a>
            <a href='https://www.twitter.com' target='_blank'>
              <Twitter color='#49494aff' />
            </a>
            <a href='https://www.instagram.com' target='_blank'>
              <Instagram color='#49494aff' />
            </a>
            <a href='https://www.facebook.com' target='_blank'>
              <Facebook color='#49494aff' />
            </a>
          </StyledSocialMediaIconContainer>
        </div>
        <StyledLogoContainer>
          <LogoIcon />
        </StyledLogoContainer>

        <ul style={{ minWidth: 300, flex: '1 1 50%', padding: '10px' }}>
          <StyledLi>
            <a href='/privacy-policy'>{t`footer.p-policy`}</a>
          </StyledLi>
          <StyledLi>
            <a href='/terms-of-service'>{t`footer.t-o-service`}</a>
          </StyledLi>
          <StyledLi>
            <address
              style={{
                color: '#f1f1f1',
                fontStyle: 'normal',
                lineHeight: 2,
                position: 'relative',
                top: '-4px',
              }}
            >
              {t`footer.address`} <br />
              {t`footer.phone`} <br />
              {t`footer.email`}
            </address>
          </StyledLi>
        </ul>

        <ul style={{ minWidth: 300, flex: '1 1 50%', padding: '10px' }}>
          <StyledLi>
            <Link href='/'>
              <a>{t`navbar.home`}</a>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href='/blog'>
              <a>{t`navbar.blog`}</a>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href='/shop'>
              <a>{t`navbar.shop`}</a>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href='/about'>
              <a>{t`navbar.about`}</a>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href='/contact'>
              <a>{t`navbar.contact`}</a>
            </Link>
          </StyledLi>
        </ul>
      </StyledFooter>
      <StyledCopyRight>
        <span
          style={{ fontWeight: 'bold', color: 'inherit', fontStyle: 'italic' }}
        >
          Fit+
        </span>{' '}
        &copy; {new Date().getFullYear()} <br />
        {t`footer.reserved`}
      </StyledCopyRight>
    </StyledFooterContainer>
  );
};

export default Footer;
