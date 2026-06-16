function App() {
  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">

        <div className="container">

          <a className="navbar-brand" href="#">
            PRISM
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbar"
          >

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#roadmap"
                >
                  Roadmap
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#tracks"
                >
                  Tracks
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#mentors"
                >
                  Mentors
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#faq"
                >
                  FAQ
                </a>
              </li>

              <li className="nav-item ms-lg-3">

                <a
                  href="https://forms.gle/VAa9vAtvv1G579Yy7"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now!
                </a>

              </li>

            </ul>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <span className="badge bg-warning text-dark fs-6 mb-3">
                School of Computing and Data Science
              </span>

              <h1>
                Professional Readiness & Industry Skills Mastery
              </h1>

              <p className="my-4">
                Empowering students through structured placement
                preparation, industry mentorship, coding practice,
                aptitude training, mock interviews and career guidance.
              </p>

              <a
                href="#tracks"
                className="btn btn-primary-custom btn-lg me-3"
              >
                Explore Tracks
              </a>

              <a
                href="#mentors"
                className="btn btn-outline-custom btn-lg"
              >
                Meet Faculty
              </a>

            </div>

          </div>

        </div>

      </section>
      {/* ROADMAP */}

<section
  id="roadmap"
  className="section-padding"
>

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        10 Week Placement Roadmap
      </h2>

      <p className="section-subtitle">
        Follow this structured preparation plan.
      </p>

    </div>

    <div className="timeline">

      <div className="timeline-item">
        <h5>Week 1-2</h5>
        <p>Aptitude & Reasoning</p>
      </div>

      <div className="timeline-item">
        <h5>Week 3-4</h5>
        <p>Programming Fundamentals</p>
      </div>

      <div className="timeline-item">
        <h5>Week 5-6</h5>
        <p>Data Structures & Algorithms</p>
      </div>

      <div className="timeline-item">
        <h5>Week 7-8</h5>
        <p>
          System Design
        </p>
      </div>

      <div className="timeline-item">
        <h5>Week 9</h5>
        <p>Resume Building</p>
      </div>

      <div className="timeline-item">
        <h5>Week 10</h5>
        <p>Company Specific Preparation</p>
      </div>

    </div>

  </div>

</section>
{/* CAREER TRACKS */}

<section
  id="tracks"
  className="section-padding bg-light-custom"
>

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Career Tracks
      </h2>

      <p className="section-subtitle">
        Choose your preferred career path and follow a structured roadmap.
      </p>

    </div>

    <div className="row g-4">

      {/* Software Engineer */}

      <div className="col-lg-3 col-md-6">

        <div className="track-card">

          <div className="track-icon">
            <i className="bi bi-code-slash"></i>
          </div>

          <h4>
            Software Engineer
          </h4>

          <p>
            DSA, OOP, DBMS, OS,
            System Design and Coding Interviews.
          </p>

        </div>

      </div>

      {/* Data Analyst */}

      <div className="col-lg-3 col-md-6">

        <div className="track-card">

          <div className="track-icon">
            <i className="bi bi-bar-chart-line"></i>
          </div>

          <h4>
            Data Analyst
          </h4>

          <p>
            Excel, SQL, Power BI,
            Statistics and Business Analytics.
          </p>

        </div>

      </div>

      {/* AI / ML */}

      <div className="col-lg-3 col-md-6">

        <div className="track-card">

          <div className="track-icon">
            <i className="bi bi-cpu"></i>
          </div>

          <h4>
            AI / ML Engineer
          </h4>

          <p>
            Python, Machine Learning,
            Deep Learning and Generative AI.
          </p>

        </div>

      </div>

      {/* Cloud */}

      <div className="col-lg-3 col-md-6">

        <div className="track-card">

          <div className="track-icon">
            <i className="bi bi-cloud"></i>
          </div>

          <h4>
            Cloud Engineer
          </h4>

          <p>
            AWS, Azure, Docker,
            Kubernetes and DevOps.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* TRAINING MODULES */}

<section className="section-padding">

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Training Modules
      </h2>

      <p className="section-subtitle">
        Comprehensive modules covering all aspects of placement preparation.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-3 col-md-6">
        <div className="stat-card">
          <i className="bi bi-calculator fs-1 text-primary"></i>
          <h5 className="mt-3">Aptitude</h5>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stat-card">
          <i className="bi bi-code-square fs-1 text-primary"></i>
          <h5 className="mt-3">Programming</h5>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stat-card">
          <i className="bi bi-diagram-3 fs-1 text-primary"></i>
          <h5 className="mt-3">Data Structures</h5>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stat-card">
          <i className="bi bi-columns-gap fs-1 text-primary"></i>
          <h5 className="mt-3">System Design</h5>
        </div>
      </div>

    </div>

  </div>

</section>
{/* STUDENT JOURNEY */}

<section className="section-padding bg-light-custom">

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Student Journey
      </h2>

      <p className="section-subtitle">
        A structured pathway from enrollment to placement success.
      </p>

    </div>

    <div className="journey-wrapper">

      <div className="journey-step">

        <div className="journey-number">
          1
        </div>

        <h5>
          Registration
        </h5>

        <p>
          Join the PRISM program.
        </p>

      </div>

      <div className="journey-arrow">
        →
      </div>

      <div className="journey-step">

        <div className="journey-number">
          2
        </div>

        <h5>
          Assessment
        </h5>

        <p>
          Initial skill evaluation.
        </p>

      </div>

      <div className="journey-arrow">
        →
      </div>

      <div className="journey-step">

        <div className="journey-number">
          3
        </div>

        <h5>
          Training
        </h5>

        <p>
          Aptitude, Coding & Interview prep.
        </p>

      </div>

      <div className="journey-arrow">
        →
      </div>

      <div className="journey-step">

        <div className="journey-number">
          4
        </div>

        <h5>
          Mock Test.
        </h5>

        <p>
          Practice with experts.
        </p>

      </div>

      <div className="journey-arrow">
        →
      </div>

      <div className="journey-step">

        <div className="journey-number">
          5
        </div>

        <h5>
          Placement
        </h5>

        <p>
          Get industry ready.
        </p>

      </div>

    </div>

  </div>

</section>
{/* COMPANY PREPARATION */}

<section className="section-padding">

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Company Preparation
      </h2>

      <p className="section-subtitle">
        Prepare for top recruiters with dedicated learning tracks.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-3">

        <div className="company-card">

          <h4>TCS</h4>

          <ul>

            <li>Aptitude</li>
            <li>Reasoning</li>
            <li>Coding</li>
            <li>Interview</li>

          </ul>

        </div>

      </div>

      <div className="col-lg-3">

        <div className="company-card">

          <h4>Infosys</h4>

          <ul>

            <li>Aptitude</li>
            <li>Puzzles</li>
            <li>Coding</li>
            <li>Interview</li>

          </ul>

        </div>

      </div>

      <div className="col-lg-3">

        <div className="company-card">

          <h4>Accenture</h4>

          <ul>

            <li>Cognitive</li>
            <li>Technical</li>
            <li>Coding</li>
            <li>Interview</li>

          </ul>

        </div>

      </div>

      <div className="col-lg-3">

        <div className="company-card">

          <h4>Zoho</h4>

          <ul>

            <li>Coding</li>
            <li>Problem Solving</li>
            <li>Projects</li>
            <li>Interview</li>

          </ul>

        </div>

      </div>

    </div>

  </div>

</section>
{/* FACULTY MENTORS */}

<section
  id="mentors"
  className="section-padding bg-light-custom"
>

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Faculty Mentors
      </h2>

      <p className="section-subtitle">
        Learn from experienced academicians and industry experts.
      </p>

    </div>

    <div className="row g-4">
      {/* Dr Krishna Kant Singh */}

      <div className="col-lg-4 col-md-6">

        <div className="mentor-card">

          <img
            src="/faculty/kk.avif"
            alt="Dr Krishna Kant Singh"
            className="mentor-image mx-auto d-block"
          />

          <div className="mentor-content">

            <h4>
              Dr. Krishna Kant Singh
            </h4>

            <p className="mentor-role">
              Dean, School of Computing and Data Science
            </p>

            <a
              href="https://www.saiuniversity.edu.in/saiu-faculties/dr.-krishna-kant-singh"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Profile
            </a>

          </div>

        </div>

      </div>
      {/* Dr Mariya celin */}

      <div className="col-lg-4 col-md-6">

        <div className="mentor-card">

          <img
            src="/faculty/mc.avif"
            alt="Dr mariya celin"
            className="mentor-image mx-auto d-block"
          />

          <div className="mentor-content">

            <h4>
              Dr. Mariya Celin
            </h4>

            <p className="mentor-role">
              Assistant Professor
            </p>

            <a
              href="https://www.saiuniversity.edu.in/saiu-faculties/mariya-celin-t-a"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Profile
            </a>

          </div>

        </div>

      </div>

      {/* Dr Beaula */}

      <div className="col-lg-4 col-md-6">

        <div className="mentor-card">

          <img
            src="/faculty/bc.avif"
            alt="Dr Beaula"
            className="mentor-image mx-auto d-block"
          />

          <div className="mentor-content">

            <h4>
              Dr. Beaula
            </h4>

            <p className="mentor-role">
              Assistant Professor
            </p>

            <a
              href="https://www.saiuniversity.edu.in/saiu-faculties/beaula-charles"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Profile
            </a>

          </div>

        </div>

      </div>

      {/* Dr tamilarasi */}

      <div className="col-lg-4 col-md-6">

        <div className="mentor-card">

          <img
            src="/faculty/taw.avif"
            alt="Dr Krishna Kant Singh"
            className="mentor-image mx-auto d-block"
          />

          <div className="mentor-content">

            <h4>
              Dr. Tamilarasi W
            </h4>

            <p className="mentor-role">
              Assistant Professor
            </p>

            <a
              href="https://www.saiuniversity.edu.in/saiu-faculties/dr.-tamilarasi-w"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Profile
            </a>

          </div>

        </div>

      </div>

      {/* Aravindhsamy */}

      <div className="col-lg-4 col-md-6">

        <div className="mentor-card">

          <img
            src="/faculty/asp.avif"
            alt="Dr ASP"
            className="mentor-image mx-auto d-block"
          />

          <div className="mentor-content">

            <h4>
              Aravindhsamy P
            </h4>

            <p className="mentor-role">
              Lecturer
            </p>

            <a
              href="https://www.saiuniversity.edu.in/saiu-faculties/aravindhsamy-palaniraj"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Profile
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* SKILLS DEVELOPMENT */}

<section className="section-padding">

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Skills You Will Develop
      </h2>

      <p className="section-subtitle">
        Build the competencies required by leading recruiters.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-3 col-md-6">
        <div className="skill-card">
          Technical Skills
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="skill-card">
          Problem Solving
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="skill-card">
          Interview Skills
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="skill-card">
          Aptitude
        </div>
      </div>

    </div>

  </div>

</section>
{/* PLACEMENT ASSESSMENT */}

<section
  className="section-padding bg-light-custom"
>

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Placement Assessment
      </h2>

      <p className="section-subtitle">
        Evaluate your readiness through structured assessments.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-3 col-md-6">

        <div className="assessment-card">

          <i className="bi bi-file-earmark-text assessment-icon"></i>

          <h5>
            Aptitude Test
          </h5>

          <p>
            Quantitative, Logical and Verbal Ability.
          </p>

        </div>

      </div>

      <div className="col-lg-3 col-md-6">

        <div className="assessment-card">

          <i className="bi bi-code-slash assessment-icon"></i>

          <h5>
            Coding Test
          </h5>

          <p>
            Programming and DSA challenges.
          </p>

        </div>

      </div>

      <div className="col-lg-3 col-md-6">

        <div className="assessment-card">

          <i className="bi bi-person-video3 assessment-icon"></i>

          <h5>
            Mock Tests
          </h5>

          <p>
            Technical evaluations.
          </p>

        </div>

      </div>

      <div className="col-lg-3 col-md-6">

        <div className="assessment-card">

          <i className="bi bi-award assessment-icon"></i>

          <h5>
            Final Score
          </h5>

          <p>
            Overall placement readiness score.
          </p>

        </div>

      </div>

    </div>

    <div className="text-center mt-5">

      <a
        href="https://forms.gle/VAa9vAtvv1G579Yy7"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary btn-lg"
      >
        Join Now
      </a>

    </div>

  </div>

</section>
{/* FAQ */}

<section
  id="faq"
  className="section-padding"
>

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Frequently Asked Questions
      </h2>

    </div>

    <div
      className="accordion"
      id="faqAccordion"
    >

      <div className="accordion-item">

        <h2 className="accordion-header">

          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
          >
            Who can join PRISM?
          </button>

        </h2>

        <div
          id="faq1"
          className="accordion-collapse collapse show"
          data-bs-parent="#faqAccordion"
        >

          <div className="accordion-body">

            All students interested in placement preparation
            can participate.

          </div>

        </div>

      </div>

      <div className="accordion-item">

        <h2 className="accordion-header">

          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
          >
            Are coding sessions included?
          </button>

        </h2>

        <div
          id="faq2"
          className="accordion-collapse collapse"
          data-bs-parent="#faqAccordion"
        >

          <div className="accordion-body">

            Yes. Coding, DSA and interview preparation
            are included.

          </div>

        </div>

      </div>

      <div className="accordion-item">

        <h2 className="accordion-header">

          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
          >
            Do we get mock Tests?
          </button>

        </h2>

        <div
          id="faq3"
          className="accordion-collapse collapse"
          data-bs-parent="#faqAccordion"
        >

          <div className="accordion-body">

            Yes. Technical  mock tests
            are conducted regularly.

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* CTA */}

<section className="cta-section">

  <div className="container">

    <div className="cta-card text-center">

      <h2>
        Ready to Start Your Placement Journey?
      </h2>

      <p>
        Join PRISM and become industry ready with
        structured preparation and mentorship.
      </p>

      <a
        href="https://forms.gle/VAa9vAtvv1G579Yy7"
        target="_blank"
        rel="noreferrer"
        className="btn btn-light btn-lg mt-3"
      >
        Get Started
      </a>

    </div>

  </div>

</section>
{/* CONTACT */}

<section
  id="contact"
  className="section-padding"
>

  <div className="container">

    <div className="text-center">

      <h2 className="section-title">
        Contact
      </h2>

      <p className="section-subtitle">
        Reach out for more information.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-4">

        <div className="feature-card text-center">

          <div className="feature-icon mx-auto">
            <i className="bi bi-person"></i>
          </div>

          <h4>
            DEAN SCDS
          </h4>

          <p>
            Coordinator
          </p>

        </div>

      </div>

      <div className="col-lg-4">

        <div className="feature-card text-center">

          <div className="feature-icon mx-auto">
            <i className="bi bi-telephone"></i>
          </div>

          <h4>
            Contact
          </h4>

          <p>
            Office Hours Available
          </p>

        </div>

      </div>

      <div className="col-lg-4">

        <div className="feature-card text-center">

          <div className="feature-icon mx-auto">
            <i className="bi bi-geo-alt"></i>
          </div>

          <h4>
            Location
          </h4>

          <p>
            Sai University, Chennai
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
<footer className="footer">

  <div className="container">

    <div className="row align-items-center">

      <div className="col-lg-6">

        <h4>
          PRISM
        </h4>

        <p>
          Professional Readiness &
          Industry Skills Mastery
        </p>

      </div>

      <div className="col-lg-6 text-lg-end">

        <p>
          Developed By ARAVINDHSAMY
        </p>

      </div>

    </div>

  </div>

</footer>
    </>
  );
}

export default App;