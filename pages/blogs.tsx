import { useState } from 'react';
import Meta from '../components/Meta';
// -------------------UI Imports-------------------
import { space_max } from '../styles/styleConstants';
import Heading from '../components/heading';
import Searchbar from '../components/searchbar';
import ViewControls from '../components/blogs-page-view-filter-controls';
import BlogCard from '../components/blog-card';
import fakeData from '../components/blog-card/fakeData';

const blogs = () => {
  const [selected, setSelected] = useState('newest');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelected(e.target.value);

  return (
    <>
      <Meta title='Fit+ Blogs' />
      <div style={{ margin: `${space_max} 0` }}>
        <Heading lvl={2}>Blogs</Heading>
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
      </div>
    </>
  );
};

export default blogs;
