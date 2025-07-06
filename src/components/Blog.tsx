import React from 'react';

const Blog: React.FC = () => (
  <section id="blog">
    <h2>📝 Blog</h2>
    <hr style={{ width: '100%', border: '0.1px solid #cccdceff', margin: '0.5rem 0 1rem 0' }} />
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <img src="/wip.png" alt="Work in Progress" style={{ maxWidth: '80vw', width: '500px', height: 'auto', margin: '2rem 0' }} />
      <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', textAlign: 'center' }}>Welcome to my blog! Content coming soon.</p>
    </div>
  </section>
);

export default Blog;
