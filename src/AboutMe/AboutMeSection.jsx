import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutMe.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profilePic from './profilePic.png'

const AboutMeSection = () => {
    return (
        <div className='about-me-container'>
            <div className='about-me-section'>
                <div className='cloud-slide-in'>
                    <div className='cloud-content fade-in'>
                        <h1 className='about-me-name'>Hello, I'm Gloria!</h1>
                        <p className='about-me-description'>
                            I'm a frontend engineer in San Francisco.
                            I enjoy making interactive web apps using React. 
                            During my 3 years of coding, I've worked on several customer-facing web apps and an internal design-toolkit.
                        </p>
                        <p>
                            Nice to meet you!
                        </p>
                    </div>
                    <div className='cloud cloud-description-body'>
                        <div className='cloud cloud-description-right'/>
                        <div className='cloud cloud-description-left' />
                    </div>
                </div>
                <div className='social-links-section cloud-slide-in-delay'>
                    <div className='social-icon-group fade-in'>
                        <a href='/' target='blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='social-icon' icon={faGithub} />
                        </a>
                        <a href='/' target='blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
                        </a>
                        
                    </div>
                    <div className='cloud cloud-icon-body'>
                        <div className='cloud cloud-icon-right'/>
                        <div className='cloud cloud-icon-left' />
                    </div>
                </div>
            </div>
            <div className='profile-slide-in profile-pic'>
                <img src={profilePic} alt='profile-pic'/>
            </div>
        </div>
        
    );
};

export default AboutMeSection;