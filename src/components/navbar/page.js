import Link from "next/link";
import Image from "next/image";

import Logo from "/public/assets/logo.png";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-white text-black border-b-2">
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Link href="/">
              <Image src={Logo} width={120} alt="Logo Wondeful Indonesia" />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
            <li>
                <Link href="/">Beranda</Link>
            </li>
            <li>
                <details>
                  <summary>Paket Pariwisata</summary>
                  <ul className="p-2 bg-primary text-black rounded-t-none">
                    <li>
                      <Link href="/paket/gunung">Paket Gunung</Link>
                    </li>
                    <li>
                      <Link href="/paket/bali">Paket Pulau Bali</Link>
                    </li>
                    <li>
                      <Link href="/paket/pulau">Paket Kepulauan</Link>
                    </li>
                  </ul>
                </details>
            </li>
            <li>
                <Link href="/testimoni">Testimoni</Link>
            </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              className="btn btn-accent text-primary"
              href="https://wa.me/0895424009364?text=Saya%20berminat%20menggunakan%20jasa%20Riang%20Tour%20and%20Travel"
            >
              Hubungi Kami!
            </Link>
          </div>
        </div>
      </div>
      <div className="drawer-side absolute top-0 left-0 right-0 bottom-0 z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-80 min-h-full bg-white text-black z-10 font-bold gap-y-2">
          <div className="p-8 border-b-4">
            <Link href="/">
              <Image src={Logo} alt="Logo Wonderful Indonesia" />
            </Link>
          </div>
          <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <details>
                  <summary>Paket Pariwisata</summary>
                  <ul className="p-2 bg-primary text-black rounded-t-none">
                    <li>
                      <Link href="/paket/gunung">Paket Gunung</Link>
                    </li>
                    <li>
                      <Link href="/paket/bali">Paket Pulau Bali</Link>
                    </li>
                    <li>
                      <Link href="/paket/pulau">Paket Kepulauan</Link>
                    </li>
                  </ul>
                </details>
            </li>
              <li>
                <Link href="/testimoni">Testimoni</Link>
              </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
