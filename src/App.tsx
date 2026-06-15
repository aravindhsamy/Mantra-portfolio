import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload
} from "react-icons/fa";

function App() {

  const skills = [
    "React",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Machine Learning",
    "Deep Learning",
    "GIS"
  ];

  const projects = [
    {
      title:"University ERP",
      desc:"Complete ERP solution for universities."
    },
    {
      title:"Placement Portal",
      desc:"Coding and placement training platform."
    },
    {
      title:"AI Legal Advisor",
      desc:"Legal document generation using AI."
    },
    {
      title:"Point Cloud Segmentation",
      desc:"MLS point cloud research project."
    }
  ];

  return (
    <>

      {/* Background Blobs */}

      <div className="fixed inset-0 -z-10">

        <div
          className="absolute top-10 left-10
          w-96 h-96 rounded-full
          bg-cyan-500/20 blur-[150px]"
        />

        <div
          className="absolute right-10 top-40
          w-96 h-96 rounded-full
          bg-purple-500/20 blur-[150px]"
        />

        <div
          className="absolute bottom-10 left-1/2
          w-96 h-96 rounded-full
          bg-blue-500/20 blur-[150px]
          -translate-x-1/2"
        />

      </div>

      {/* Navbar */}

      <nav className="navbar">

        <div className="glass nav-content">

          <h2>Aravind</h2>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

      </nav>

      {/* Hero */}

      <section
        style={{
          minHeight:"100vh",
          display:"flex",
          alignItems:"center"
        }}
      >

        <div className="container">

          <div
            className="glass"
            style={{
              padding:"80px",
              textAlign:"center"
            }}
          >

            <div
              style={{
                width:"180px",
                height:"180px",
                margin:"auto",
                borderRadius:"50%",
                background:"rgba(255,255,255,.1)",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"60px",
                marginBottom:"30px"
              }}
            >
              A
            </div>

            <h1 className="hero-title">
              Aravind
            </h1>

            <h2 className="hero-subtitle">
              AI Engineer • Full Stack Developer
            </h2>

            <p className="hero-text">
              Building AI Products, SaaS Platforms,
              GIS Applications and Enterprise Software.
            </p>

            <div className="hero-buttons">

              <button className="glass btn">
                <FaDownload />
              </button>

              <button className="glass btn">
                Contact Me
              </button>

            </div>

            <div className="socials">

              <FaGithub />
              <FaLinkedin />
              <FaEnvelope />

            </div>

          </div>

        </div>

      </section>

      {/* About */}

      <section id="about" className="section">

        <div className="container">

          <div className="glass-card">

            <h2 className="section-title">
              About Me
            </h2>

            <p
              style={{
                lineHeight:"2",
                color:"#cbd5e1"
              }}
            >
              Passionate AI Engineer and
              Full Stack Developer with
              experience in Machine Learning,
              Deep Learning, GIS,
              Remote Sensing and
              Enterprise Software Development.
            </p>

          </div>

        </div>

      </section>

      {/* Skills */}

      <section id="skills" className="section">

        <div className="container">

          <h2 className="section-title">
            Skills
          </h2>

          <div className="skills-grid">

            {skills.map((skill)=>(
              <div
                key={skill}
                className="glass-card"
                style={{textAlign:"center"}}
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Projects */}

      <section id="projects" className="section">

        <div className="container">

          <h2 className="section-title">
            Projects
          </h2>

          <div className="projects-grid">

            {projects.map((project)=>(
              <div
                key={project.title}
                className="glass-card"
              >

                <div className="project-image"></div>

                <h3
                  style={{
                    fontSize:"24px",
                    marginBottom:"15px"
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color:"#94a3b8"
                  }}
                >
                  {project.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Contact */}

      <section
        id="contact"
        className="section"
      >

        <div className="container">

          <div className="glass-card contact-box">

            <h2 className="section-title">
              Contact
            </h2>

            <p>yourmail@gmail.com</p>

            <br />

            <p>Chennai, India</p>

          </div>

        </div>

      </section>

      <footer className="footer">
        © 2026 Aravind Portfolio
      </footer>

    </>
  );
}

export default App;