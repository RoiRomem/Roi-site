import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: {
      command: 'home',
      content: () => (
        <div>
          <p>Hey 👋 I'm Roi Romem, 15 years old</p>
          <p>currently a sophomore in high school</p>
          <p>📍 Jerusalem, Israel</p>
        </div>
      )
    },
    'education': {
      command: 'education',
      content: () => (
        <div>
          <p>&gt; Graduated with honors from Ort Minkof middle school</p>
          <p>&gt; Graduated with honors from Star-tech program</p>
          <p>&gt; Graduated from Azerbaijan Cyber Summer school 2023</p>
          <p>&gt; Currently studying in Ort Givat Ram high school</p>
          <p>&gt; Enrolled in the national cyber-security program magshimim</p>
        </div>
      )
    },
    'side-projects': {
      command: 'side-projects',
      content: () => (
        <div>
          <p>&gt; <a href='https://github.com/RoiRomem/telnet-chat-server'>telnet-chat-server</a>.go</p>
          <p>&gt; <a href='https://github.com/RoiRomem/Go-Login-System'>login-system.go</a></p>
          <p>&gt; <a href='https://github.com/RoiRomem/File-organizer'>file-organizer.go</a></p>
          <p className="mt-20">I know:</p>
          <p>.cs, .py, .go, .c, .js, .ts, .html, .css, .java</p>
          <p className="mt-20">overall I'm a pretty adaptable developer</p>
        </div>
      )
    },
    contact: {
      command: 'contact',
      content: () => (
        <div>
          <p>email: <a href='mailto:roiromem@gmail.com'>roiromem@gmail.com</a></p>
          <p>github: <a href='https://github.com/RoiRomem'>RoiRomem</a></p>
        </div>
      )
    }
  };

  return (
    <div className="container">
      <div className="layout">
        <div className="sidebar">
          <h1 className="title">ROI ROMEM</h1>
          <h2 className="subtitle">BACK-END DEVELOPER</h2>
          <nav>
            <ul className="nav">
              {Object.keys(pages).map((page) => (
                <li
                  key={page}
                  className={`nav-item ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  &gt; {page}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="terminal">
          <div className="prompt">
            roi@portfolio:~$ {pages[currentPage].command}
          </div>
          <div className="content">
            {pages[currentPage].content()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
