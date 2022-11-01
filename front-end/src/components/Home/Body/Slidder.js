import Carousel from 'react-bootstrap/Carousel';
import Slidder1 from '../../../Picture/Slidder/Slidder1.jpg'
import Slidder2 from '../../../Picture/Slidder/Slidder2.jpg'
import Slidder3 from '../../../Picture/Slidder/Slidder3.jpg'

const Slidder = () => {
  return (
    <div style={{ color: 'black' }}>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px', opacity: '0.7' }}
            src={Slidder1}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px', opacity: '0.7' }}
            src={Slidder2}
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px', opacity: '0.7' }}
            src={Slidder3}
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slidder;