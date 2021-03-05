import useTranslation from 'next-translate/useTranslation';
import { FlexContainer } from '../../widgets/cart-first-view/styledElements';

const index = ({ state }) => {
  const { t } = useTranslation('cart');

  return (
    <FlexContainer FS='0.8em'>
      <span style={{ flex: '0 1 75px' }} />
      <span style={{ flex: '0 1 35%' }} />
      <span style={{ flex: '0 1 10%' }} />
      <span style={{ flex: '0 1 10%', textAlign: 'center' }}>{t`total`}</span>
      <span style={{ flex: '0 1 10%', textAlign: 'center' }}>
        {state
          .reduce((total, { price, qty }) => total + price * qty, 0)
          .toFixed(2)}
        $
      </span>
      <span style={{ flex: '0 1 30px' }} />
    </FlexContainer>
  );
};

export default index;
