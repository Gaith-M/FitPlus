import { useState } from 'react';
import Meta from '../components/Meta';
// -------------------UI Imports-------------------
import { space_max } from '../styles/styleConstants';
import Heading from '../components/heading';
import Searchbar from '../components/searchbar';
import ViewControls from '../components/blogs-page-view-filter-controls';
import BlogCard from '../components/blog-card';
import fakeData from '../components/blog-card/fakeData';
import { Container } from '../components/shared-components/containers';
import useTranslation from 'next-translate/useTranslation';

const blogs = () => {
  const { t } = useTranslation('blogs');
  const [selected, setSelected] = useState('newest');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelected(e.target.value);

  return (
    <>
      <Meta title='Fit+ Blogs' />
      <Container m={`${space_max} 0`}>
        <Heading lvl={1}>{t`blogs`}</Heading>
        <Searchbar />
        <ViewControls selected={selected} handleChange={handleChange} />

        <main
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {fakeData.map(({ src, author, title, content, id }) => (
            <BlogCard
              src={src}
              author={author}
              title={title}
              content={content}
              key={id}
            />
          ))}
        </main>
      </Container>
    </>
  );
};

export default blogs;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
