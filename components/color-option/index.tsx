interface CompInterface {
  color: string;
  value: string;
  isChecked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const index: React.FC<CompInterface> = ({
  color,
  value,
  isChecked,
  handleChange,
}) => {
  return (
    <label
      style={{
        display: 'inline-block',
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: color,
        margin: '0 12px',
        border: `3px solid ${isChecked ? '#d0d0d0' : 'transparent'}`,
        cursor: 'pointer',
      }}
    >
      <input
        type='radio'
        name='color'
        value={value}
        checked={isChecked}
        style={{ display: 'hidden', position: 'absolute', left: '-999999px' }}
        onChange={handleChange}
      />
    </label>
  );
};

export default index;
