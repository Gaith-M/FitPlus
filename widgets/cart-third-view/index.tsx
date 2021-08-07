import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
// ----------------------- UI Imports -----------------------
import RecieptHeader from '../../components/reciept-header';
import RecieptFooter from '../../components/reciept-footer';
import Heading from '../../components/heading';
import DetialsEntry from '../../components/order-details-list-item';
import RecieptEntry from '../../components/reciept-entry';
import Button from '../../components/button';
import {
  Container,
  FlexContainer,
} from '../../components/shared-components/containers';
import {
  boxShadow,
  dark,
  onyx,
  secondaryLight,
} from '../../styles/styleConstants';
import { itemInCartInterface } from '../../interfaces/cart';

interface PropsInterface {
  items: itemInCartInterface[];
  theme: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  deliveryDate: string;
  next: () => void;
  previous: () => void;
  clearCart: () => void;
}
const index: React.FC<PropsInterface> = ({
  next,
  previous,
  theme,
  items,
  name,
  address,
  email,
  phone,
  deliveryDate,
  clearCart,
}) => {
  useEffect(() => {
    if (typeof window != undefined) {
      window.scrollTo(0, 0);
    }
  }, []);

  const { t } = useTranslation('cart');

  return (
    <>
      <div className={theme}>
        <Container
          bg={theme === 'light' ? secondaryLight : onyx}
          style={{ boxShadow: boxShadow, color: 'inherit' }}
        >
          <Container style={{ color: 'inherit' }}>
            <Container
              bg={theme === 'light' ? secondaryLight : onyx}
              p='20px 0'
              style={{
                fontSize: '0.9em',
                color: 'inherit',
              }}
            >
              <Heading lvl='display' style={{ padding: '5px' }} s='1.7em'>
                {t`itemsPurchesed`}
              </Heading>
              <RecieptHeader
                bg={theme === 'light' ? dark : '#272525'}
                color={secondaryLight}
                p='15px 5px'
              />
              {items.map(
                ({
                  item: { name, price, id, flavor, size, color },
                  quantity,
                }) => (
                  <RecieptEntry
                    name={name}
                    price={price}
                    qty={quantity}
                    theme={theme}
                    key={`${id}${flavor}${size}${color}`}
                  />
                )
              )}
            </Container>
            <RecieptFooter
              bg={theme === 'light' ? dark : '#272525'}
              color={secondaryLight}
              text={t`price`}
              value={`${items
                .reduce(
                  (acc, { item, quantity }) => item.price * quantity + acc,
                  0
                )
                .toFixed(2)}$`}
            />
            <RecieptFooter
              bg={theme === 'light' ? dark : '#272525'}
              color={secondaryLight}
              text={t`shipping`}
              value={`10$`}
            />
            <RecieptFooter
              bg={theme === 'light' ? dark : '#272525'}
              color={secondaryLight}
              text={t`total`}
              value={`${items
                .reduce(
                  (acc, { item, quantity }) => item.price * quantity + acc,
                  10
                )
                .toFixed(2)}$`}
            />
          </Container>
        </Container>

        <Container
          bg={theme === 'light' ? secondaryLight : onyx}
          style={{
            boxShadow: boxShadow,
            color: 'inherit',
            margin: '40px 0 0 0',
          }}
        >
          <Heading lvl='display' style={{ padding: '5px' }} s='1.7em'>
            {t`user-details`}
          </Heading>
          <Container style={{ color: 'inherit' }}>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '0.9em',
                maxHeight: '500px',
                overflowY: 'auto',
                color: 'inherit',
              }}
            >
              <DetialsEntry fieldName={t`name`} value={name} />
              <DetialsEntry fieldName={t`address`} value={address} />
              <DetialsEntry fieldName={t`phone`} value={phone} />
              <DetialsEntry fieldName={t`email`} value={email} />
              <DetialsEntry fieldName={t`order-number`} value='312513' />
              <DetialsEntry fieldName={t`delivery-date`} value={deliveryDate} />
            </ul>
          </Container>
        </Container>
      </div>

      <FlexContainer justify='space-between' m='30px 0 0 0'>
        {/* On click submit info to backend */}
        {/* add a spinner to the button while the data is being processed */}
        <Button w='150px' style={{ flex: '0 0 150px' }} handleClick={previous}>
          {t`back`}
        </Button>
        <Button
          w='150px'
          style={{ flex: '0 0 150px' }}
          handleClick={() => {
            clearCart();
            next();
          }}
        >
          {t`confirm`}
        </Button>
      </FlexContainer>
    </>
  );
};

export default index;
