import useTranslation from 'next-translate/useTranslation';
// ---UI Imports---
import 'reactjs-popup/dist/index.css';
import Select from 'react-select';
import CustomeCheckbox from '../../components/custome-checkbox';
import Popup from 'reactjs-popup';
import styles from './styles.module.scss';
import Button from '../../components/button';
import { FlexContainer } from '../../components/shared-components/containers';

// ---Select Element Options--- will be used until the backend can provide them

interface CompInterface {
  startPrice: number | string;
  maxPrice: number | string;
  discounted: boolean;
  categories: {}[];
  selectedOption: { label: string; value: string };
  selectPlaceholder: string
  handleSelectChange: (string) => void;
  setStartPrice: (number) => void;
  setMaxPrice: (number) => void;
  setDiscounted: (boolean) => void;
  handleClick: () => void;
}

const index: React.FC<CompInterface> = ({
  handleSelectChange,
  setStartPrice,
  setMaxPrice,
  startPrice,
  maxPrice,
  discounted,
  setDiscounted,
  categories,
  handleClick,
  selectedOption,
  selectPlaceholder
}) => {
  const { t, lang } = useTranslation('shop');

  return (
    <>
      <Popup
        className='searchOption'
        on='hover'
        trigger={() => (
          <button
            className={styles.SearchOptionButton}
          >{t`search-options`}</button>
        )}
      >
        <Select
          options={categories}
          placeholder={selectPlaceholder}
          onChange={handleSelectChange}
          isSearchable={true}
          autoFocus={false}
          className='CustomSelect'
          value={selectedOption}
        />
        <label
          style={{
            fontSize: '0.9em',
            display: 'flex',
            alignItems: 'center',
            margin: '15px 0',
          }}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          {t`price-range`}
          <input
            style={{ margin: 15 }}
            className={styles.priceInput}
            type='number'
            placeholder={t`start-price`}
            value={startPrice}
            onChange={({ target: { value } }) => setStartPrice(+value)}
          />
          <input
            className={styles.priceInput}
            type='number'
            placeholder={t`max-price`}
            value={maxPrice}
            onChange={({ target: { value } }) => setMaxPrice(+value)}
          />
        </label>
        <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <span style={{ display: 'inline-block', width: '10px' }} />
          <CustomeCheckbox
            text={t`discounted`}
            name='discounted'
            value={discounted}
            handleChange={({ target: { checked } }) => setDiscounted(checked)}
          />
        </div>
        <FlexContainer
          m='4px 0'
          justify={lang === 'ar' ? 'flex-start' : 'flex-end'}
        >
          <Button handleClick={handleClick}>{t`search`}</Button>
        </FlexContainer>
      </Popup>
    </>
  );
};

export default index;
