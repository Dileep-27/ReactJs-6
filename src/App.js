import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vadla Dileep</h1>
        <p>MERN Full-Stack Developer</p>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>
        I love building user-friendly software that's not just functional but also looks great, and I stay on top of the latest tech to do it.
        </p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Project 1</h3>
          <p>A simple React app that displays the word count.</p>
          <button class="bg-warning"><a href="/">project1</a></button>
        </div>
        <div className="Project">
          <h3>Project 2</h3>
          <p>A more complex React app that uses a database to store and retrieve project data.</p>
          
          <button class="bg-warning"><a href="/">project2</a></button>
        </div>
        
      </section>
      <section className="Contact">
        <h2>Contact</h2>
        <p>Email: dileepvadla27@gmail.com</p>
        <p>Phone: 9392***70</p>
        
      </section>
      <footer>
        <p>© 2023 Dileep</p>
      </footer>
    </div>
  );
}

export default App;