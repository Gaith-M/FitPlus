import Searchbar from '../../components/searchbar';
import ProductCard from '../../components/product-card';
import Heading from '../../components/heading';
import {
  Container,
  FlexContainer,
} from '../../components/shared-components/containers';

const index = () => {
  return (
    <Container>
      <Heading lvl={2}>Shop</Heading>
      <Searchbar />

      <FlexContainer wrap={true}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </FlexContainer>
    </Container>
  );
};

export default index;
