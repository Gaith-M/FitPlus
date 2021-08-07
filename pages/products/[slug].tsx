// --------------------------Logic Imports--------------------------
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { themeSelector } from '../../redux/reducers/theme-slice';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PortableText } from '../../lib/sanity';
import ProductCard from '../../components/product-card';
import useTranslation from 'next-translate/useTranslation';
// --------------------------UI Imports--------------------------
import Heading from '../../components/heading';
import Button from '../../components/button';
import ImgsPanel from '../../widgets/product-image-preview';
import Select from 'react-select';
import {
  Container,
  FlexContainer,
} from '../../components/shared-components/containers';
import { accent, space_max } from '../../styles/styleConstants';
import { sanityClient } from '../../lib/sanity';
import {
  itemQuery,
  similiarProductsQuery,
  similiarSupplementsQuery,
} from '../../queries';
import { useRouter } from 'next/router';
import { itemInterface } from '../../interfaces/products';
import styles from './styles.module.scss';
import { addToCart } from '../../redux/reducers/cart-slice';
import {
  setProductLoadingState,
  setSimiliarProducts,
} from '../../redux/reducers/shop-slice';
import 'react-toastify/dist/ReactToastify.min.css';
import notify from '../../shared utility/notify';
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from '../../redux/reducers/user-slice';

interface ComponentInterface {
  data: itemInterface;
}

// ----------------------------------------------------

const index = ({ data }: ComponentInterface) => {
  const { t } = useTranslation('shop');
  const dispatch = useAppDispatch();
  const { isFallback, locale } = useRouter();
  const wishlist: string[] = useAppSelector(({ user }) => user.wishlist);
  const similiarProducts: {
    name: string;
    slug: string;
    id: string;
    images: { alt: string; image: { asset: string } }[];
  }[] = useAppSelector(({ shop }) => shop.similiarProducts);
  let similiarProductsElements =
    similiarProducts.length > 0 &&
    similiarProducts.filter((product) => {
      if (product.name !== data.name) {
        return product;
      }
    });

  const [selectedColor, setSelectedColor] = useState<null | {
    label: string;
    value: string;
  }>(null);
  const [selectedSize, setSelectedSize] = useState<null | {
    label: string;
    value: string;
  }>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<null | {
    label: string;
    value: string;
  }>(null);

  const [amount, setAmount] = useState(1);
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';

  const handleColorSelect = (option: { label: string; value: string }) => {
    setSelectedColor(option);
  };
  const handleFlavorSelect = (option: { label: string; value: string }) => {
    setSelectedFlavor(option);
  };
  const handleSizeSelect = (option: { label: string; value: string }) => {
    setSelectedSize(option);
  };

  const increment = () => {
    setAmount(amount + 1);
  };
  const decrement = () => {
    if (amount <= 0) return;
    setAmount(amount - 1);
  };

  const addItemToCart = () => {
    if (data.productInfo.avaliableSizes && !selectedSize) {
      notify('warning', t`selectSize`);
      return;
    }
    if (data.flavors && !selectedFlavor) {
      notify('warning', t`selectFlavor`);
      return;
    }
    if (data.colors && !selectedColor) {
      notify('warning', t`selectColor`);
      return;
    }
    if (amount < 1) {
      notify('warning', t`invalidQuantity`);
      return;
    }

    dispatch(
      addToCart({
        item: {
          name: data.name,
          id: data.id,
          color: selectedColor?.value,
          size: selectedSize?.value,
          flavor: selectedFlavor?.value,
          price: data.price.usd.discountPrice
            ? data.price.usd.discountPrice
            : data.price.usd.originalPrice,
        },
        quantity: amount,
      })
    );
    notify('success', t`addedToCart`);
    setSelectedColor(null);
    setSelectedSize(null);
    setSelectedFlavor(null);
    setAmount(1);
  };

  const fetchSimiliarProducts = async () => {
    dispatch(setSimiliarProducts([]));
    let type;
    if (data.type === 'foodAndSupplements') {
      type = data.category.includes('weight gain')
        ? 'weight gain'
        : 'weight loss';
    } else {
      type = data.category.includes('men') ? 'men' : 'women';
    }

    try {
      const products = await sanityClient.fetch(
        data.type === 'foodAndSupplements'
          ? similiarSupplementsQuery
          : similiarProductsQuery,
        {
          lang: locale,
          type,
        }
      );
      dispatch(setProductLoadingState(true));
      dispatch(setSimiliarProducts(products));
      dispatch(setProductLoadingState(false));
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    if (isFallback) return;
    fetchSimiliarProducts();
  }, [locale, isFallback]);

  // =======================
  // =======================
  // Wishlist Logic
  // =======================
  // =======================
  const addToWishlist = () => {
    notify('success', t`addedToWishlist`);
    dispatch(addItemToWishlist(data.id));
  };

  const removeFromWishlist = () => {
    notify('success', t`removeFromWishlist`);
    dispatch(removeItemFromWishlist(data.id));
  };

  // if page isn't ready on server
  if (isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Container m={`${space_max} 0 0`} p='0 0 80px 0' className={theme}>
      <Heading lvl={1} m='0 0 20px 0'>
        {data.name}
      </Heading>

      <p
        style={{
          fontWeight: 'bold',
          fontSize: '1.5em',
          marginBottom: '40px',
          color: 'inherit',
        }}
      >
        {t`quickView.by`}{' '}
        <span style={{ color: accent }}>{data.vendor.title}</span>
      </p>

      <div
        className={`${styles.gridContainer} ${
          theme === 'light' ? 'light' : 'dark'
        }`}
      >
        <ImgsPanel imgsArray={data.images} />

        <Container
          p='0 20px 20px'
          style={{ color: 'inherit' }}
          className={styles.ProductInfoContainer}
        >
          {/* Sizes */}
          {data.productInfo.avaliableSizes && (
            <FlexContainer align='center' style={{ color: 'inherit' }}>
              <span className={styles.spanStyle}>{t`quickView.sizes`}</span>{' '}
              <Select
                className={styles.selectElement}
                options={data.productInfo.avaliableSizes.map((s) => ({
                  value: s.size,
                  label: s.size,
                }))}
                onChange={handleSizeSelect}
                placeholder={t`select`}
                value={selectedSize}
                isSearchable={true}
                autoFocus={false}
              />
            </FlexContainer>
          )}

          {/* Colors */}
          {data.colors && (
            <FlexContainer align='center' style={{ color: 'inherit' }}>
              <span className={styles.spanStyle}>{t`quickView.colors`}</span>{' '}
              <Select
                className={styles.selectElement}
                options={data.colors.map((color) => ({
                  value: color,
                  label: color,
                }))}
                onChange={handleColorSelect}
                placeholder={t`select`}
                value={selectedColor}
                isSearchable={true}
                autoFocus={false}
              />
            </FlexContainer>
          )}
          {/* Flavors */}
          {data.flavors && (
            <FlexContainer align='center' style={{ color: 'inherit' }}>
              <span className={styles.spanStyle}>{t`quickView.flavors`}</span>{' '}
              <Select
                className={styles.selectElement}
                options={data.flavors.map((flavor) => ({
                  value: flavor,
                  label: flavor,
                }))}
                onChange={handleFlavorSelect}
                placeholder={t`select`}
                value={selectedFlavor}
                isSearchable={true}
                autoFocus={false}
              />
            </FlexContainer>
          )}

          {data.material && (
            <p>
              <strong
                style={{ color: 'inherit' }}
              >{t`quickView.material`}</strong>{' '}
              {data.material}
            </p>
          )}
          {data.type === 'foodAndSupplements' && (
            <p>
              <strong
                style={{ color: 'inherit' }}
              >{t`quickView.weight`}</strong>{' '}
              {data.info.weightDetails.weight}{' '}
              {data.info.weightDetails.unitName}
            </p>
          )}
          {data.type === 'product' && (
            <p>
              <strong
                style={{ color: 'inherit' }}
              >{t`quickView.weight`}</strong>{' '}
              {data.productInfo.weight.weight} {data.productInfo.weight.unit}
            </p>
          )}

          {/* If type is supplement */}
          {data.type === 'foodAndSupplements' && (
            <p>
              <strong
                style={{ color: 'inherit' }}
              >{t`quickView.servings`}</strong>{' '}
              {data.info.servingDetails.servings}{' '}
              {data.info.servingDetails.unitName}
            </p>
          )}

          <PortableText blocks={data.description} className={styles.textData} />

          <p className={styles.priceContainer}>
            <span className={styles.spanStyle}>{t`price`}</span>
            <span
              className={
                data.price.usd?.discountPrice ? styles.oldPrice : styles.price
              }
            >
              {data.price.usd.originalPrice}$
            </span>{' '}
            {data.price.usd?.discountPrice ? (
              <span className={styles.price}>
                {data.price.usd.discountPrice}$
              </span>
            ) : null}
          </p>

          <div className={styles.amountContainer}>
            <button
              onClick={decrement}
              className={theme === 'light' ? 'dark' : 'light'}
            >
              -
            </button>
            <span
              style={{
                color: theme === 'light' ? 'var(--dark)' : 'var(--light)',
              }}
            >
              {amount}
            </span>
            <button
              onClick={increment}
              className={theme === 'light' ? 'dark' : 'light'}
            >
              +
            </button>
          </div>

          <Button w='100%' m='20px 0' handleClick={addItemToCart}>
            {t`addToCart`}
          </Button>

          {wishlist.findIndex((id) => id === data.id) < 0 ? (
            <Button w='100%' m='20px 0' handleClick={addToWishlist}>
              {t`addToWishlist`}
            </Button>
          ) : (
            <Button w='100%' m='20px 0' handleClick={removeFromWishlist}>
              {t`removeFromWishlist`}
            </Button>
          )}
        </Container>
      </div>

      {similiarProducts && (
        <>
          <Heading lvl='display' m='40px 0 20px'>{t`similiarProducts`}</Heading>

          <div className={styles.similiarProductsGrid}>
            {similiarProductsElements.length > 0 ? (
              similiarProductsElements.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))
            ) : (
              <div className={styles.noSimiliarProducts}>
                {t`noSimiliarProducts`}
              </div>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default index;

// ----------------------------------------------------
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await sanityClient.fetch(
    '*[_type in ["product", "foodAndSupplements"]]{"slug": slug.current}'
  );

  let paths = slugs.map((slug) => ({ params: { slug: slug.slug } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const data: itemInterface = await sanityClient.fetch(itemQuery, {
    slug: params.slug,
    lang: locale,
  });

  return {
    props: { data },
  };
};
