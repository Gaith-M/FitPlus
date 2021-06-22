// -----------------Logic Imports-----------------
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useTranslation from 'next-translate/useTranslation';
import {
  updateQty,
  cartSelector,
  removeFromCart,
} from '../../redux/reducers/cart-slice';
// -----------------UI Imports-----------------
import CartHeader from '../../components/cart-view-header';
import CartFooter from '../../components/cart-view-footer';
import Entry from '../../components/cart-item-entry';
import Button from '../../components/button';
import {
  boxShadow,
  dark,
  light,
  onyx,
  secondaryLight,
  space_3,
} from '../../styles/styleConstants';
import {
  Container,
  FlexContainer,
} from '../../components/shared-components/containers';
import { ViewInterface } from '../../pages/cart';

const index: React.FC<ViewInterface> = ({ theme, next }) => {
  const { t } = useTranslation('cart');
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(cartSelector);
  const handleDelete = (id: string) => dispatch(removeFromCart(id));
  const handleQtyChange = (id: string, qty: number) =>
    dispatch(updateQty({ id, qty }));
  // if cart has items => show them / if not => show empty cart background
  return items.length > 0 ? (
    <>
      <Container
        bg={theme === 'light' ? secondaryLight : onyx}
        p='20px 10px'
        style={{ boxShadow: boxShadow }}
        className={theme}
      >
        <CartHeader />
        {items.map(({ imgSrc, title, qty, price, id }) => (
          <Entry
            imgSrc={imgSrc}
            title={title}
            qty={qty}
            price={price}
            id={id}
            key={id}
            handleDelete={handleDelete}
            handleChange={handleQtyChange}
          />
        ))}

        <CartFooter
          value={items
            .reduce((acc, { qty, price }) => acc + price * qty, 0)
            .toFixed(2)}
          text={t`total`}
        />
      </Container>
      <div
        style={{
          marginTop: space_3,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button w='150px' handleClick={next}>
          {t`next`}
        </Button>
      </div>
    </>
  ) : (
    <FlexContainer
      justify='center'
      align='center'
      bg={theme === 'light' ? secondaryLight : onyx}
      style={{
        minHeight: '40vh',
        boxShadow: boxShadow,
        color: theme === 'light' ? dark : light,
      }}
    >
      <span style={{ fontSize: '3em', color: 'inherit' }}>Cart Is Empty</span>
    </FlexContainer>
  );
};

export default index;
