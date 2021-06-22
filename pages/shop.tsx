import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
// ---UI Imports---
import { Container } from '../components/shared-components/containers';
import { space_max } from '../styles/styleConstants';
import Heading from '../components/heading';
import Searchbar from '../components/searchbar';
import ProductCard from '../components/product-card';
import SearchOptions from '../widgets/shop-search-option';
import { ProductsFD } from '../products-fake-data/PFD';
import { useAppSelector } from '../redux/hooks';
import { themeSelector } from '../redux/reducers/theme-slice';

const shop = () => {
  const { t } = useTranslation('shop');
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';

  const [inStock, setInStock] = useState(false);
  const [discounted, setDiscounted] = useState(false);
  const [startPrice, setstartPrice] = useState<string | number>('');
  const [maxPrice, setMaxPrice] = useState<string | number>('');
  const [category, setCategory] = useState<null | string>(null);

  const handleSelectChange = ({ value }) => setCategory(value);

  const submitSearch = () => {
    console.log({ inStock, discounted, startPrice, maxPrice, category });
  };

  return (
    <Container
      m={`${space_max} 0 0`}
      p={`0 0 ${space_max} 0`}
      className={theme}
    >
      <Heading lvl={1}>{t`shop`}</Heading>

      <Container p='10px'>
        <Container w='90%' m='0 auto' style={{ minWidth: 360 }}>
          <SearchOptions
            handleSelectChange={handleSelectChange}
            startPrice={startPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setStartPrice={setstartPrice}
            discounted={discounted}
            setDiscounted={setDiscounted}
            inStock={inStock}
            setInStock={setInStock}
          />
        </Container>
        <Searchbar
          w='90%'
          m='20px auto'
          handleClick={submitSearch}
          text={t`search`}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 220px))',
            justifyItems: 'center',
            justifyContent: 'center',
            gap: '15px',
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

export default shop;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
