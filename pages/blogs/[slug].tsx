import Link from 'next/link';
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
import 'react-toastify/dist/ReactToastify.min.css';
import Meta from '../../components/Meta';
import Heading from '../../components/heading';
import Spinner from '../../components/spinner';
import { accent } from '../../styles/styleConstants';
import { Heart } from 'react-feather';
import PageNotFound from '../../components/no-page';
import styles from '../../styles/blogPage.module.scss';
import notify from '../../shared utility/notify';

interface DataInterface {
  author: {
    name: string;
    localeName: string;
    about: {}[];
    slug: string;
    moreFromAuthor: { title: string; slug: string }[];
  };
  content: {}[];
  preview: string;
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
  notFound: boolean;
}

const index = ({ data, relatedBlogs, notFound }: PropsInterface) => {
  if (notFound) {
    return <PageNotFound />;
  }

  const { isFallback } = useRouter();
  if (isFallback) {
    return (
      <div style={{ height: '80vh' }}>
        <Spinner />;
      </div>
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
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();
  const addToFavorite = () => {
    if (!user) {
      return notify('warning', t`loginToLikeBlog`);
    }
    dispatch(addBlogToFavorite(data._id));
  };
  const removeFromFavorite = () => dispatch(removeBlogFromFavorite(data._id));
  const isFavorite =
    useAppSelector(({ user }) => user.favoriteBlogs).findIndex(
      (id) => id === data._id
    ) > -1;

  return (
    <>
      <Meta title={title} description={data.preview} />
      <div className={styles.container}>
        <main className={styles.main}>
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

          <PortableText blocks={content} />

          <div style={{ marginBottom: 50 }} className={styles.aboutAuthor}>
            <Heading lvl='display' s='1.5em' m='60px 0 15px 0'>
              {t`aboutAuthor`}{' '}
              <span style={{ color: accent }}>{data?.author.localeName}</span>
            </Heading>

            <PortableText blocks={data?.author.about} />
          </div>
        </main>

        <div style={{ marginBottom: 50 }} className={theme}>
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
        </div>

        {relatedBlogsArray.length > 0 && (
          <div style={{ marginBottom: 50 }} className={theme}>
            <Heading lvl='display' s='1.2em' m='0 0 10px 0'>
              {t`moreBlogs`}
            </Heading>
            {relatedBlogsArray.map(({ title, slug }) => (
              <Link href={`${slug}`} key={title}>
                <a className={styles.addtionalBlogs}>{title}</a>
              </Link>
            ))}
          </div>
        )}
      </div>
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

  if (!data) {
    return {
      props: {
        data,
        relatedBlogs: null,
        notFound: true,
      },
    };
  }

  const relatedBlogs = await sanityClient.fetch(relatedBlogsQuery, {
    category: data.category,
    lang: locale,
  });

  return {
    props: {
      data,
      relatedBlogs,
      notFound: false,
    },
  };
};
