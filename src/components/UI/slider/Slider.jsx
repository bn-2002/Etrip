import Carousel from 'react-elastic-carousel';
import './Slider.css';
import Item from './Item';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider({ data, card: Card }) {
  console.log('data : ', data);
  return (
    <div className="w-full h-auto mt-5 overflow-x-hidden">
      <Carousel breakPoints={breakPoints}>
        {data.map((card) => {
          return (
            <Item key={card.Alt}>
              <Card
                img={card.ImageURL}
                discount={card.Discount}
                place={card.CityName}
                des={card.CollectionName}
              />
            </Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
