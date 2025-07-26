import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>👨‍💻 Projects</h2>
      <hr style={{ width: '60%', border: '0.1px solid #cccdceff', margin: '0.5rem 0 1rem 0' }} />
      <ul>
        <li><a href="https://github.com/wisdom-okwen" target="_blank" rel="noopener noreferrer">Check GitHub</a></li>
        {/* <li>2024: <a href="https://github.com/wisdom-okwen/ml-california-housing" target="_blank" rel="noopener noreferrer">California Housing Price Predictor</a></li>
        <li>2024: <a href="https://csxl.unc.edu/welcome" target="_blank" rel="noopener noreferrer">UNC CSXL Website</a></li>
        <li>2023: <a href="https://github.com/wisdom-okwen/comp-560-project" target="_blank" rel="noopener noreferrer">Bank Customer Churn Prediction</a></li> */}
      </ul>
    </section>
  );
};

export default Projects;
