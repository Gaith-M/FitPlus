import { useEffect } from 'react';
import { ViewInterface } from '../../pages/cart';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
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
import data from '../cart-first-view/itemsData';
import itemsData from '../cart-first-view/itemsData';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);
  grid-template-areas: 'items data';
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    grid-template-areas:
      'items'
      'data';
  }
`;

const index: React.FC<ViewInterface> = ({ next, theme }) => {
  useEffect(() => {
    if (typeof window != undefined) {
      window.scrollTo(0, 0);
    }
  }, []);

  const { t } = useTranslation('cart');

  return (
    <>
      <GridContainer className={theme}>
        <Container
          bg={theme === 'light' ? secondaryLight : onyx}
          style={{ boxShadow: boxShadow, color: 'inherit', gridArea: 'items' }}
        >
          <Heading
            lvl='display'
            s='32px'
            style={{
              padding: '10px 5px',
            }}
          >
            {t`purchased-items`}
          </Heading>
          <Container>
            <RecieptHeader
              bg={theme === 'light' ? dark : secondaryLight}
              color={theme === 'light' ? secondaryLight : dark}
              p='10px 5px'
            />
            <Container
              bg={theme === 'light' ? secondaryLight : onyx}
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
                      theme={theme}
                      key={id}
                      name={name}
                      price={price}
                      qty={qty}
                    />
                  ))
                : null}
            </Container>
            <RecieptFooter
              bg={theme === 'light' ? dark : secondaryLight}
              color={theme === 'light' ? secondaryLight : dark}
              p='10px 5px'
              text={t`shipping`}
              value={`10$`}
            />
            <RecieptFooter
              bg={theme === 'light' ? dark : secondaryLight}
              color={theme === 'light' ? secondaryLight : dark}
              p='10px 5px'
              text={t`total`}
              value='351$'
            />
          </Container>
        </Container>

        <Container
          bg={theme === 'light' ? secondaryLight : onyx}
          style={{ boxShadow: boxShadow, color: 'inherit', gridArea: 'data' }}
        >
          <Heading
            lvl='display'
            s='32px'
            style={{
              padding: '10px 5px',
            }}
          >
            {t`order-details`}
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
        </Container>
      </GridContainer>
      <FlexContainer justify='flex-end' m='30px 0 0 0'>
        <Button w='150px' handleClick={next}>
          {t`next`}
        </Button>
      </FlexContainer>
    </>
  );
};

export default index;
