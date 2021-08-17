import React, { useState, useEffect, useRef } from 'react';
import Meta from '../components/Meta';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { themeSelector } from '../redux/reducers/theme-slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { blogsQuery } from '../queries';
import { fetchBlogs } from '../shared utility/fetchBlogs';

// -------------------UI Imports-------------------
import Heading from '../components/heading';
import Searchbar from '../components/searchbar';
import BlogCard from '../components/blog-card';
import Button from '../components/button';
import Loader from '../components/loader';
import NoResults from '../components/no-results';
import styles from '../styles/blogs.module.scss';

interface BlogInterface {
  author: { localeName: string; name: string; slug: string };
  category: string;
  preview: string;
  dateOfPublish: string;
  image: { alt: string; asset: {} };
  slug: string;
  title: string;
}

const blogs = () => {
  const { t } = useTranslation('blogs');
  const { locale } = useRouter();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  const isLoading = useAppSelector(({ blogs }) => blogs.isLoading);

  // =======================
  // =======================
  // Custome Search Logic
  // =======================
  // =======================
  const searchBarRef = useRef(null);
  const [searchResults, setSearchResults] = useState<BlogInterface[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const allBlogs = useAppSelector(({ blogs }) => blogs.blogs);

  const handleSearchInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.value === ' ' || !target.value) {
      setShowSearchResults(false);
    } else {
      let results = allBlogs.filter(({ title }: { title: string }) => {
        return title.toUpperCase().includes(target.value.toUpperCase());
      });
      setSearchResults(results);
      setShowSearchResults(true);
    }
  };

  const clearSearch = () => {
    searchBarRef.current.value = '';
    setSearchResults([]);
    setShowSearchResults(false);
  };

  // ===================
  // ===================
  // Blogs View Logic
  // ===================
  // ===================
  let [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 4;
  const blogs = useAppSelector(({ blogs }) =>
    blogs.blogs.slice(
      (currentPage - 1) * resultsPerPage,
      currentPage * resultsPerPage
    )
  );
  let totalBlogs = useAppSelector(({ blogs }) => blogs.blogs.length);
  let totalPages = Math.ceil(totalBlogs / resultsPerPage);

  useEffect(() => {
    fetchBlogs(blogsQuery, { lang: locale }, dispatch);
  }, [locale]);

  useEffect(() => {}, [currentPage]);

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

  return (
    <>
      <Meta title={t`blogsTitle`} />
      <div style={{ color: 'inherit', paddingBottom: 100 }}>
        <Heading lvl={1}>{t`blogs`}</Heading>

        {!isLoading && (
          <Searchbar
            handleChange={handleSearchInput}
            clear={clearSearch}
            refVal={searchBarRef}
            text={t`search`}
          />
        )}

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <main className={styles.blogsContainer}>
              {showSearchResults ? (
                searchResults.length > 0 ? (
                  searchResults.map((blog) => (
                    <BlogCard blog={blog} key={blog.title} />
                  ))
                ) : (
                  <NoResults handleClick={clearSearch} />
                )
              ) : null}
              {!showSearchResults &&
                blogs.map((blog) => <BlogCard blog={blog} key={blog.title} />)}
            </main>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                padding: 10,
                margin: 10,
              }}
              dir='ltr'
            >
              {!showSearchResults && currentPage > 1 && (
                <Button
                  handleClick={previousPage}
                  style={{
                    minWidth: 100,
                    justifySelf: 'start',
                    gridColumn: '1/2',
                  }}
                >
                  {t`previous`}
                </Button>
              )}
              {!showSearchResults && currentPage < totalPages && (
                <Button
                  handleClick={nextPage}
                  style={{
                    minWidth: 100,
                    justifySelf: 'end',
                    gridColumn: '2/3',
                  }}
                >
                  {t`next`}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default blogs;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
