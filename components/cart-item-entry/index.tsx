import styled from 'styled-components';
import {
  accent,
  accentHover,
  secondaryLight,
} from '../../styles/styleConstants';
import NumberInput from '../number-input';
import { FlexContainer } from '../shared-components/containers';

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
    <FlexContainer
      justify='space-between'
      align='center'
      m='10px 0'
      p='15px 5px'
      style={{
        fontSize: '0.9em',
        flex: '0 1 100%',
        borderBottom: '1px solid #c1c1c1',
        color: 'inherit',
      }}
    >
      <img src={imgSrc} width='75px' height='75px' />
      <span
        style={{
          flex: '0 1 35%',
          cursor: 'default',
          color: 'inherit',
          padding: '3px 0',
        }}
      >
        {title}
      </span>
      <span
        style={{
          flex: '0 1 10%',
          margin: '0 5px',
          textAlign: 'center',
          color: 'inherit',
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
          color: 'inherit',
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
          color: 'inherit',
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
    </FlexContainer>
  );
};

export default index;
