import React from 'react';

const News: React.FC = () => {
  return (
    <section id="news">
      <h2>📢 News</h2>
      <hr style={{ width: '60%', border: '0.1px solid #cccdceff', margin: '0.5rem 0 1rem 0' }} />
      {/* TODO: Add news items */}
      <ul>
        <li>04/25: Interning at Microsoft (Contextual AI) this summer 🧑‍💻</li>
        <li>03/25: Attending Yale in the fall 📚</li>
        <li>09/24: Nominated Phi Beta Kappa (ΦΒΚ) 🤓</li>
        <li>08/23: Started working as RCC with UNC ResNet 🤖</li>
        <li>07/23: TAing for Comp110 in the Fall </li>
        <li>08/23: Completed internship at ServiceNow 🚀</li>
        <li>09/22: Started college at UNC Chapel Hill 🎓</li>
      </ul>
    </section>
  );
};

export default News;
