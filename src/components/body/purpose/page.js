import { FaMoneyBill, FaShieldAlt, FaUsers } from "react-icons/fa";
const Purpose = () => {
  return (
    <div className="min-h-screen bg-white text-black grid grid-cols-1 xl:grid-cols-3">
      <div className="py-44 px-20 text-center">
        <div className="p-2 mb-3 left-0 right-0 top-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral m-auto">
          <FaUsers className="w-full h-full text-white" />
        </div>
        <p className="uppercase text-2xl font-bold">Kenyamanan</p>
        <p className="text-sm text-justify">
          Anda akan menikmati perjalanan yang dirancang untuk memenuhi kebutuhan
          dan keinginan Anda. Armada kendaraan yang nyaman , pemandu wisata yang
          berpengalaman. Anda hanya perlu duduk, bersantai, dan menikmati setiap
          momen dari liburan Anda.
        </p>
      </div>
      <div className="py-44 px-20 text-center">
        <div className="p-2 mb-3 left-0 right-0 top-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral m-auto">
          <FaShieldAlt className="w-full h-full text-white" />
        </div>
        <p className="uppercase text-2xl font-bold">Keamananan</p>
        <p className="text-sm text-justify">
          Kami berkomitmen untuk memberikan pengalaman wisata yang aman dengan
          standar keselamatan yang tinggi. Tim kami juga terlatih dalam
          penanganan situasi darurat, sehingga Anda bisa merasa tenang dan
          terlindungi sepanjang perjalanan.
        </p>
      </div>
      <div className="py-44 px-20 text-center">
        <div className="p-2 mb-3 left-0 right-0 top-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral m-auto">
          <FaMoneyBill className="w-full h-full text-white" />
        </div>
        <p className="uppercase text-2xl font-bold">Harga Terjangkau</p>
        <p className="text-sm text-justify">
          Kami menawarkan paket tour and travel dengan harga yang terjangkau
          tanpa mengurangi kualitas layanan. Melalui kerjasama dengan berbagai
          penyedia jasa, kami mampu memberikan penawaran terbaik bagi pelanggan.
        </p>
      </div>
    </div>
  );
};
export default Purpose;
