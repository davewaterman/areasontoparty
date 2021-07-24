import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { fetchEntry } from "@utils/contentful";
import Layout from "../../components/Layout";

const FormContainer = ({ textboxHeader, textboxBodyText, buttonText }) => {
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
          name="create-form"
          method="POST"
          data-netlify="true"
          className="ui form"
        >
          <div className="fields">
            <div className="flex flex-col w-full text-left">
              <input type="hidden" name="form-name" value="create-form" />
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
                <label>Company</label>
                <input
                  type="text"
                  defaultValue=""
                  name="company"
                  id="company"
                  placeholder="Company"
                />
              </div>
              <div className="field">
                <label>Phone</label>
                <input
                  type="text"
                  defaultValue=""
                  name="phone"
                  id="phone"
                  placeholder=""
                />
              </div>
              <div className="field">
                <label>
                  Years of event experience (if your just starting that is
                  completely ok)
                </label>
                <input
                  type="text"
                  defaultValue=""
                  name="experience"
                  id="experience"
                  placeholder=""
                />
              </div>
              <div className="field">
                <label>Your idea</label>
                <textarea
                  type="text"
                  defaultValue="Describe your idea:
Do you have an idea how much this would cost to create:
Have you tried it or something like it before?
Where or how would you see this event being most successful:
"
                  name="idea"
                  id="idea"
                  placeholder=""
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
  const res = await fetchEntry("7uizhOLOyoMrZJqMSHZJq2");
  const content = res?.fields;

  return {
    props: {
      content,
    },
  };
}

export default Create;
