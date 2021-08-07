import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { blogsQuery } from '../../queries';
import { useRouter } from 'next/router';
// ----------------------------- UI Imports --------------------------
import BlogCard from '../../components/blog-card';
import Heading from '../../components/heading';
import Loader from '../../components/loader';
import { fetchBlogs } from '../../shared utility/fetchBlogs';

interface SectionInterface {
  theme: string;
}

const index: React.FC<SectionInterface> = ({ theme }) => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const blogs = useAppSelector(({ blogs }) => blogs.blogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (blogs.length > 0) return;
    fetchBlogs(blogsQuery, { lang: locale }, dispatch);
  });

  return (
    <main style={{ margin: '30px 0' }} className={theme}>
      <Heading color='inherit' lvl={2}>{t`section-titles.blogs`}</Heading>

      {blogs.length > 0 ? (
        <div
          className='gridContainer'
          style={{
            gridTemplateColumns: 'repeat( auto-fit, minmax(310px, 1fr) )',
          }}
        >
          {blogs.slice(0, 6).map((blog) => (
            <BlogCard theme={theme} blog={blog} key={blog.title} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default index;
