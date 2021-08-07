import React from 'react';
import styles from './customeRadio.module.scss';

interface compInterface {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toolTip?: React.ReactNode;
}

const index: React.FC<compInterface> = ({
  handleChange,
  label,
  name,
  value,
  toolTip,
}) => {
  return (
    <label className={styles.radioContainer}>
      <span>
        {toolTip}
        {label}
      </span>
      <input type='radio' name={name} value={value} onChange={handleChange} />
      <span />
    </label>
  );
};

export default index;
