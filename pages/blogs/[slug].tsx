import Link from 'next/Link';
import useTranslation from 'next-translate/useTranslation';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useAppSelector } from '../../redux/hooks';
import { themeSelector } from '../../redux/reducers/theme-slice';
import { useRouter } from 'next/router';
import { sanityClient, urlFor, PortableText } from '../../lib/sanity';
// ------------------- UI Imports -------------------
import Meta from '../../components/Meta';
import Heading from '../../components/heading';
import { Container } from '../../components/shared-components/containers';
import { accent, space_max } from '../../styles/styleConstants';

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

const dataQuery = `
  *[_type == 'blog' && slug.current == $slug][0]{
    author->{
    name,
    "localeName": localizedName[$lang],
    "slug": slug.current,
    "about": about[$lang],
    "moreFromAuthor": *[_type=='blog' && references(^._id)]{
      "title": localeTitle[$lang],
      "slug": slug.current
    }},
    "title": localeTitle[$lang],
    "content": content[$lang],
    "slug": slug.current,
    dateOfPublish,
    image,
    category,
    _id
  }
`;

// Make this based on views or publich date (like latest 10)
const relatedBlogsQuery = `
  *[_type == 'blog' && category == $category]{
    "title": localeTitle[$lang],
    "slug": slug.current
  }
`;

const index = ({ data, relatedBlogs }: PropsInterface) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Container m={`${space_max} 0 0`} p='0 0 80px 0'>
        {/* put a loader here */}
        Loading..
      </Container>
    );
  }

  const { content, title } = data;
  const { t } = useTranslation(`blogs`);
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  const moreFromTheAuthorTitles = data.author.moreFromAuthor.map(
    ({ title }) => title
  );
  const relatedBlogsArray = relatedBlogs.filter(({ title, slug }) => {
    if (slug !== data.slug && !moreFromTheAuthorTitles.includes(title)) {
      return { title, slug };
    }
  });

  return (
    <>
      <Meta title={title} />
      <Container m={`${space_max} 0 0`} p='0 0 80px 0'>
        <main className={`${theme} blog`}>
          <Heading lvl={1}>{title}</Heading>

          <img src={urlFor(data?.image).url()} alt={data?.image.alt} />

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
                  <a className='addtionalBlogs'>{title}</a>
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
                <a className='addtionalBlogs'>{title}</a>
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
  const data: DataInterface = await sanityClient.fetch(dataQuery, {
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
