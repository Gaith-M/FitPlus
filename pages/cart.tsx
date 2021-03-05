import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Meta from '../components/Meta';
// -----------------UI Imports-----------------
import { space_max } from '../styles/styleConstants';
import Heading from '../components/heading';
import Stepper from '../components/cart-stepper';
import FirstView from '../widgets/cart-first-view';
import SecondView from '../widgets/cart-second-view';
import { Container } from '../components/shared-components/containers';

const cart = () => {
  const { t } = useTranslation('cart');
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step > 4) return;
    setStep(step + 1);
  };

  const previousStep = () => {
    if (step <= 0) return;
    setStep(step - 1);
  };

  let currentView = (current) => {
    switch (current) {
      case 0:
        return <FirstView handleClick={nextStep} />;
      case 1:
        return <SecondView next={nextStep} />;
      case 2:
        return <div>Third</div>;
      case 3:
        return <div>Thank You</div>;
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
      <Meta title='Fit+ Cart' />

      <Container m={`${space_max} 0`}>
        <Heading lvl={2}>{currentHeading(step)}</Heading>
        {step > 2 ? null : <Stepper current={step} />}

        {currentView(step)}

        <button onClick={nextStep}>Next</button>
        <button onClick={previousStep}>previous</button>
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
