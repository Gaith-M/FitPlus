// -----------------Logic Imports-----------------
import { useAppDispatch } from '../../redux/hooks';
import useTranslation from 'next-translate/useTranslation';
import { updateQty, removeFromCart } from '../../redux/reducers/cart-slice';
import { itemInCartInterface } from '../../interfaces/cart';
// -----------------UI Imports-----------------
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

interface PropsInterface {
  next: () => void;
  theme: string;
  items?: itemInCartInterface[];
}

const index: React.FC<PropsInterface> = ({ theme, next, items }) => {
  const { t } = useTranslation('cart');

  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => dispatch(removeFromCart(id));

  const handleQtyChange = (
    id: string,
    color: string,
    size: string,
    flavor: string,
    quantity: number
  ) => dispatch(updateQty({ id, color, size, flavor, quantity }));
  return items.length > 0 ? (
    <>
      <Container
        bg={theme === 'light' ? secondaryLight : onyx}
        p='20px 10px'
        style={{ boxShadow: boxShadow }}
        className={theme}
      >
        {items.map(
          ({ item: { id, name, color, flavor, size, price }, quantity }) => (
            <Entry
              title={name}
              quantity={quantity}
              price={price}
              color={color}
              size={size}
              flavor={flavor}
              id={id}
              key={id + size + color + flavor}
              handleDelete={handleDelete}
              handleChange={handleQtyChange}
            />
          )
        )}

        <CartFooter
          value={
            +items
              .reduce(
                (acc, { item, quantity }) => acc + item.price * quantity,
                0
              )
              .toFixed(2)
          }
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
      <span style={{ fontSize: '3em', color: 'inherit' }}>{t`emptyCart`}</span>
    </FlexContainer>
  );
};

export default index;
