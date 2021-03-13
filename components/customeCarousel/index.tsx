import StyledButton from '../button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const index = () => {
  return (
    <div dir='ltr' style={{ marginBottom: '30px' }}>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        emulateTouch
        interval={5000}
        className='homeCarousel'
      >
        <div style={{ position: 'relative' }}>
          <img src='/slider_one.jpg' />
          <div
            className='slide_contianer'
            style={{
              textAlign: 'start',
            }}
          >
            <h1
              style={{
                fontWeight: 'bold',
                fontSize: '72px',
                color: '#c11f3a',
                fontStyle: 'italic',
              }}
            >
              Fit+
            </h1>
            <p className='slide_text'>Fitness Starts Here</p>
          </div>
        </div>
        <div>
          <img src='/slider_four.jpg' />
          <div className='slide_contianer'>
            <p
              className='slide_text'
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                textAlign: 'start',
              }}
            >
              Pick What your body needs from our vast selection of supplements{' '}
              <br />
              <span
                style={{
                  display: 'inline-flex',
                  justifyContent: 'flex-end',
                  width: '85%',
                  margin: '10px 0',
                }}
              >
                <StyledButton w={'200px'} fontSize='18px'>
                  Shop Now
                </StyledButton>
              </span>
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default index;
