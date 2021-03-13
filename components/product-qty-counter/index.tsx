import { dark, secondaryLight } from '../../styles/styleConstants';
import Button from '../button';
import { FlexContainer } from '../shared-components/containers';

interface CompInterface {
  setQty: (qty: number) => void;
  qty: number;
}

const index: React.FC<CompInterface> = ({ setQty, qty }) => {
  return (
    <FlexContainer align='stretch' p='0 10px'>
      <Button
        noShadow={true}
        bg={dark}
        color={secondaryLight}
        p='5px 15px'
        fontSize='24px'
        handleClick={() => {
          qty > 0 ? setQty(qty - 1) : null;
        }}
      >
        -
      </Button>
      <input
        type='number'
        value={qty}
        style={{
          textAlign: 'center',
          border: '1px solid #afafafdb',
          width: '50%',
          maxWidth: 100,
          outline: 'none',
        }}
        onChange={({ target: { value } }) => {
          +value >= 0 ? setQty(+value) : null;
        }}
      />
      <Button
        noShadow={true}
        bg={dark}
        color={secondaryLight}
        p='5px 15px'
        fontSize='24px'
        handleClick={() => {
          setQty(qty + 1);
        }}
      >
        +
      </Button>
    </FlexContainer>
  );
};

export default index;
