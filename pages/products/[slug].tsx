// --------------------------Logic Imports--------------------------
import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { themeSelector } from '../../redux/reducers/theme-slice';
import { GetStaticPaths, GetStaticProps } from 'next';
// --------------------------UI Imports--------------------------
import styled from 'styled-components';
import Heading from '../../components/heading';
import Button from '../../components/button';
import QtyManagment from '../../components/product-qty-counter';
import ImgsPanel from '../../widgets/product-image-preview';
import ColorOption from '../../components/color-option';
import Select from 'react-select';
import {
  Container,
  FlexContainer,
} from '../../components/shared-components/containers';
import {
  boxShadow,
  dark,
  light,
  onyx,
  secondaryLight,
  space_max,
} from '../../styles/styleConstants';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 320px minmax(320px, 1fr);
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

// ----------------------------------------------------

const index = () => {
  const product = {
    id: '312319',
    title: 'Meister Weightlift golves',
    price: 20.99,
    imgs: [
      {
        src: '/gloves_red.jpg',
        alt: 'red meister weightlift gloves',
      },
      {
        src: '/gloves_orange.jpg',
        alt: 'orange meister weightlift gloves',
      },
      {
        src: '/gloves_blue.jpg',
        alt: 'blue meister weightlift gloves',
      },
    ],
    sizes: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
    ],
    colors: [
      {
        colorName: 'cardinalRed',
        value: '#c11f3a',
      },
      {
        colorName: 'summerOrange',
        value: '#f59922',
      },
      {
        colorName: 'icyBlue',
        value: '#72dbdf',
      },
      {
        colorName: 'militaryGreen',
        value: '#347b2d',
      },
    ],
    weight: 0.3,
    description: `
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident
    `,
    material: 'strudy fabric and treated leather',
  };

  // The following props are common across all products
  const { id, imgs, description, title, price, weight } = product;

  const [imgSrc, setImgSrc] = useState(imgs[0].src);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [qty, setQty] = useState(0);
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';

  const addToCart = () => {
    return {
      id,
      selectedSize,
      selectedColor,
      qty,
    };
  };

  return (
    <Container m={`${space_max} 0 0`} p='0 0 80px 0' className={theme}>
      <Heading lvl={1}>{title}</Heading>

      <GridContainer
        style={{
          backgroundColor: theme === 'light' ? secondaryLight : onyx,
          color: theme === 'light' ? dark : light,
          boxShadow: boxShadow,
          padding: 5,
        }}
      >
        <ImgsPanel imgs={imgs} imgSrc={imgSrc} setImgSrc={setImgSrc} />

        <Container p='0 20px 20px' style={{ color: 'inherit' }}>
          <ul style={{ padding: '30px 0', color: 'inherit' }}>
            <li className='productListItem'>
              <span>Name</span>: {title}
            </li>

            <li className='productListItem'>
              <span>price</span>: {price}$
            </li>

            <li className='productListItem'>
              <span>weight</span>: {weight}kg ({(weight * 2.205).toFixed(2)}{' '}
              pound)
            </li>

            {/* if material exist */}
            {product?.material && (
              <li className='productListItem'>
                <span>material</span>: {product.material}
              </li>
            )}

            {/* If Sizes Exists */}
            {product?.sizes && (
              <li className='productListItem'>
                <FlexContainer align='center' style={{ color: 'inherit' }}>
                  <span style={{ fontWeight: 'bold', color: 'inherit' }}>
                    sizes
                  </span>
                  :{' '}
                  <Select
                    className='sizeSelect'
                    options={product.sizes}
                    placeholder='Select Size'
                    onChange={({ value }) => setSelectedSize(value)}
                    isSearchable={true}
                    autoFocus={false}
                  />
                </FlexContainer>
              </li>
            )}

            {/* If Colors Exist */}
            {product?.colors && (
              <li className='productListItem'>
                <FlexContainer align='center' style={{ color: 'inherit' }}>
                  <span style={{ fontWeight: 'bold', color: 'inherit' }}>
                    colors
                  </span>
                  :{' '}
                  <FlexContainer align='center' m='0 10px'>
                    {product.colors.map(({ colorName, value }) => (
                      <ColorOption
                        color={value}
                        value={colorName}
                        isChecked={colorName === selectedColor}
                        handleChange={({ target }) =>
                          setSelectedColor(target.value)
                        }
                        key={colorName}
                      />
                    ))}
                  </FlexContainer>
                </FlexContainer>
              </li>
            )}

            <li className='productListItem'>
              <span>description</span>: {description}
            </li>
            <li className='productListItem'>
              <FlexContainer align='center' style={{ color: 'inherit' }}>
                <span style={{ fontWeight: 'bold', color: 'inherit' }}>
                  quantity
                </span>
                : <QtyManagment setQty={setQty} qty={qty} />
              </FlexContainer>
            </li>
          </ul>
          <Button w='100%' handleClick={() => console.log(addToCart())}>
            Add to cart
          </Button>
        </Container>
      </GridContainer>
    </Container>
  );
};

export default index;

// ----------------------------------------------------
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
