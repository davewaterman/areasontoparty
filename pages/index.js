import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { fetchEntry } from "@utils/contentful";
import Image from "next/image";
import React from "react";

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
  let previousDigit = digit + 1;

  // to prevent a negative value
  if (["Minutes", "Seconds"].includes(unit)) {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
    if (previousDigit === 60) previousDigit = 0;
  } else if (unit === "Hours") {
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
    <div className={"flipUnitContainer flex-grow w-1/5 sm:w-auto"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
      <span className="text-white font-mono bg-black">{unit}</span>
    </div>
  );
};

// class component
class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
    this.countdownDate = props.countdownDate;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    // get new date
    const time = new Date();
    const deadline = new Date(this.countdownDate).getTime();
    // set time units
    const distance = deadline - time.getTime();
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // on hour chanage, update hours and shuffle state
    if (days !== this.state.days) {
      const daysShuffle = !this.state.daysShuffle;
      this.setState({
        days,
        daysShuffle,
      });
    }
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
      days,
      hours,
      minutes,
      seconds,
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <div
        className={
          "flipClock w-11/12 text-right space-x-2 sm:w-auto sm:space-x-5 lg:space-x-10"
        }
      >
        <FlipUnitContainer unit={"Days"} digit={days} shuffle={daysShuffle} />
        <FlipUnitContainer
          unit={"Hours"}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={"Minutes"}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={"Seconds"}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </div>
    );
  }
}

// function component
const Header = ({ pageHeader }) => {
  return (
    <header className="my-8 text-4xl text-center bg-black w-5/6 lg:w-1/2">
      <h1 className="text-center">{pageHeader}</h1>
    </header>
  );
};

const Form = ({ textboxHeader, textboxBodyText, buttonText }) => {
  return (
    <section
      id="subscription-form"
      className="flex flex-col w-5/6 my-8 backdrop-filter backdrop-grayscale backdrop-blur-sm backdrop-opacity-80 rounded-2xl border-4 border-black md:w-1/2"
    >
      <p className="text-white font-mono text-center m-5 text-xl">
        {textboxHeader}
      </p>
      <div className="text-white font-mono text-center">
        {documentToReactComponents(textboxBodyText)}
      </div>
      <div
        id="mc_embed_signup"
        className="clearfix text-center m-5 w-auto sm:w-1/2 self-center"
      >
        <form
          name="subscribe-form"
          method="POST"
          data-netlify="true"
          className="flex flex-col"
        >
          <div className="fields">
            <div className="field">
              <input
                type="email"
                defaultValue=""
                name="email"
                className="required email font-mono p-1 text-sm bg-white"
                id="email"
                placeholder="Enter your email"
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

// function component
const App = ({ content }) => {
  return (
    <div id="app" className="flex items-center">
      <Image
        src={"/crowd.jpg"}
        alt="Crowd"
        layout="fill"
        objectFit="cover"
        objectPosition="cover"
        className="z-0 w-screen"
        unoptimized="true"
      />
      <div className="flex flex-col justify-center items-center z-10 w-screen">
        <Header pageHeader={content.pageHeader} />
        <FlipClock countdownDate={content.countdownDate} />
        <Form
          textboxHeader={content.textboxHeader?.content}
          textboxBodyText={content.textboxBodyText}
          buttonText={content.buttonText}
        />
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

          .flipClock {
            display: flex;
            //justify-content: space-between;
            //width: 560px;
          }

          .flipUnitContainer {
            display: block;
            position: relative;
            //width: 90px;
            height: 90px;
            perspective-origin: 50% 50%;
            perspective: 300px;
            background-color: black;
            border-radius: 3px;
            box-shadow: 0px 10px 10px -10px grey;
          }

          .upperCard,
          .lowerCard {
            display: flex;
            position: relative;
            justify-content: center;
            width: 100%;
            height: 50%;
            overflow: hidden;
            border: 1px solid whitesmoke;
          }
          .upperCard span,
          .lowerCard span {
            font-size: 5em;
            font-family: "Droid Sans Mono", monospace;
            font-weight: lighter;
            color: white;
          }

          .upperCard {
            align-items: flex-end;
            border-bottom: 0.5px solid whitesmoke;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
          }
          .upperCard span {
            transform: translateY(50%);
          }

          .lowerCard {
            align-items: flex-start;
            border-top: 0.5px solid whitesmoke;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
          }
          .lowerCard span {
            transform: translateY(-50%);
          }

          .flipCard {
            display: flex;
            justify-content: center;
            position: absolute;
            left: 0;
            width: 100%;
            height: 50%;
            overflow: hidden;
            backface-visibility: hidden;
          }
          .flipCard span {
            font-family: "Droid Sans Mono", monospace;
            font-size: 5em;
            font-weight: lighter;
            color: white;
          }
          .flipCard.unfold {
            top: 50%;
            align-items: flex-start;
            transform-origin: 50% 0%;
            transform: rotateX(180deg);
            background-color: black;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            border: 0.5px solid whitesmoke;
            border-top: 0.5px solid whitesmoke;
          }
          .flipCard.unfold span {
            transform: translateY(-50%);
          }
          .flipCard.fold {
            top: 0%;
            align-items: flex-end;
            transform-origin: 50% 100%;
            transform: rotateX(0deg);
            background-color: black;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border: 0.5px solid whitesmoke;
            border-bottom: 0.5px solid whitesmoke;
          }
          .flipCard.fold span {
            transform: translateY(50%);
          }

          .fold {
            animation: fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1
              normal forwards;
            transform-style: preserve-3d;
          }

          .unfold {
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
    </div>
  );
};
export async function getStaticProps() {
  const res = await fetchEntry("6Peie2iVl1U4xvpypa22FA");
  const content = res?.fields;

  return {
    props: {
      content,
    },
  };
}

export default App;
