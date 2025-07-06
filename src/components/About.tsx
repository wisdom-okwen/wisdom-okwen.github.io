import React from 'react';

const About: React.FC = () => (
  <section id="about">
    <h2>👤 About</h2>
    <hr style={{ width: '60%', border: '0.1px solid #cccdceff', margin: '0.5rem 0 1rem 0' }} />
    <div style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.08rem', lineHeight: 1.7 }}>
      <p>
        I am a rising senior at the University of North Carolina at Chapel Hill.
        My interests lie in web development, as well as machine learning and artificial intelligence. 
        I am particularly fascinated by the advancement of models that underpin conversational AI systems, 
        including chatbots and intelligent digital interfaces, and am committed to enhancing their contextual understanding and resourcefulness.
      </p>
      <p>
        I recently completed an internship at Microsoft, where I architected and implemented a Model Context Protocol Server
         to empower AI agents by provisioning them with dynamic, contextually relevant resources, thereby augmenting their problem-solving capabilities.
      </p>
      <p>
        I love to play ping pong, watch YouTube, workout, or read in my free times.
      </p>
    </div>
  </section>
);

export default About;
