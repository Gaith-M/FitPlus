import BlogCard from '../../components/blog-card';
import Heading from '../../components/heading';
import fakeData from '../../components/blog-card/fakeData';
import { FlexContainer } from '../../components/shared-components/containers';
import { space_4 } from '../../styles/styleConstants';
import useTranslation from 'next-translate/useTranslation';

const index = () => {
  const { t } = useTranslation('common');
  return (
    <FlexContainer
      justify='center'
      align='stretch'
      wrap='wrap'
      m={`${space_4} 0`}
    >
      <Heading lvl={2}>{t`section-titles.blogs`}</Heading>

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
