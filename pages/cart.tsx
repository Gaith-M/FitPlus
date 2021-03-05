import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Meta from '../components/Meta';
// -----------------UI Imports-----------------
import { space_max } from '../styles/styleConstants';
import Heading from '../components/heading';
import Stepper from '../components/cart-stepper';
import FirstView from '../widgets/cart-first-view';

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
        return <div>Second</div>;
      case 2:
        return <div>Third</div>;
      case 3:
        return <div>Thank You</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Meta title='Fit+ Cart' />

      <div style={{ margin: `${space_max} 0` }}>
        <Heading lvl={2}>{t`cart`}</Heading>
        {step > 2 ? null : <Stepper current={step} />}

        {currentView(step)}

        <button onClick={nextStep}>Next</button>
        <button onClick={previousStep}>previous</button>
      </div>
    </>
  );
};

export default cart;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
