import StyledContainer from '../../components/sectionContainer';
import BlogCard from '../../components/blog-card';
import Heading from '../../components/heading';
import fakeData from '../../components/blog-card/fakeData';

const index = () => {
  return (
    <StyledContainer>
      <Heading lvl={2}>Blogs</Heading>
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
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
      </div>
    </StyledContainer>
  );
};

export default index;
