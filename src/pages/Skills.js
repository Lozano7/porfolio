import React from 'react';
import SkillsItem from '../components/SkillsItem';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <h2>Skills</h2>
      <div className='skills-container'>
        <div className='skills-items'>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/html-5--v1.png'
              alt='HTML5'
            />
            <h3>HTML5</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/css3.png'
              alt='CSS3'
            />
            <h3>CSS3</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/bootstrap.png'
              alt='Bootstrap'
            />
            <h3>Bootstrap</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg'
              alt='Tailwind CSS'
            />
            <h3>Tailwind CSS</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/javascript--v1.png'
              alt='JavaScript'
            />
            <h3>JavaScript</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/typescript.png'
              alt='TypeScript'
            />
            <h3>TypeScript</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/git.png'
              alt='Git'
            />
            <h3>Git</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/react-native.png'
              alt='React'
            />
            <h3>React</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/redux.png'
              alt='Redux'
            />
            <h3>Redux</h3>
          </SkillsItem>
        </div>
      </div>
    </section>
  );
};

export default Skills;
