import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children, fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div class="debug-screens bg-black mb-3">
      <nav className="relative flex flex-wrap items-center justify-between px-2 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex items-center">
              <Image src={"/logo-crop.png"} alt="logo" height="50" width="80" />
              <Link href="/home">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mx-4 whitespace-nowrap uppercase text-white"
                  href="/splash"
                >
                  A Reason to Party
                </a>
              </Link>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/forms/create">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Create</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/forms/inspire">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Inspire</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/forms/fund">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Fund</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/forms/attend">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Attend</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
