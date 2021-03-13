import useTranslation from 'next-translate/useTranslation';
import Heading from '../../components/heading';
import Meta from '../../components/Meta';
import Paragraph from '../../components/paragraph';
import {
  Container,
  FlexContainer,
  FlexItem,
} from '../../components/shared-components/containers';
import {
  accent,
  boxShadow,
  light,
  secondaryLight,
  space_max,
} from '../../styles/styleConstants';

//use markdown for the content
const data = {
  title: 'Best Exercises to burn belly fat',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  aboutAuthor: {
    author: 'John Doe',
    bio:
      'John is a veteran bodybuilder and coach. He has many title under his belt and has been coaching for over 10 years. John has a keen interest on the field of diet and emphisies the importance of a complete healthy life style. he is also a gamer, a singer, a dancer, and this is just to make content.. do not bother yourself by reading any further. seriously stop.',
  },
};

const index = () => {
  const {
    title,
    content,
    aboutAuthor: { author, bio },
  } = data;

  const { t } = useTranslation('blogs');
  return (
    <>
      <Meta title={title} />
      <Container m={`${space_max} 0`}>
        <main>
          <Heading lvl={1}>{title}</Heading>
          <Paragraph>{content}</Paragraph>
          <Heading lvl={2} s='32px'>
            Subtitle
          </Heading>
          <Paragraph>{content}</Paragraph>
          <Heading lvl={2} s='32px'>
            another Subtitle
          </Heading>
          <Paragraph>{content}</Paragraph>

          <FlexContainer
            wrap='wrap'
            align='center'
            bg={secondaryLight}
            p='10px'
            m='30px 0'
            style={{ boxShadow: boxShadow }}
          >
            <FlexItem flex='1 1 100%' minW='300px'>
              <Heading lvl='display' s='1.5em' m='0 0 15px 0'>
                {t`about-author`}
              </Heading>
            </FlexItem>
            <FlexItem flex='1 1 100%' minW='300px'>
              <Heading lvl={6} s='1.8em' m='0' color={accent}>
                {author}
              </Heading>
            </FlexItem>

            <FlexItem flex='1 1 50%' minW='300px'>
              <Paragraph>{bio}</Paragraph>
            </FlexItem>
          </FlexContainer>
        </main>
      </Container>
    </>
  );
};

export default index;

export const GetStaticProps = async () => {
  return {
    props: {},
  };
};
