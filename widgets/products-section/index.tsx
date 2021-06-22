// ----------------------------UI Imports----------------------------
import Searchbar from '../../components/searchbar';
import ProductCard from '../../components/product-card';
import Heading from '../../components/heading';

// Fake Data
import { ProductsFD } from '../../products-fake-data/PFD';
import useTranslation from 'next-translate/useTranslation';
import { Container } from '../../components/shared-components/containers';

const index = ({ theme }) => {
  const { t } = useTranslation('common');

  return (
    <Container className={theme}>
      <Heading color='inherit' lvl={2}>{t`section-titles.shop`}</Heading>
      <Searchbar w='80%' m='30px auto' />

      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            justifyItems: 'center',
            gap: '25px',
            width: '96%',
            margin: '0 auto',
          }}
        >
          {ProductsFD.map((elem) => (
            <ProductCard productDetails={elem} key={elem.id} />
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default index;
