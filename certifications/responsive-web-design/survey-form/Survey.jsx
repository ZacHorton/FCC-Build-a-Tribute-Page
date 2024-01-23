import "./styles.css";

export function Survey() {
  return (
    <div className="surveyContainer">
      <div>
        <header>
          <h1 id="title">Survey Form</h1>
          <p id="description">
            Thank you for taking the time to help me improve the platform
          </p>
        </header>
        <form action="/action_page.php" id="survey-form">
          <fieldset>
            <label htmlFor="name" className="labelBlock" id="name-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              autoComplete="true"
            ></input>
            <br />
            <br />
            <label htmlFor="email" className="labelBlock" id="email-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              required
              autoComplete="true"
            ></input>
            <br />
            <br />
            <label htmlFor="number" className="labelBlock" id="number-label">
              Age (optional)
            </label>
            <input
              type="number"
              id="number"
              placeholder="Age"
              min="0"
              max="125"
            ></input>
            <br />
            <br />
            <label htmlFor="role" className="labelBlock">
              Which option best describes your current role?
            </label>
            <select id="role">
              <option disabled>
                Select current role?
              </option>
              <option>Student</option>
              <option>Full Time Job</option>
              <option>Full Time Learner</option>
              <option>Prefer not to say</option>
              <option>Other</option>
            </select>
            <p>Would you recommend Zac Horton to a friend?</p>
            <input
              type="radio"
              id="definitely"
              name="recommend"
              value="definitely"
            ></input>
            <label htmlFor="definitely">Definitely</label>
            <br />
            <input
              type="radio"
              id="maybe"
              name="recommend"
              value="maybe"
            ></input>
            <label htmlFor="maybe"> Maybe</label>
            <br />
            <input
              type="radio"
              id="not-sure"
              name="recommend"
              value="not-sure"
            ></input>
            <label htmlFor="not-sure"> Not sure</label>
            <br />
            <br />
            <label htmlFor="dropdown">
              What is your favorite feature of freeCodeCamp?
            </label>
            <select id="dropdown">
              <option disabled>
                Select an option
              </option>
              <option>Challenges</option>
              <option>Projects</option>
              <option>Community</option>
              <option>Open Source</option>
            </select>
            <p>
              What would you like to see improved?{" "}
              <span>(Check all that apply)</span>
            </p>
            <input
              type="checkbox"
              id="front-end"
              name="improved"
              value="front-end"
            ></input>
            <label htmlFor="front-end"> Front-end Projects</label>
            <br />
            <input
              type="checkbox"
              id="back-end"
              name="improved"
              value="back-end"
            ></input>
            <label htmlFor="back-end"> Back-end Projects</label>
            <br />
            <input
              type="checkbox"
              id="data-visual"
              name="improved"
              value="data-visual"
            ></input>
            <label htmlFor="data-visual"> Data Visualization</label>
            <br />
            <input
              type="checkbox"
              id="challenges"
              name="improved"
              value="challenges"
            ></input>
            <label htmlFor="challenges"> Challenges</label>
            <br />
            <input
              type="checkbox"
              id="open-source"
              name="improved"
              value="open-source"
            ></input>
            <label htmlFor="open-source"> Open Source Community</label>
            <br />
            <input
              type="checkbox"
              id="gitter"
              name="improved"
              value="gitter"
            ></input>
            <label htmlFor="gitter"> Gitter help rooms</label>
            <br />
            <input
              type="checkbox"
              id="videos"
              name="improved"
              value="videos"
            ></input>
            <label htmlFor="videos"> Videos</label>
            <br />
            <input
              type="checkbox"
              id="meetups"
              name="improved"
              value="meetups"
            ></input>
            <label htmlFor="meetups"> City Meetups</label>
            <br />
            <input
              type="checkbox"
              id="wiki"
              name="improved"
              value="wiki"
            ></input>
            <label htmlFor="wiki"> Wiki</label>
            <br />
            <input
              type="checkbox"
              id="forum"
              name="improved"
              value="forum"
            ></input>
            <label htmlFor="forum"> Forum</label>
            <br />
            <input
              type="checkbox"
              id="courses"
              name="improved"
              value="courses"
            ></input>
            <label htmlFor="courses"> Additional Courses</label>
            <br />
            <br />
            <label htmlFor="comments">Any comments or suggestions? </label>
            <textarea
              id="comments"
              placeholder="Enter your comment here..."
            ></textarea>
            <input type="submit" id="submit" value="Submit"></input>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
