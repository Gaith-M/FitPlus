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
  imgDetails: { src: string; alt: string };
  name: string;
  qty: number;
  price: number;
  id: number;
  handleDelete: (id: number) => void;
  handleChange: (id: number, value: number) => void;
}

const index: React.FC<compInterface> = ({
  imgDetails: { src, alt },
  name,
  qty,
  price,
  id,
  handleDelete,
  handleChange,
}) => {
  return (
    <Entry>
      <img src={src} width='75px' height='75px' alt={alt} />
      <span style={{ flex: '0 1 35%', cursor: 'default' }}>{name}</span>
      <span
        style={{
          flex: '0 1 10%',
          margin: '0 5px',
          textAlign: 'center',
        }}
      >
        <NumberInput id={id} value={qty} handleChange={handleChange} />
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
        {price * qty}$
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
