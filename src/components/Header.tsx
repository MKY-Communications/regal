import { useState } from "react";
import { RegalNavBar } from "./ui/Navbar/Navbar";
import "./Header.css";


const Header: React.FC = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <header>
            <RegalNavBar open={open} setOpen={setOpen}/>
        </header>
    )
}

export default Header;