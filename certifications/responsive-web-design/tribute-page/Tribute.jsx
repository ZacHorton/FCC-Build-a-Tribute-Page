import "./styles.css";

export function Tribute() {
  return (
    <div className="tributeContainer">
      <title id="title">Quincy Larson</title>
      <header id="intro-container">
        <h1>Quincy Larson</h1>
        <h4>The man improving millions of lives</h4>
      </header>
      <main id="main">
        <figure id="img-div">
          <img id="image" src="https://raw.githubusercontent.com/ZacHorton/freeCodeCamp-projects/master/certifications/responsive-web-design/tribute-page/quincy-larson.jpeg" />
          <figcaption id="img-caption">
            Founder of{" "}
            <a href="https://www.freecodecamp.org/" target="_blank">
              freeCodeCamp.org
            </a>
            , a non-profit providing{" "}
            <strong>global technology education for free</strong>.
          </figcaption>
        </figure>
        <div className="tribute-info-container">
          <div id="tribute-info">
            <p>
              Quincy quotes from{" "}
              <a
                href="https://noteworthy.medium.com/quincy-larson-958f4903f9b7"
                target="_blank"
              >
                Noteworthy's video interview
              </a>
              :
            </p>
            <ul>
              <li>
                99.9% of the DNA in me is the same as in any human. Humanity is
                really one big tribe. That's why I started{" "}
                <a href="https://www.freecodecamp.org/" target="_blank">
                  freeCodeCamp
                </a>
                . I haven't taken a day off in the past few years. Writing some{" "}
                <a
                  href="https://www.freecodecamp.org/news/author/quincylarson/"
                  target="_blank"
                >
                  articles
                </a>{" "}
                that are going to{" "}
                <strong>help people, at scale, learn to code</strong>.
              </li>
              <li>
                I want to help all the people out there who are already super
                busy, who are already resource constrained, to help those people{" "}
                <strong>learn to code at their own convenience</strong>.
              </li>
              <li>
                If I had to describe{" "}
                <a href="https://www.freecodecamp.org/" target="_blank">
                  freeCodeCamp
                </a>{" "}
                in one word, it would be <strong>accessibility</strong>. We
                wanted to make it to where any person anywhere in the world
                could just go somewhere in their browser and immediately start
                coding and they could work through{" "}
                <strong>1200 hours worth of coursework for free</strong>.
              </li>
              <li>
                I spend probably about{" "}
                <strong>100 hours a week in front of my computer</strong> either
                coding or reviewing the code of other people to make sure
                everyone feels motivated and keeps contributing and that this
                project keeps moving forward.
              </li>
              <li>
                I just had a daughter that is giving me a lot of perspective. My
                heart aches for all the people who only get to spend a little
                bit of time with their kids each day. I'm in an extremely
                privileged position where I can spend as much time with my
                family as I want and for me that is just huge that's worth so
                much more to me than any material asset that I could get or the
                ability to hop on a plane and just jet set around the world.{" "}
                <strong>
                  I'd much rather just stay here and hangout with my family.
                </strong>
              </li>
              <li>
                Our ancestors stretch way back into the eons of passing
                knowledge down and it's not some formal handoff. It's just this{" "}
                <strong>continuous flow of life</strong>.
              </li>
            </ul>
          </div>
        </div>
        <div id="closing">
          <p>
            Want more? Checkout{" "}
            <a
              href="https://www.freecodecamp.org/news/author/kyle/"
              target="_blank"
            >
              Kyle Prinsloo's
            </a>{" "}
            <em>
              <a
                id="tribute-link"
                href="https://www.freecodecamp.org/news/short-interview-with-quincy-larson/"
                target="_blank"
              >
                Short interview with Quincy Larson
              </a>
            </em>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
