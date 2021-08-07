import Heading from '../../components/heading';
import Button from '../../components/button';
import Paragraph from '../../components/paragraph';
import Image from 'next/image';
import { Container } from '../../components/shared-components/containers';
import useTranslation from 'next-translate/useTranslation';
import styles from './styles.module.scss';

interface SectionInterface {
  theme: string;
}

const index: React.FC<SectionInterface> = ({ theme }) => {
  const { t } = useTranslation('common');
  return (
    <Container className={theme}>
      <Heading lvl={2}>{t`section-titles.whyFit`}</Heading>

      <Paragraph>{t`about.firstParagraph`}</Paragraph>

      <Paragraph>{t`about.firstParagraph`}</Paragraph>

      <div className={styles.flexContainer}>
        <div
          className={styles.card}
          style={{
            color: 'inherit',
          }}
        >
          <Image src='/about_thumb.jpg' width={300} height={200} />
          <Paragraph align='center'>{t`about.thirdCardText`}</Paragraph>
        </div>

        <div
          className={styles.card}
          style={{
            color: 'inherit',
          }}
        >
          <Image src='/about_thumb_coach.jpg' width={300} height={200} />
          <Paragraph align='center'>{t`about.secondCardText`}</Paragraph>
        </div>

        <div
          className={styles.card}
          style={{
            color: 'inherit',
          }}
        >
          <Image src='/about_thumb_doc.jpg' width={300} height={200} />
          <Paragraph align='center'>{t`about.firstCardText`}</Paragraph>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <Button flex='1 1 200px' m='10px' p='20px'>
          {t`buttons.learnMore`}
        </Button>
        <Button flex='1 1 200px' m='10px' p='20px'>
          {t`buttons.getInTouch`}
        </Button>
      </div>
    </Container>
  );
};

export default index;
