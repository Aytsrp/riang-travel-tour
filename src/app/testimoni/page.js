import Image from "next/image";
import Client1 from "/public/assets/client1.jpg";
import Client2 from "/public/assets/client2.jpg";
import Client3 from "/public/assets/client3.jpg";

const data = [
  {
    image: Client1,
    name: "Rani Trililili",
    comment:
      "Murah sekali paket-paketnya! Harga kaki lima, fasilitas bintang lima.",
  },
  {
    image: Client2,
    name: "Aryak Samsak",
    comment:
      "Top Banget! Pelayanan cepat dan ramah sekali tour guidenya.",
  },
  {
    image: Client3,
    name: "Yanuar Tandon",
    comment:
      "Pernah kehilangan barang saat trip. Langsung di respon! dan akhirnya dapat dikembalikan barangnya.",
  },
];

const Testimoni = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col xl:flex-row gap-4 p-24 bg-white text-black">
        {data.map((data)=>(
            <div className="card w-96 bg-white text-black shadow-xl border-2" key={data.name}>
            <figure>
              <Image src={data.image} alt="Profile" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <p>
                &ldquo; {data.comment} &rdquo;
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
};
export default Testimoni;
