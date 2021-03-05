import React from 'react';
import StyledContainer from '../../components/sectionContainer';
import Searchbar from '../../components/searchbar';
import ProductCard from '../../components/product-card';
import Heading from '../../components/heading';

const index = () => {
  return (
    <StyledContainer>
      <Heading lvl={2}>Shop</Heading>
      <Searchbar />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </StyledContainer>
  );
};

export default index;
