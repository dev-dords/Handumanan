import { Carousel } from 'react-bootstrap';
const CarouselItems = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" alt="" src={'https://anonsharing.com/file/5264b2af153967b5/2.jpg'} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="" src={'https://anonsharing.com/file/8039559e4f936d66/3.jpg'} />
      </Carousel.Item>{' '}
      <Carousel.Item>
        <img className="d-block w-100" alt="" src={'https://anonsharing.com/file/d06091bfeb81b3b7/4.jpg'} />
      </Carousel.Item>{' '}
      <Carousel.Item>
        <img className="d-block w-100" alt="" src={'https://anonsharing.com/file/e3323b81ced24325/5.jpg'} />
      </Carousel.Item>{' '}
      <Carousel.Item>
        <img className="d-block w-100" alt="" src={'https://anonsharing.com/file/12f0656d042814f6/6.jpg'} />
      </Carousel.Item>{' '}
      <Carousel.Item>
        <img className="d-block w-100" alt="" src={'https://anonsharing.com/file/4ab8a75c15282363/7.jpg'} />
      </Carousel.Item>{' '}
    </Carousel>
  );
};
export default CarouselItems;
