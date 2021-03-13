import React, { useState } from 'react';
import styled from 'styled-components';
import {
  accent,
  accentHover,
  secondaryLight,
} from '../../styles/styleConstants';
import NumberInput from '../number-input';

const Entry = styled.div`
  flex: 0 1 100%;
  padding: 15px 5px;
  font-size: 0.9em;
  margin: 10px 0;
  border-bottom: 1px solid #c1c1c1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  flex: 0 1 30px;
  border: none;
  padding: 5px 0;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-out;
  background-color: ${accent};
  color: ${secondaryLight};
  outline: none;

  &:hover {
    background-color: ${accentHover};
  }
`;

interface compInterface {
  imgSrc: string;
  title: string;
  qty: number;
  price: number;
  id: string;
  handleDelete: (id: string) => void;
  handleChange: (id: string, qty: number) => void;
}

const index: React.FC<compInterface> = ({
  imgSrc,
  title,
  qty,
  price,
  id,
  handleDelete,
  handleChange,
}) => {
  return (
    <Entry>
      <img src={imgSrc} width='75px' height='75px' />
      <span style={{ flex: '0 1 35%', cursor: 'default' }}>{title}</span>
      <span
        style={{
          flex: '0 1 10%',
          margin: '0 5px',
          textAlign: 'center',
        }}
      >
        <NumberInput value={qty} id={id} handleChange={handleChange} />
      </span>
      <span
        style={{
          flex: '0 1 10%',
          margin: '0 5px',
          textAlign: 'center',
          cursor: 'default',
        }}
      >
        {price}$
      </span>
      <span
        style={{
          flex: '0 1 10%',
          margin: '0 5px',
          textAlign: 'center',
          cursor: 'default',
        }}
      >
        {(price * qty).toFixed(2)}$
      </span>
      <DeleteButton
        style={{ flex: '0 1 30px' }}
        onClick={() => handleDelete(id)}
      >
        X
      </DeleteButton>
    </Entry>
  );
};

export default index;
