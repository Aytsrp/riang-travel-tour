import Pic1 from "/public/assets/prambanan.jpg";
import Pic2 from "/public/assets/bali.jpg";
import Pic3 from "/public/assets/labuan-bajo.jpg";
import Pic4 from "/public/assets/bromo.jpg";

const Content = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 xl:grid-cols-4 justify-center items-center bg-primary text-white">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Pic1.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">Prambanan</h1>
            <p className="mb-5 text-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Pic2.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">Bali</h1>
            <p className="mb-5 text-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Pic3.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">Labuan Bajo</h1>
            <p className="mb-5 text-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Pic4.src})` }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">Bromo</h1>
            <p className="mb-5 text-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
