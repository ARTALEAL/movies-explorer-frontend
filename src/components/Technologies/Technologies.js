import React from 'react';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className="technologies">
      <h2 className="technologies__title">Технологии</h2>
      <h3 className="technologies__total-title">7 Технологий</h3>
      <p className="technologies__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="technologies__list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
        <li>Git</li>
        <li>Express.js</li>
        <li>mongoDB</li>
      </ul>
    </div>
  );
};

export default Technologies;
