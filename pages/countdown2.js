import Image from "next/image";
import React from "react";
//import bg from "../public/crowd.jpg";

// function component
const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  if (unit !== "hours") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className={"flipUnitContainer"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

// class component
class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    // get new date
    const time = new Date();
    // set time units
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    // on hour chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle,
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle,
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle,
      });
    }
  }

  render() {
    // state object destructuring
    const {
      hours,
      minutes,
      seconds,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <div>
        <div
          className={
            "flex justify-center m-8 bg-no-repeat bg-top h-72 w-full relative"
          }
          style={{
            backgroundImage: "url('flipclock-border-bw2.png')",
            filter: "grayscale(100%)",
          }}
        >
          <div className="absolute top-20">
            <div className={"flipClock"}>
              <FlipUnitContainer
                unit={"hours"}
                digit={hours}
                shuffle={hoursShuffle}
              />
              <FlipUnitContainer
                unit={"minutes"}
                digit={minutes}
                shuffle={minutesShuffle}
              />
              <FlipUnitContainer
                unit={"seconds"}
                digit={seconds}
                shuffle={secondsShuffle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// function component
const Header = () => {
  return (
    <header className="m-8 text-4xl text-center bg-black">
      <h1>The world of Parties is about to Change in a BIG way...</h1>
    </header>
  );
};

const Form = () => {
  return (
    <section id="dw_mailchimp_form" className="m-8">
      <div id="mc_embed_signup" className="clearfix">
        <form name="mc-embedded-subscribe-form" netlify="true">
          <div className="mc-field-group">
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Enter your email"
            />
            <div style={{ position: "absolute", left: "-5000px" }}>
              <input
                type="text"
                name="b_b14cb5a32fad5c5fd5131db83_9cc9b4aa0d"
                defaultValue=""
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
  );
};

// function component
const App = () => {
  return (
    <div id="app" className="">
      <Image
        src={"/../public/crowd.jpg"}
        alt="Crowd"
        layout="fill"
        objectFit="cover"
        objectPosition="cover"
        className="z-0"
      />
      <div className="flex flex-col items-center z-10">
        <Header />
        <div className="h-72 w-full text-center">
          <FlipClock />
        </div>
        <Form />
      </div>
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Droid+Sans+Mono");
        #app * {
          box-sizing: border-box;
        }

        #app body {
          margin: 0;
        }

        #app {
          display: flex;
          position: relative;
          width: 100%;
          min-height: 100vh;
          justify-content: center;
          align-items: center;
        }

        #app header {
          display: flex;
          position: relative;
        }
        #app header h1 {
          font-family: "Droid Sans Mono", monospace;
          font-weight: lighter;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: white;
        }

        #app .flipClock {
          display: flex;
          justify-content: space-between;
          width: 500px;
        }

        #app .flipUnitContainer {
          display: block;
          position: relative;
          width: 140px;
          height: 120px;
          perspective-origin: 50% 50%;
          perspective: 300px;
          background-color: white;
          border-radius: 3px;
          box-shadow: 0px 10px 10px -10px grey;
        }

        #app .upperCard,
        #app .lowerCard {
          display: flex;
          position: relative;
          justify-content: center;
          width: 100%;
          height: 50%;
          overflow: hidden;
          border: 1px solid whitesmoke;
        }
        #app .upperCard span,
        #app .lowerCard span {
          font-size: 5em;
          font-family: "Droid Sans Mono", monospace;
          font-weight: lighter;
          color: #333333;
        }

        #app .upperCard {
          align-items: flex-end;
          border-bottom: 0.5px solid whitesmoke;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
        }
        #app .upperCard span {
          transform: translateY(50%);
        }

        #app .lowerCard {
          align-items: flex-start;
          border-top: 0.5px solid whitesmoke;
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }
        #app .lowerCard span {
          transform: translateY(-50%);
        }

        #app .flipCard {
          display: flex;
          justify-content: center;
          position: absolute;
          left: 0;
          width: 100%;
          height: 50%;
          overflow: hidden;
          backface-visibility: hidden;
        }
        #app .flipCard span {
          font-family: "Droid Sans Mono", monospace;
          font-size: 5em;
          font-weight: lighter;
          color: #333333;
        }
        #app .flipCard.unfold {
          top: 50%;
          align-items: flex-start;
          transform-origin: 50% 0%;
          transform: rotateX(180deg);
          background-color: white;
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          border: 0.5px solid whitesmoke;
          border-top: 0.5px solid whitesmoke;
        }
        #app .flipCard.unfold span {
          transform: translateY(-50%);
        }
        #app .flipCard.fold {
          top: 0%;
          align-items: flex-end;
          transform-origin: 50% 100%;
          transform: rotateX(0deg);
          background-color: white;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          border: 0.5px solid whitesmoke;
          border-bottom: 0.5px solid whitesmoke;
        }
        #app .flipCard.fold span {
          transform: translateY(50%);
        }

        #app .fold {
          animation: fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1
            normal forwards;
          transform-style: preserve-3d;
        }

        #app .unfold {
          animation: unfold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1
            normal forwards;
          transform-style: preserve-3d;
        }

        @keyframes fold {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(-180deg);
          }
        }

        @keyframes unfold {
          0% {
            transform: rotateX(180deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default App;