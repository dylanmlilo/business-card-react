import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="image-container"></div>
      </header>
      <main>
        <section className="card-details-container">
          <h1 className="name">Dylan Mlilo</h1>
          <h2 className="occupation">Civil Engineer/Software Engineer</h2>
          <div className="btn-container">
            <a href="mailto:your.email@example.com" className="btn btn-email">
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
          <article className="details-container">
            <h3>About</h3>
            <p>
              A Civil and Water Engineer with a passion for continuous learning
              and problem solving. I enjoy working in teams and applying new
              knowledge to real world challenges. Always looking for ways to
              improve efficiency as I combine engineering expertise with
              software development skills to automate tasks and optimise
              workflows.
            </p>
            <h3>Interests</h3>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </article>
        </section>
      </main>
      <footer>
        <div className="social-icons">
          <a href="https://facebook.com/yourpage" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
