/**
 * Site content — single source of truth for copy shown on the page.
 * Keep copy and data here; components stay presentational.
 */

export const site = {
  brand: "Qantara",
  domain: "qantara.com.br",
  linkedin: "https://www.linkedin.com/in/andryus/",
  github: "https://github.com/qantaraqt",
  tagline: "engenharia de software sob medida",
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
    lede: "Plataformas completas, do wireframe ao primeiro usuário real. Código que o seu time consegue manter depois, sem depender de mim.",
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
    lede: "Lojas e checkouts preparados para pico de venda e para auditoria fiscal. Pix, cartão, boleto, split de pagamento e antifraude entram no desenho desde o início.",
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
    lede: "Servidores Linux configurados para você não precisar pensar neles: monitoramento, backup e alerta antes que o cliente perceba o problema.",
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
    lede: "Proteção para a parte do sistema que movimenta dinheiro: checkout, contas de usuário, API pública e painel administrativo.",
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
    lede: "Bots, webhooks e rotinas que rodam sozinhas e avisam quando algo dá errado, com fila e retry para não perder nenhum evento.",
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
    desc: "Antes de falar de tecnologia, quero entender o negócio: o que trava hoje, quem vai usar, quanto tempo e orçamento existem. Isso muda a solução mais do que a escolha da stack.",
  },
  {
    num: "02",
    title: "Plano",
    desc: "Devolvo escopo, arquitetura, prazo e orçamento por escrito. Você aprova antes de eu escrever código. Se o rumo mudar no meio do caminho, a gente senta e combina de novo.",
  },
  {
    num: "03",
    title: "Construção",
    desc: "Entregas a cada duas semanas, sempre com algo que você consegue abrir e clicar. A conversa é direta comigo, que estou escrevendo o código.",
  },
  {
    num: "04",
    title: "Lançamento",
    desc: "Deploy em produção com monitoramento ligado desde o primeiro dia. Acompanho as primeiras semanas de uso real, que é quando aparecem os problemas que nenhum teste pegou.",
  },
  {
    num: "05",
    title: "Garantia",
    desc: "Bug no que eu entreguei, nos primeiros 30 dias, é por minha conta. Depois disso existe a opção de manutenção mensal, com SLA por escrito.",
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
  "Cobrar por hora (trabalho com preço fechado por escopo)",
  "Tecnologia que eu não vou querer manter daqui a dois anos",
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
    desc: "Meia hora de conversa pelo LinkedIn, sem custo. Você me conta o problema e eu faço as perguntas que preciso para saber se consigo ajudar.",
    meta: "~ 30 min · gratuito",
  },
  {
    num: "02",
    title: "Proposta",
    desc: "Em até 5 dias úteis você recebe escopo, arquitetura, prazo e valor por escrito. O preço é fechado para o escopo combinado; não cobro por hora.",
    meta: "≤ 5 dias úteis · por escrito",
  },
  {
    num: "03",
    title: "Início",
    desc: "Contrato direto entre nós, 30% na assinatura e início em até duas semanas. O restante do pagamento acompanha as entregas, não o calendário.",
    meta: "início em até 2 semanas",
  },
  {
    num: "04",
    title: "Se não encaixar",
    desc: "Se o projeto não é para mim, seja pelo escopo, pelo prazo ou pela área, eu digo por escrito e explico o motivo. Quando conheço alguém que resolve melhor, indico.",
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
    a: "Trabalho com preço fechado por escopo, não por hora. O menor projeto que aceito ocupa cerca de 4 semanas dedicadas; a partir daí o valor depende do tamanho do escopo, das integrações com o que você já tem e do ambiente de produção. A proposta vem por escrito em até 5 dias úteis depois da primeira conversa, já com prazo e arquitetura.",
  },
  {
    q: "Em quanto tempo um projeto fica pronto?",
    a: "Depende do tamanho, e o prazo vai por escrito antes de começar. Uma integração ou automação isolada costuma levar de 1 a 3 semanas. Um sistema completo fica entre 4 e 12 semanas, com entregas a cada duas para você acompanhar o andamento.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Em etapas. 30% na assinatura do contrato, parcelas intermediárias ligadas a entregas que você consegue testar, e o ajuste final quando o sistema está em produção. O contrato é direto entre nós, sem intermediário.",
  },
  {
    q: "Atende clientes fora do Brasil?",
    a: "Sim. Falo português, espanhol e inglês e trabalho em qualquer fuso. Prefiro reuniões curtas e comunicação assíncrona bem escrita, nas ferramentas que o seu time já usa. Pagamento internacional por transferência ou Wise, com nota fiscal.",
  },
  {
    q: "Há suporte depois do lançamento?",
    a: "Sim. Nos primeiros 30 dias após o deploy, qualquer bug no que eu entreguei é corrigido sem custo. Depois disso, se fizer sentido, existe um plano mensal de manutenção e melhorias, com SLA por escrito.",
  },
  {
    q: "Trabalha com NDA?",
    a: "Sim, e na maioria dos projetos é o padrão. Por isso os trabalhos listados aqui aparecem só em resumo; detalhes de cliente, arquitetura e números ficam para depois do acordo assinado.",
  },
];
