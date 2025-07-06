import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education">
      <h2>👨‍🎓 Education</h2>
      <hr style={{ width: '60%', border: '0.1px solid #cccdceff', margin: '0.5rem 0 1rem 0' }} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <strong>May ‘26:</strong> <br />
          University of North Carolina at Chapel Hill
          {/* <ul style={{ listStyle: 'none', paddingLeft: '5em', margin: 0 }}> */}
            <li>B.S. Computer Science</li>
          {/* </ul> */}
        </li>
      </ul>
    </section>
  );
};

export default Education;
