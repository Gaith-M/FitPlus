import useTranslation from 'next-translate/useTranslation';
import { FlexContainer } from '../../widgets/cart-first-view/styledElements';

const index = () => {
  const { t } = useTranslation('cart');
  return (
    <FlexContainer>
      <span style={{ width: '75px' }} />
      <span style={{ flex: '0 1 35%' }}>{t`name`}</span>
      <span style={{ flex: '0 1 10%', margin: '0 5px', textAlign: 'center' }}>
        {t`quantity`}
      </span>
      <span style={{ flex: '0 1 10%', margin: '0 5px', textAlign: 'center' }}>
        {t`price`}
      </span>
      <span style={{ flex: '0 1 10%', margin: '0 5px', textAlign: 'center' }}>
        {t`total`}
      </span>
      <span style={{ width: '30px' }} />
    </FlexContainer>
  );
};

export default index;
