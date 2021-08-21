import { useEffect, useState } from 'react';
import { sanityClient } from '../../lib/sanity';
import { itemsQuery } from '../../queries';
import { addToCart } from '../../redux/reducers/cart-slice';
import { itemInterface } from '../../interfaces/products';

import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  addProducts,
  setProductLoadingState,
} from '../../redux/reducers/shop-slice';
import useTranslation from 'next-translate/useTranslation';
// ----------------------------UI Imports----------------------------
import QuickPreview from '../../components/quick-preview';
import ProductCard from '../../components/product-card';
import Heading from '../../components/heading';
import Loader from '../../components/loader';
import 'react-toastify/dist/ReactToastify.min.css';
import notify from '../../shared utility/notify';
import { setCartInLocalStorage } from '../../shared utility/localeStorageFuncs';

const index = () => {
  const { t } = useTranslation('shop');
  const { locale } = useRouter();
  const dispatch = useAppDispatch();
  const products: itemInterface[] = useAppSelector(({ shop }) => shop.products);
  const isLoading = useAppSelector(({ shop }) => shop.isLoading);
  const { items } = useAppSelector(({ cart }) => cart);

  useEffect(() => {
    if (window) {
      if (items.length > 0) setCartInLocalStorage(items);
    }
  }, [items]);

  // Quick View Logic
  const [selectedProduct, setSelectedProduct] = useState<null | itemInterface>(
    null
  );
  const getSelectedProduct = (productId: string) => {
    setSelectedProduct(products.filter(({ id }) => id === productId)[0]);
  };

  let [amount, setAmount] = useState(1);
  const [selectedColor, setSelectedColor] = useState<null | string>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<null | string>(null);
  const [selectedSize, setSelectedSize] = useState<null | string>(null);

  const handleSelect = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = target;
    switch (name) {
      case 'color':
        return setSelectedColor(target.value);
      case 'flavor':
        return setSelectedFlavor(target.value);
      case 'size':
        return setSelectedSize(target.value);
      default:
        return false;
    }
  };

  const increment = () => {
    setAmount((amount += 1));
  };
  const decrement = () => {
    if (amount <= 0) return;
    setAmount((amount -= 1));
  };

  const addItemToCart = () => {
    if (selectedProduct.flavors && !selectedFlavor) {
      notify('warning', t`selectFlavor`);
      return;
    }
    if (selectedProduct.colors && !selectedColor) {
      notify('warning', t`selectColor`);
      return;
    }
    if (selectedProduct.productInfo.avaliableSizes && !selectedSize) {
      notify('warning', t`selectSize`);
      return;
    }
    if (amount < 1) {
      notify('warning', t`invalidQuantity`);
      return;
    }

    dispatch(
      addToCart({
        item: {
          name: selectedProduct.name,
          id: selectedProduct.id,
          color: selectedColor,
          flavor: selectedFlavor,
          size: selectedSize,
          price: selectedProduct.price.usd.discountPrice
            ? selectedProduct.price.usd.discountPrice
            : selectedProduct.price.usd.originalPrice,
        },
        quantity: amount,
      })
    );
    setAmount(1);
    setSelectedProduct(null);
    setSelectedColor(null);
    setSelectedFlavor(null);
    setSelectedSize(null);

    notify('success', t`addedToCart`);
  };

  const fetchProducts = async () => {
    try {
      dispatch(setProductLoadingState(true));
      const items = await sanityClient.fetch(itemsQuery, {
        lang: locale,
      });
      dispatch(addProducts([...items]));
      dispatch(setProductLoadingState(false));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // load products from redux
    // only fetch from server when:
    // products don't exist in store
    // the locale changes
    fetchProducts();
  }, [locale]);

  return (
    <div style={{ color: 'inherit' }}>
      <Heading color='inherit' lvl={2}>{t`shop`}</Heading>

      <div style={{ color: 'inherit' }}>
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className='gridContainer'
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            }}
          >
            {products.map((item) => (
              <ProductCard
                data={item}
                quickView={getSelectedProduct}
                key={item.name}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProduct?.name && (
        <QuickPreview
          item={selectedProduct}
          closePreview={() => {
            setSelectedProduct(null);
            setAmount(1);
          }}
          handleSelect={handleSelect}
          increment={increment}
          decrement={decrement}
          addToCart={addItemToCart}
          amount={amount}
        />
      )}
    </div>
  );
};

export default index;
