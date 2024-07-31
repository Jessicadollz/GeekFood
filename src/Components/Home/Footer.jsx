import style from './Footer.module.css';
import logo from '../../assets/footerLogo.png';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';
import githubIcon from '../../assets/github.png';
import dribbleIcon from '../../assets/dribble.png';

function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.footerContent}>
                    <img src={logo} alt="Logo" className={style.footerLogo} />
                    
                    <p className={style.footerText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> 
                                                Incidunt consequuntur amet culpa cum itaque neque.</p>
                    <br />
                    
                    <div className={style.footerLinks}>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">History</a>
                        <a href="#">Services</a>
                        <a href="#">Projects</a>
                        <a href="#">Blog</a>
                    </div>
                    <br />
                    <div className={style.footerSocial}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" />
                        </a>

                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>

                        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                            <img src={dribbleIcon} alt="Dribble" />
                        </a>
                    </div>
                    <br /> <br />
                </div>
            </footer>
        </>
    );
}

export default Footer;