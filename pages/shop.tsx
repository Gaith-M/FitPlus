import { useState, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { themeSelector } from '../redux/reducers/theme-slice';
import { sanityClient } from '../lib/sanity';
import { useRouter } from 'next/router';
import { itemsQuery } from '../queries';
import {
  addProducts,
  setProductLoadingState,
} from '../redux/reducers/shop-slice';
import { addToCart } from '../redux/reducers/cart-slice';
import { itemInterface } from '../interfaces/products';
// ---UI Imports---
import ShopDisplay from '../widgets/shop-display';
import 'react-toastify/dist/ReactToastify.min.css';
import notify from '../shared utility/notify';
import useTranslation from 'next-translate/useTranslation';

const shop = () => {
  const { t } = useTranslation('shop');
  const { locale } = useRouter();
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(({ shop }) => shop.isLoading);
  const products: itemInterface[] = useAppSelector(({ shop }) => shop.products);

  //=========================================================================
  // ========================================================================
  // ==================pagination and product dispaly logic==================
  // ========================================================================
  // ========================================================================

  let [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const productsToDisplay: itemInterface[] = useAppSelector(({ shop }) =>
    shop.products.slice(
      (currentPage - 1) * resultsPerPage,
      currentPage * resultsPerPage
    )
  );

  let totalProducts = useAppSelector(({ shop }) => shop.products.length);
  let totalPages = Math.ceil(totalProducts / resultsPerPage);

  useEffect(() => {
    if (products.length > 0) return;

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

    fetchProducts();
  }, [locale]);

  // next page
  const nextPage = () => {
    window.scrollTo(0, 100);
    setCurrentPage(currentPage >= totalPages ? currentPage : currentPage + 1);
  };
  // previous page
  const previousPage = () => {
    window.scrollTo(0, 100);
    setCurrentPage(currentPage >= 1 ? currentPage - 1 : currentPage);
  };

  // ========================
  // ========================
  // ====Quick View Logic====
  // ========================
  // ========================
  const [selectedProduct, setSelectedProduct] = useState<null | itemInterface>(
    null
  );

  const getSelectedProduct = (productId: string) => {
    setSelectedProduct(products.filter(({ id }) => id === productId)[0]);
  };

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

  let [amount, setAmount] = useState(1);
  const increment = () => {
    setAmount((amount += 1));
  };
  const decrement = () => {
    if (amount <= 0) return;
    setAmount((amount -= 1));
  };

  const addItemToCart = () => {
    // when user attempts to add item without selecting an option, show a notification instead of console logging the warning
    if (selectedProduct.flavors && !selectedFlavor) {
      notify('warning', t`selectFlavor`);
      return;
    }
    if (selectedProduct.colors && !selectedColor) {
      notify('warning', t`selectColor`);
      return;
    }
    if (selectedProduct.productInfo.avaliableSizes && !selectedSize) {
      notify('success', t`selectSize`);
      return;
    }
    setAmount(1);
    setSelectedProduct(null);
    setSelectedColor(null);
    setSelectedFlavor(null);
    setSelectedSize(null);
    dispatch(
      addToCart({
        item: {
          name: selectedProduct.name,
          id: selectedProduct.id,
          color: selectedColor,
          size: selectedSize,
          flavor: selectedFlavor,
          price: selectedProduct.price.usd.discountPrice
            ? selectedProduct.price.usd.discountPrice
            : selectedProduct.price.usd.originalPrice,
        },
        quantity: amount,
      })
    );
    notify('success', t`addedToCart`);
  };

  // ==================================================
  // ==================================================
  // =============Search Logic (custome)===============
  // ==================================================
  // ==================================================
  const allProducts: itemInterface[] = useAppSelector(
    ({ shop }) => shop.products
  );
  const searchBarRef = useRef(null);

  const [discounted, setDiscounted] = useState(false);
  const [startPrice, setstartPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [category, setCategory] = useState<{
    label: string;
    value: string;
  }>({ label: 'all', value: 'all' });
  const [showCustomeResults, setShowCustomeResults] = useState(false);
  const [customeResults, setCustomeResults] = useState<null | itemInterface[]>(
    null
  );

  const handleSelectChange = (value) => {
    setCategory(value);
  };

  const submitCustomeSearch = () => {
    let results = allProducts;
    if (category.value && category.value !== 'all')
      results = allProducts.filter((item) =>
        item.category.includes(category.value)
      );

    if (discounted && startPrice === 0 && maxPrice === 0) {
      results = results.filter((item) => item.price.usd.discountPrice != null);
    }

    if (startPrice > 0) {
      if (discounted) {
        results = results.filter(
          (item) =>
            item.price.usd.discountPrice != null &&
            item.price.usd.discountPrice >= startPrice
        );
      } else {
        results = results.filter(
          (item) => item.price.usd.originalPrice >= startPrice
        );
      }
    }
    if (maxPrice > 0) {
      if (discounted) {
        results = results.filter(
          (item) =>
            item.price.usd.discountPrice != null &&
            item.price.usd.discountPrice <= maxPrice
        );
      } else {
        results = results.filter(
          (item) => item.price.usd.originalPrice <= maxPrice
        );
      }
    }

    setShowCustomeResults(true);
    setCustomeResults(results);
  };

  // ------------------------- Typed Search -------------------------

  let [searchResults, setSearchResults] = useState<[] | itemInterface[]>([]);
  let [showSearchResults, setShowSearchResults] = useState(false);

  const search = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.value === ' ' || !target.value) {
      setShowSearchResults(false);
    } else {
      let results = allProducts.filter((product: itemInterface) => {
        if (
          product.name
            .toLocaleUpperCase()
            .includes(target.value.toLocaleUpperCase())
        ) {
          return product;
        }
      });
      setSearchResults(results);
      setShowSearchResults(true);
    }
  };

  // ---------------------------------------------
  // ---------------------------------------------
  // --------------Get All Categories-------------
  // ---------------------------------------------
  // ---------------------------------------------
  let allCategories: string[] = allProducts.reduce((acc, current) => {
    current.category.filter((elem) => {
      if (!acc.includes(elem)) {
        acc.push(elem);
      }
    });
    return acc;
  }, []);

  // ---------------------------------------------
  // ---------------------------------------------
  // -----------------Clear Search----------------
  // ---------------------------------------------
  // ---------------------------------------------
  const clear = () => {
    searchBarRef.current.value = '';
    setShowCustomeResults(false);
    setCustomeResults(null);
    setShowSearchResults(false);
    setSearchResults([]);
    setDiscounted(false);
    setMaxPrice(0);
    setstartPrice(0);
    setCategory({ label: 'all', value: 'all' });
  };

  const closeQuickPreview = () => {
    setSelectedProduct(null);
    setAmount(1);
  };

  return (
    <ShopDisplay
      amount={amount}
      theme={theme}
      isLoading={isLoading}
      handleSelectChange={handleSelectChange}
      category={category}
      startPrice={startPrice}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      setStartPrice={setstartPrice}
      discounted={discounted}
      setDiscounted={setDiscounted}
      allCategories={allCategories}
      submitCustomeSearch={submitCustomeSearch}
      search={search}
      clear={clear}
      searchBarRef={searchBarRef}
      showCustomeResults={showCustomeResults}
      customeResults={customeResults}
      getSelectedProduct={getSelectedProduct}
      showSearchResults={showSearchResults}
      searchResults={searchResults}
      productsToDisplay={productsToDisplay}
      currentPage={currentPage}
      previousPage={previousPage}
      totalPages={totalPages}
      nextPage={nextPage}
      selectedProduct={selectedProduct}
      closeQuickPreview={closeQuickPreview}
      handleSelect={handleSelect}
      increment={increment}
      decrement={decrement}
      addItemToCart={addItemToCart}
    />
  );
};

export default shop;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
