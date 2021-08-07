import Link from 'next/Link';
import useTranslation from 'next-translate/useTranslation';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { themeSelector } from '../../redux/reducers/theme-slice';
import { useRouter } from 'next/router';
import { sanityClient, urlFor, PortableText } from '../../lib/sanity';
import {
  addBlogToFavorite,
  removeBlogFromFavorite,
} from '../../redux/reducers/user-slice';
import { blogQuery, relatedBlogsQuery } from '../../queries';
// ------------------- UI Imports -------------------
import Meta from '../../components/Meta';
import Heading from '../../components/heading';
import { Container } from '../../components/shared-components/containers';
import { accent, space_max } from '../../styles/styleConstants';
import { Heart } from 'react-feather';
import Loader from '../../components/loader';
import styles from '../../styles/blogPage.module.scss';

interface DataInterface {
  author: {
    name: string;
    localeName: string;
    about: {}[];
    slug: string;
    moreFromAuthor: { title: string; slug: string }[];
  };
  content: {}[];
  dateOfPublish: string;
  image: { _type: string; alt: string; asset: {} };
  title: string;
  slug: string;
  category: string;
  _id: string;
}

interface PropsInterface {
  data: DataInterface;
  moreBlogsFromAuthor: { title: string; slug: string }[];
  relatedBlogs: { title: string; slug: string }[];
}

const index = ({ data, relatedBlogs }: PropsInterface) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return (
      <Container m={`${space_max} 0 0`} p='0 0 80px 0'>
        <Loader />
      </Container>
    );
  }
  const { content, title } = data;
  const { t } = useTranslation(`blogs`);
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  const moreFromTheAuthorTitles = data.author.moreFromAuthor.map(
    ({ title }) => title
  );

  // =========================
  // =========================
  // Get Related Blog
  // =========================
  // =========================
  const relatedBlogsArray = relatedBlogs.filter(({ title, slug }) => {
    if (slug !== data.slug && !moreFromTheAuthorTitles.includes(title)) {
      return { title, slug };
    }
  });

  // =========================
  // =========================
  // Like Logic
  // =========================
  // =========================
  const dispatch = useAppDispatch();
  const addToFavorite = () => dispatch(addBlogToFavorite(data._id));
  const removeFromFavorite = () => dispatch(removeBlogFromFavorite(data._id));
  const isFavorite =
    useAppSelector(({ user }) => user.favoriteBlogs).findIndex(
      (id) => id === data._id
    ) > -1;

  return (
    <>
      <Meta title={title} />
      <Container m={`${space_max} 0 0`} p='0 0 80px 0'>
        <main className={`${theme} blog`}>
          <Heading lvl={1}>{title}</Heading>

          <img src={urlFor(data?.image).url()} alt={data?.image.alt} />

          <div className={styles.buttonContainer}>
            <button
              className={styles.likeButton}
              onClick={() =>
                isFavorite ? removeFromFavorite() : addToFavorite()
              }
            >
              <span style={{ margin: '0 10px' }}>
                {isFavorite ? t`removeFromFavorite` : t`addToFavorite`}
              </span>
              <Heart
                className={isFavorite ? styles.liked : ''}
                style={{ stroke: theme === 'light' ? '#333' : '#f1f1f1' }}
              />
            </button>
          </div>

          <PortableText blocks={content} className={`content ${theme}`} />

          <Container m='0 0 50px 0' className={theme}>
            <Heading lvl='display' s='1.5em' m='60px 0 15px 0'>
              {t`aboutAuthor`}{' '}
              <span style={{ color: accent }}>{data?.author.localeName}</span>
            </Heading>

            <PortableText blocks={data?.author.about} />
          </Container>
        </main>

        <Container m='0 0 40px 0' className={theme}>
          <Heading lvl='display' s='1.2em' m='0 0 10px 0'>
            {t`moreFrom`}
            <span style={{ color: accent }}>{data.author.localeName}</span>
          </Heading>
          {data.author.moreFromAuthor.map(({ title, slug }) => {
            if (slug !== data.slug) {
              return (
                <Link href={`${slug}`} key={title}>
                  <a className={styles.addtionalBlogs}>{title}</a>
                </Link>
              );
            }
          })}
        </Container>

        {relatedBlogsArray.length > 0 && (
          <Container m='0 0 40px 0' className={theme}>
            <Heading lvl='display' s='1.2em' m='0 0 10px 0'>
              {t`moreBlogs`}
            </Heading>
            {relatedBlogsArray.map(({ title, slug }) => (
              <Link href={`${slug}`} key={title}>
                <a className={styles.addtionalBlogs}>{title}</a>
              </Link>
            ))}
          </Container>
        )}
      </Container>
    </>
  );
};

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == 'blog' && defined(slug.current)]{
        "params":{'slug': slug.current}
    }`
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
  locale,
}) => {
  const data: DataInterface = await sanityClient.fetch(blogQuery, {
    slug,
    lang: locale,
  });

  const relatedBlogs = await sanityClient.fetch(relatedBlogsQuery, {
    category: data.category,
    lang: locale,
  });

  return {
    props: {
      data,
      relatedBlogs,
    },
  };
};
