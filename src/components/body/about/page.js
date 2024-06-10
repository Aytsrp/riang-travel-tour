import Image from "next/image";
import Picture from "/public/assets/img.jpg";

const About = () => {
    return(
        <>
      <div className="hero min-h-screen bg-primary">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={Picture} alt="founder" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-black flex flex-col gap-y-4">
            <h1 className="text-4xl font-bold">Tentang Kami!</h1>
              <p className="text-xl font-bold">Riang Travel and Tour</p>
              <p className="indent-8 text-justify text-sm">
                Riang Travel and Tour adalah jasa pariwisata yang didirikan pada tahun 2020, Dimulai dari Kota Surakarta. Berawal dari satu unit Ertiga tahun 2015. Pendiri Riang Tour and Travel berlatar belakang S1 Pariwisata dan Perhotelan di Universitas Indonesia. Telah menyusuri Indonesia dari Sabang sampai Merauke, dengan keindahaan bumi pertiwi. Kami Riang Tour and Travel menyediakan jasa pariwisata.
              </p>
              <p className="indent-8 text-justify text-sm">
                Riang Travel and Tour adalah jasa pariwisata yang didirikan pada tahun 2020, Dimulai dari Kota Surakarta. Berawal dari satu unit Ertiga tahun 2015. Pendiri Riang Tour and Travel berlatar belakang S1 Pariwisata dan Perhotelan di Universitas Indonesia. Telah menyusuri Indonesia dari Sabang sampai Merauke, dengan keindahaan bumi pertiwi. Kami Riang Tour and Travel menyediakan jasa pariwisata.
              </p>
              <p className="indent-8 text-justify text-sm">
                Riang Travel and Tour adalah jasa pariwisata yang didirikan pada tahun 2020, Dimulai dari Kota Surakarta. Berawal dari satu unit Ertiga tahun 2015. Pendiri Riang Tour and Travel berlatar belakang S1 Pariwisata dan Perhotelan di Universitas Indonesia. Telah menyusuri Indonesia dari Sabang sampai Merauke, dengan keindahaan bumi pertiwi. Kami Riang Tour and Travel menyediakan jasa pariwisata.
              </p>    
          </div>
        </div>
      </div>
    </>
    );
};
export default About;