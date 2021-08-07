import { useState } from 'react';
import { Container } from '../../components/shared-components/containers';
import { urlFor } from '../../lib/sanity';
import { ChevronRight, ChevronLeft } from 'react-feather';
import styles from './styles.module.scss';

interface CompInterface {
  imgsArray: { alt: string; image: { asset: {} } }[];
}

const index: React.FC<CompInterface> = ({ imgsArray }: CompInterface) => {
  let [index, setIndex] = useState(0);

  const nextImage = () => {
    if (imgsArray.length === 1) return;
    if (index >= imgsArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousImage = () => {
    if (imgsArray.length === 1) return;
    if (index <= 0) {
      setIndex(imgsArray.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <Container w='100%' m='0 auto' style={{ maxWidth: '450px' }}>
      <Container style={{ position: 'relative' }}>
        <div
          className={styles.toggleButtonContainer}
          style={{
            right: 0,
          }}
        >
          <button className={styles.imageToggleButton} onClick={previousImage}>
            <ChevronRight color='#545454c6' size='48' />
          </button>
        </div>
        <div style={{ width: '100%' }}>
          <img
            src={urlFor(imgsArray[index].image).url()}
            alt={imgsArray[index].alt}
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div
          className={styles.toggleButtonContainer}
          style={{
            left: 0,
          }}
        >
          <button className={styles.imageToggleButton} onClick={nextImage}>
            <ChevronLeft color='#545454c6' size='48' />
          </button>
        </div>
      </Container>
    </Container>
  );
};

export default index;
