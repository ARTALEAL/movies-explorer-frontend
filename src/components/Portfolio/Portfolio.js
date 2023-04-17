import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__projects">
        <li>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://github.com/ARTALEAL/how-to-learn"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <span>↗</span>
        </li>
        <li>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://github.com/ARTALEAL/russian-travel"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <span>↗</span>
        </li>
        <li>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://github.com/ARTALEAL/react-mesto-api-full-gha"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <span>↗</span>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
