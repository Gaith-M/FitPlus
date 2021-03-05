import { space_4, space_2 } from '../../styles/styleConstants';
import { Container } from '../shared-components/containers';
import Heading from '../heading';
import React from 'react';

interface compInterface {
  title: string;
  imgSrc: string;
  children: any;
}

const index: React.FC<compInterface> = ({ title, imgSrc, children }) => {
  return (
    <Container p={space_2} m={`${space_2} auto ${space_4}`}>
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundImage: `url(${imgSrc})`,
          marginBottom: space_2,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Heading lvl={3} s='32px'>
        {title}
      </Heading>
      {children}
    </Container>
  );
};

export default index;
