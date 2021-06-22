import Meta from '../components/Meta';
import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { themeSelector } from '../redux/reducers/theme-slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { sanityClient } from '../lib/sanity';
import { storeBlogs } from '../redux/reducers/blogs-slice';

// -------------------UI Imports-------------------
import { space_max } from '../styles/styleConstants';
import { Container } from '../components/shared-components/containers';
import Heading from '../components/heading';
import Searchbar from '../components/searchbar';
import ViewControls from '../components/blogs-page-view-filter-controls';
import BlogCard from '../components/blog-card';

const blogsQuery = `
*[_type == "blog"] | order(dateOfPublish asc){
  author->{
  name,
  "localeName": localizedName[$lang],
  "slug": slug.current,
  },
  "title": localeTitle[$lang],
  "preview": preview[$lang],
  "image": {"alt": image.alt, "asset": image.asset},
  "slug": slug.current,
  dateOfPublish,
  category,
}
`;

const blogs = () => {
  const { t } = useTranslation('blogs');
  const { locale } = useRouter();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';

  const [selected, setSelected] = useState('newest');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelected(e.target.value);

  // Blogs View Logic
  let [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 5;
  const blogs = useAppSelector(({ blogs }) =>
    blogs.slice(
      (currentPage - 1) * resultsPerPage,
      currentPage * resultsPerPage
    )
  );
  let totalBlogs = useAppSelector(({ blogs }) => blogs.length);
  let totalPages = Math.ceil(totalBlogs / resultsPerPage);

  useEffect(() => {
    const fetchBlogs = async (currentLocale: string) => {
      let blogs = await sanityClient.fetch(blogsQuery, { lang: currentLocale });
      dispatch(storeBlogs(blogs));
    };
    fetchBlogs(locale);
  }, [locale]);
  useEffect(() => {}, [currentPage]);

  return (
    <>
      <Meta title='Fit+ Blogs' />
      <Container
        m={`${space_max} 0 0`}
        p={`0 0 ${space_max} 0`}
        className={theme}
      >
        <Heading lvl={1}>{t`blogs`}</Heading>
        <Searchbar />
        <ViewControls selected={selected} handleChange={handleChange} />

        <main
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat( auto-fit, minmax(310px, 1fr) )',
            justifyContent: 'center',
            justifyItems: 'center',
            gap: 10,
          }}
        >
          {blogs.map((blog) => (
            <BlogCard blog={blog} theme={theme} key={blog.title} />
          ))}
        </main>
        {currentPage > 1 && (
          <button
            onClick={() =>
              setCurrentPage(currentPage >= 1 ? currentPage - 1 : currentPage)
            }
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() =>
              setCurrentPage(
                currentPage >= totalPages ? currentPage : currentPage + 1
              )
            }
          >
            Next
          </button>
        )}
      </Container>
    </>
  );
};

export default blogs;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
