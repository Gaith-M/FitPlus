import styles from './styles.module.scss';
import { itemInterface } from '../../interfaces/products';
import { urlFor } from '../../lib/sanity';
import { accent } from '../../styles/styleConstants';
import RadioButton from '../../components/radio-input';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import notify from '../../shared utility/notify';
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from '../../redux/reducers/user-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import 'react-toastify/dist/ReactToastify.min.css';

interface PropsInterface {
  item: itemInterface;
  closePreview: () => void;
  handleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  increment: () => void;
  decrement: () => void;
  addToCart: () => void;
  amount: number;
}

const index = ({
  item,
  closePreview,
  handleSelect,
  increment,
  decrement,
  addToCart,
  amount,
}: PropsInterface) => {
  const { t } = useTranslation('shop');
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(({ user }) => user);
  const wishlist: string[] = useAppSelector(({ user }) => user.wishlist);

  const addToWishlist = () => {
    if (!user) {
      notify('warning', t`loginToAddToWishlist`);
      return;
    }
    notify('success', t`addedToWishlist`);
    dispatch(addItemToWishlist(item.id));
  };

  const removeFromWishlist = () => {
    notify('success', t`removeFromWishlist`);
    dispatch(removeItemFromWishlist(item.id));
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* Close Preview Section */}
        <div className={styles.closePreviewButtonContainer}>
          <button onClick={closePreview}>&times;</button>
        </div>

        <div style={{ flex: '1 1 100%', marginBottom: 30 }}>
          <p>
            <strong style={{ fontSize: '1.3em' }}>{item.name}</strong>
          </p>
          <p>
            <strong>{t`quickView.by`}</strong>{' '}
            <span style={{ color: accent, margin: '0 10px' }}>
              {item.vendor.title}
            </span>
          </p>
        </div>

        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img src={urlFor(item.images[0].image).url()} />
        </div>

        {/* Product Details Section  */}
        <div className={styles.productInfo}>
          <div>
            {/* Colors And Sizes Section - placed in a flex container */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {item.type === 'product' && (
                <div style={{ flex: '0 0 180px', margin: '25px 0' }}>
                  <p>
                    <strong style={{ display: 'block' }}>
                      {t`quickView.sizes`}
                    </strong>
                  </p>

                  {item.productInfo.avaliableSizes.map(
                    ({ dimension, size }) => (
                      <RadioButton
                        name='size'
                        value={size}
                        label={size}
                        toolTip={
                          dimension && (
                            <span title={dimension} className={styles.star}>
                              *
                            </span>
                          )
                        }
                        handleChange={handleSelect}
                        key={size}
                      />
                    )
                  )}
                </div>
              )}

              {item?.colors && (
                <div style={{ margin: '25px 0' }}>
                  <strong style={{ display: 'block' }}>
                    {t`quickView.colors`}:
                  </strong>{' '}
                  {item.colors.map((color) => (
                    <RadioButton
                      label={color}
                      name='color'
                      value={color}
                      handleChange={handleSelect}
                      key={color}
                    />
                  ))}
                </div>
              )}
            </div>

            {item?.flavors && (
              <div style={{ margin: '25px 0' }}>
                <strong style={{ display: 'block' }}>
                  {t`quickView.flavors`}:
                </strong>{' '}
                {item.flavors.map((flavor) => (
                  <RadioButton
                    label={flavor}
                    name='flavor'
                    value={flavor}
                    handleChange={handleSelect}
                    key={flavor}
                  />
                ))}
              </div>
            )}
            <ul>
              {item.type === 'foodAndSupplements' && (
                <>
                  {
                    <li>
                      <strong>{t`quickView.weight`}:</strong>{' '}
                      <span style={{ margin: '0 10px' }}>
                        {item.info.weightDetails?.weight}{' '}
                        {item.info.weightDetails?.unitName}
                      </span>
                    </li>
                  }
                  {
                    <li>
                      <strong>{t`quickView.servings`}:</strong>{' '}
                      <span style={{ margin: '0 10px' }}>
                        {item.info?.servingDetails.servings}{' '}
                        {item.info?.servingDetails.unitName}
                      </span>
                    </li>
                  }
                </>
              )}
            </ul>

            <p className={styles.priceContainer}>
              <strong>{t`price`}:</strong>{' '}
              <span
                className={
                  item.price.usd?.discountPrice ? styles.oldPrice : styles.price
                }
              >
                {item.price.usd.originalPrice}$
              </span>{' '}
              <span className={styles.price}>
                {item.price.usd.discountPrice}
                {item.price.usd.discountPrice ? '$' : null}
              </span>
            </p>
          </div>
          <div className={styles.quantityButtonsContainer}>
            <button onClick={decrement}>-</button>
            <span>{amount}</span>
            <button onClick={increment}>+</button>
          </div>
          <div className={styles.addToCartButtonContainer}>
            <button onClick={addToCart}>{t`addToCart`}</button>
            {wishlist.findIndex((id) => id === item.id) < 0 ? (
              <button onClick={addToWishlist}>{t`addToWishlist`}</button>
            ) : (
              <button onClick={removeFromWishlist}>
                {t`removeFromWishlist`}
              </button>
            )}
            <Link href={`/products/${item.slug}`}>
              <a>
                <button>{t`quickView.view`}</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
