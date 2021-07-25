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
          name="inspire-form"
          method="POST"
          data-netlify="true"
          className="ui form"
        >
          <div className="fields">
            <div className="flex flex-col w-full text-left">
              <input type="hidden" name="form-name" value="inspire-form" />
              <div className="field">
                <label>Name of Organization</label>
                <input
                  type="text"
                  defaultValue=""
                  name="organization"
                  id="organization"
                  placeholder="Your awesome organization name"
                />
              </div>
              <div className="field">
                <label>How are you organized?</label>
                <input
                  type="text"
                  defaultValue=""
                  name="organization"
                  id="organization"
                  placeholder="501c3"
                />
              </div>
              <div className="field">
                <label>Executive director's name</label>
                <input
                  type="text"
                  defaultValue=""
                  name="executive-director"
                  id="executive-director"
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
                <label>Phone</label>
                <input type="text" defaultValue="" name="phone" id="phone" />
              </div>
              <div className="field">
                <label>What geographic location do you serve</label>
                <input
                  type="text"
                  defaultValue=""
                  name="geographic-region"
                  id="geographic-region"
                />
              </div>
              <div className="field">
                <label>Past events</label>
                <input
                  type="text"
                  defaultValue=""
                  name="past-events"
                  id="past-events"
                />
              </div>
              <div className="field">
                <label>
                  Do you think new events will help you raise more funds:
                </label>
                <input
                  type="text"
                  defaultValue=""
                  name="will-raise-more-funds"
                  id="will-raise-more-funds"
                />
              </div>
              <div className="field">
                <label>How much money do you need an event to raise?</label>
                <input
                  type="text"
                  defaultValue=""
                  name="how-much"
                  id="how-much"
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
  const res = await fetchEntry("7GDjNlRJ5R3apv27jIHTLp");
  const content = res?.fields;

  return {
    props: {
      content,
    },
  };
}

export default Create;
