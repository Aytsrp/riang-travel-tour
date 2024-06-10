import { FaMoneyBill, FaShieldAlt, FaUsers } from "react-icons/fa";
const Purpose = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black ">
        <p className="text-4xl font-bold my-4 uppercase">Prioritas Kami</p>
      <div className="flex flex-col xl:flex-row gap-4 xl:my-24 my-12 justify-center items-center">
        <div className="card card-compact w-96 h-64 bg-primary border-2 shadow-xl">
          <div className="p-2 mt-4 left-0 right-0 top-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral m-auto">
            <FaUsers className="w-full h-full text-white" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold uppercase">Kenyamanan</h2>
            <p className="text-sm text-justify">
          Anda akan menikmati perjalanan yang dirancang untuk memenuhi kebutuhan
          dan keinginan Anda. Armada kendaraan yang nyaman , pemandu wisata yang
          berpengalaman. Anda hanya perlu duduk, bersantai, dan menikmati setiap
          momen dari liburan Anda.
        </p>
          </div>
        </div>
        <div className="card card-compact w-96 h-64 bg-primary border-2 shadow-xl">
          <div className="p-2 mt-4 left-0 right-0 top-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral m-auto">
            <FaShieldAlt className="w-full h-full text-white" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold uppercase">Keamanan</h2>
            <p className="text-sm text-justify">
            Kami berkomitmen untuk memberikan pengalaman wisata yang aman dengan
          standar keselamatan yang tinggi. Tim kami juga terlatih dalam
          penanganan situasi darurat, sehingga Anda bisa merasa tenang dan
          terlindungi sepanjang perjalanan.
        </p>
          </div>
        </div>
        <div className="card card-compact w-96 h-64 bg-primary border-2 shadow-xl">
          <div className="p-2 mt-4 left-0 right-0 top-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral m-auto">
            <FaMoneyBill className="w-full h-full text-white" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold uppercase">Harga Terjangkau</h2>
            <p className="text-sm text-justify">
            Kami menawarkan paket tour and travel dengan harga yang terjangkau
          tanpa mengurangi kualitas layanan. Melalui kerjasama dengan berbagai
          penyedia jasa, kami mampu memberikan penawaran terbaik bagi pelanggan.
        </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purpose;

