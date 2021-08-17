import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Heading from '../../components/heading';
import SearchOptions from '../shop-search-option';
import Searchbar from '../../components/searchbar';
import Loader from '../../components/loader';
import ProductCard from '../../components/product-card';
import Button from '../../components/button';
import QuickPreview from '../../components/quick-preview';
import NoResults from '../../components/no-results';
import Meta from '../../components/Meta';

const index = ({
  isLoading,
  handleSelectChange,
  category,
  startPrice,
  maxPrice,
  setMaxPrice,
  setStartPrice,
  discounted,
  setDiscounted,
  allCategories,
  submitCustomeSearch,
  search,
  clear,
  searchBarRef,
  showCustomeResults,
  customeResults,
  getSelectedProduct,
  showSearchResults,
  searchResults,
  productsToDisplay,
  currentPage,
  previousPage,
  totalPages,
  nextPage,
  selectedProduct,
  closeQuickPreview,
  handleSelect,
  increment,
  decrement,
  addItemToCart,
  amount,
}) => {
  const { t } = useTranslation('shop');
  const { locale } = useRouter();
  return (
    <>
      <Meta title={t`shopTitle`} />
      <div style={{ color: 'inherit', paddingBottom: 100 }}>
        <Heading lvl={1}>{t`shop`}</Heading>

        <div style={{ color: 'inherit', padding: 10 }}>
          {!isLoading && (
            <>
              <div
                style={{ minWidth: 320, color: 'inherit', margin: '0 auto' }}
              >
                <SearchOptions
                  handleSelectChange={handleSelectChange}
                  selectedOption={category}
                  startPrice={startPrice}
                  maxPrice={maxPrice}
                  setMaxPrice={setMaxPrice}
                  setStartPrice={setStartPrice}
                  discounted={discounted}
                  setDiscounted={setDiscounted}
                  selectPlaceholder={t`selectCategory`}
                  categories={[
                    { label: 'all', value: 'all' },
                    ...allCategories.map((elem) => ({
                      label: elem,
                      value: elem,
                    })),
                  ]}
                  handleClick={submitCustomeSearch}
                />
              </div>
              <Searchbar
                w='90%'
                m='20px auto'
                handleChange={search}
                text={t`search`}
                refVal={searchBarRef}
                clear={clear}
              />
            </>
          )}

          {isLoading ? (
            <Loader />
          ) : (
            <div
              className='gridContainer'
              style={{
                color: 'inherit',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                padding: '20px 5px',
              }}
            >
              {showCustomeResults ? (
                customeResults.length > 0 ? (
                  customeResults.map((product) => (
                    <ProductCard
                      data={product}
                      quickView={getSelectedProduct}
                      key={product.id}
                    />
                  ))
                ) : (
                  <NoResults
                    style={{ gridColumn: '1/-1' }}
                    handleClick={clear}
                  >{t`noResults`}</NoResults>
                )
              ) : null}
              {showSearchResults ? (
                searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <ProductCard
                      data={product}
                      quickView={getSelectedProduct}
                      key={product.id}
                    />
                  ))
                ) : (
                  <NoResults
                    style={{ gridColumn: '1/-1' }}
                    handleClick={clear}
                  >{t`noResults`}</NoResults>
                )
              ) : null}
              {!showSearchResults &&
                !showCustomeResults &&
                productsToDisplay.map((product) => (
                  <ProductCard
                    data={product}
                    quickView={getSelectedProduct}
                    key={product.id}
                  />
                ))}
            </div>
          )}

          {!showSearchResults && !showCustomeResults && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginTop: 60,
              }}
            >
              {currentPage > 1 && (
                <Button
                  handleClick={previousPage}
                  style={{
                    minWidth: 100,
                    justifySelf: locale === 'ar' ? 'end' : 'start',
                    gridColumn: locale === 'ar' ? '2/3' : '1/2',
                  }}
                >
                  {t`previous`}
                </Button>
              )}
              {currentPage < totalPages && (
                <Button
                  handleClick={nextPage}
                  style={{
                    minWidth: 100,
                    justifySelf: locale === 'ar' ? 'start' : 'end',
                    gridColumn: locale === 'ar' ? '1/2' : '2/3',
                  }}
                >
                  {t`next`}
                </Button>
              )}
            </div>
          )}

          {selectedProduct?.name && (
            <QuickPreview
              item={selectedProduct}
              closePreview={closeQuickPreview}
              handleSelect={handleSelect}
              increment={increment}
              decrement={decrement}
              addToCart={addItemToCart}
              amount={amount}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default index;
