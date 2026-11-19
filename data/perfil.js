export const perfil = {
  nome: "Ákila Ariel Pontes Armeres",
  curso: "Tecnologia em Sistemas para Internet",
  cidade: "Recife, PE",
  github: "akilariel", // ← troque pelo seu usuário
  email: "akilaeduca06@gmail.com",
  resumoCurto:
    "Estudante de Sistemas para Internet em Recife, em busca de oportunidades. Desenvolvimento web, dados e UX, com a organização de quem veio da logística.",
  resumo:
    "Sou estudante de Tecnologia em Sistemas para Internet, em Recife, e estou em busca de oportunidades na área de tecnologia. Tenho base em desenvolvimento web (HTML, CSS, JavaScript, React e Next.js), bancos de dados (PostgreSQL e modelagem), Java e UX/UI, aplicada em projetos acadêmicos como dashboards com dados públicos, sistemas com banco de dados e avaliações de usabilidade. Tenho experiência prévia em logística, o que me deu organização, atenção aos detalhes e responsabilidade com prazos. Gosto de aprender, trabalhar em equipe e entregar soluções claras e acessíveis.",
};

export const academico = [
  { titulo: "Tecnologia em Sistemas para Internet", onde: "Universidade Católica de Pernambuco", periodo: "2025.2 — atual",
    texto: "Banco de dados, programação web, UX/UI, engenharia de software e Java, com atividades integradas entre as disciplinas." },
  { titulo: "Residência em TIC", onde: "Porto Digital, Recife", periodo: "Ajuste o período",
    texto: "Avaliação de UX/UI com as 10 heurísticas de Nielsen e heurísticas de acessibilidade no app Dermanostic. O projeto ficou entre os melhores do programa." },
];

export const profissional = [
  { titulo: "Jovem Aprendiz · Logística", onde: "AlgoBom", periodo: "2025-2026",
    texto: "Atuei no setor de logística de uma fábrica, com foco em organização e controle de estoque. Minhas responsabilidades incluíam organizar o estoque, conferir e separar notas de pedidos e atualizar as informações no sistema. A rotina me ensinou a trabalhar com precisão, atenção aos detalhes e responsabilidade com prazos." },
  { titulo: "Jovem Aprendiz · Supermercado", onde: "Karla Mercado", periodo: "2026 — atual",
    texto: "Atuo em um supermercado, onde já fui operador de caixa, repositor e trabalhei na produção, e desenvolvi versatilidade, agilidade com dinheiro e cálculos. Hoje estou na prevenção de perdas: controlo em planilha os produtos próximos do vencimento, negocio trocas com representantes, retiro itens vencidos e crio estratégias para acelerar a saída dos produtos, reduzindo o prejuízo da loja." },
];

export const projetos = [
  { nome: "Dashboard sobre violência contra a mulher", stack: ["HTML", "CSS", "JavaScript", "ViaCEP", "Back4App"],
    texto: "Dados do DataSenado 2025, busca de delegacias da mulher por CEP e CRUD no Back4App." },
  { nome: "Dermanostic: avaliação UX/UI", stack: ["Heurísticas de Nielsen", "Acessibilidade", "Mockups HTML"],
    texto: "Análise de um app de dermatologia com protótipos e roteiro de apresentação." },
  { nome: "SGEE: estatísticas educacionais", stack: ["PostgreSQL", "Render", "Modelagem ER"],
    texto: "Banco de dados baseado no Censo Escolar, com dados reais em CSV e deploy no Render." },
  { nome: "Jogo de Dados", stack: ["Next.js", "React"],
    texto: "Jogo para 2 jogadores em 5 rodadas, com os componentes Dado e JogoDados." },
  { nome: "Mini Bio", stack: ["Next.js", "React"], texto: "Site simples com foto, nome e uma frase sobre mim." },
  { nome: "Lista de tarefas", stack: ["React", "Vite"], texto: "To-do list em React, com ambiente Node/Vite no Windows e deploy." },
];

export const tecnologias = [
  { nome: "Next.js 14 (App Router)", uso: "Estrutura do site, rotas e layout compartilhado" },
  { nome: "React 18", uso: "Componentes e hooks (useState, useEffect)" },
  { nome: "next/font", uso: "Carrega Oswald e Special Elite sem layout shift" },
  { nome: "CSS puro (globals.css)", uso: "Variáveis, grid, flexbox, media queries e prefers-reduced-motion" },
  { nome: "Open-Meteo API", uso: "Clima de Recife em tempo real na Home (sem chave)" },
  { nome: "GitHub REST API", uso: "Repositórios públicos listados em Projetos" },
  { nome: "Vercel", uso: "Hospedagem e deploy contínuo a partir do GitHub" },
];
