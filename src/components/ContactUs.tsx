import { useState } from "react";
import "./ContactUs.css";
import { MailIcon, PhoneIcon } from "../assets/icons";


const GoogleScripts: string = "https://script.google.com/macros/s/AKfycbx6ZJIxxoiWWGcboPnrT-_3oh3NEinX2FSdSgA-sCXtSERoipk22iVNL4NBYvkJBg/exec"

const ContactUs: React.FC = (): JSX.Element => {
    const [sendingEmail, setSendingEmail] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSendingEmail(true);

        try {
            // Send data to Google Apps Script endpoint (replace with your script URL)
            await fetch(GoogleScripts, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            alert("Form submitted successfully!");
        } finally {
            setSendingEmail(false);
            setFormData({ name: "", surname: "", email: "", phone: "", message: "" });
        }
    };

    return (
        <div className="contact-us-section">
            <h2>
                Ready to give your child the <span className="regal-orange-text">REGAL</span> Advantage?
            </h2>
            <h3>
                Regal Cairo International School Admissions <span className="regal-orange-text">Application 2025</span>
            </h3>
            <div className="contact-us-section__inner-container">
                <div className="contact-us-details">
                    <h4>Contact Detail</h4>
                    <p>Location</p>
                    <p>Plot No. 12. Shargia Expansion. Mall of Egypt Street. 6th of October, Giza, Egypt</p>
                    <div className="contact-container">
                        <img src={MailIcon} alt="Contact Us Mail" loading="lazy" decoding="async" />
                        <a href="mailto:admissions@iesregalcairo.com">admissions@iesregalcairo.com</a>
                    </div>
                    <div className="contact-container">
                        <img src={PhoneIcon} alt="Contact Us Phone" loading="lazy" decoding="async" />
                        <a href="tel:01281794508">01281794508</a>
                        <a href="tel:01281794308">01281794308</a>
                        <a href="tel:01281794502">01281794502</a>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Surname</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="surname" 
                                name="surname" 
                                placeholder="Surname" 
                                value={formData.surname} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">E-mail</label>
                            <input 
                                className="form-control" 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="E-mail" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input 
                                className="form-control" 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                placeholder="Phone Number" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Info</label>
                        <textarea 
                            className="form-control-text" 
                            id="message" 
                            name="message" 
                            rows={3} 
                            placeholder="Course for which information is requested"
                            value={formData.message} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <button role="submit" disabled={sendingEmail}>
                        {sendingEmail ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;