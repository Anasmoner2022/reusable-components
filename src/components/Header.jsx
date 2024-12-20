import { useState } from "react";
import Navbar from "./Navbar";
import { Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ logoSrc, logoAlt, navItems, buttonLabel, onButtonClick }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-slate-700 to-slate-700/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr-3fr-1fr]">
                {/* Logo */}
                <h1>
                    <a href="/" className="logo text-zinc-50">
                        <img src={logoSrc} width={80} height={80} alt={logoAlt} />
                    </a>
                </h1>

                {/* Navbar */}
                <div className="relative md:justify-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        {navOpen ? <X /> : <Menu />}
                    </button>
                    <Navbar navOpen={navOpen} navItems={navItems} />
                </div>

                {/* Call-to-Action Button */}
                <Button variant="secondary" onClick={onButtonClick} className="max-md:hidden md:justify-self-end">
                    <a href="#">{buttonLabel}</a>
                </Button>
            </div>
        </header>
    );
};

Header.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    logoAlt: PropTypes.string,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            className: PropTypes.string,
        })
    ).isRequired,
    buttonLabel: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
    logoAlt: "Logo",
};

export default Header;
