const index = ({ fieldName, value }) => {
  return (
    <li
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'inherit',
        padding: '10px',
        marginBottom: 10,
        borderBottom: '1px solid #d8d8d8',
      }}
    >
      <span
        style={{
          margin: 5,
          color: 'inherit',
          fontWeight: 'bold',
          textTransform: 'capitalize',
        }}
      >
        {fieldName}
      </span>{' '}
      <span style={{ margin: 5, color: 'inherit', fontWeight: 'bold' }}>
        {value}
      </span>
    </li>
  );
};

export default index;
