import Link from "next/link";
import Background from "/public/assets/raja-ampat.jpg";

const Pulau = () => {
    return(
        <>
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
          <div className="flex flex-col justify-center items-center pb-8">
          <h1 className="mb-5 text-5xl font-bold">Paket Kepulauan</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link
              className="btn btn-accent text-primary"
              href="https://wa.me/0895424009364?text=Saya%20berminat%20menggunakan%20jasa%20Riang%20Tour%20and%20Travel"
            >
              Hubungi Kami!
            </Link>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Pulau;