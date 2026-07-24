import IconGit from "../../assets/icons/iconGit.svg";
import IconLinkedin from "../../assets/icons/iconLinkedin.svg";
import IconMail from "../../assets/icons/iconMail.svg";
import {IconsList} from "./styles"

type FooterIconsProps = {
    showGithub?: boolean;
    showLinkedin?: boolean;
    showEmail?: boolean;
    gap?: string;
};

function FooterIcons({
    showGithub = true,
    showLinkedin = true,
    showEmail = true,
    gap,
}: FooterIconsProps) {
    return (
        <IconsList gap={gap}>
            {showGithub && (
                <a target="blank" href="https://github.com/GeorgeBrookss">
                <li>
                    <img src={IconGit} alt="Github" />
                </li>
                </a>
            )}

            {showLinkedin && (
                <a target="blank" href="https://www.linkedin.com/in/george-m-brooks/">
                <li>
                    <img src={IconLinkedin} alt="LinkedIn" />
                </li>
                </a>
            )}

            {showEmail && (
                <a href="mailto:georgebrooks.camps@gmail.com">
                <li>
                    <img src={IconMail} alt="Email" />
                </li>
                </a>
            )}
        </IconsList>
    );
}

export default FooterIcons;