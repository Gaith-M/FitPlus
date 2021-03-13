import styles from './styles.module.scss';
import { FlexContainer } from '../../components/shared-components/containers';

const index = ({ name, price, qty }) => {
  return (
    <FlexContainer
      align='center'
      p='20px 5px'
      m='0 0 20px 0'
      style={{
        fontWeight: 'bold',
        fontSize: '0.9em',
        borderBottom: '1px solid #d8d8d8',
      }}
      className={styles.recieptEntry}
    >
      <span style={{ flex: '1 1 36%' }}>{name}</span>
      <span
        style={{
          flex: '1 1 12%',
          margin: '0 7px',
          textAlign: 'center',
        }}
      >
        {qty}
      </span>
      <span
        style={{
          flex: '1 1 12%',
          margin: '0 7px',
          textAlign: 'center',
        }}
      >
        {price}$
      </span>
      <span
        style={{
          flex: '1 1 12%',
          margin: '0 7px',
          textAlign: 'center',
        }}
      >
        {price * qty}$
      </span>
    </FlexContainer>
  );
};

export default index;
