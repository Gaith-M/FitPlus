import { FlexContainer } from '../../components/shared-components/containers';
import { dark } from '../../styles/styleConstants';

const index = ({ bg, color = dark, p, text, value }) => {
  return (
    <FlexContainer bg={bg} p={p} style={{ color: color }}>
      <span style={{ flex: '1 1 36%' }} />
      <span
        style={{
          flex: '1 1 12%',
          margin: '0 7px',
        }}
      />
      <span
        style={{
          color: 'inherit',
          flex: '1 1 12%',
          margin: '0 7px',
          textAlign: 'center',
        }}
      >
        {text}
      </span>
      <span
        style={{
          color: 'inherit',
          flex: '1 1 12%',
          margin: '0 7px',
          textAlign: 'center',
        }}
      >
        {value}
      </span>
    </FlexContainer>
  );
};

export default index;
