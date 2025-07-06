
import React from 'react';
import { 
  SiPython, SiTypescript, SiJavascript, SiPandas, SiScikitlearn, SiPytorch, SiMlflow, SiDocker, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiFastapi, SiFlask, SiAngular, SiPostgresql, SiSqlalchemy, SiGraphql, SiDotnet, SiGithub, SiLinux, SiLangchain, SiGnubash
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

const Skills: React.FC = () => (
  <section id="skills">
    <h2>🛠️ Skills & Interests</h2>
    <hr style={{ width: '60%', border: '0.1px solid #cccdceff', margin: '0.5rem 0 1rem 0' }} />
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li>
        <strong>Programming Languages:</strong>
        <span style={{ marginLeft: 8 }}>Python <SiPython title="Python" /></span>
        <span style={{ marginLeft: 8 }}>TypeScript <SiTypescript title="TypeScript" /></span>
        <span style={{ marginLeft: 8 }}>JavaScript <SiJavascript title="JavaScript" /></span>
        <span style={{ marginLeft: 8 }}>C# <SiDotnet title="C#" /></span>
        <span style={{ marginLeft: 8 }}>Java</span>
      </li>
      <li style={{ marginTop: 8 }}>
        <strong>Technologies:</strong>
        <span style={{ marginLeft: 8 }}><SiPandas title="Pandas" /></span>
        <span style={{ marginLeft: 8 }}><SiScikitlearn title="ScikitLearn" /></span>
        <span style={{ marginLeft: 8 }}><SiPytorch title="PyTorch" /></span>
        <span style={{ marginLeft: 8 }}><SiMlflow title="MLFlow" /></span>
        <span style={{ marginLeft: 8 }}><SiLangchain title="LangChain" /></span>
        <span style={{ marginLeft: 8 }}><SiGithub title="GitHub" /></span>
        <span style={{ marginLeft: 8 }}><FaGitAlt title="Git" /></span>
        <span style={{ marginLeft: 8 }}><SiLinux title="Linux" /></span>
        <span style={{ marginLeft: 8 }}><SiGnubash title="Bash" /></span>
        <span style={{ marginLeft: 8 }}><SiDocker title="Docker" /></span>
        <span style={{ marginLeft: 8 }}><SiReact title="React" /></span>
        <span style={{ marginLeft: 8 }}><SiNodedotjs title="Node.js" /></span>
        <span style={{ marginLeft: 8 }}><SiExpress title="Express" /></span>
        <span style={{ marginLeft: 8 }}><SiMongodb title="MongoDB" /></span>
        <span style={{ marginLeft: 8 }}><SiFastapi title="FastAPI" /></span>
        <span style={{ marginLeft: 8 }}><SiFlask title="Flask" /></span>
        <span style={{ marginLeft: 8 }}><SiAngular title="Angular" /></span>
        <span style={{ marginLeft: 8 }}><SiPostgresql title="PostgreSQL" /></span>
        <span style={{ marginLeft: 8 }}><SiSqlalchemy title="SQLAlchemy" /></span>
        <span style={{ marginLeft: 8 }}><SiGraphql title="GraphQL" /></span>
        <span style={{ marginLeft: 8 }}><SiDotnet title="ASP.NET" /></span>
      </li>
      <li style={{ marginTop: 8 }}>
        <strong>Other:</strong> Prompt Engineering, Search Engine Optimization
      </li>
    </ul>
  </section>
);

export default Skills;
