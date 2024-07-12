import "./Footer.css";
import dodo from "./dodo.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="fcontent">
        <div>
          <img src={dodo} alt="dodo" />
        </div>
        <div className="listOfNetwork">
          <h1>Hello Dodo</h1>
          <div>
            <a
              href="https://www.linkedin.com/in/abhinish-kumar-37a07b290/"
              target="blank"
            >
              <svg
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="LinkedIn"
                role="img"
                viewBox="0 0 512 512"
                fill="rgb(245, 23, 103)"
              >
                <rect width="512" height="512" rx="15%" fill="white" />
                <circle cx="142" cy="138" r="37" />
                <path
                  stroke="rgb(245, 23, 103)"
                  stroke-width="66"
                  d="M244 194v198M142 194v198"
                />
                <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" />
              </svg>
            </a>
            <a href="https://github.com/Abhinish-Kumar" target="blank">
              <svg
                className="logo github"
                xmlns="http://www.w3.org/2000/svg"
                width="2.7rem"
                height="2.7rem"
                viewBox="0 0 1024 1024"
              >
                <circle cx="512" cy="512" r="512" fill="white" />
                <path
                  d="M511.9 262.2c-141.5 0-256.1 114.7-256.1 256.1 0 113.2 73.4 209.2 175.1 243 12.8 2.4 17.5-5.5 17.5-12.3 0-6.1-.2-22.2-.3-43.5-71.2 15.5-86.3-34.4-86.3-34.4-11.7-29.6-28.5-37.5-28.5-37.5-23.2-15.9 1.8-15.6 1.8-15.6 25.7 1.8 39.2 26.4 39.2 26.4 22.8 39.2 60 27.9 74.6 21.3 2.3-16.6 8.9-27.9 16.2-34.3-56.9-6.4-116.7-28.4-116.7-126.6 0-28 9.9-50.8 26.4-68.7-2.9-6.5-11.5-32.5 2.2-67.8 0 0 21.5-6.9 70.4 26.3 20.5-5.7 42.3-8.5 64-8.6 21.8.1 43.5 2.9 64 8.6 48.7-33.1 70.1-26.3 70.1-26.3 13.8 35.3 5.1 61.3 2.6 67.8 16.3 17.9 26.3 40.8 26.3 68.7 0 98.4-59.9 120.1-116.9 126.4 9 7.7 17.3 23.4 17.3 47.4 0 34.3-.3 61.8-.3 70.1 0 6.7 4.5 14.7 17.6 12.2C694.7 727.4 768 631.4 768 518.3c0-141.4-114.7-256.1-256.1-256.1"
                  fill="rgb(245, 23, 103)"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <ul>
          <li>abhinishKumar506@gmail.com</li>
          <li>8872273309</li>
          <li>@copyright 2024</li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
