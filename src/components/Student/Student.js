import React from 'react';
import './Student.css';
import photo from '../../images/Me.jpg';

const Student = () => {
  return (
    <div className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__content">
        <div className="student__info">
          <h3 className="student__name">Артём</h3>
          <span className="student__job">Фронтенд-разработчик, 33 года</span>
          <p className="student__about">
            Я родился и живу в Санкт-Петербурге, закончил факультет экономики
            СпбГУАП по специальности "прикладная информатика в экономике". У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            сноубордом. Недавно начал кодить. С 2012 года из ИТ-сферы перешёл в
            автобизнес, но после того, как прошёл курс по веб-разработке, решил
            вернуться в ИТ-сферу.
          </p>
          <a
            className="student__link"
            href="https://github.com/ARTALEAL"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="student__photo" src={photo} alt="Моё фото" />
      </div>
    </div>
  );
};

export default Student;
