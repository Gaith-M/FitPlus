import styled from 'styled-components';
import {
  boxShadow,
  space_1,
  space_2,
  light,
  onyx,
  dark,
  accent,
} from '../../styles/styleConstants';
import Link from 'next/Link';
import { urlFor } from '../../lib/sanity';
import Paragraph from '../paragraph';
import useTranslation from 'next-translate/useTranslation';

// Title must be between 36 and 60 characters

interface blogCardInterface {
  blog: {
    author: { localeName: string; name: string; slug: string };
    category: string;
    preview: string;
    dateOfPublish: string;
    image: { alt: string; asset: {} };
    slug: string;
    title: string;
  };
  theme: string;
}

const StyledBlogCard = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? light : onyx)};
  color: ${({ theme }) => (theme === 'light' ? dark : light)};
  box-shadow: ${boxShadow};
  flex: 1 1 45%;
  max-width: 500px;
  min-width: 320px;
  padding: ${`${space_1} ${space_2}`};
  margin: ${space_2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const index: React.FC<blogCardInterface> = ({ blog, theme }) => {
  const { t } = useTranslation('blogs');
  return (
    <StyledBlogCard theme={theme}>
      <img
        width='100%'
        height='300px'
        style={{ display: 'inline-block', marginBottom: 10 }}
        src={urlFor(blog.image).url()}
      />
      <h3
        style={{
          textTransform: 'capitalize',
          marginBottom: 10,
          color: 'inherit',
        }}
      >
        {blog.title}
      </h3>
      <h4
        style={{
          textTransform: 'capitalize',
          marginBottom: 5,
          color: 'inherit',
        }}
      >
        {t`by`}{' '}
        <a
          href={`/authors/${blog.author.slug}`}
          style={{ marginBottom: 10, color: accent }}
        >
          {blog.author.name}
        </a>
      </h4>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '0.7em',
          marginBottom: 15,
          color: 'inherit',
        }}
      >
        {t`DOP`} {blog.dateOfPublish}
      </p>
      <Paragraph>
        {blog.preview.length > 300
          ? blog.preview.slice(0, 300) + '.......'
          : blog.preview}
      </Paragraph>

      <Link href={`/blogs/${blog.slug}`}>
        <a className='blogLinkButton'>Read More</a>
      </Link>
    </StyledBlogCard>
  );
};

export default index;
