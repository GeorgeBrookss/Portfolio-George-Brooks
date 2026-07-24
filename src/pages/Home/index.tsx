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

function Home() {
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
                <p>Desenvolvedor Front-end com experiência em aplicações web responsivas, escaláveis e de alta performance utilizando React, TypeScript, JavaScript, HTML5 e CSS3, frameworks, bibliotecas e ferramentas modernas. Habilidade em traduzir designs do Figma em componentes de UI reutilizáveis, integrar APIs REST, otimizar performance e colaborar em todo o ciclo de vida de desenvolvimento de software para entregar aplicações limpas, de fácil manutenção e focadas no usuário.</p>
            </AboutStyled>
            <ProjectsStyled id="Projects">
                <h3 className="projects">Projetos</h3>
                <ul>
                {projects.map((project) => (
                <li key={project.id}>
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
                    {frontend.map((tech) => (
                        <li key={tech.name}>
                        <img src={tech.image} alt={tech.name} />
                        </li>
                    ))}
                    </ul>

                    <h3>Back-end</h3>

                    <ul>
                    {backend.map((tech) => (
                        <li key={tech.name}>
                        <img src={tech.image} alt={tech.name} />
                        </li>
                    ))}
                    </ul>

                    <h3 className="tool">Ferramentas</h3>

                    <ul>
                    {tools.map((tech) => (
                        <li key={tech.name}>
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
                    <form action="#">
                        <Label id="name"
                        label="Nome"
                        placeholder="Digite seu nome" />
                    
                        <Label id="E-mail"
                            label="E-mail"
                            placeholder="exemplo@email.com" />
                    
                        <Textarea id="mensagem"
                        name="textarea"
                        label="Mensagem"
                        placeholder="Olá George, tenho um projeto..." />

                        <Button children="Enviar Mensagem " />
                    </form>
                </div>
                </ContactStyled>
        </HomeStyled>
        <Footer />
        </>
    )
}

export default Home