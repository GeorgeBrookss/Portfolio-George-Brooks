import { useParams } from "react-router-dom";
import { projects } from "../Home/projects";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tags from "../../components/Tag";
import IconGit from "../../assets/icons/iconGit.svg";
import IconVercel from "../../assets/icons/iconVercel.svg";



import {
    Container,
    BackLink,
    ProjectImage,
    ProjectDescription,
    LinksContainer,
    ProjectContent,
    TechsContainer,
    DetailsContent,
} from "./styles";
import Button from "../../components/Button";

function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    if (project) {
        
    return (
        <>
        <Header />
        <Container $background={project.background}>
            <ProjectContent>
            <BackLink to="/"><Button children="Voltar para o inicio" /></BackLink>
            <ProjectImage src={project.mockup} alt={project.title} />
            
            <DetailsContent>
                <h1>{project.title}</h1>

            {project.techs && (
                <TechsContainer>
                    {Array.isArray(project.techs) ? (
                    project.techs.map((tech) => (
                        <Tags key={tech} tech={tech} />
                    ))
                    ) : (
                    <Tags tech={project.techs} />
                    )}
                </TechsContainer>
            )}
            <ProjectDescription>
            {project.fullDescription || project.description}
            </ProjectDescription>

            <LinksContainer>
            {project.deployUrl && (
                <a href={project.deployUrl} target="_blank" rel="noreferrer">
                    <Button><img src={IconVercel} alt="" />Ver deploy</Button>
                </a>
                
            )}
            {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Button><img src={IconGit} alt="" />Código no GitHub</Button>
                </a>
            )}
            </LinksContainer>
            </DetailsContent>
            </ProjectContent>
            
        </Container>
        <Footer />
        </>
    );
}
}

export default ProjectDetail;