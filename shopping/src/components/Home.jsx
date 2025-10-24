import { Card } from "antd";
import { Link } from "react-router-dom";
import "../App.css";
const { Meta } = Card;

const imgSrc = [
  {
    id: 1,
    title: "Kameez Shalwar",
    src: "./src/assets/images/men-ks.jpg",
    link: "/kameezshalwar",
  },
  {
    id: 2,
    title: "Kurta",
    src: "./src/assets/images/men-k.jpg",
    link: "/kurta",
  },
  {
    id: 3,
    title: "Unstitched",
    src: "./src/assets/images/fabric.jpg",
    link: "/unstitched",
  },
  {
    id: 4,
    title: "Footwear",
    src: "./src/assets/images/footwear.jpg",
    link: "/footwear",
  },
  {
    id: 5,
    title: "Caps",
    src: "./src/assets/images/cap.jpg",
    link: "/caps",
  },
];

const Home = () => (
  <>
    <header className="card-container">
      {imgSrc.map((item) => (
        // <Link to={item.link} key={item.id} className="link">
        <Card
          hoverable
          className="card"
          cover={<img alt="men-ks" src={item.src} />}
        >
          <Meta title={item.title} />
        </Card>
        // </Link>
      ))}
    </header>
  </>
);

export default Home;
