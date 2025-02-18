import { useState } from "react";
import "./ContactUs.css";
import { MailIcon, PhoneIcon } from "../assets/icons";



const ContactUs: React.FC = (): JSX.Element => {
    const [sendingEmail, setSendingEmail] = useState<boolean>(false);
    if (sendingEmail) setSendingEmail(false);
    return (
        <div className="contact-us-section">
            {/* Header */}
            <h2>
            Ready to give your child the <span className="regal-orange-text">REGAL</span> Advantage?
            </h2>
            {/* Sub Header */}
            <h3>
            Regal Cairo International School Admissions <span className="regal-orange-text">Application 2025</span>
            </h3>
            {/* Inner Container */}
            <div className="contact-us-section__inner-container">
                {/* Contact Detail Div */}
                <div className="contact-us-details">
                    <h4>
                        Contact Detail
                    </h4>
                    <p>
                        Location
                    </p>
                    <p>
                        Plot No. 12. Shargia Expansion. Mall of Egypt Street. 6th of October, Giza, Egypt
                    </p>
                    <div className="contact-container">
                        <img
                            src={MailIcon}
                            alt="Contact Us Mail"
                            loading="lazy"
                            decoding="async"
                        />
                        <a href="mailto:admissions@iesregalcairo.com">admissions@iesregalcairo.com</a>
                    </div>
                    <div className="contact-container">
                        <img
                            src={PhoneIcon}
                            alt="Contact Us Phone"
                            loading="lazy"
                            decoding="async"
                        />
                        <a href="tel:01281794508">01281794508</a>
                        <a href="tel:01281794308">01281794308</a>
                        <a href="tel:01281794502">01281794502</a>
                    </div>
                </div>
                {/* Forms */}
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input className="form-control" type="text" id="name" name="name"
                            placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="surname">Surname</label>
                            <input className="form-control" type="text" id="surname" name="surname"
                            placeholder="Surname"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">E-mail</label>
                            <input className="form-control" type="email" id="email" name="email"
                            placeholder="E-mail"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="phone">Phone Number</label>
                            <input className="form-control" type="tel" id="phone" name="phone"
                            placeholder="Phone Number"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Info</label>
                        <textarea className="form-control-text" id="message" name="message" rows={3} placeholder="Course for which information is requested"></textarea>
                    </div>
                    <button role="submit" disabled={sendingEmail}>
                        {sendingEmail? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    )
}


export default ContactUs;