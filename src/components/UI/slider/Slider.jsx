import Carousel from 'react-elastic-carousel';
import './Slider.css';
import Item from './Item'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

function Slider({ data, card: Card }) {
  return (
    <div className="w-full h-auto mt-5">
      <Carousel breakPoints={breakPoints}>
        {data.map((card) => {
          return (
            <Item key={card.id}>
              <Card
                img={card.img}
                off={card.off}
                place={card.place}
                des={card.des}
              />
            </Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
