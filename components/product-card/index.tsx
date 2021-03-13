// --------------------Logic--------------------
import React, { useState } from 'react';
import { addToCart } from '../../redux/reducers/cart-slice';
import Link from 'next/Link';
// --------------------UI Imports--------------------
import Image from 'next/image';
import Button from '../button';
import Paragraph from '../paragraph';
import StyledQTYButton from './styledElements';
import { boxShadow, secondaryLight } from '../../styles/styleConstants';
import { Container, FlexContainer } from '../shared-components/containers';
import { useAppDispatch } from '../../redux/hooks';
import useTranslation from 'next-translate/useTranslation';
// --------------------Component's Interface--------------------
interface ProductCardProductDetailsInterface {
  id: string;
  title: string;
  imgDetails: { imgSrc: string; alt: string };
  price: number;
}
interface ProductCardInterface {
  productDetails: ProductCardProductDetailsInterface;
}

const index: React.FC<ProductCardInterface> = ({
  productDetails: {
    id,
    title,
    price,
    imgDetails: { imgSrc, alt },
  },
}) => {
  const { t } = useTranslation('common');
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const dispatch = useAppDispatch();
  const sendToCart = () => {
    if (count <= 0) return;
    dispatch(
      addToCart({
        qty: count,
        id: id,
        title: title,
        price: price,
        imgSrc: imgSrc,
      })
    );
    setCount(0);
  };
  return (
    <Container
      w='220px'
      bg={secondaryLight}
      style={{
        textAlign: 'center',
        boxShadow: boxShadow,
      }}
    >
      <Image src={imgSrc} alt={alt} width={200} height={200} />
      <Paragraph m='10px'>{price}$</Paragraph>
      <Link href={`http://localhost:3000/products/${id}`}>
        <a>
          <Button w='100%' noShadow>
            {t`buttons.view`}
          </Button>
        </a>
      </Link>
      <FlexContainer m='5px 0' align='center'>
        <StyledQTYButton onClick={decrement}>-</StyledQTYButton>
        <span
          style={{
            flex: '1 1 30%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {count}
        </span>
        <StyledQTYButton onClick={increment}>+</StyledQTYButton>
      </FlexContainer>
      <Button w='100%' noShadow handleClick={sendToCart}>
        {t`buttons.addToCart`}
      </Button>
    </Container>
  );
};

export default index;
