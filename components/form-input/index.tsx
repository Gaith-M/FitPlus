import React from 'react';
import styled from 'styled-components';
import { light, space_1 } from '../../styles/styleConstants';

interface baseInputInterface {
  p?: string;
  bg?: string;
}

const BaseInput: React.FC<baseInputInterface> = styled.input`
  display: block;
  padding: ${space_1};
  background-color: ${light};
  min-width: 280px;
  margin: 5px 5px 10px 5px;
  border-radius: 4px;
  outline: none;
  border: none;
`;

const FluidInput = styled(BaseInput)`
  width: ${({ w }) => w};
`;
const FlexItemInput = styled(BaseInput)`
  flex: ${({ f }) => f};
`;

interface compInterface {
  flex?: string;
  w?: string;
  placeholder: string;
  inputName: string;
  value: string;
  p?: string;
  bg?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: {};
}

const index: React.FC<compInterface> = ({
  flex,
  w,
  inputName,
  value,
  placeholder,
  handleChange,
  style,
}) => {
  return flex ? (
    <FlexItemInput
      f={flex}
      name={inputName}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={style}
    />
  ) : (
    <FluidInput
      w={w}
      name={inputName}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default index;
