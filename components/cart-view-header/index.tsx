import useTranslation from 'next-translate/useTranslation';
import { FlexContainer } from '../shared-components/containers';

const index = () => {
  const { t } = useTranslation('cart');
  return (
    <FlexContainer
      justify='space-between'
      p='20px 5px'
      style={{
        textTransform: 'capitalize',
        fontSize: '0.9em',
        fontWeight: 'bold',
        color: 'inherit',
      }}
    >
      <span style={{ width: '75px' }} />
      <span style={{ flex: '0 1 35%', color: 'inherit' }}>{t`name`}</span>
      <span
        style={{
          flex: '0 1 10%',
          margin: '0 5px',
          textAlign: 'center',
          color: 'inherit',
        }}
      >
        {t`quantity`}
      </span>
      <span
        style={{
          flex: '0 1 10%',
          margin: '0 5px',
          textAlign: 'center',
          color: 'inherit',
        }}
      >
        {t`price`}
      </span>
      <span
        style={{
          flex: '0 1 10%',
          margin: '0 5px',
          textAlign: 'center',
          color: 'inherit',
        }}
      >
        {t`total`}
      </span>
      <span style={{ width: '30px' }} />
    </FlexContainer>
  );
};

export default index;
