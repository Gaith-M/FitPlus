import useTranslation from 'next-translate/useTranslation';
import {
  FlexContainer,
  FlexItem,
  Container,
} from '../../components/shared-components/containers';
import RecieptHeader from '../../components/reciept-header';
import RecieptFooter from '../../components/reciept-footer';
import Heading from '../../components/heading';
import DetialsEntry from '../../components/order-details-list-item';
import {
  boxShadow,
  dark,
  secondaryLight,
  space_3,
} from '../../styles/styleConstants';
import RecieptEntry from '../../components/reciept-entry';
import data from '../cart-first-view/itemsData';
import Button from '../../components/button';
import { useEffect } from 'react';

const index = ({ handleClick }) => {
  useEffect(() => {
    if (typeof window != undefined) {
      window.scrollTo(0, 0);
    }
  }, []);

  const { t } = useTranslation('cart');

  return (
    <>
      <FlexContainer wrap='wrap' align='stretch' justify='space-between'>
        <FlexItem
          flex='1 1 50%'
          minW='320px'
          bg={secondaryLight}
          style={{ boxShadow: boxShadow }}
        >
          <Heading
            lvl='display'
            s='32px'
            style={{
              padding: '10px 0 0 5px',
            }}
          >
            {t`purchased-items`}
          </Heading>
          <Container>
            <RecieptHeader bg={dark} color={secondaryLight} p='10px 5px' />
            <Container
              bg={secondaryLight}
              p='20px 0'
              style={{
                maxHeight: '500px',
                overflowY: 'auto',
                fontSize: '0.9em',
              }}
            >
              {data.length > 0
                ? data.map(({ id, name, price, qty }) => (
                    <RecieptEntry
                      key={id}
                      name={name}
                      price={price}
                      qty={qty}
                    />
                  ))
                : null}
            </Container>
            <RecieptFooter
              bg={dark}
              color={secondaryLight}
              p='10px 5px'
              text={t`shipping`}
              value={`10$`}
            />
            <RecieptFooter
              bg={dark}
              color={secondaryLight}
              p='10px 5px'
              text={t`total`}
              value='351$'
            />
          </Container>
        </FlexItem>
        <FlexItem flex='0 0 25px' minW='25px' />
        <FlexItem
          flex='1 1 40%'
          minW='320px'
          bg={secondaryLight}
          style={{ boxShadow: boxShadow }}
        >
          <Heading
            lvl='display'
            s='32px'
            style={{
              padding: '10px 0 0 5px',
            }}
          >
            {t`order-details`}
          </Heading>
          <Container>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '0.9em',
                maxHeight: '500px',
                overflowY: 'auto',
              }}
            >
              <DetialsEntry fieldName='name' value='john doe' />
              <DetialsEntry
                fieldName='address'
                value='Nowhere city- some street - house number 333'
              />
              <DetialsEntry fieldName={t`phone`} value='231-123-1111' />
              <DetialsEntry fieldName={t`email`} value='johnDoe@cmail.com' />
              <DetialsEntry fieldName={t`order-date`} value='23 - 3 - 2021' />
              <DetialsEntry fieldName={t`order-number`} value='312513' />
              <DetialsEntry fieldName={t`type-of-delivery`} value='standard' />
              <DetialsEntry
                fieldName={t`delivery-date`}
                value='25 - 3 - 2039'
              />
            </ul>
          </Container>
        </FlexItem>
        <div
          style={{
            flex: '1 1 100%',
            marginTop: space_3,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button w='150px' handleClick={handleClick}>
            {t`next`}
          </Button>
        </div>
      </FlexContainer>
    </>
  );
};

export default index;
