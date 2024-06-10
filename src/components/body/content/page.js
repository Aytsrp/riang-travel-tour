import Pic1 from "/public/assets/prambanan.jpg";
import Pic2 from "/public/assets/bali.jpg";
import Pic3 from "/public/assets/labuan-bajo.jpg";
import Pic4 from "/public/assets/bromo.jpg";

const Content = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center items-center bg-primary text-white">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Pic1.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">Prambanan</h1>
            <p className="mb-5 text-sm">
              Terletak di Yogyakarta, Candi Hindu terbesar di Indonesia yang didedikasikan untuk Trimurti. Relief yang indah dibuat pada masa dinasti zaman hindu di Indonesia.
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
              Bali dikenal dengan pantai-pantai indah, kebudayaan yang kaya, dan kehidupan malam yang semarak. Pulau ini juga menawarkan berbagai atraksi seperti upacara adat dan surga dunia.
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
              Terletak di ujung barat Pulau Flores, Nusa Tenggara Timur. Dikenal sebagai pintu gerbang pulau naga. Daerah ini terkenal dengan diving spot yang luar biasa.
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
              Gunung berapi aktif yang terletak di Jawa Timur. Bagian dari Taman Nasional Bromo Tengger Semeru, gunung ini terkenal dengan pemandangan matahari terbit yang spektakuler.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
