import BlogCard from '../../components/blog-card';
import Heading from '../../components/heading';
import { FlexContainer } from '../../components/shared-components/containers';
import { space_4 } from '../../styles/styleConstants';
import useTranslation from 'next-translate/useTranslation';
import { useAppSelector } from '../../redux/hooks';

interface SectionInterface {
  theme: string;
}

const index: React.FC<SectionInterface> = ({ theme }) => {
  const { t } = useTranslation('common');
  const blogs = useAppSelector(({ blogs }) => blogs);

  return (
    <main style={{ marginBottom: 30 }}>
      <Heading lvl={2}>{t`section-titles.blogs`}</Heading>

      {blogs.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat( auto-fit, minmax(310px, 1fr) )',
            justifyContent: 'center',
            justifyItems: 'center',
            gap: 10,
          }}
        >
          {blogs.map((blog) => (
            <BlogCard theme={theme} blog={blog} key={blog.title} />
          ))}
        </div>
      ) : (
        // add a loader state to the reducer / and a loader here
        <p>loading...</p>
      )}
    </main>
  );
};

export default index;
