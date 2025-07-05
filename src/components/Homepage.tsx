
import News from './News';
import Experience from './Experience';
import Publications from './Publications';
import Projects from './Projects';
import Education from './Education';
import { LinkedInIcon, GitHubIcon, EmailIcon, FacebookIcon, YouTubeIcon, InstagramIcon } from './SocialIcons';
import styles from './Homepage.module.css';

const Homepage: React.FC = () => {
  return (
    <section id="home" className={styles.homepageContainer}>
      <div className={styles.leftColumn}>
        <img
          src="../assets/profile.jpg"
          alt="Profile"
          className={styles.profileImage}
        />
        <div className={styles.name}>Wisdom Okwen</div>
        <div className={styles.bio}>
          Welcome to my portfolio website! Here you can find information about my background, experience, and projects.
        </div>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="LinkedIn"><LinkedInIcon sx={{ color: '#0077b5' }} /></a>
          <a href="#" aria-label="GitHub"><GitHubIcon sx={{ color: '#333' }} /></a>
          <a href="#" aria-label="Email"><EmailIcon sx={{ color: '#c71610' }} /></a>
          <a href="#" aria-label="Facebook"><FacebookIcon sx={{ color: '#1877f3' }} /></a>
          <a href="#" aria-label="YouTube"><YouTubeIcon sx={{ color: '#ff0000' }} /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon sx={{ color: '#e4405f' }} /></a>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <News />
        <Experience />
        <Publications />
        <Projects />
        <Education />
      </div>
    </section>
  );
};

export default Homepage;
