import Heading from '../../components/heading';
import Button from '../../components/button';
import Paragraph from '../../components/paragraph';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import styles from './styles.module.scss';
import Link from 'next/link';

const index: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ color: 'inherit' }}>
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
          <Link href='/about'>
            <a>{t`buttons.learnMore`}</a>
          </Link>
        </Button>
        <Button flex='1 1 200px' m='10px' p='20px'>
          <Link href='/contact'>
            <a>{t`buttons.getInTouch`}</a>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default index;
