import { fetchEntry } from "@utils/contentful";
import Link from "next/link";
import { Button } from "semantic-ui-react";

const Splash = ({ content }) => {
  return (
    <div className=" bg-black min-h-screen">
      <section className="bg-black flex flex-col justify-center align-middle">
        <img
          src={"/logo-crop.png"}
          alt="logo"
          height="1rem"
          className="m-auto"
        />

        <div className="text-center m-auto mt-6">
          <Link href="/home">
            <Button
              icon="right arrow"
              primary
              className="text-white w-auto cursor-pointer leading-none px-3 py-1 border border-solid rounded bg-transparent block outline-none focus:outline-none hover:bg-gray-500"
            >
              {content.buttonText}
            </Button>
          </Link>
        </div>
      </section>
    </div>
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
