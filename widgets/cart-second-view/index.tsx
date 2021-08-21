import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
// ------------------------- UI Imports -------------------------
import styles from './styles.module.scss';
import { FlexContainer } from '../../components/shared-components/containers';
import {
  space_2,
  space_1,
  secondaryLight,
  boxShadow,
  space_3,
  onyx,
  light,
  dark,
} from '../../styles/styleConstants';
import Input from '../../components/form-input';
import Heading from '../../components/heading';
import Button from '../../components/button';
import 'react-toastify/dist/ReactToastify.min.css';
import notify from '../../shared utility/notify';
import { useAppSelector } from '../../redux/hooks';

interface PropsInterface {
  theme: string;
  fName: string | null;
  LName: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  cardNumber: string | null;
  CVC: string | null;
  deliveryDate: string | null;
  next: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const index = ({
  theme,
  next,
  handleChange,
  fName,
  LName,
  address,
  phone,
  email,
  cardNumber,
  CVC,
  deliveryDate,
}: PropsInterface) => {
  useEffect(() => {
    if (typeof window != undefined) {
      window.scrollTo(0, 0);
    }
  }, []);
  const { t } = useTranslation('cart');

  let user = useAppSelector(({ user }) => user.user);

  const nextView = () => {
    // verify data
    if (!user) {
      if (!fName) return notify('warning', t`cartErrors.firstNameErr`);
      if (!LName) return notify('warning', t`cartErrors.lastNameErr`);
      if (!email) return notify('warning', t`cartErrors.emailErr`);
      if (
        !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
          email
        )
      ) {
        return notify('warning', t`cartErrors.invalidEmail`);
      }
      if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone))
        return notify('warning', t`cartErrors.phoneNumberErr`);
      if (!address) return notify('warning', t`cartErrors.addressErr`);
      if (!cardNumber) return notify('warning', t`cartErrors.cardNumberErr`);
      if (!CVC) return notify('warning', t`cartErrors.cardCVCErr`);
    }
    if (user) {
      if (!cardNumber) return notify('warning', t`cartErrors.cardNumberErr`);
      if (!CVC) return notify('warning', t`cartErrors.cardCVCErr`);
    }
    if (!deliveryDate) return notify('warning', t`cartErrors.deliveryDateErr`);

    next();
  };

  let userDetailsSection = (
    <>
      <Heading lvl='display' s='1.2em'>
        {t`user-details`}
      </Heading>
      <div className={styles.pane}>
        <Input
          placeholder={t`first-name`}
          inputName='firstName'
          value={fName}
          handleChange={handleChange}
          w='100%'
        />
        <Input
          placeholder={t`last-name`}
          inputName='lastName'
          value={LName}
          handleChange={handleChange}
          w='100%'
        />

        <Input
          placeholder={t`email`}
          inputName='email'
          value={email}
          handleChange={handleChange}
          w='100%'
        />
      </div>
      <div className={styles.pane}>
        <Input
          placeholder={t`phone`}
          inputName='phone'
          value={phone}
          handleChange={handleChange}
          w='100%'
          type='tel'
        />
        <Input
          placeholder={t`address`}
          inputName='address'
          value={address}
          handleChange={handleChange}
          w='100%'
        />
      </div>{' '}
      <span className={styles.divider} />{' '}
    </>
  );

  let creditCardSection = (
    <>
      <Heading lvl='display' s='1.2em'>
        {t`credit-card-details`}
      </Heading>

      <div className={styles.pane}>
        <Input
          placeholder={t`credit-card-number`}
          inputName='cardNumber'
          value={cardNumber}
          handleChange={handleChange}
          w='100%'
        />
      </div>
      <div className={styles.pane}>
        <Input
          placeholder={t`CVC`}
          inputName='CVC'
          value={CVC}
          handleChange={handleChange}
          w='100%'
        />
      </div>
    </>
  );

  return (
    <>
      <FlexContainer
        p={`${space_2} ${space_1}`}
        wrap='wrap'
        justify='space-between'
        align='flex-start'
        bg={theme === 'light' ? secondaryLight : onyx}
        style={{
          color: theme === 'light' ? dark : light,
          boxShadow: boxShadow,
        }}
      >
        {userDetailsSection}

        {creditCardSection}

        <span className={styles.divider} />
        <div className={styles.pane}>
          <Heading lvl='display' s='1.2em'>
            {t`deliveryDate`}
          </Heading>
          <input
            type='date'
            name='deliveryDate'
            className={styles.dateInput}
            onChange={handleChange}
          />
        </div>
      </FlexContainer>

      <div
        style={{
          marginTop: space_3,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button w='150px' handleClick={nextView}>
          {t`next`}
        </Button>
      </div>
    </>
  );
};

export default index;
