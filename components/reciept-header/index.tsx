import useTranslation from 'next-translate/useTranslation';
import { FlexContainer } from '../../components/shared-components/containers';
import { dark } from '../../styles/styleConstants';

const index = ({ bg, color = dark, p }) => {
  const { t } = useTranslation('cart');
  return (
    <FlexContainer bg={bg} p={p} style={{ color: color }}>
      <span style={{ color: 'inherit', flex: '1 1 36%' }}>{t`name`}</span>
      <span
        style={{
          color: 'inherit',
          flex: '1 1 12%',
          margin: '0 7px',
          textAlign: 'center',
        }}
      >
        {t`quantity`}
      </span>
      <span
        style={{
          color: 'inherit',
          flex: '1 1 12%',
          margin: '0 7px',
          textAlign: 'center',
        }}
      >
        {t`price`}
      </span>
      <span
        style={{
          color: 'inherit',
          flex: '1 1 12%',
          margin: '0 7px',
          textAlign: 'center',
        }}
      >
        {t`total`}
      </span>
    </FlexContainer>
  );
};

export default index;
