import RadioInput from '../radio-input';
import { space_1, space_6 } from '../../styles/styleConstants';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

interface compInterface {
  selected: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const index: React.FC<compInterface> = ({ selected, handleChange }) => {
  const { t } = useTranslation('blogs');
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
      <span
        style={{
          display: 'inline-block',
          marginRight: space_1,
          fontSize: '0.8em',
        }}
      >
        {t`sortBy`}:
      </span>
      <RadioInput
        label={t`newest`}
        name='newest'
        value='newest'
        isSelected={selected === 'newest'}
        handleChange={handleChange}
      />
      <RadioInput
        label={t`mostViewed`}
        name='filterBy'
        value='mostViewed'
        isSelected={selected === 'mostViewed'}
        handleChange={handleChange}
      />
    </div>
  );
};

export default index;
