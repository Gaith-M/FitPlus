import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { ViewInterface } from '../../pages/cart';
// ------------------------- UI Imports -------------------------
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

const index: React.FC<ViewInterface> = ({ theme, next }) => {
  useEffect(() => {
    if (typeof window != undefined) {
      window.scrollTo(0, 0);
    }
  }, []);
  const { t } = useTranslation('cart');
  const [fName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [CVC, setCVC] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'firstName':
        return setFName(value);
      case 'lastName':
        return setLName(value);
      case 'address':
        return setAddress(value);
      case 'phone':
        return setPhone(value);
      case 'email':
        return setEmail(value);
      case 'cardNumber':
        return setCardNumber(value);
      case 'CVC':
        return setCVC(value);
      default:
        return null;
    }
  };

  const nextView = () => {
    // verify data.. if any fail show a warning
    let procced = user
      ? cardNumber && CVC
      : fName && LName && address && phone && email && cardNumber && CVC;

    if (procced) return next();
  };

  let user = true;

  let userDetailsSection = user ? (
    <>
      <Heading lvl='display' s='1.2em'>
        {t`user-details`}
      </Heading>
      <div
        style={{
          flex: '1 1 45%',
          margin: `0 ${space_1}`,
        }}
      >
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
      <div style={{ flex: '1 1 45%', margin: `0 ${space_1}` }}>
        <Input
          placeholder={t`phone`}
          inputName='phone'
          value={phone}
          handleChange={handleChange}
          w='100%'
        />
        <Input
          placeholder={t`address`}
          inputName='address'
          value={address}
          handleChange={handleChange}
          w='100%'
        />
      </div>{' '}
      <span
        style={{
          flex: '1 1 100%',
          display: 'inline-block',
          padding: 1,
          margin: '50px 0',
          backgroundColor: '#49494a9c',
        }}
      />{' '}
    </>
  ) : null;

  let creditCardSection = (
    <>
      <Heading lvl='display' s='1.2em'>
        {t`credit-card-details`}
      </Heading>

      <div style={{ flex: '1 1 45%', margin: `0 ${space_1}` }}>
        <Input
          placeholder={t`credit-card-number`}
          inputName='cardNumber'
          value={cardNumber}
          handleChange={handleChange}
          w='100%'
        />
      </div>
      <div style={{ flex: '1 1 45%', margin: `0 ${space_1}` }}>
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
