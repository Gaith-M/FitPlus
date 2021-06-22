import Image from 'next/image';
import { FlexContainer } from '../../components/shared-components/containers';
import styles from './styles.module.scss';

interface CompInterface {
  imgs: { src: string; alt: string }[];
  imgSrc: string;
  setImgSrc: (string) => void;
}

const index: React.FC<CompInterface> = ({ imgs, imgSrc, setImgSrc }) => {
  return (
    <FlexContainer flexDirection='column' w='320px' m='0 auto'>
      <div
        style={{
          height: 320,
          width: 320,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          marginBottom: 15,
        }}
      />

      <FlexContainer justify='space-between'>
        {imgs.map(({ src, alt }) => (
          <Image
            onClick={({ target }) => setImgSrc(target.src)}
            className={styles.previewImage}
            width='100px'
            height='100px'
            src={src}
            key={src}
            alt={alt}
          />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default index;
