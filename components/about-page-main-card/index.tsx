import { space_4, space_2 } from '../../styles/styleConstants';
import Heading from '../heading';
import Card from '../about-card';
import React from 'react';

interface compInterface {
  title: string;
  imgSrc: string;
  children: any;
}

const index: React.FC<compInterface> = ({ title, imgSrc, children }) => {
  return (
    <Card w='100%' p={space_2} m={`${space_2} auto ${space_4}`}>
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
    </Card>
  );
};

export default index;
