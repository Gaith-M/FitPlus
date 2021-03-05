import styles from './customeRadio.module.scss';

interface compInterface {
  label: string;
  name: string;
  value: string;
  isSelected: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const index: React.FC<compInterface> = ({
  isSelected,
  handleChange,
  label,
  name,
  value,
}) => {
  return (
    <label className={styles.radioContainer}>
      {label}
      <input
        type='radio'
        name={name}
        value={value}
        checked={isSelected}
        onChange={handleChange}
      />
      <span />
    </label>
  );
};

export default index;
