import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Crown Clothing",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg",
      link: "https://glittery-granita-256a46.netlify.app/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Face Detection",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://newsroom.unsw.edu.au/sites/default/files/thumbnails/image/facerecognition_1.jpg",
      link: "",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Robo-Friends",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://previews.123rf.com/images/scottff72/scottff721401/scottff72140100010/24802604-a-robot-woman-head-with-internal-technology-side-view-isolated-on-white-background.jpg",
      link: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                  <a href={d.link}>Project</a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
