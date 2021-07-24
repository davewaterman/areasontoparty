import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { fetchEntry } from "@utils/contentful";
import { Form } from "semantic-ui-react";
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
        <Form
          name="create-form"
          method="POST"
          data-netlify="true"
          className="flex flex-col min-w-full"
          netlify
        >
          <input type="hidden" name="form-name" value="create-form" />
          <Form.Field required>
            <label>First Name</label>
            <input placeholder="You're awesome" name="name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="me@somebody.com" name="email" />
          </Form.Field>
          <Form.Field>
            <label>Company Name</label>
            <input placeholder="That place you work" name="company" />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input placeholder="867-5309" name="phone" />
          </Form.Field>
          <Form.Field>
            <label>
              Years of event experience (if your just starting that is
              completely ok)
            </label>
            <input placeholder="Experience" name="experience" />
          </Form.Field>
          <Form.Field>
            <label>Your idea</label>
            <textarea
              name="idea"
              defaultValue="Describe your idea:
Do you have an idea how much this would cost to create:
Have you tried it or something like it before?
Where or how would you see this event being most successful:

"
            />
          </Form.Field>
          <div className="actions">
            <button
              type="submit"
              className="ui button font-mono px-2 mt-3 bg-white"
            >
              Subscribe
            </button>
          </div>
        </Form>

        {/* <div className="actions">
            <button type="submit" className="font-mono px-2 mt-3 bg-white">
              Subscribe
            </button>
          </div> */}
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
