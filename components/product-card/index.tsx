import { useState } from 'react';
import Image from 'next/image';
import Button from '../button';
import styled from 'styled-components';
import Paragraph from '../paragraph';
import { boxShadow, dark } from '../../styles/styleConstants';

const StyledContainer = styled.div`
  width: 220px;
  background-color: #fff;
  text-align: center;
  padding: 10px 0;
  box-shadow: ${boxShadow};
  margin: 15px auto;
`;

const StyledQTYButton = styled.button`
  flex: 1 1 30%;
  border: none;
  color: #fff;
  background-color: ${dark};
  height: 30px;
  font-weight: bold;
  outline: none;
  transition: 0.3s ease-out;

  &:hover {
    background-color: #5a5a5d;
  }
`;

const index = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <StyledContainer>
      <Image src='/whey_protein_thumb.jpg' width={200} height={200} />
      <Paragraph m='10px'>Whey Protein - Gold Standard</Paragraph>
      <Button w='100%' noShadow>
        View
      </Button>
      <div style={{ display: 'flex', margin: '5px 0' }}>
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
      </div>
      <Button w='100%' noShadow>
        add to cart
      </Button>
    </StyledContainer>
  );
};

export default index;
