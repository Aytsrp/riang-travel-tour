import Background from "/public/assets/background.jpg";

const Jumbotron = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${Background.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Tour &amp; Travel</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
