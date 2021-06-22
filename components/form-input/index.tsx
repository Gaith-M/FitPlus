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
  w?: string;
  p?: string;
  style?: {};
  flex?: string;
  value: string;
  inputName: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      style={style}
      value={value}
      name={inputName}
      onChange={handleChange}
      placeholder={placeholder}
    />
  ) : (
    <FluidInput
      w={w}
      style={style}
      value={value}
      name={inputName}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default index;
