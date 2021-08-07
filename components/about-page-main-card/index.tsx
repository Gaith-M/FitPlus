import Heading from '../heading';
import { Container } from '../shared-components/containers';

interface compInterface {
  title: string;
  imgSrc: string;
  children: any;
  className: string;
}

const index: React.FC<compInterface> = ({
  title,
  imgSrc,
  children,
  className,
}) => {
  return (
    <Container
      p='20px'
      m='15px auto 30px'
      bg='inherit'
      style={{
        boxShadow: 'var(--boxShadowVal)',
        color: 'inherit',
      }}
      className={className}
    >
      {/* The card's image */}
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundImage: `url(${imgSrc})`,
          marginBottom: '20px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Heading lvl={3} s='32px'>
        {title}
      </Heading>
      {children}
    </Container>
  );
};

export default index;
