import { useState } from 'react';
// -----------------UI Imports-----------------
import { Container } from './styledElements';
import CartHeader from '../../components/cart-first-view-header';
import CartFooter from '../../components/cart-first-view-footer';
import Entry from '../../components/cart-item-entry';
import Button from '../../components/button';
import {
  boxShadow,
  secondaryLight,
  space_3,
} from '../../styles/styleConstants';
import data from './itemsData';
import useTranslation from 'next-translate/useTranslation';

const index = ({ handleClick }) => {
  const { t } = useTranslation('cart');
  const [state, setState] = useState(data);

  // handlers
  const handleDelete = (targetID) =>
    setState(state.filter(({ id }) => id !== targetID));

  const handleQtyChange = (targetID, value) =>
    setState(
      state.map((elem) => {
        if (elem.id === targetID) {
          elem.qty = value;
          return elem;
        } else {
          return elem;
        }
      })
    );

  return state.length > 0 ? (
    <>
      <Container>
        <CartHeader />
        {state.length > 0
          ? state.map(({ imgDetails, name, qty, price, id }) => (
              <Entry
                imgDetails={imgDetails}
                name={name}
                qty={qty}
                price={price}
                id={id}
                key={id}
                handleDelete={handleDelete}
                handleChange={handleQtyChange}
              />
            ))
          : null}

        <CartFooter state={state} />
      </Container>
      <div
        style={{
          marginTop: space_3,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button w='150px' handleClick={handleClick}>
          {t`next`}
        </Button>
      </div>
    </>
  ) : (
    <div
      style={{
        minHeight: '40vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondaryLight,
        boxShadow: boxShadow,
      }}
    >
      <span style={{ fontSize: '3em', color: 'rgba(33,33,33, 0.3)' }}>
        Cart Is Empty
      </span>
    </div>
  );
};

export default index;
