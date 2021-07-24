import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { fetchEntry } from "@utils/contentful";
import Layout from "../../components/Layout";

const Form = ({ textboxHeader, textboxBodyText, buttonText }) => {
  return (
    <section
      id="info-form"
      className="flex flex-col m-auto bg-white my-8 backdrop-filter backdrop-grayscale backdrop-blur-sm backdrop-opacity-80 rounded-2xl border-4 border-black md:w-1/2"
    >
      <p className="text-black font-mono text-center m-5 text-xl">
        {textboxHeader}
      </p>
      <div className="text-black font-mono text-center">
        {documentToReactComponents(textboxBodyText)}
      </div>
      <div
        id="mc_embed_signup"
        className="clearfix text-center my-5 min-w-full sm:w-1/2 self-center"
      >
        <form
          name="create-form"
          method="POST"
          data-netlify="true"
          className="flex flex-col min-w-full"
        >
          <input type="hidden" name="form-name" value="create-form" />
          <div className="fields">
            <div className="field">
              <div className="text-left">
                <label for="name">Name: </label>
              </div>
              <input
                type="name"
                name="name"
                id="name"
                defaultV
                alue=""
                className="required w-2/3 font-mono p-1 text-sm bg-grey border-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="field">
              <div className="text-left">
                <label for="companyName">Company Name (if applicable): </label>
              </div>
              <input
                type="companyName"
                name="companyName"
                id="companyName"
                defaultV
                alue=""
                className="w-2/3 font-mono p-1 text-sm bg-grey border-2"
                placeholder="Company"
              />
            </div>
          </div>
          <div className="actions">
            <button type="submit" className="font-mono px-2 mt-3 bg-white">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Create = ({ content }) => {
  return (
    <Layout>
      <div>
        <Form
          textboxHeader={content.textboxHeader}
          textboxBodyText={content.textboxBodyText}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetchEntry("7uizhOLOyoMrZJqMSHZJq2");
  const content = res?.fields;

  return {
    props: {
      content,
    },
  };
}

export default Create;
