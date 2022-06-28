import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="text-zone">
        <h1>"About Me</h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <br />
        <p>
          I'm quietly confident, naturally curious, and perpetually working on
          improving any chops and design problem at a time.
        </p>
      </div>
      <div className="image-container">
        <img src="./assets/ezgif.com-gif-maker.gif" alt="" />
      </div>
    </div>
  );
}
