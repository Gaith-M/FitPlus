import styled from 'styled-components';
import {
  secondaryLight,
  boxShadow,
  space_1,
  space_2,
} from '../../styles/styleConstants';
import Image from 'next/image';
import Link from 'next/Link';
import Button from '../button';
import truncateText from '../../utilities/truncateText';
import getFormatedDate from '../../utilities/getFormatedDate';
import Paragraph from '../paragraph';

// Title must be between 36 and 60 characters

interface blogCardInterface {
  src: string;
  title: string;
  author: string;
  content: string;
}

const StyledBlogCard = styled.div`
  background-color: ${secondaryLight};
  box-shadow: ${boxShadow};
  flex: 1 1 45%;
  max-width: 500px;
  min-width: 320px;
  padding: ${`${space_1} ${space_2}`};
  margin: ${space_2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const index: React.FC<blogCardInterface> = ({
  src,
  title,
  author,
  content,
}) => {
  return (
    <StyledBlogCard>
      <img
        width='100%'
        height='300px'
        style={{ display: 'inline-block', marginBottom: 10 }}
        src={src}
      />
      <h3 style={{ textTransform: 'capitalize', marginBottom: 10 }}>{title}</h3>
      <h4 style={{ textTransform: 'capitalize', marginBottom: 5 }}>
        By {author}
      </h4>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '0.7em',
          marginBottom: 15,
          padding: '0 3px',
        }}
      >
        Published On: {getFormatedDate('D-M-Y', '/')}
      </p>
      <Paragraph m='20px'>{truncateText(content)}</Paragraph>
      <Button>
        <Link href='#'>
          <a style={{ color: '#fafafa' }}>Read More</a>
        </Link>
      </Button>
    </StyledBlogCard>
  );
};

export default index;
