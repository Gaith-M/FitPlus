import RadioInput from '../radio-input';
import { space_1, space_6 } from '../../styles/styleConstants';
import React from 'react';

interface compInterface {
  selected: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const index: React.FC<compInterface> = ({ selected, handleChange }) => {
  return (
    <div
      style={{
        flex: '1 1 100%',
        margin: `${space_6} auto 0`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 3px',
      }}
    >
      <span style={{ marginRight: space_1, fontSize: '0.8em' }}>Sort By:</span>
      <RadioInput
        label='newest'
        name='filterBy'
        value='newest'
        isSelected={selected === 'newest'}
        handleChange={handleChange}
      />
      <RadioInput
        label='most viewed'
        name='filterBy'
        value='mostViewed'
        isSelected={selected === 'mostViewed'}
        handleChange={handleChange}
      />
    </div>
  );
};

export default index;
