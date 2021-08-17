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

const index: React.FC = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const blogs = useAppSelector(({ blogs }) => blogs.blogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchBlogs(blogsQuery, { lang: locale }, dispatch);
  }, [locale]);

  return (
    <div style={{ color: 'inherit', margin: '30px 0' }}>
      <Heading color='inherit' lvl={2}>{t`section-titles.blogs`}</Heading>

      {blogs.length > 0 ? (
        <div
          className='gridContainer'
          style={{
            gridTemplateColumns: 'repeat( auto-fit, minmax(310px, 1fr) )',
            color: 'inherit',
          }}
        >
          {blogs.slice(0, 6).map((blog) => (
            <BlogCard blog={blog} key={blog.title} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default index;
