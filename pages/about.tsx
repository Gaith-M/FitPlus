import { themeSelector } from '../redux/reducers/theme-slice';
import { useAppSelector } from '../redux/hooks';
import useTranslation from 'next-translate/useTranslation';
import Meta from '../components/Meta';
// -------------------UI Imports-------------------
import {
  space_max,
  space_2,
  dark,
  secondaryLight,
  raisinBlack,
  light,
} from '../styles/styleConstants';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Button from '../components/button';

import AboutCard from '../components/about-page-main-card';
import { Container } from '../components/shared-components/containers';

export const About = () => {
  const { t } = useTranslation('about');
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  return (
    <>
      <Meta title='Fit+ About' />
      <Container m={`${space_max} 0 0`} p={`0 0 ${space_max} 0`}>
        <main className={theme}>
          <Heading lvl={1}>{t`whoWeAre`}</Heading>

          {/* add color prop */}
          <AboutCard
            title={t`modernGyms`}
            imgSrc='/gym_photo.jpg'
            bg={theme === 'light' ? secondaryLight : raisinBlack}
            color={theme === 'light' ? dark : light}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </AboutCard>

          <AboutCard
            title={t`proStaff`}
            imgSrc='/staff.jpg'
            bg={theme === 'light' ? secondaryLight : raisinBlack}
            color={theme === 'light' ? dark : light}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </Paragraph>
          </AboutCard>

          <AboutCard
            title={t`locations`}
            imgSrc='/map.jpg'
            bg={theme === 'light' ? secondaryLight : raisinBlack}
            color={theme === 'light' ? dark : light}
          >
            <Paragraph>
              <address
                style={{
                  color: 'inherit',
                  lineHeight: 2.5,
                  margin: `${space_2} 0`,
                }}
              >
                some country - some city - some place - some street <br />
                some country - some city - some place - some street <br />
                some country - some city - some place - some street
              </address>
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Paragraph>
            <Button w='300px' p='20px 10px' m={`${space_2} auto`}>
              {t`getInTouch`}
            </Button>
          </AboutCard>
        </main>
      </Container>
    </>
  );
};

export default About;
