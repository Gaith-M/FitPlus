import Link from 'next/link';
import Paragraph from '../paragraph';
import useTranslation from 'next-translate/useTranslation';
import { urlFor } from '../../lib/sanity';
import styles from './styles.module.scss';
import image from 'next/image';

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
}

const index: React.FC<blogCardInterface> = ({ blog }) => {
  const { t } = useTranslation('blogs');
  return (
    <div
      style={{
        color: 'inherit',
      }}
      className={styles.blogCard}
    >
      <img
        width='100%'
        height='300px'
        style={{ display: 'inline-block', marginBottom: 10 }}
        src={urlFor(blog.image).url()}
        alt={blog.image.alt}
      />
      <h3>{blog.title}</h3>
      <h4>
        {t`by`}{' '}
        <a href={`/authors/${blog.author.slug}`} style={{ color: 'inherit' }}>
          {blog.author.name}
        </a>
      </h4>
      <p>
        {t`DOP`} {blog.dateOfPublish}
      </p>
      <Paragraph>
        {blog.preview.length > 300
          ? blog.preview.slice(0, 300) + '.......'
          : blog.preview}
      </Paragraph>

      <Link href={`/blogs/${blog.slug}`}>
        <a className={styles.blogLinkButton}>{t`readMore`}</a>
      </Link>
    </div>
  );
};

export default index;
