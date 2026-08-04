import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {HomeStyled, HeroTitle, AboutStyled, ProjectsStyled, StacksStyled, ContactStyled, ProjectLink} from "./styles"
import FooterIcons from "../../components/FooterIcons"
import Card from "../../components/Card"
import { frontend, backend, tools } from "./stacks";
import { projects } from "./projects";
import ButtonGit from "../../assets/images/Home/formButtons/buttonGit.png"
import ButtonLinkedin from "../../assets/images/Home/formButtons/buttonLinkedin.png"
import ButtonMail from "../../assets/images/Home/formButtons/buttonMail.png"
import Label from "../../components/Label"
import Textarea from "../../components/TextArea"
import Button from "../../components/Button"
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../../components/Toast";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [toastVisible, setToastVisible] = useState(false);

    const [toastType, setToastType] = useState<"success" | "error">("success");

    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const showValidationError = (msg: string) => {
        setToastType("error");
        setToastMessage(msg);
        setToastVisible(true);
    };

    if (!name.trim()) {
        showValidationError("Digite seu nome.");
        return;
    }

    if (!email.trim()) {
        showValidationError("Digite seu e-mail.");
        return;
    }

    if (!message.trim()) {
        showValidationError("Digite uma mensagem.");
        return;
    }

    try {
        await emailjs.send(
            "service_40ikr9z",
            "template_bd7jmn7",
            {
                from_name: name,
                from_email: email,
                message,
            },
            "FnCezHejbUdAb0YpF"
        );

        setToastType("success");
        setToastMessage("Mensagem enviada com sucesso!");
        setToastVisible(true);

        setName("");
        setEmail("");
        setMessage("");
    } catch (error) {
        setToastType("error");
        setToastMessage("Não foi possível enviar a mensagem.");
        setToastVisible(true);
        console.error(error);
    }
};


    return (
        <>
        <Header />
        <HomeStyled>
            <HeroTitle>
            <h2>George Brooks</h2>
            <h4>Desenvolvedor Front-end</h4>
            <FooterIcons showEmail={false} gap="16px"/>
            </HeroTitle>
            <AboutStyled id="About">
                <h3>Sobre Mim</h3>
                <p>
                    Sou um Desenvolvedor Front-end especializado no ecossistema React e TypeScript, apaixonado por transformar protótipos em aplicações web escaláveis, responsivas e de alta performance.
                    <br />
                    Atuo em todo o ciclo de desenvolvimento das interfaces, desde a concepção visual no Figma até a entrega final em produção. Ao longo da minha trajetória, desenvolvi desde plataformas SaaS integradas com inteligência artificial até e-commerces temáticos e sistemas de reservas otimizados para conversão e SEO.
                    <br />
                    Gosto de alinhar código limpo e arquitetura de componentes com as reais necessidades de Produto e Marketing, garantindo uma navegação fluida e acessível e também uma experiência de usuário que gere valor e impacto real.
                </p>
            </AboutStyled>
            <ProjectsStyled id="Projects">
                <h3 className="projects">Projetos</h3>
                <ul>
                {projects.map((project, index) => (
                <li key={project.id} data-aos="zoom-in" data-aos-delay={index * 100}>
                    <ProjectLink to={`/projeto/${project.id}`}>
                    <Card
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                    </ProjectLink>
                </li>
                ))}
            </ul>
            </ProjectsStyled>
                <StacksStyled id="Stacks">
                    <h3 className="stacks">Tecnologias</h3>
                    <h3>Front-end</h3>
                    <ul>
                    {frontend.map((tech, index) => (
                        <li key={tech.name} data-aos="fade-up" data-aos-delay={index * 100}>
                        <img src={tech.image} alt={tech.name} />
                        </li>
                    ))}
                    </ul>

                    <h3>Back-end</h3>

                    <ul>
                    {backend.map((tech, index) => (
                        <li key={tech.name} data-aos="fade-up" data-aos-delay={index * 100}>
                        <img src={tech.image} alt={tech.name} />
                        </li>
                    ))}
                    </ul>

                    <h3 className="tool">Ferramentas</h3>

                    <ul>
                    {tools.map((tech, index) => (
                        <li key={tech.name} data-aos="fade-up" data-aos-delay={index * 100}>
                        <img src={tech.image} alt={tech.name} />
                        </li>
                    ))}
                    </ul>
                </StacksStyled>
                <ContactStyled id="Contact">
                <div className="contactInfo">
                    <div className="textAndLinks">
                        <h3>Contato</h3>
                        <p>Aberto a oportunidades de trabalho, freelas, colaborações ou simplesmente uma troca de ideia sobre tecnologia. Me manda uma mensagem!</p>
                        <ul>
                            <li>
                                <a href="mailto:georgebrooks.camps@gmail.com">
                                <div>
                                    <img src={ButtonMail} alt="Botão para Email" />
                                </div>
                                <div>
                                        <span>E-mail</span>
                                    <p>
                                        georgebrooks.camps@gmail.com
                                    </p>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a target="blank" href="https://www.linkedin.com/in/george-m-brooks/">
                                <div>
                                    <img src={ButtonLinkedin} alt="Botão para Linkedin" />
                                </div>
                                <div>
                                        <span>Linkedin</span>
                                    <p>
                                        https://www.linkedin.com/in/george-m-brooks/
                                    </p>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a target="blank" href="https://github.com/GeorgeBrookss">
                                <div>
                                    <img src={ButtonGit} alt="Botão para Github" />
                                </div>
                                <div>
                                        <span>GitHub</span>
                                    <p>
                                        https://github.com/GeorgeBrookss
                                    </p>
                                </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form onSubmit={sendEmail}>
                        <Label
                        id="name"
                        label="Nome"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                        <Label
                            id="email"
                            type="email"
                            label="E-mail"
                            placeholder="exemplo@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    
                        <Textarea
                            id="message"
                            label="Mensagem"
                            placeholder="Olá George, tenho um projeto..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <Button children="Enviar Mensagem" type="submit" />
                    </form>
                </div>
                </ContactStyled>
        </HomeStyled>
        <Footer />
        <Toast
            visible={toastVisible}
            type={toastType}
            message={toastMessage}
            onClose={() => setToastVisible(false)}
        />
        </>
    )
}

export default Home