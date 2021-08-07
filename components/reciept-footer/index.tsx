import { FlexContainer } from '../../components/shared-components/containers';

const index = ({ bg, color, text, value }) => {
  return (
    <FlexContainer bg={bg} p='20px 5px' style={{ color: color }}>
      <span style={{ flex: '1 1 40%' }} />
      <span
        style={{
          flex: '1 1 12%',
          margin: '0 7px',
        }}
      />
      <span
        style={{
          color: 'inherit',
          flex: '1 1 10%',
          margin: '0 7px',
        }}
      >
        {text}
      </span>
      <span
        style={{
          color: 'inherit',
          flex: '1 1 10%',
          margin: '0 7px',
        }}
      >
        {value}
      </span>
    </FlexContainer>
  );
};

export default index;
