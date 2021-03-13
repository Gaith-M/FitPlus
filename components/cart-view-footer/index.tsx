import { FlexContainer } from '../shared-components/containers';

interface CartFooterInterface {
  text: string;
  value: number;
}

const index: React.FC<CartFooterInterface> = ({ text, value }) => {
  return (
    <FlexContainer
      justify='space-between'
      p='20px 5px'
      style={{
        textTransform: 'capitalize',
        fontSize: '0.9em',
        fontWeight: 'bold',
      }}
    >
      <span style={{ flex: '0 1 75px' }} />
      <span style={{ flex: '0 1 35%' }} />
      <span style={{ flex: '0 1 10%' }} />
      <span style={{ flex: '0 1 10%', textAlign: 'center' }}>{text}</span>
      <span style={{ flex: '0 1 10%', textAlign: 'center' }}>{value}$</span>
      <span style={{ flex: '0 1 30px' }} />
    </FlexContainer>
  );
};

export default index;
