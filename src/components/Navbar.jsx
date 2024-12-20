import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen, navItems }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
            activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
            activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
            activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
        }
    };

    useEffect(() => {
        initActiveBox();
        window.addEventListener("resize", initActiveBox);
        return () => window.removeEventListener("resize", initActiveBox);
    }, []);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove("active");
        event.target.classList.add("active");
        lastActiveLink.current = event.target;

        if (activeBox.current) {
            activeBox.current.style.top = `${event.target.offsetTop}px`;
            activeBox.current.style.left = `${event.target.offsetLeft}px`;
            activeBox.current.style.width = `${event.target.offsetWidth}px`;
            activeBox.current.style.height = `${event.target.offsetHeight}px`;
        }
    };

    return (
        <nav className={`navbar ${navOpen ? "active" : ""}`}>
            {navItems.map(({ label, link, className }, index) => (
                <a
                    href={link}
                    key={index}
                    ref={index === 0 ? lastActiveLink : null}
                    className={className || "nav-link"}
                    onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            className: PropTypes.string,
        })
    ).isRequired,
};

export default Navbar;
