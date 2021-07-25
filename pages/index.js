import { fetchEntry } from "@utils/contentful";
import Link from "next/link";
import Layout from "../components/Layout";

const Splash = ({ content }) => {
  return (
    <Layout>
      <div className="container bg-black min-h-screen">
        <section className="bg-black flex flex-col justify-center">
          <p className="text-center text-white mt-6 text-2xl">
            {content.bodyText}
          </p>
          <div className="text-center m-auto mt-6">
            <Link href="/home">
              <button className="text-white w-auto cursor-pointer leading-none px-3 py-1 border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                {content.buttonText}
              </button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export async function getStaticProps() {
  const res = await fetchEntry("2DwrFcplmFjr2dXLmBFOrK");
  const content = res?.fields;
  return {
    props: {
      content,
    },
  };
}
export default Splash;
