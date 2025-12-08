  import React from "react";
  import "./App.css";
  import logo from "./assets/Orca.png";

  function App() {
    return (
      <>
        {/* NAVBAR */}
        <header className="navbar">
          <div className="nav-left">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>

          <nav className="nav-links">
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>

            <a href="#download_cv" className="btn-outline">Download CV</a>
            <a href="#contact" className="btn-filled">Contact</a>
          </nav>
        </header>

        <main>

          {/* HERO SECTION */}
          <section id="about" className="hero-section">
            <div className="hero-card">

              {/* ICONS TOP RIGHT */}
              <div className="hero-icons">
                <a href="twitter" className="icon-btn">🐦</a>
                <a href="linkedin" className="icon-btn">🔗</a>
                <a href="github" className="icon-btn">💻</a>
              </div>

              <h3>Hi, I'm Orca</h3>
              <h6>Full-Stack Developer</h6>
              <br />
              <h1>Passionate to pursue the Techonology</h1>
              <br />
              <p>
                Passionate about building digital experiences and solving
                technology-driven problems. Always learning and improving.
              </p>
            </div>


            <div className="hero-image">
              <img src={logo} alt="Your Pic" className="hero-photo" />
            </div>

          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>

            <div className="projects-grid">

              <a href="https://example-ecommerce.com" target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-card">
                  <img src={logo} alt="Project 1" />
                  <p className="project-desc">E-commerce Website</p>
                  <p className="project-subdesc">An online store with cart & payment system</p>
                </div>
              </a>

              <a href="https://example-portfolio.com" target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-card">
                  <img src={logo} alt="Project 2" />
                  <p className="project-desc">Portfolio Web App</p>
                </div>
              </a>

              <a href="https://example-dashboard.com" target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-card">
                  <img src={logo} alt="Project 3" />
                  <p className="project-desc">Mobile UI Dashboard</p>
                </div>
              </a>

              <a href="https://example-ai-chat.com" target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-card">
                  <img src={logo} alt="Project 4" />
                  <p className="project-desc">AI Chat Assistant</p>
                </div>
              </a>

            </div>
            <hr className="section-divider" />
          </section>



          {/* SERVICES SECTION */}
          <section id="services" className="services-section">

            <div className="services-header">
              <h2 className="section-title">Services</h2>
              <a href="#contact" className="services-btn">Get a Quote</a>
            </div>

            <ul className="services-list">
              <li>
                <h4>Custom Web Development</h4>
                <p>Responsive, optimized websites built with modern technologies.</p>
              </li>

              <li>
                <h4>Full-Stack Applications</h4>
                <p>Scalable backend + interactive frontend for complete solutions.</p>
              </li>

              <li>
                <h4>WordPress / Shopify</h4>
                <p>Custom themes, plugins, and e-commerce store setup.</p>
              </li>

              <li>
                <h4>UI / UX Design</h4>
                <p>Clean, user-friendly designs that enhance experience.</p>
              </li>
            </ul>
          </section>
          <hr className="section-divider" />

          

          {/* CONTACT SECTION */}
          <section id="contact" className="contact-section">
            <h2 className="section-title">Contact</h2>

            <form className="contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button type="submit" className="btn-filled">
                Send Message
              </button>
            </form>
          </section>

          {/* FOOTER */}
          <footer className="footer">
            <div className="gradient-group">
              <h3>Thank you for viewing!</h3>
              <br />
              <p>Stay in touch.</p>
            </div>
          </footer>


        </main>
      </>
    );
  }

  export default App;
