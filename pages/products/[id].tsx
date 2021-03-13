import { useState } from 'react';
import Heading from '../../components/heading';
import Button from '../../components/button';
import QtyManagment from '../../components/product-qty-counter';
import {
  Container,
  FlexContainer,
  FlexItem,
} from '../../components/shared-components/containers';
import {
  boxShadow,
  secondaryLight,
  space_max,
} from '../../styles/styleConstants';
import ImgsPanel from '../../widgets/product-image-preview';
import ColorOption from '../../components/color-option';
import Select from 'react-select';

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
  };
  const { imgs, sizes, colors, description, title, price } = product;

  const [imgSrc, setImgSrc] = useState(imgs[0].src);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [qty, setQty] = useState(0);

  const addToCart = () => {
    return {
      selectedSize,
      selectedColor,
      qty,
    };
  };
  return (
    <Container m={`${space_max} 0`}>
      <Heading lvl={1}>{title}</Heading>

      <div
        style={{
          backgroundColor: secondaryLight,
          boxShadow: boxShadow,
          padding: 5,
        }}
      >
        <FlexContainer justify='center' align='stretch' wrap='wrap'>
          <ImgsPanel imgs={imgs} imgSrc={imgSrc} setImgSrc={setImgSrc} />
          <FlexItem flex='0 0 20px' minW='20px'></FlexItem>
          <FlexItem flex='1 1 55%' minW='320px'>
            <ul style={{ padding: '30px 0' }}>
              <li className='productListItem'>
                <span>Name</span>: {title}
              </li>
              <li className='productListItem'>
                <span>price</span>: {price}$
              </li>
              <li className='productListItem'>
                <FlexContainer align='center'>
                  <span style={{ fontWeight: 'bold' }}>colors</span>:{' '}
                  <FlexContainer align='center' m='0 10px'>
                    {colors.map(({ colorName, value }) => (
                      <ColorOption
                        color={value}
                        value={colorName}
                        isChecked={colorName === selectedColor}
                        handleChange={({ target }) =>
                          setSelectedColor(target.value)
                        }
                      />
                    ))}
                  </FlexContainer>
                </FlexContainer>
              </li>
              <li className='productListItem'>
                <FlexContainer align='center'>
                  <span style={{ fontWeight: 'bold' }}>sizes</span>:{' '}
                  <Select
                    className='sizeSelect'
                    options={sizes}
                    placeholder='Select Size'
                    onChange={({ value }) => setSelectedSize(value)}
                    isSearchable={true}
                    autoFocus={false}
                  />
                </FlexContainer>
              </li>
              <li className='productListItem'>
                <FlexContainer align='center'>
                  <span style={{ fontWeight: 'bold' }}>quantity</span>:{' '}
                  <QtyManagment setQty={setQty} qty={qty} />
                </FlexContainer>
              </li>
              <li className='productListItem'>
                <span>description</span>: {description}
              </li>
            </ul>
            <Button w='100%' handleClick={() => console.log(addToCart())}>
              Add to cart
            </Button>
          </FlexItem>
        </FlexContainer>
      </div>
    </Container>
  );
};

export default index;
