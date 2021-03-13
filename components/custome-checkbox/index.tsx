import styled from 'styled-components';
import styles from './styles.module.scss';
import { dark, secondaryLight } from '../../styles/styleConstants';

const CustomeCheckBox = styled.span`
  display: inline-block;
  width: 17px;
  height: 17px;
  margin: 0 7px;
  border-radius: 2px;
  background-color: ${secondaryLight};
  cursor: pointer;
  transition: 0.3s ease-out background-color;
  border: 1px solid ${dark};
`;

interface CompInterface {
  text: string;
  name: string;
  value: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const index: React.FC<CompInterface> = ({
  text,
  name,
  value,
  handleChange,
}) => {
  return (
    <label
      style={{
        userSelect: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '0.9em',
        textTransform: 'capitalize',
      }}
      className={styles.checkboxLabel}
    >
      {text}
      <input
        name={name}
        type='checkbox'
        checked={value}
        onChange={handleChange}
        style={{ height: 0, width: 0, display: 'hidden' }}
      />
      <CustomeCheckBox className='customeCheckbox' />
    </label>
  );
};

export default index;
