import Image from "next/image";
import Picture from "/public/assets/profile.jpg";

const About = () => {
    return(
        <>
      <div className="hero min-h-screen bg-primary">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={Picture} alt="founder" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-black">
            <h1 className="text-5xl font-bold">Tentang Kami!</h1>
            <div className="py-6">
              <p className="text-xl font-bold">Riang Travel and Tour</p>
              <p className="indent-8 text-justify">
                Riang Travel and Tour adalah jasa pariwisata yang didirikan pada tahun 2020, Dimulai dari Kota Surakarta. Berawal dari satu unit Ertiga tahun 2015 
              </p>
            </div>            
          </div>
        </div>
      </div>
    </>
    );
};
export default About;