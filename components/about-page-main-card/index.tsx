import Heading from '../heading';
import { Container } from '../shared-components/containers';
import { space_4, space_2, boxShadow, dark } from '../../styles/styleConstants';

interface compInterface {
  title: string;
  imgSrc: string;
  children: any;
  bg?: string;
  color?: string;
}

const index: React.FC<compInterface> = ({
  title,
  imgSrc,
  children,
  bg,
  color,
}) => {
  return (
    <Container
      p={space_2}
      m={`${space_2} auto ${space_4}`}
      bg={bg}
      style={{ boxShadow: boxShadow, color: color || dark }}
    >
      {/* The card's image */}
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundImage: `url(${imgSrc})`,
          marginBottom: space_2,
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
