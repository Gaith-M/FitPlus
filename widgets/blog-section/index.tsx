import BlogCard from '../../components/blog-card';
import Heading from '../../components/heading';
import fakeData from '../../components/blog-card/fakeData';
import { FlexContainer } from '../../components/shared-components/containers';
import { space_4 } from '../../styles/styleConstants';

const index = () => {
  return (
    <FlexContainer
      justify='center'
      align='stretch'
      wrap={true}
      m={`${space_4} 0`}
    >
      <Heading lvl={2}>Blogs</Heading>

      {fakeData.map(({ src, author, title, content, id }) => (
        <BlogCard
          src={src}
          author={author}
          title={title}
          content={content}
          key={id}
        />
      ))}
    </FlexContainer>
  );
};

export default index;
