/**
 * Site content — single source of truth for copy shown on the page.
 * Keep copy and data here; components stay presentational.
 */

export const site = {
  brand: "Qantara",
  domain: "qantara.cloud",
  email: "andresmolinaroms@icloud.com",
  whatsapp: "5527992698323",
  whatsappDisplay: "+55 27 99269 8323",
  tagline: "a ponte entre tecnologia e possibilidades",
  year: 2026,
} as const;

export const nav = [
  { href: "#sobre", label: "sobre" },
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
  /** Logo slugs (simple-icons) to display alongside the stack line. */
  stackLogos: Array<{ slug: string; name: string; mono?: boolean }>;
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
    stackLogos: [
      { slug: "react",       name: "React" },
      { slug: "nextdotjs",   name: "Next.js", mono: true },
      { slug: "fastapi",     name: "FastAPI" },
      { slug: "postgresql",  name: "PostgreSQL" },
    ],
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
    stackLogos: [
      { slug: "nextdotjs",   name: "Next.js", mono: true },
      { slug: "nodedotjs",   name: "Node" },
      { slug: "stripe",      name: "Stripe" },
      { slug: "mercadopago", name: "Mercado Pago" },
    ],
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
    stack: "linux · nginx · docker · cloudflare",
    stackLogos: [
      { slug: "linux",      name: "Linux", mono: true },
      { slug: "nginx",      name: "Nginx" },
      { slug: "docker",     name: "Docker" },
      { slug: "cloudflare", name: "Cloudflare" },
    ],
  },
  {
    num: "04",
    title: "Segurança & antifraude",
    lede: "Proteção de checkouts, detecção de abuso e endurecimento de sistemas em produção.",
    entregas: [
      "Antifraude para pagamentos e cadastros",
      "Rate limiting, captchas e bloqueio de bots",
      "Auditoria de acesso e logs estruturados",
      "Hardening de Linux, APIs e banco de dados",
    ],
    stack: "jwt · oauth · cloudflare · fail2ban",
    stackLogos: [
      { slug: "jsonwebtokens", name: "JWT" },
      { slug: "auth0",         name: "OAuth" },
      { slug: "cloudflare",    name: "Cloudflare" },
      { slug: "linux",         name: "Linux", mono: true },
    ],
  },
  {
    num: "05",
    title: "Automação & APIs",
    lede: "Bots, webhooks e integrações que trabalham enquanto você dorme.",
    entregas: [
      "Bots WhatsApp e Telegram",
      "Webhooks e jobs agendados",
      "Integrações com ERPs e CRMs",
      "Scraping e coleta de dados",
    ],
    stack: "python · node · redis · celery",
    stackLogos: [
      { slug: "python",    name: "Python" },
      { slug: "nodedotjs", name: "Node" },
      { slug: "redis",     name: "Redis" },
      { slug: "celery",    name: "Celery" },
    ],
  },
];

export interface Tech {
  name: string;
  slug: string;
  /** Logo is black/white only — needs inversion in dark theme */
  mono?: boolean;
}

export const stack: Tech[] = [
  { name: "React",        slug: "react" },
  { name: "Next.js",      slug: "nextdotjs",   mono: true },
  { name: "Astro",        slug: "astro",       mono: true },
  { name: "TypeScript",   slug: "typescript" },
  { name: "Python",       slug: "python" },
  { name: "FastAPI",      slug: "fastapi" },
  { name: "Node",         slug: "nodedotjs" },
  { name: "NestJS",       slug: "nestjs" },
  { name: "PostgreSQL",   slug: "postgresql" },
  { name: "Redis",        slug: "redis" },
  { name: "MongoDB",      slug: "mongodb" },
  { name: "Linux",        slug: "linux",       mono: true },
  { name: "Nginx",        slug: "nginx" },
  { name: "Docker",       slug: "docker" },
  { name: "Tailwind",     slug: "tailwindcss" },
  { name: "Framer Motion",slug: "framer",      mono: true },
  { name: "Vite",         slug: "vite" },
  { name: "Stripe",       slug: "stripe" },
  { name: "Mercado Pago", slug: "mercadopago" },
  { name: "Cloudflare",   slug: "cloudflare" },
];

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export const method: Step[] = [
  {
    num: "01",
    title: "Você nos conta",
    desc: "Conversamos sobre seu negócio, objetivos e restrições. Escutamos antes de propor — cada projeto começa com contexto real, nunca com template.",
  },
  {
    num: "02",
    title: "Propomos o plano",
    desc: "Devolvemos escopo, prazos, arquitetura e orçamento claros. Você aprova antes que uma linha de código seja escrita.",
  },
  {
    num: "03",
    title: "Construímos juntos",
    desc: "Desenvolvimento em sprints curtos com entregas validáveis. Comunicação direta com quem constrói, sem intermediários e sem caixa-preta.",
  },
  {
    num: "04",
    title: "Publicamos e acompanhamos",
    desc: "Deploy em produção, monitoramento ativo e suporte pós-lançamento. O sistema fica vivo, e a equipe fica disponível.",
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
    q: "Como a Qantara trabalha?",
    a: "Somos um estúdio enxuto: cada projeto é tocado por uma única pessoa do escopo ao deploy, então você conversa direto com quem constrói, sem camadas de gerenciamento. Quando o projeto pede designer ou especialista pontual, colaboramos com parceiros de confiança sob nossa responsabilidade técnica.",
  },
  {
    q: "Em quanto tempo um projeto fica pronto?",
    a: "Depende do escopo. Projetos pequenos (landing, integração) saem em 1 a 3 semanas. Sistemas completos costumam ser entregues em sprints de 4 a 12 semanas, com validações intermediárias a cada duas semanas.",
  },
  {
    q: "Atendem clientes internacionais?",
    a: "Sim. Trabalhamos em português, espanhol e inglês, com reuniões online, comunicação assíncrona clara e ferramentas colaborativas — em qualquer fuso horário.",
  },
  {
    q: "Cuidam de design e desenvolvimento?",
    a: "Cuidamos do desenvolvimento end-to-end: frontend, backend, banco e infraestrutura. Para design trabalhamos com parceiros ou adaptamos o Figma que o cliente já tenha.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Dividimos em marcos: sinal ao iniciar, parcelas intermediárias vinculadas a entregas e ajuste final no deploy. Sem pagamento integral antes de ver o sistema rodando.",
  },
  {
    q: "Há suporte depois do lançamento?",
    a: "Sim. Oferecemos planos mensais de manutenção, monitoramento e melhorias contínuas — ou suporte pontual por hora, conforme a necessidade.",
  },
];
