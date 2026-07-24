import Nintendo from "../../assets/images/Projects/ProjectBackground/Nintendo.svg"
import Peridot from "../../assets/images/Projects/ProjectBackground/Peridot.svg"
import ePlay from "../../assets/images/Projects/ProjectBackground/ePlay.svg"
import eFood from "../../assets/images/Projects/ProjectBackground/eFood.svg"
import DisneyPlus from "../../assets/images/Projects/ProjectBackground/DisneyPlus.svg"
import BdS from "../../assets/images/Projects/ProjectBackground/BdS.svg"
import NintendoThumb from "../../assets/images/Projects/ProjectThumb/NintendoThumb.png"
import PeridotThumb from "../../assets/images/Projects/ProjectThumb/PeridotThumb.png"
import EplayThumb from "../../assets/images/Projects/ProjectThumb/EplayThumb.png"
import EfoodThumb from "../../assets/images/Projects/ProjectThumb/EfoodThumb.png"
import DisneyPlusThumb from "../../assets/images/Projects/ProjectThumb/DisneyPlusThumb.png"
import ButecoDaSkinaThumb from "../../assets/images/Projects/ProjectThumb/ButecoDaSkinaThumb.png"
import NintendoMockup from "../../assets/images/Projects/ProjectMockup/MockupNintendo.png"
import MockupPeridot from "../../assets/images/Projects/ProjectMockup/MockupPeridot.png"
import MockupDisney from "../../assets/images/Projects/ProjectMockup/MockupDisney.png"
import MockupEplay from "../../assets/images/Projects/ProjectMockup/MockupEplay.png"
import MockupEfood from "../../assets/images/Projects/ProjectMockup/MockupEfood.png"
import MockupBdS from "../../assets/images/Projects/ProjectMockup/MockupBdS.png"





export const projects = [
    {
        id: "nintendo2Store", 
        title: "Nintendo Switch 2 Store",
        description: "Case técnico de e-commerce desenvolvido com React e TypeScript para simular uma loja do Nintendo Sw...",
        fullDescription: "E-commerce desenvolvido como parte de um case técnico para Desenvolvedor Front-End. A aplicação simula uma loja do Nintendo Switch 2 com catálogo de jogos, páginas de detalhes com galeria de imagens e fundo dinâmico, carrinho de compras, checkout com validações e máscaras de formulário, além de consumo de uma API REST. O projeto foi publicado em produção com front-end na Vercel e back-end no Render, seguindo boas práticas de componentização, responsividade e organização de código.",
        techs: ["React","Vite", "TypeScript", "Styled Components", "React Router DOM", "React IMask", "Vercel (Deploy)", "Render (API/Back-end)"],
        githubUrl: "https://github.com/GeorgeBrookss/Nintendo-Switch-2-Store-Case-Tecnico",
        deployUrl: "https://nintendo-switch-2-store.vercel.app/",
        image: NintendoThumb,
        background: Nintendo,
        mockup: NintendoMockup,
    },
    {
        id: "peridot",
        title: "Peridot",
        description: "Rede social full stack inspirada no Twitter, desenvolvida com React e Django REST Framework. A aplicação...",
        fullDescription: "Rede social full stack inspirada no Twitter, desenvolvida com React e Django REST Framework. A aplicação conta com autenticação de usuários, perfis personalizáveis, feed baseado em usuários seguidos, criação de postagens com imagens e GIFs, sistema de curtidas, comentários, pesquisa de usuários e publicações, além de interface totalmente responsiva. O projeto está publicado em produção com front-end na Vercel e API hospedada no PythonAnywhere.",
        techs: ["React", "TypeScript", "Styled Components", "Django REST Framework", "SQLite", "npm", "Vercel (Deploy)", "PythonAnywhere (API/Back-end)"],
        githubUrl: "https://github.com/GeorgeBrookss/Peridot",
        deployUrl: "http://peridot-social.vercel.app/",
        image: PeridotThumb,
        background: Peridot,
        mockup: MockupPeridot,

    },
    {
        id: "ePlay",
        title: "ePlay",
        description: "E-commerce de jogos digitais desenvolvido com React para simular uma experiência completa de compra online...",
        fullDescription: "E-commerce de jogos digitais desenvolvido com React para simular uma experiência completa de compra online. A aplicação permite navegar por categorias, visualizar detalhes dos jogos, gerenciar o carrinho de compras e finalizar pedidos, consumindo uma API para exibição dinâmica dos produtos. O projeto utiliza gerenciamento de estado global para garantir uma navegação fluida e organizada.",
        techs: ["React", "JavaScript (ES6+)", "Redux Toolkit", "RTK Query", "React Router DOM", "Styled Components", "Fetch API", "HTML5", "CSS3"],
        githubUrl: "https://github.com/GeorgeBrookss/Eplay-loja-de-games",
        deployUrl: "https://eplay-jet.vercel.app/",
        image: EplayThumb,
        background: ePlay,
        mockup: MockupEplay,
    },
    {
        id: "eFood",
        title: "eFood",
        description: "Plataforma de delivery desenvolvida com React que simula o fluxo completo de pedidos online. A aplicação...",
        fullDescription: "Plataforma de delivery desenvolvida com React que simula o fluxo completo de pedidos online. A aplicação permite visualizar restaurantes, explorar cardápios, adicionar itens ao carrinho e finalizar compras por meio da integração com uma API REST, utilizando uma arquitetura baseada em componentes reutilizáveis e interface responsiva.",
        techs: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Styled Components", "React Router DOM", "API REST", "HTML5", "CSS3"],
        githubUrl: "https://github.com/GeorgeBrookss/eFood",
        deployUrl: "https://e-food-flax.vercel.app/",
        image: EfoodThumb,
        background: eFood,
        mockup: MockupEfood,
    },
    {
        id: "DisneyPlus",
        title: "Disney Plus",
        description: "Clone da landing page do Disney+ desenvolvido para aprofundar conhecimentos em desenvolvimento front-end...",
        fullDescription: "Clone da landing page do Disney+ desenvolvido para aprofundar conhecimentos em desenvolvimento front-end. O projeto conta com layout totalmente responsivo, seções interativas, FAQ com JavaScript e foco em otimização de performance por meio da automação de tarefas e minificação de arquivos, proporcionando uma aplicação leve e otimizada.",
        techs: ["HTML5", "CSS3", "SCSS", "JavaScript", "Gulp", "Imagemin", "UglifyJS", "Git", "Vercel (Deploy)"],
        githubUrl: "https://github.com/GeorgeBrookss/Clone-DisneyPlus",
        deployUrl: "https://clone-disney-plus-olive-two.vercel.app/",
        image: DisneyPlusThumb,
        background: DisneyPlus,
        mockup: MockupDisney,
    },
    {
        id: "ButecoDaSkina",
        title: "Buteco da Skina",
        description: "Atuei na manutenção e evolução de um site institucional desenvolvido com React e Vite para um restaurante...",
        fullDescription: "Atuei na manutenção e evolução de um site institucional desenvolvido com React e Vite para um restaurante, responsável pelo gerenciamento de reservas por meio de formulários integrados ao EmailJS. Realizei correções e melhorias no front-end, prestei suporte técnico aos usuários, treinei a equipe no uso do CMS Headless Contentful para gerenciamento de conteúdo e participei da depuração e manutenção contínua da aplicação em produção, garantindo sua estabilidade e boa experiência de uso.",
        techs: ["react", "Vite", "Contentful (Headless CMS)", "EmailJS", "HTML5", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/GeorgeBrookss/Buteco-De-Skina",
        deployUrl: "https://buteco-da-skina.vercel.app/",
        image: ButecoDaSkinaThumb,
        background: BdS,
        mockup: MockupBdS,
    },
];