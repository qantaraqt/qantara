/**
 * Site content — single source of truth for copy shown on the page.
 * Keep copy and data here; components stay presentational.
 */

export const site = {
  brand: "Qantara",
  domain: "qantara.com.br",
  linkedin: "https://www.linkedin.com/in/andryus/",
  tagline: "engenharia de software, atravessada à mão",
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
  /** Per-service CTA verb so the disclosure footers do not all read the same. */
  cta: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Sistemas web sob medida",
    lede: "Plataformas completas, do primeiro wireframe ao primeiro usuário em produção. Construídas para serem mantidas pelo seu time, ou pelo nosso.",
    entregas: [
      "Painéis administrativos e dashboards em tempo real",
      "APIs REST tipadas e integrações entre sistemas",
      "Autenticação, papéis, multi-tenant e auditoria",
      "Automação de processos internos e fluxos de aprovação",
    ],
    stack: "react · next.js · fastapi · postgresql",
    stackLogos: [
      { slug: "react",       name: "React" },
      { slug: "nextdotjs",   name: "Next.js", mono: true },
      { slug: "fastapi",     name: "FastAPI" },
      { slug: "postgresql",  name: "PostgreSQL" },
    ],
    cta: "discutir escopo",
  },
  {
    num: "02",
    title: "E-commerce e pagamentos",
    lede: "Lojas e checkouts que aguentam dia de Black Friday e auditoria fiscal. Pix, cartão, boleto, splits e antifraude integrados de origem.",
    entregas: [
      "Checkout com Pix, boleto, cartão e Apple/Google Pay",
      "Mercado Pago, Stripe, Asaas, splits e estornos",
      "Gestão de estoque, catálogo, pedidos e fiscal",
      "PDV para loja física, com impressora e leitor",
    ],
    stack: "next.js · node · stripe · mercado pago",
    stackLogos: [
      { slug: "nextdotjs",   name: "Next.js", mono: true },
      { slug: "nodedotjs",   name: "Node" },
      { slug: "stripe",      name: "Stripe" },
      { slug: "mercadopago", name: "Mercado Pago" },
    ],
    cta: "avaliar integração",
  },
  {
    num: "03",
    title: "Infraestrutura e deploy",
    lede: "Servidores Linux que sobem rápido, escalam sem drama e dormem em paz à noite. Observáveis por padrão.",
    entregas: [
      "VPS Linux com Nginx, SSL e firewall",
      "Backups automáticos, monitoramento e alertas",
      "CI/CD, containers e blue-green deploy",
      "Migração de sistemas legados sem downtime",
    ],
    stack: "linux · nginx · docker · cloudflare",
    stackLogos: [
      { slug: "linux",      name: "Linux", mono: true },
      { slug: "nginx",      name: "Nginx" },
      { slug: "docker",     name: "Docker" },
      { slug: "cloudflare", name: "Cloudflare" },
    ],
    cta: "auditar infra atual",
  },
  {
    num: "04",
    title: "Segurança e antifraude",
    lede: "Proteção operacional para sistemas que ganham dinheiro de verdade: checkouts, contas, APIs públicas e painéis administrativos.",
    entregas: [
      "Antifraude para pagamentos, cadastros e cupons",
      "Rate limiting, captchas, fingerprint e bloqueio de bots",
      "Auditoria de acesso, logs estruturados e SIEM básico",
      "Hardening de Linux, APIs e PostgreSQL em produção",
    ],
    stack: "jwt · oauth · cloudflare · fail2ban",
    stackLogos: [
      { slug: "jsonwebtokens", name: "JWT" },
      { slug: "auth0",         name: "OAuth" },
      { slug: "cloudflare",    name: "Cloudflare" },
      { slug: "linux",         name: "Linux", mono: true },
    ],
    cta: "discutir riscos",
  },
  {
    num: "05",
    title: "Automação e integrações",
    lede: "Bots, webhooks e jobs que trabalham enquanto seu time dorme. Confiáveis, retrocompatíveis e com retry à prova de falha.",
    entregas: [
      "Bots WhatsApp, Telegram e Discord (oficiais e não-oficiais)",
      "Webhooks com retry, deduplicação e fila",
      "Integrações com ERPs, CRMs e marketplaces",
      "Coleta de dados, scraping e enriquecimento",
    ],
    stack: "python · node · redis · celery",
    stackLogos: [
      { slug: "python",    name: "Python" },
      { slug: "nodedotjs", name: "Node" },
      { slug: "redis",     name: "Redis" },
      { slug: "celery",    name: "Celery" },
    ],
    cta: "mapear automação",
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
    title: "Escuta",
    desc: "Conversamos sobre o seu negócio antes de falar de tecnologia. Cada projeto começa por contexto real (restrições, time, orçamento, prazo), não por template.",
  },
  {
    num: "02",
    title: "Plano",
    desc: "Devolvemos escopo, arquitetura, prazos e orçamento por escrito. Você aprova antes que uma linha de código seja escrita; mudanças de rumo são re-acordadas, não empurradas.",
  },
  {
    num: "03",
    title: "Construção",
    desc: "Sprints curtas, com algo navegável a cada duas semanas. Comunicação direta com quem escreve o código, sem PMs intermediários, sem Jira em cinco camadas, sem ritos vazios.",
  },
  {
    num: "04",
    title: "Travessia",
    desc: "Deploy em produção, monitoramento ativo e suporte pós-lançamento. O sistema fica vivo; a gente continua disponível para o que ele virar.",
  },
  {
    num: "05",
    title: "Garantia",
    desc: "30 dias de bugs por nossa conta após o deploy. Retainer mensal opcional, com SLA por escrito. Sistema entregue não é sistema abandonado.",
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
    title: "Plataforma de verificação distribuída",
    summary:
      "Workers paralelos em múltiplos nós, painel administrativo em tempo real, fila persistente e WebSocket sob carga. Pool de browsers warm com failover automático entre workers.",
    tags: ["FastAPI", "React", "Playwright", "PostgreSQL"],
    year: "2026",
  },
  {
    num: "02",
    title: "E-commerce de produtos digitais",
    summary:
      "Loja com entrega automática pós-pagamento, Pix e cartão, painel de pedidos, antifraude integrado e split de comissões para revenda.",
    tags: ["Next.js", "Stripe", "Node"],
    year: "2025",
  },
  {
    num: "03",
    title: "PDV de varejo físico",
    summary:
      "Vendas, estoque, fiscal e impressão de cupom. Integrado a balança, leitor de código de barras e gaveta de dinheiro, em ambiente offline-first.",
    tags: ["Vue", "Laravel", "MySQL"],
    year: "2025",
  },
  {
    num: "04",
    title: "Roteador de webhooks corporativo",
    summary:
      "Ponte entre seis sistemas internos: retry exponencial, deduplicação por idempotency key, dead-letter queue e observabilidade em todas as bordas.",
    tags: ["Python", "Redis", "Docker"],
    year: "2024",
  },
];

/**
 * Things we explicitly refuse. Sets posture and pre-filters bad-fit leads
 * before the first conversation.
 */
export const notDoing: string[] = [
  "WordPress, Wix ou qualquer no-code",
  "Trabalhar como subcontratado de agência",
  "Sites institucionais sem lógica de negócio",
  "Mongo onde Postgres resolve",
  "Reuniões sem pauta e sem registro escrito",
  "Hora-cobrada — preço fechado por escopo fechado",
  "Stacks que não vamos manter em dois anos",
];

/**
 * Commercial process. Transparent, low-friction, ends with the
 * abundance signal: we'll point you elsewhere if we are not the fit.
 */
export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  meta: string;
}

export const process: ProcessStep[] = [
  {
    num: "01",
    title: "Conversa",
    desc: "30 minutos via LinkedIn. Sem custo, sem compromisso. Você descreve o problema; eu pergunto o suficiente para responder com honestidade.",
    meta: "~ 30 min · gratuito",
  },
  {
    num: "02",
    title: "Proposta",
    desc: "Em até 5 dias úteis, devolvo escopo, arquitetura, prazo e investimento por escrito. Preço fechado por escopo fechado, nunca hora-cobrada.",
    meta: "≤ 5 dias úteis · por escrito",
  },
  {
    num: "03",
    title: "Início",
    desc: "Se fizer sentido: contrato direto entre as partes, 30% na assinatura, início em até 2 semanas. Pagamento em marcos atrelados a entregas validáveis.",
    meta: "início em até 2 semanas",
  },
  {
    num: "04",
    title: "Recusa honesta",
    desc: "Se não fizer sentido (escopo errado, prazo impossível, fora do nosso domínio), digo por escrito por quê e indico outro caminho ou outro profissional.",
    meta: "mesmo prazo · mesmo cuidado",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Quanto custa um projeto?",
    a: "Trabalhamos com preço fechado por escopo fechado, nunca hora-cobrada. Projetos começam em 4 semanas dedicadas; o investimento varia conforme escopo, integração com sistemas existentes e ambiente de produção. Toda proposta vem por escrito, em até 5 dias úteis após uma conversa inicial, com prazo e arquitetura inclusos.",
  },
  {
    q: "Em quanto tempo um projeto fica pronto?",
    a: "Damos prazos honestos por escrito antes de começar. Projetos pequenos (integração, automação, módulo isolado) saem em 1 a 3 semanas. Sistemas completos rodam em sprints de 4 a 12 semanas, com algo navegável a cada duas. Você nunca espera dois meses para ver a primeira tela.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Em marcos, sempre. Sinal de 30% na assinatura, parcelas intermediárias atreladas a entregas validáveis e ajuste final no deploy em produção. Contrato direto entre as partes, sem intermediários. Nada de pagamento integral antes de ver o sistema rodando.",
  },
  {
    q: "Atendem clientes fora do Brasil?",
    a: "Sim. Trabalhamos em português, espanhol e inglês, em qualquer fuso. Reuniões síncronas curtas, comunicação assíncrona detalhada e ferramentas que o seu time já usa. Pagamento internacional via transferência ou Wise, com nota fiscal regular.",
  },
  {
    q: "Há suporte depois do lançamento?",
    a: "Sim. Os primeiros 30 dias após o deploy entram em garantia: bugs do que entregamos são corrigidos por nossa conta. Depois disso, retainer mensal opcional para manutenção, ajustes e melhorias contínuas, com SLA por escrito.",
  },
  {
    q: "Trabalham com NDA?",
    a: "Sim, e por padrão. Boa parte dos projetos que entregamos roda sob NDA recíproco. Detalhes de clientes, arquitetura e números só conversamos depois do acordo assinado.",
  },
];
