
import React, { useState } from 'react';
import { 
  SiPython, SiTypescript, SiJavascript, SiPandas, SiScikitlearn, SiPytorch, SiMlflow, SiDocker, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiFastapi, SiFlask, SiAngular, SiPostgresql, SiSqlalchemy, SiGraphql, SiGithub, SiLinux, SiLangchain, SiGnubash
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';


const webDevSkills = [
  { label: 'TypeScript', icon: <SiTypescript title="TypeScript" /> },
  { label: 'JavaScript', icon: <SiJavascript title="JavaScript" /> },
  { label: 'React', icon: <SiReact title="React" /> },
  { label: 'Node.js', icon: <SiNodedotjs title="Node.js" /> },
  { label: 'Express', icon: <SiExpress title="Express" /> },
  { label: 'MongoDB', icon: <SiMongodb title="MongoDB" /> },
  { label: 'FastAPI', icon: <SiFastapi title="FastAPI" /> },
  { label: 'Flask', icon: <SiFlask title="Flask" /> },
  { label: 'Angular', icon: <SiAngular title="Angular" /> },
  { label: 'PostgreSQL', icon: <SiPostgresql title="PostgreSQL" /> },
  { label: 'SQLAlchemy', icon: <SiSqlalchemy title="SQLAlchemy" /> },
  { label: 'GraphQL', icon: <SiGraphql title="GraphQL" /> },
  { label: 'Docker', icon: <SiDocker title="Docker" /> },
  { label: 'GitHub', icon: <SiGithub title="GitHub" /> },
  { label: 'Git', icon: <FaGitAlt title="Git" /> },
  { label: 'Linux', icon: <SiLinux title="Linux" /> },
  { label: 'Bash', icon: <SiGnubash title="Bash" /> },
];

const aiSkills = [
  { label: 'Python', icon: <SiPython title="Python" /> },
  { label: 'Pandas', icon: <SiPandas title="Pandas" /> },
  { label: 'Scikit-learn', icon: <SiScikitlearn title="ScikitLearn" /> },
  { label: 'PyTorch', icon: <SiPytorch title="PyTorch" /> },
  { label: 'MLflow', icon: <SiMlflow title="MLFlow" /> },
  { label: 'LangChain', icon: <SiLangchain title="LangChain" /> },
];

const otherSkills = [
  { label: 'C#' },
  { label: 'Java' },
  { label: 'Prompt Engineering' },
  { label: 'Search Engine Optimization' },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'ai' | 'other'>('web');
  const tabList = [
    { key: 'web', label: 'Web Dev' },
    { key: 'ai', label: 'AI' },
    { key: 'other', label: 'Other' },
  ];
  const skillsToShow =
    activeTab === 'web' ? webDevSkills :
    activeTab === 'ai' ? aiSkills :
    otherSkills;
  return (
    <section id="skills">
      <h2>🛠️ Skills & Interests</h2>
      <hr style={{ width: '60%', border: '0.1px solid #cccdceff', margin: '0.5rem 0 1rem 0' }} />
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        {tabList.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as 'web' | 'ai' | 'other')}
            style={{
              position: 'relative',
              padding: '0.5rem 1.5rem',
              borderRadius: '6px 6px 0 0',
              border: 'none',
              background: activeTab === tab.key ? 'var(--link)' : 'var(--section-bg)',
              color: activeTab === tab.key ? 'var(--background)' : 'var(--main-text)',
              fontWeight: 600,
              cursor: 'pointer',
              outline: activeTab === tab.key ? '2px solid var(--link)' : 'none',
              boxShadow: activeTab === tab.key ? '0 2px 8px rgba(100,108,255,0.08)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            {tab.label}
            <span
              style={{
                display: 'block',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: '3px',
                background: activeTab === tab.key ? 'var(--tab-underline)' : 'transparent',
                borderRadius: '2px',
                transition: 'background 0.3s cubic-bezier(.4,0,.2,1)',
              }}
            />
          </button>
        ))}
      </div>
      <ul
        key={activeTab}
        className="fade-in-skills"
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.2rem',
        }}
      >
        {skillsToShow.map((skill) => (
          <li
            key={skill.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '1.1rem',
              background: 'var(--section-bg)',
              color: 'var(--main-text)',
              borderRadius: 8,
              padding: '0.5rem 1rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {('icon' in skill && skill.icon) ? <>{skill.icon}</> : null}
            <span>{skill.label}</span>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default Skills;
