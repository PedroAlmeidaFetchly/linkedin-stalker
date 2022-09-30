import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import puppeteer from 'puppeteer';

const Hello = () => {
  const openBrowser = async () => {
    //const browser = await puppeteer.launch(); //Se descomentar quebra
    // const page = await browser.newPage();
    // page.goto("https://www.linkedin.com/feed/")
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button
          type="button"
          onClick={() => console.log('Console log working')}
        >
          <span role="img" aria-label="books">
            📚
          </span>
          Console log
        </button>

        <button
          onClick={() => {
            window.electron.store.set('foo', 'bar');
            // or
            console.log(window.electron.store.get('foo'));
          }}
        >
          ElectronStore
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
