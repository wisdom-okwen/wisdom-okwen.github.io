
import News from './News';
import Experience from './Experience';
import Publications from './Publications';
import Projects from './Projects';
import Education from './Education';
import { LinkedInIcon, GitHubIcon, EmailIcon, FacebookIcon, YouTubeIcon, InstagramIcon } from './SocialIcons';
import Skills from './Skills';
import styles from './Homepage.module.css';

const Homepage: React.FC = () => {
  return (
    <section id="home" className={styles.homepageContainer}>
      <div className={styles.leftColumn}>
        <img
          src="/profile.png"
          alt="Profile"
          className={styles.profileImage}
        />
        <div className={styles.name}>Wisdom Okwen</div>
        <div className={styles.bio}>
          Welcome to my portfolio website! Here you can find information about my background, experience, and projects.
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/wisdom-okwen-05b09a184/" aria-label="LinkedIn"><LinkedInIcon sx={{ color: '#0077b5' }} fontSize="large" /></a>
          <a href="https://github.com/wisdom-okwen" aria-label="GitHub"><GitHubIcon sx={{ color: '#333' }} fontSize="large" /></a>
          <a href="mailto:wokwen@unc.edu" aria-label="Email"><EmailIcon sx={{ color: '#c71610' }} fontSize="large" /></a>
          <a href="https://www.facebook.com/profile.php?id=100087329172175" aria-label="Facebook"><FacebookIcon sx={{ color: '#1877f3' }} fontSize="large" /></a>
          <a href="https://www.youtube.com/@WizzysTube" aria-label="YouTube"><YouTubeIcon sx={{ color: '#ff0000' }} fontSize="large" /></a>
          <a href="https://www.instagram.com/owska_pix/" aria-label="Instagram"><InstagramIcon sx={{ color: '#e4405f' }} fontSize="large" /></a>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <News />
        <Education />
        <Skills />
        <Experience />
        <Publications />
        <Projects />
      </div>
    </section>
  );
};

export default Homepage;
