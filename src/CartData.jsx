import B9 from './CardImage/B9.jpg'
import b5 from "./CardImage/bottle-handle.jpg";
import b1 from "./components/Images/HomeBanner.jpg";
import Line from "./CardImage/LineAnimate.png";

export const CartData = [
  {
    id: 1,
    image: B9,
    line: Line,
    liter: "1.5Ltr 6 Bottles",
    title:  (
      <>
        <span className="WaterSpan">Water</span>
        <span className="CardSpan">Fly</span> 1.5Ltr
      </>
    ),
    price: "RS 320",
    detail:
      "A 1.5-liter mineral water bottle is a single-serving size container commonly used for personal consumption of drinking water.",
    button: "Order WhatsApp",
  },
  {
    id: 2,
    image: b1,
    line: Line,
    liter: "19Ltr",
    title: "Empty Bottle 19Ltr",
    price: "Security Rs 1000",
    detail:
      "The empty bottle 19 liter is a durable and spacious container designed for storing and dispensing large quantity of water. Ideal for households or",
    button: "Order WhatsApp",
  },
  {
    id: 3,
    image: b5,
    line: Line,
    liter: "19Ltr",
    title: "Bottle Hand Pump",
    price: "RS 1000",
    detail:
      "WaterFly 19 Liter Boottle hand Pump, reusable container for storing and dispensing clean, mineral-rich drinking water.",
    button: "Order WhatsApp",
  },
];
