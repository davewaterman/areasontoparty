import Link from "next/link";
import Layout from "../components/Layout";

const Splash = () => {
  return (
    <Layout>
      <div className="container bg-black">
        <section className="flex flex-col bg-white justify-center h-screen align-middle">
          <div className="h-1/4 w-screen bg-white cursor-pointer">
            <Link href="/forms/create">
              <div className=" h-full border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                <div className="h-1/2 text-center py-4">
                  <a className="text-black text-2xl text-center align-middle px-8 py-4 ">
                    Create Them?
                  </a>
                </div>
                <div className="text-center ">
                  <a className="text-lg text-black">Subtext here</a>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-1/4 w-screen bg-black cursor-pointer">
            <Link href="/forms/inspire">
              <div className=" h-full border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                <div className="h-1/2 text-center py-4">
                  <a className="text-white text-2xl text-center align-middle px-8 py-4 ">
                    Inspire Them?
                  </a>
                </div>
                <div className="text-center ">
                  <a className="text-lg text-white">Subtext here</a>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-1/4 w-screen bg-white cursor-pointer">
            <Link href="/forms/fund">
              <div className=" h-full border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                <div className="h-1/2 text-center py-4">
                  <a className="text-black text-2xl text-center align-middle px-8 py-4 ">
                    Fund Them?
                  </a>
                </div>
                <div className="text-center ">
                  <a className="text-lg text-black">Subtext here</a>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-1/4 w-screen bg-black cursor-pointer">
            <Link href="/forms/attend">
              <div className=" h-full border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                <div className="h-1/2 text-center py-4">
                  <a className="text-white text-2xl text-center align-middle px-8 py-4 ">
                    Attend Them?
                  </a>
                </div>
                <div className="text-center ">
                  <a className="text-lg text-white">Subtext here</a>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Splash;
