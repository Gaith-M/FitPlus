import Link from 'next/link';
import Button from '../../components/button';
import Heading from '../../components/heading';
import { useEffect } from 'react';
import { FlexContainer } from '../../components/shared-components/containers';
import {
  accent,
  boxShadow,
  dark,
  onyx,
  secondaryLight,
  space_2,
  space_5,
} from '../../styles/styleConstants';
import useTranslation from 'next-translate/useTranslation';

const index = ({ theme }) => {
  useEffect(() => {
    if (typeof window != undefined) {
      window.scrollTo(0, 0);
    }
  }, []);
  const { t } = useTranslation('cart');
  return (
    <FlexContainer
      justify='center'
      align='center'
      flexDirection='column'
      p={`${space_2} 0`}
      style={{
        minHeight: '70vh',
        backgroundColor: theme === 'light' ? secondaryLight : onyx,
        backgroundImage: 'url(/accent_checkmark_half_opacity.jpg)',
        backgroundPosition: 'center',
        backgroundSize: '400px 300px',
        backgroundRepeat: 'no-repeat',
        boxShadow: boxShadow,
      }}
    >
      <div style={{ color: theme === 'light' ? dark : secondaryLight }}>
        <Heading lvl='display' color={accent} style={{ textAlign: 'center' }}>
          {t`thankYou`}
        </Heading>
        <Heading lvl='display' s='1.8em' style={{ textAlign: 'center' }}>
          {t`orderSubmited`}
        </Heading>
        <Heading
          lvl='display'
          s='1.2em'
          style={{ textAlign: 'center', marginBottom: space_5 }}
        >
          {t`orderId`} <span style={{ color: accent }}>2312938</span>
        </Heading>

        <FlexContainer justify='space-evenly' align='center' wrap='wrap'>
          <Button m='10px'>
            <Link href='/shop'>
              <a
                style={{
                  color: secondaryLight,
                  display: 'inline-block',
                  width: '280px',
                }}
              >
                {t`continueShopping`}
              </a>
            </Link>
          </Button>
          <Button m='10px'>
            <Link href='/blogs'>
              <a
                style={{
                  color: secondaryLight,
                  display: 'inline-block',
                  width: '280px',
                }}
              >
                {t`blogs`}
              </a>
            </Link>
          </Button>
        </FlexContainer>
      </div>
    </FlexContainer>
  );
};

export default index;
