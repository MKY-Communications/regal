import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MenuBtn } from "../../../assets/icons";
import NavbarLogo from "../../../assets/images/navbar/navbar-logo.png";


// Reactify Component
type NavbarProps = React.HTMLAttributes<HTMLElement>;


export const Navbar: React.FC<NavbarProps> = ({children, ...props}): JSX.Element => {
    return (
        <nav {...props}>
            {children}
        </nav>
    )
}


// Regal Navigation Bar
interface RegalNavBarProps {
    setOpen: (state: boolean) => void;
    open: boolean;
}

export const RegalNavBar: React.FC<RegalNavBarProps> = ({setOpen, open}): JSX.Element => {
    const navigate = useNavigate();
    return (
        <Navbar>
            <div className="navbar-items">
                {/* Website Logo */}
                <img
                        src={NavbarLogo}
                        alt="Regal Website Logo"
                        className="navbar-items__logo cursor-pointer"
                        onClick={() => navigate("/")}
                        decoding="async"
                />
                <div className="navbar-items__route-group">
                        <p>
                            About Us
                        </p>
                        <p>
                            Academics
                        </p>
                        <p>
                            Foundations
                        </p>
                        <p>
                            Visionaries
                        </p>
                        <p>
                            Global
                        </p>
                        {/* Contact Us Btn Or Drawer Menu*/}
                        <div className="contact-us-btn">
                            Admissions
                        </div>
                </div>
                
                <img
                    src={MenuBtn}
                    className="drawer-menu-btn"
                    alt="Regal Drawer Button"
                    onClick={() => setOpen(!open)}
                    decoding="async"
                />
            </div>
        </Navbar>
    )
}