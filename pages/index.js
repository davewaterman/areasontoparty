import Link from "next/link";
import Layout from "../components/Layout";

const Splash = () => {
  return (
    <Layout>
      <div className="container bg-black min-h-screen">
        <section className="bg-black flex flex-col justify-center">
          <p className="text-center text-white mt-6 text-2xl">Body text</p>
          <div className="text-center m-auto mt-6">
            <Link href="/home">
              <button className="text-white w-auto cursor-pointer leading-none px-3 py-1 border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                Click me for a good time!
              </button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Splash;
