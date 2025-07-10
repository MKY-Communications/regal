import "./Footer.css";
import FooterBGImage from "../../../assets/images/footer/footer-bg.png";
import RegalFooterIcon from "../../../assets/images/footer/regal-footer-logo.png";
import { MailIcon, PhoneIcon, PhoneTwoIcon } from "../../../assets/icons";
import { useSmoothScroll } from "../../../hooks/useSmoothScroll";



const Footer: React.FC = (): JSX.Element => {
    const {scrollToSection} = useSmoothScroll();
    return (
        <footer>
            <div className="footer-details">
                {/* Logo and Contact Details section */}
                <div className="footer-details__logo">
                    <img
                        src={RegalFooterIcon}
                        alt="Regal Logo"
                        className="footer-details__logo-image"
                        decoding="async"
                        loading="lazy"
                    />
                    <div className="footer-details__contacts">
                        <div>
                            <img
                                src={MailIcon}
                                alt="Mail Icon"
                                className="footer-details__contacts-icon"
                                decoding="async"
                                loading="lazy"
                            />
                            <a href="mailto:Info@iesregalcairo.com">Info@iesregalcairo.com</a>
                        </div>
                        <div>
                            <img
                                src={MailIcon}
                                alt="Mail Icon"
                                className="footer-details__contacts-icon"
                                decoding="async"
                                loading="lazy"
                            />
                            <a href="mailto:admissions@iesregalcairo.com">admissions@iesregalcairo.com</a>
                        </div>
                        <div>
                            <img
                                src={MailIcon}
                                alt="Mail Icon"
                                className="footer-details__contacts-icon"
                                decoding="async"
                                loading="lazy"
                            />
                            <a href="mailto:careers@iesregalcairo.com">careers@iesregalcairo.com</a>
                        </div>
                        <div>
                            <img
                                src={PhoneTwoIcon}
                                alt="Phone Icon"
                                className="footer-details__contacts-icon"
                                decoding="async"
                                loading="lazy"
                            />
                            <a href="tel:01281794502">01281794502</a>
                        </div>
                        <div>
                            <img
                                src={PhoneIcon}
                                alt="Phone Icon"
                                className="footer-details__contacts-icon"
                                decoding="async"
                                loading="lazy"
                            />
                            <a href="https://wa.me/01281794502" target="_blank">01281794502</a>
                        </div>
                    </div>
                </div>
                {/* resources & address section */}
                <div className="footer-details__resources">
                    <div className="footer-column">
                        <h2>Resources</h2>
                        <p onClick={() => scrollToSection("about")}>About Us</p>
                        <p onClick={() => scrollToSection("academics")}>Academics</p>
                        <p onClick={() => scrollToSection("foundations")}>Foundations</p>
                        <p onClick={() => scrollToSection("visionaries")}>Visionaries</p>
                        <p onClick={() => scrollToSection("global")}>Global</p>
                        <p onClick={() => scrollToSection("admissions")}>Admissions</p>
                    </div>
                    <div className="footer-column footer-gap-23">
                        <h2>
                            Address
                        </h2>
                        <p>
                            Plot No. 12. Shargia Expansion. Mall of Egypt Street. 6th of October, Giza, Egypt
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={FooterBGImage}
                alt="Footer Background Image"
                className="footer-bg-image"
                decoding="async"
                loading="lazy"
            />
            <div className="footer-policy">
                <p>© 2024 ES Regal Cairo International School. All rights reserved</p>
                <p>Privacy Policy</p>
            </div>
        </footer>
    )
}

export default Footer;