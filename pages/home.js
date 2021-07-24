import { fetchEntry } from "@utils/contentful";
import Link from "next/link";
import Layout from "../components/Layout";

const Splash = ({ content }) => {
  return (
    <Layout>
      <div className="container bg-black">
        <section className="flex flex-col bg-white justify-center h-screen align-middle">
          <div className="h-1/4 w-screen bg-white cursor-pointer">
            <Link href="/forms/create">
              <div className=" h-full border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                <div className="h-1/2 text-center py-4">
                  <a className="text-black text-2xl text-center align-middle px-8 py-4 ">
                    {content.title1}
                  </a>
                </div>
                <div className="text-center ">
                  <a className="text-lg text-black">{content.subtitle1}</a>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-1/4 w-screen bg-black cursor-pointer">
            <Link href="/forms/inspire">
              <div className=" h-full border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                <div className="h-1/2 text-center py-4">
                  <a className="text-white text-2xl text-center align-middle px-8 py-4 ">
                    {content.title2}
                  </a>
                </div>
                <div className="text-center ">
                  <a className="text-lg text-white">{content.subtitle2}</a>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-1/4 w-screen bg-white cursor-pointer">
            <Link href="/forms/fund">
              <div className=" h-full border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                <div className="h-1/2 text-center py-4">
                  <a className="text-black text-2xl text-center align-middle px-8 py-4 ">
                    {content.title3}
                  </a>
                </div>
                <div className="text-center ">
                  <a className="text-lg text-black">{content.subtitle3}</a>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-1/4 w-screen bg-black cursor-pointer">
            <Link href="/forms/attend">
              <div className=" h-full border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500">
                <div className="h-1/2 text-center py-4">
                  <a className="text-white text-2xl text-center align-middle px-8 py-4 ">
                    {content.title4}
                  </a>
                </div>
                <div className="text-center ">
                  <a className="text-lg text-white">{content.subtitle4}</a>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export async function getStaticProps() {
  const res = await fetchEntry("39fchLcRpWkbkPfK8HIEgr");
  const content = res?.fields;

  return {
    props: {
      content,
    },
  };
}

export default Splash;
