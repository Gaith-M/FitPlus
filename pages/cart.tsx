import { useState } from 'react';
import Meta from '../components/Meta';
import useTranslation from 'next-translate/useTranslation';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { themeSelector } from '../redux/reducers/theme-slice';
// -----------------UI Imports-----------------
import { space_max } from '../styles/styleConstants';
import { Container } from '../components/shared-components/containers';
import Heading from '../components/heading';
import Stepper from '../components/cart-stepper';
import FirstView from '../widgets/cart-first-view';
import SecondView from '../widgets/cart-second-view';
import ThirdView from '../widgets/cart-third-view';
import Thankyou from '../widgets/cart-thank-you-view';
import { itemInCartInterface } from '../interfaces/cart';
import { emptyCart } from '../redux/reducers/cart-slice';
import { userInterface } from '../interfaces/user';

const cart = () => {
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  const { t } = useTranslation('cart');
  const [step, setStep] = useState(0);
  const items: itemInCartInterface[] = useAppSelector(({ cart }) => cart.items);
  const user: userInterface = useAppSelector(({ user }) => user.user);
  const dispatch = useAppDispatch();

  const nextStep = () => {
    if (step >= 3) return;
    setStep(step + 1);
  };

  const previousStep = () => {
    if (step <= 0) return;
    setStep(step - 1);
  };

  // -------------------------------------------------
  // ----------------second view logic----------------
  // -------------------------------------------------
  const [fName, setFName] = useState<string | null>(user?.firstName ?? '');
  const [LName, setLName] = useState<string | null>(user?.lastName ?? '');
  const [address, setAddress] = useState<string | null>(user?.address ?? '');
  const [phone, setPhone] = useState<string | null>(user?.phone ?? '');
  const [email, setEmail] = useState<string | null>(user?.email ?? '');
  const [cardNumber, setCardNumber] = useState<string | null>('');
  const [CVC, setCVC] = useState<string | null>('');
  const [deliveryDate, setDeliveryDate] = useState<string | null>('');

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
      case 'deliveryDate':
        return setDeliveryDate(value);
      default:
        return null;
    }
  };

  const clearCart = () => {
    setFName(null);
    setLName(null);
    setAddress(null);
    setPhone(null);
    setEmail(null);
    setCardNumber(null);
    setCVC(null);
    setDeliveryDate(null);
    dispatch(emptyCart());
  };

  let currentView = (current) => {
    switch (current) {
      case 0:
        return <FirstView theme={theme} next={nextStep} items={items} />;
      case 1:
        return (
          <SecondView
            theme={theme}
            next={nextStep}
            handleChange={handleChange}
            fName={fName}
            LName={LName}
            address={address}
            phone={phone}
            email={email}
            cardNumber={cardNumber}
            CVC={CVC}
            deliveryDate={deliveryDate}
          />
        );
      case 2:
        return (
          <ThirdView
            theme={theme}
            next={nextStep}
            previous={previousStep}
            items={items}
            name={`${fName} ${LName}`}
            address={address}
            email={email}
            phone={phone}
            deliveryDate={deliveryDate}
            clearCart={clearCart}
          />
        );
      case 3:
        return <Thankyou theme={theme} />;
      default:
        return null;
    }
  };

  let currentHeading = (current) => {
    switch (current) {
      case 0:
        return t`cart`;
      case 1:
        return t`payment-details`;
      case 2:
        return t`confirm-order`;
      default:
        return null;
    }
  };

  return (
    <>
      <Meta title={t`cartTitle`} />

      <Container
        m={`${space_max} 0 0`}
        p={`0 0 ${space_max} 0`}
        className={theme}
      >
        {step > 2 ? null : <Heading lvl={1}>{currentHeading(step)}</Heading>}
        {step > 2 ? null : <Stepper current={step} theme={theme} />}

        {currentView(step)}
      </Container>
    </>
  );
};

export default cart;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
