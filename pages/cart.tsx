import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Meta from '../components/Meta';
// -----------------UI Imports-----------------
import { space_max } from '../styles/styleConstants';
import Heading from '../components/heading';
import Stepper from '../components/cart-stepper';
import FirstView from '../widgets/cart-first-view';
import SecondView from '../widgets/cart-second-view';
import ThirdView from '../widgets/cart-third-view';
import Thankyou from '../widgets/cart-thank-you-view';
import { Container } from '../components/shared-components/containers';

const cart = () => {
  const { t } = useTranslation('cart');
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step >= 3) return;
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
        return <ThirdView handleClick={nextStep} />;
      case 3:
        return <Thankyou />;
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
        {step > 2 ? null : <Heading lvl={1}>{currentHeading(step)}</Heading>}
        {step > 2 ? null : <Stepper current={step} />}

        {currentView(step)}

        <span style={{ position: 'fixed', top: '90%', left: 0 }}>
          <button onClick={nextStep}>Next</button>
          <button onClick={previousStep}>previous</button>
        </span>
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
