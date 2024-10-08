import { Container, Typography, Grid } from "@mui/material";
import ProjectCard from "../app/components/ProjectCard";

const projectsDev = [
  {
    title: "Digital Stack Group",
    description:
      "Desde 2019, o Digital Stack Group conduz com maestria a intermediação entre os clientes aos principais jogos de poker no mundo, proporcionando segurança, suporte com vasta experiência e uma ampla variedade de jogos online. Implementado em Next.js e Tailwind.",
    image: "/images/dsg.png",
    link: "https://digitalstackgroup.com",
  },
  {
    title: "Klik Vapes",
    description:
      "Klik Vapes vende vapes descartáveis com uma proposta inovadora: dispositivos que podem ser combinados magneticamente para criar novas misturas de sabores. Com 10 opções de sabores e mais de 300 combinações possíveis, ele oferece uma experiência personalizada e interativa para os usuários. Implementado com os frameworks Next.js e Stitches.",
    image: "/images/klik.png",
    link: "https://klik-vapes-dev.vercel.app/",
  },
  {
    title: "Dedicando-se às Relações Humanas",
    description:
      "A Dedicando-se às Relações Humanas é uma empresa de RH que busca entender o propósito dos candidatos, aliando às demandas do mercado de trabalho. Implementado em Angular v14.",
    image: "/images/drhs.png",
    link: "https://drhs.com.br",
  },
  {
    title: "Fantastika",
    description:
      "Este código é uma página web que representa o site da Fantastika, uma pet shop. A página foi desenvolvida utilizando tecnologias web padrão, como HTML e CSS.",
    image: "/images/fantastika.png",
    link: "https://wj855f.csb.app/",
  },
  {
    title: "Dimenor Fichas",
    description:
      "Sistema Integrado de Gestão foi desenvolvido sob medida para a administração de compra e venda de créditos para jogadores de Poker online. Implementado em Angular13 & NestJS.",
    image: "/images/dimenor.png",
    link: "https://dimenorfichas.com",
  },
  {
    title: "Calculadora NS",
    description:
      "Calculadora NS é uma calculadora online que realiza operações matemáticas básicas. Implementado em React.js usando o framework Styled Components.",
    image: "/images/calculadorans.png",
    link: "https://calculadora-vnw-nu.vercel.app",
  },
];

const projectsUX = [
  {
    title: "Theke Empresas",
    description:
      "Responsável por todos processos de design, métricas e metas em um squad onde foi desenvolvido um gerenciador financeiro.",
    image: "/images/thekeempresas.png",
    link: "https://jeennymaciel.wixsite.com/meusite/theke",
  },
  {
    title: "Novo App - Saldo Positivo",
    description:
      "A Teze decidiu investir em um novo aplicativo para auxiliar os usuários com as suas contas mensais.",
    image: "/images/saldopositivo.png",
    link: "https://jeennymaciel.wixsite.com/meusite/c%C3%B3pia-dsg-group",
  },
];

export default function Home() {
  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        align="center"
        mt={5}
        style={{ fontFamily: "Courier New, monospace" }}
      >
        4Labs
      </Typography>

      {/* Seção de Projetos de Desenvolvimento */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        mt={5}
        mb={5}
        align="center"
      >
        Projetos de Desenvolvimento
      </Typography>
      <Grid container spacing={4}>
        {projectsDev.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>

      {/* Seção de Projetos de Design UX */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        mt={5}
        mb={5}
        align="center"
      >
        Projetos de Design UX
      </Typography>
      <Grid container spacing={4}>
        {projectsUX.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>

      {/* Footer */}
      <Typography
        variant="body2"
        component="footer"
        align="center"
        mt={5}
        mb={5}
      >
        Desenvolvido por 4Labs &copy; {new Date().getFullYear()}
      </Typography>
    </Container>
  );
}
