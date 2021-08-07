import { FlexContainer } from '../shared-components/containers';

interface CartFooterInterface {
  text: string;
  value: number;
}

const index: React.FC<CartFooterInterface> = ({ text, value }) => {
  return (
    <FlexContainer
      justify='flex-end'
      p='20px 5px'
      style={{
        textTransform: 'capitalize',
        fontSize: '0.9em',
        fontWeight: 'bold',
        color: 'inherit',
      }}
    >
      <span style={{ margin: '0 10px', textAlign: 'center', color: 'inherit' }}>
        {text}
      </span>
      <span style={{ margin: '0 10px', textAlign: 'center', color: 'inherit' }}>
        {value}$
      </span>
    </FlexContainer>
  );
};

export default index;
