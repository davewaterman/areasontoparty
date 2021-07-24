import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { fetchEntry } from "@utils/contentful";
import Layout from "../../components/Layout";

const FormContainer = ({ textboxHeader, textboxBodyText }) => {
  return (
    <section
      id="info-form"
      className="flex flex-col m-auto p-5 bg-white my-8 backdrop-filter backdrop-grayscale backdrop-blur-sm backdrop-opacity-80 rounded-2xl border-4 border-black md:w-1/2"
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
          name="fund-form"
          method="POST"
          data-netlify="true"
          className="ui form"
        >
          <div className="fields">
            <div className="flex flex-col w-full text-left">
              <input type="hidden" name="form-name" value="fund-form" />
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  defaultValue=""
                  name="name"
                  id="name"
                  placeholder="Your awesome name"
                  className="w-full"
                />
              </div>
              <div className="field">
                <label>Reason you want to invest</label>
                <input type="text" defaultValue="" name="reason" id="reason" />
              </div>
              <div className="field">
                <label>
                  What is the best way for one of our investment managers to
                  reach out to you
                </label>
                <input
                  type="text"
                  defaultValue=""
                  name="method-of-contact"
                  id="method-of-contact"
                  placeholder=""
                />
              </div>
              <div className="field">
                <label>Your Email</label>
                <input
                  type="email"
                  defaultValue=""
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="field">
                <label>Phone/email/zoom</label>
                <input
                  type="text"
                  defaultValue=""
                  name="contact"
                  id="contact"
                />
              </div>
            </div>
          </div>
          <div className="actions">
            <button type="submit" className="font-mono px-2 mt-3 bg-white">
              Submit
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
        <FormContainer
          textboxHeader={content.textboxHeader}
          textboxBodyText={content.textboxBodyText}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetchEntry("6jszfOVoKc3EQSSXsgmXpz");
  const content = res?.fields;

  return {
    props: {
      content,
    },
  };
}

export default Create;
