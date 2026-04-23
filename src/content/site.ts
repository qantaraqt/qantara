/**
 * Site content — single source of truth for copy shown on the page.
 * Keep copy and data here; components stay presentational.
 */

export const site = {
  brand: "qantara",
  domain: "qantara.cloud",
  email: "andresmolinaroms@icloud.com",
  whatsapp: "5527992698323",
  whatsappDisplay: "+55 27 99269 8323",
  tagline: "a ponte entre tecnologia e possibilidades",
  location: "Vitória · Espírito Santo",
  year: 2026,
  owner: "andrés molina",
  role: "engenheiro de software independente",
} as const;

export const nav = [
  { href: "#servicos", label: "serviços" },
  { href: "#metodo", label: "método" },
  { href: "#trabalhos", label: "trabalhos" },
] as const;

export interface Service {
  num: string;
  title: string;
  lede: string;
  entregas: string[];
  stack: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Sistemas sob medida",
    lede: "Plataformas web completas, do primeiro wireframe ao deploy em produção.",
    entregas: [
      "Painéis administrativos e dashboards",
      "APIs REST e integrações entre sistemas",
      "Autenticação, papéis e multi-tenant",
      "Automação de processos internos",
    ],
    stack: "react · next.js · fastapi · postgresql",
  },
  {
    num: "02",
    title: "E-commerce & vendas",
    lede: "Lojas virtuais e sistemas de PDV que aguentam volume real.",
    entregas: [
      "Checkout com Pix, boleto e cartão",
      "Integrações com Mercado Pago, Stripe e Asaas",
      "Gestão de estoque, produtos e pedidos",
      "PDV para lojas físicas com impressão",
    ],
    stack: "next.js · node · stripe · mercado pago",
  },
  {
    num: "03",
    title: "Infraestrutura & deploy",
    lede: "Servidores Linux robustos, seguros e monitorados.",
    entregas: [
      "Deploy em VPS com Nginx e SSL",
      "Firewalls, backups e monitoramento",
      "CI/CD, containers e observabilidade",
      "Migração de sistemas legados",
    ],
    stack: "ubuntu · nginx · docker · systemd",
  },
  {
    num: "04",
    title: "Automação & APIs",
    lede: "Bots, webhooks e integrações que trabalham enquanto você dorme.",
    entregas: [
      "Bots WhatsApp e Telegram",
      "Webhooks e jobs agendados",
      "Integrações com ERPs e CRMs",
      "Scraping e coleta de dados",
    ],
    stack: "python · node · redis · celery",
  },
];

export const stack: string[] = [
  "react", "next.js", "astro", "typescript",
  "python", "fastapi", "node", "nestjs",
  "postgresql", "redis", "mongodb",
  "linux", "nginx", "docker", "systemd",
  "tailwind", "framer motion", "vite",
  "stripe", "mercado pago",
];

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export const method: Step[] = [
  {
    num: "01",
    title: "Você me conta",
    desc: "Conversamos sobre seu negócio, objetivos e restrições. Escuto antes de propor — cada projeto começa com contexto real, nunca com template.",
  },
  {
    num: "02",
    title: "Eu proponho",
    desc: "Devolvo escopo, prazos, arquitetura e orçamento claros. Você aprova antes que uma linha de código seja escrita.",
  },
  {
    num: "03",
    title: "Construímos juntos",
    desc: "Desenvolvimento em sprints curtos com entregas validáveis. Comunicação direta comigo, sem intermediários, sem caixa-preta.",
  },
  {
    num: "04",
    title: "Publico e acompanho",
    desc: "Deploy em produção, monitoramento ativo e suporte pós-lançamento. O sistema fica vivo, e eu fico disponível.",
  },
];

export interface Work {
  num: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
}

export const works: Work[] = [
  {
    num: "01",
    title: "Plataforma de verificação",
    summary:
      "Sistema distribuído de validação com workers paralelos, painel admin em tempo real e WebSocket para resultados.",
    tags: ["FastAPI", "React", "Playwright", "PostgreSQL"],
    year: "2026",
  },
  {
    num: "02",
    title: "E-commerce de produtos digitais",
    summary:
      "Loja com entrega automática, Pix e cartão, painel de pedidos e integração antifraude.",
    tags: ["Next.js", "Stripe", "Node"],
    year: "2025",
  },
  {
    num: "03",
    title: "Sistema de PDV",
    summary:
      "Controle de vendas, estoque, produtos e relatórios. Impressão de cupom e integração com balança.",
    tags: ["Vue", "Laravel", "MySQL"],
    year: "2025",
  },
  {
    num: "04",
    title: "Roteador de webhooks",
    summary:
      "Roteador com retry, deduplicação e observabilidade para integração entre 6 sistemas.",
    tags: ["Python", "Redis", "Docker"],
    year: "2024",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Você trabalha sozinho?",
    a: "Sim. Cada projeto é tocado por mim do escopo ao deploy — você conversa direto com quem constrói, sem camadas de gerenciamento. Quando preciso de designer ou especialista pontual, colaboro com parceiros de confiança, sempre sob minha responsabilidade técnica.",
  },
  {
    q: "Em quanto tempo um projeto fica pronto?",
    a: "Depende do escopo. Projetos pequenos (landing, integração) saem em 1 a 3 semanas. Sistemas completos costumam ser entregues em sprints de 4 a 12 semanas, com validações intermediárias a cada duas semanas.",
  },
  {
    q: "Atende clientes internacionais?",
    a: "Sim. Atendo em português, espanhol e inglês via reuniões online, com comunicação assíncrona clara e ferramentas colaborativas.",
  },
  {
    q: "Cuida de design e desenvolvimento?",
    a: "Cuido do desenvolvimento end-to-end: frontend, backend, banco e infraestrutura. Para design trabalho com parceiros ou adapto o Figma que o cliente já tenha.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Divido em marcos: sinal ao iniciar, parcelas intermediárias vinculadas a entregas e ajuste final no deploy. Sem pagamento integral antes de ver o sistema rodando.",
  },
  {
    q: "Há suporte depois do lançamento?",
    a: "Sim. Ofereço planos mensais de manutenção, monitoramento e melhorias contínuas — ou suporte pontual por hora, conforme a necessidade.",
  },
];
