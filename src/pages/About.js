export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-page-header">
        <h1>About Page</h1>
      </div>

      <div className="about-page-content-wrapper">
        <div className="about-page-project-wrapper">
          <h2>About This Project</h2>
          <hr style={{ width: "30%" }} />
          <p>
            This is an app of react widgets. Each widget is a coding challenge
            to help with being a better front end developer. The Swapi widget
            pulls from the swapi API. The Weather API widget pulls from a
            weather API. FizzBuzz is a classic program that many developers are
            familiar with. Magic 8 Ball lets you get a prediction from the click
            of a button. The calculator widget is a calculator that you can use
            in this app. The fun with state widget has widgets within it that
            show different ways you can use state in React.
          </p>
        </div>

        <div className="about-page-course-wrapper">
          <h2>About This Course</h2>
          <hr style={{ width: "30%" }} />
          <p>
            I learned so much from this course. Having been through nucamp and a
            little bit of udacity this course tops both of them. The way
            everything was broken down and explained step by step was
            incredible. Also being able to work in an actual dev space to work
            in real world applications is an incredible learning experience in
            itself. Ryan broke things down extremely well. He was always willing
            to answer any question that came up in the curriculum or in the dev
            space. Both were great learning experiences. I’d highly recommend
            this course to anyone looking to become a developer.
          </p>
        </div>
      </div>
    </div>
  );
}
