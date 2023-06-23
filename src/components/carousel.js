import { Carousel, Container } from 'react-bootstrap';
import two from '../assets/paskowela/2.jpg';
import three from '../assets/paskowela/3.jpg';
import four from '../assets/paskowela/4.jpg';
import five from '../assets/paskowela/5.jpg';
import eight from '../assets/paskowela/8.jpg';
import ten from '../assets/paskowela/10.jpg';
const CarouselItems = () => {
  return (
    <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" alt="" src={two} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="" src={three} />
        </Carousel.Item>{' '}
        <Carousel.Item>
          <img className="d-block w-100" alt="" src={four} />
        </Carousel.Item>{' '}
        <Carousel.Item>
          <img className="d-block w-100" alt="" src={five} />
        </Carousel.Item>{' '}
        <Carousel.Item>
          <img className="d-block w-100" alt="" src={eight} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="" src={ten} />
        </Carousel.Item>
      </Carousel>
  );
};
export default CarouselItems;
