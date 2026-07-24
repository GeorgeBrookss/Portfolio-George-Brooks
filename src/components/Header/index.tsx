import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import Button from "../Button";
import { HeaderStyled, MenuToggle, BorderStyled } from "./styles";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <HeaderStyled $isOpen={isOpen}>
                <Link to="/" onClick={closeMenu}>
                    <h1>George B.</h1>
                </Link>

            <MenuToggle onClick={toggleMenu} aria-label="Abrir Menu">
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </MenuToggle>

            <nav>
                <ul>
                    <li>
                        <HashLink smooth to="/#About" onClick={closeMenu}>
                            Sobre
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#Projects" onClick={closeMenu}>
                            Projetos
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#Stacks" onClick={closeMenu}>
                            Tecnologias
                        </HashLink>
                    </li>
                </ul>

                    <HashLink smooth to="/#Contact" onClick={closeMenu}>
                        <Button>Contato</Button>
                    </HashLink>
            </nav>
                </HeaderStyled>

                <BorderStyled />
        </>
    );
}

export default Header;
