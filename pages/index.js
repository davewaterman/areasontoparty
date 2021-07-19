/* import "./coming-soon.module.css";
import "./flipclock.module.css"; */

export default function Home({ posts }) {
  return (
    <section id="dw_wrapper" className="clearfix">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

      <link
        href="http://fonts.googleapis.com/css?family=Roboto:Roboto:400,500|Montserrat"
        rel="stylesheet"
        type="text/css"
      />

      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js" />

      <section id="dw_countdown" className="clearfix">
        <h1 className="dw_launch_header">Launching Soon</h1>
        <p>
          Have no fear, we are launching soon.
          <br />
          We just have to dot the i's and cross the t's
        </p>
        <div className="dw_clock"></div>
        <hr />
        <h2 className="dw_launch_subheader">Get Notified</h2>
        <p className="dw_launch_subtext">
          We will let you know when we are launching.
          <br />
          Hell we may even send you a beta invite.
        </p>

        <section id="dw_mailchimp_form">
          <div id="mc_embed_signup" className="clearfix">
            <form name="mc-embedded-subscribe-form" netlify>
              <div className="mc-field-group">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder="Enter your email"
                />
                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input
                    type="text"
                    name="b_b14cb5a32fad5c5fd5131db83_9cc9b4aa0d"
                    value=""
                  />
                </div>
                <div className="">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </section>
  );
}
