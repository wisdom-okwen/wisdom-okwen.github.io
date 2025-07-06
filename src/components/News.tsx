import React from 'react';

const News: React.FC = () => {
  return (
    <section id="news">
      <h2>📢 News</h2>
      <hr style={{ width: '60%', border: '0.1px solid #cccdceff', margin: '0.5rem 0 1rem 0' }} />
      {/* News items below */}
      <ul>
        <li>08/24: Returning to Microsoft (Contextual AI) this summer 🧑‍💻</li>
        <li>08/24: Starting Research at <a href="https://l3-unc.github.io/" target='_blank'>Learning from Language Lab 🔬</a></li>
        <li>04/24: Interning at Microsoft (PowerApps Studio) this summer 🧑‍💻</li>
        <li>08/23: Started working as RCC with UNC ResNet 🤖</li>
        <li>07/23: TAing for Comp110 in the Fall 👨‍🏫</li>
        <li>08/23: Completed internship @ ServiceNow 🚀</li>
        <li>12/22: Completed internship @ Renaissance Computing Institute 🕵️‍♂️</li>
        <li>08/22: Started college at UNC Chapel Hill 🎓</li>
      </ul>
    </section>
  );
};

export default News;
