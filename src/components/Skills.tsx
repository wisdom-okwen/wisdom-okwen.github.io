
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
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8 }}>
          <tbody>
            <tr>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Pandas <SiPandas title="Pandas" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Scikit-learn <SiScikitlearn title="ScikitLearn" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>PyTorch <SiPytorch title="PyTorch" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>MLflow <SiMlflow title="MLFlow" /></td>
            </tr>
            <tr>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>LangChain <SiLangchain title="LangChain" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>GitHub <SiGithub title="GitHub" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Git <FaGitAlt title="Git" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Linux <SiLinux title="Linux" /></td>
            </tr>
            <tr>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Bash <SiGnubash title="Bash" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Docker <SiDocker title="Docker" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>React <SiReact title="React" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Node.js <SiNodedotjs title="Node.js" /></td>
            </tr>
            <tr>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Express <SiExpress title="Express" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>MongoDB <SiMongodb title="MongoDB" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>FastAPI <SiFastapi title="FastAPI" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Flask <SiFlask title="Flask" /></td>
            </tr>
            <tr>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>Angular <SiAngular title="Angular" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>PostgreSQL <SiPostgresql title="PostgreSQL" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>SQLAlchemy <SiSqlalchemy title="SQLAlchemy" /></td>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>GraphQL <SiGraphql title="GraphQL" /></td>
            </tr>
            <tr>
              <td style={{ padding: '4px 8px', verticalAlign: 'middle' }}>ASP.NET</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </li>
      <li style={{ marginTop: 8 }}>
        <strong>Other:</strong> Prompt Engineering, Search Engine Optimization
      </li>
    </ul>
  </section>
);

export default Skills;
