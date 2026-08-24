export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      project: 'Projetos',
      stack: 'Stack',
      exp: 'Experiência',
      contact: 'Contato',
      cv: 'Baixar Currículo',
      servicesLp: 'Serviços & LP',
      services: 'Serviços',
      cases: 'Cases Reais',
      process: 'Como Funciona',
      calc: 'Simulador',
      faq: 'FAQ',
      cta: 'Falar no WhatsApp',
      portfolio: 'Portfólio & Bio'
    },
    hero: {
      kicker: '// desenvolvedor fullstack',
      role: 'Fullstack · React & Node.js',
      sub: 'Engenheiro de Software em formação · UNIALFA',
      desc: 'Construo produtos web e mobile de alta escala — do banco de dados à interface de usuário. Criador do Razorfy (SaaS multi-tenant em produção) e desenvolvedor de soluções completas com React, Node.js e TypeScript.',
      ctaProject: 'Ver projetos em destaque',
      ctaCv: 'Baixar Currículo',
      statusBadge: 'Disponível para Oportunidades',
      loc: 'Goiânia · GO · Brasil',
      lpBadge: 'DESENVOLVIMENTO DE SOFTWARE & WEBSITES',
      lpH1Part1: 'Transforme visitantes em clientes com',
      lpH1Highlight: 'Landing Pages & Sistemas Web',
      lpH1Part2: 'de alta performance.',
      lpDesc: 'Desenvolvo soluções digitais sob medida: páginas ultra rápidas, sistemas escaláveis com Node.js e React 19, aplicativos e integrações com Inteligência Artificial para alavancar seu negócio.',
      lpPrimaryCta: 'Solicitar Orçamento Grátis',
      lpSecondaryCta: 'Simular Projeto',
      lpProof1: 'Performance 95+ no PageSpeed',
      lpProof2: 'Código 100% seu sem mensalidades',
      lpProof3: '30 Dias de Suporte e Garantia',
      lpMockupNote: 'Plataforma SaaS multi-tenant completa com painel web, segurança bancária e app mobile.'
    },
    about: {
      label: 'SOBRE MIM',
      p1: 'Sou desenvolvedor fullstack com foco em React e Node.js. Comecei no front-end criando e mantendo sites em WordPress e evoluí para construir sistemas de produção completos: arquitetura de API, banco relacional, segurança, 2FA, web e mobile.',
      p2: 'Curso Engenharia de Software na UNIALFA (2025–2029) e possuo inglês avançado. Meu maior projeto em produção é o Razorfy — plataforma SaaS multi-tenant com segurança de nível corporativo, eventos assíncronos e deploy contínuo.'
    },
    project: {
      label: 'PROJETO EM DESTAQUE',
      tagline: 'SaaS multi-tenant de agendamento & gestão para barbearias',
      desc: 'Uma única instância atende várias barbearias com isolamento rígido de dados (RLS). Clientes agendam e acompanham cashback pelo app móvel; barbeiros e admins gerenciam agenda, catálogo e fluxo de caixa; um backoffice mestre (/platform) faz onboarding e controle dos tenants. Web SPA, Mobile App e API Express em produção.',
      code: 'Ver código no GitHub',
      shotCaption: '// Razorfy Web SPA, Dashboard & Mobile App em produção real',
      otherLabel: 'OUTROS PROJETOS & REPOSITÓRIOS GITHUB',
      otherDesc: 'Aplicações web, agentes de inteligência artificial e utilitários de segurança desenvolvidos com código limpo e boas práticas.',
      moreLabel: 'Mais no GitHub',
      moreDesc: 'Acesse o perfil completo com todos os repositórios e contribuições ativas.'
    },
    delukaz: {
      title: 'DeLukaz (DLUKZ)',
      type: 'Web Application · Vitrine Musical & Eventos',
      desc: 'Plataforma e portfólio digital para o DJ e produtor musical DeLukaz (House, Tech House e Melodic Techno). Apresenta player de sets, agenda de eventos, galeria visual imersiva e canal direto para contratação.'
    },
    nlw: {
      title: 'NLW Game Meta AI Agent',
      type: 'GenAI · Análise de Metas em Tempo Real',
      desc: 'Assistente inteligente integrado à API do Google Gemini (gemini-2.5-flash) para consultar em tempo real as melhores estratégias, builds de itens, runas e tendências competitivas com base no patch mais recente dos jogos.'
    },
    wpShield: {
      title: 'WordPress Admin Security Shield',
      type: 'Segurança & Módulo WordPress',
      desc: 'Plugin de segurança desenvolvido para proteção contra escalonamento de privilégios. Bloqueia a criação não autorizada de usuários administradores via painel, reforçando a governança de permissões no CMS.'
    },
    academic: {
      title: 'Engenharia de Software (UNIALFA)',
      type: 'Projeto Acadêmico & Fundamentos',
      desc: 'Projeto e base acadêmica demonstrando fundamentos de computação, estruturas de dados, algoritmos e desenvolvimento web moderno durante a graduação em Engenharia de Software na UNIALFA.'
    },
    stack: { label: 'STACK & HABILIDADES' },
    exp: { label: 'EXPERIÊNCIA' },
    edu: {
      label: 'FORMAÇÃO',
      period: 'fev 2025 – fev 2029 · Cursando',
      degree: 'Bacharelado em Engenharia de Software',
      certLabel: 'Certificações',
      langLabel: 'Idiomas',
      langs: 'Português (nativo) · Inglês (avançado)'
    },
    contact: {
      label: 'CONTATO',
      title: 'Vamos conversar?',
      desc: 'Aberto a oportunidades em desenvolvimento de software — fullstack, front-end ou back-end. Respondo rápido por e-mail ou WhatsApp.',
      cvNote: 'currículo (pdf)'
    },
    stats: {
      speed: 'Tempo de carregamento ultrarrápido',
      responsive: 'Responsivo em celulares, tablets e computadores',
      security: 'Padrão de segurança com criptografia de ponta',
      support: 'Garantia e suporte total pós-lançamento'
    },
    services: {
      title: 'Soluções desenvolvidas sob medida para o seu objetivo',
      sub: 'Do design persuasivo ao banco de dados seguro: tudo projetado para gerar credibilidade e aumentar suas conversões.',
      s1Title: 'Landing Pages de Alta Conversão',
      s1Desc: 'Páginas comerciais focadas em captação de leads e vendas, com copywriting estratégico, tracking de pixels e carregamento instantâneo.',
      s1Point1: 'Design exclusivo alinhado à sua marca',
      s1Point2: 'Integração direta com WhatsApp e CRM',
      s1Point3: 'Otimização avançada de SEO e Analytics',
      s2Title: 'Sistemas Web & SaaS Sob Medida',
      s2Desc: 'Painéis administrativos, plataformas multi-tenant, gestão financeira e fluxos operacionais completos com React 19, Node.js e PostgreSQL.',
      s2Point1: 'Autenticação segura com 2FA e JWT',
      s2Point2: 'Isolamento de dados por cliente (RLS)',
      s2Point3: 'Banco de dados escalável e relatórios',
      s3Title: 'Aplicativos Mobile & Inteligência Artificial',
      s3Desc: 'Apps nativos para iOS e Android com React Native/Expo e integração de agentes inteligentes com a API do Google Gemini para automação.',
      s3Point1: 'Notificações push e suporte a câmera/QR',
      s3Point2: 'Agentes inteligentes com Google Gemini',
      s3Point3: 'Publicação e deploy contínuo'
    },
    cases: {
      title: 'Cases e Projetos Construídos com Excelência',
      sub: 'Veja alguns dos produtos digitais reais desenvolvidos para clientes e em operação contínua.'
    },
    process: {
      title: 'Como funciona o processo de criação',
      sub: 'Uma metodologia ágil, transparente e sem surpresas do início ao fim.',
      p1Title: '1. Diagnóstico & Escopo',
      p1Desc: 'Entendimento profundo do seu nicho, objetivos comerciais e definição clara das funcionalidades necessárias.',
      p2Title: '2. Design & Estrutura',
      p2Desc: 'Criação visual moderna, pensada na experiência do usuário (UX) e gatilhos de conversão.',
      p3Title: '3. Desenvolvimento & Testes',
      p3Desc: 'Programação limpa, segura, responsiva e com alta performance de carregamento.',
      p4Title: '4. Entrega & Treinamento',
      p4Desc: 'Deploy em produção, configuração de domínio e 30 dias de suporte total garantido.'
    },
    calc: {
      title: 'Simule seu Projeto em Segundos',
      sub: 'Selecione as opções abaixo para receber uma estimativa inicial e atendimento imediato.',
      step1: '1. QUAL O TIPO DE PROJETO?',
      step2: '2. QUAL A SUA EXPECTATIVA DE PRAZO?',
      summaryTitle: 'RESUMO DA ESTIMATIVA',
      summaryBadge: 'DIAGNÓSTICO GRATUITO',
      selectedLabel: 'Projeto Selecionado:',
      includedLabel: 'Inclusos na proposta:',
      inc1: '✓ Design 100% Personalizado',
      inc2: '✓ 30 Dias de Suporte e Garantia',
      inc3: '✓ Código Fonte 100% Seu',
      ctaBtn: 'Receber Proposta no WhatsApp'
    },
    faq: {
      title: 'Perguntas Frequentes',
      kicker: '// DÚVIDAS FREQUENTES'
    },
    ctaFinal: {
      badge: 'VAMOS TRANSFORMAR SEU PROJETO EM REALIDADE?',
      title: 'Pronto para elevar o padrão digital da sua empresa?',
      desc: 'Converse diretamente comigo pelo WhatsApp. Sem burocracia, com orçamento rápido e atendimento personalizado.',
      btn: 'Iniciar Conversa no WhatsApp'
    },
    footer: 'desenvolvido com React + TypeScript + café'
  },
  en: {
    nav: {
      about: 'About',
      project: 'Projects',
      stack: 'Stack',
      exp: 'Experience',
      contact: 'Contact',
      cv: 'Resume',
      servicesLp: 'Services & LP',
      services: 'Services',
      cases: 'Real Cases',
      process: 'Process',
      calc: 'Estimator',
      faq: 'FAQ',
      cta: 'Chat on WhatsApp',
      portfolio: 'Portfolio & Bio'
    },
    hero: {
      kicker: '// fullstack developer',
      role: 'Fullstack · React & Node.js',
      sub: 'Software Engineering undergraduate · UNIALFA',
      desc: 'I build high-scale web and mobile products — from database architecture to user interface. Creator of Razorfy (multi-tenant SaaS in production) and builder of complete systems with React, Node.js and TypeScript.',
      ctaProject: 'See featured projects',
      ctaCv: 'Download resume',
      statusBadge: 'Open to Opportunities',
      loc: 'Goiânia · Brazil',
      lpBadge: 'CUSTOM SOFTWARE & WEB DEVELOPMENT',
      lpH1Part1: 'Turn visitors into clients with',
      lpH1Highlight: 'High-Performance Web Apps',
      lpH1Part2: 'and Landing Pages.',
      lpDesc: 'I build custom digital solutions: ultra-fast landing pages, scalable fullstack systems with Node.js and React 19, mobile apps and GenAI integrations to scale your business.',
      lpPrimaryCta: 'Get a Free Quote',
      lpSecondaryCta: 'Project Estimator',
      lpProof1: '95+ Score on Google PageSpeed',
      lpProof2: '100% Code Ownership (No Hidden Fees)',
      lpProof3: '30-Day Full Support & Warranty',
      lpMockupNote: 'Full multi-tenant SaaS platform with web SPA, bank-grade security and mobile app.'
    },
    about: {
      label: 'ABOUT ME',
      p1: 'I am a fullstack developer focused on React and Node.js. I started in front-end building and maintaining WordPress sites and grew into shipping complete production systems: API architecture, relational databases, security, 2FA, web and mobile.',
      p2: 'I study Software Engineering at UNIALFA (2025–2029) and speak advanced English. My flagship production project is Razorfy — a multi-tenant SaaS platform with production-grade security, domain events and continuous deployment.'
    },
    project: {
      label: 'FEATURED PROJECT',
      tagline: 'Multi-tenant SaaS booking & management platform for barbershops',
      desc: 'A single instance serves multiple barbershops with strict data isolation (RLS). Clients book and track cashback through the mobile app; barbers and admins manage schedule, catalog and cash flow; a platform backoffice (/platform) handles tenant onboarding and management. Web SPA, Mobile App and Express API in production.',
      code: 'View code on GitHub',
      shotCaption: '// Razorfy Web SPA, Dashboard & Mobile App in real production',
      otherLabel: 'OTHER GITHUB PROJECTS & EXPERIMENTS',
      otherDesc: 'Web applications, GenAI assistants and security utilities built with clean code and high performance.',
      moreLabel: 'More on GitHub',
      moreDesc: 'Explore my full GitHub profile with all repositories and active contributions.'
    },
    delukaz: {
      title: 'DeLukaz (DLUKZ)',
      type: 'Web Application · Music & Events Showcase',
      desc: 'Digital showcase and portfolio for DJ & music producer DeLukaz (House, Tech House & Melodic Techno). Features audio set previews, gig calendar, immersive media gallery and event booking inquiries.'
    },
    nlw: {
      title: 'NLW Game Meta AI Agent',
      type: 'GenAI · Real-time Meta Analyst',
      desc: 'Intelligent assistant integrated with Google Gemini API (gemini-2.5-flash) to query real-time competitive strategies, item builds, runes and meta trends based on the latest game patches.'
    },
    wpShield: {
      title: 'WordPress Admin Security Shield',
      type: 'Security & WordPress Module',
      desc: 'Security plugin developed to prevent privilege escalation. Blocks unauthorized creation of administrator users through the admin panel, enforcing strict CMS governance.'
    },
    academic: {
      title: 'Software Engineering (UNIALFA)',
      type: 'Academic Project & Foundations',
      desc: 'Academic project and showcase demonstrating computer science fundamentals, data structures, algorithms and modern web development during the B.Sc. in Software Engineering at UNIALFA.'
    },
    stack: { label: 'STACK & SKILLS' },
    exp: { label: 'EXPERIENCE' },
    edu: {
      label: 'EDUCATION',
      period: 'Feb 2025 – Feb 2029 · In progress',
      degree: 'B.Sc. in Software Engineering',
      certLabel: 'Certifications',
      langLabel: 'Languages',
      langs: 'Portuguese (native) · English (advanced)'
    },
    contact: {
      label: 'CONTACT',
      title: "Let's talk?",
      desc: 'Open to software development opportunities — fullstack, front-end or back-end. I reply fast by e-mail or WhatsApp.',
      cvNote: 'resume (pdf)'
    },
    stats: {
      speed: 'Ultra-fast loading speed for higher conversion',
      responsive: 'Flawless on smartphones, tablets & desktop',
      security: 'Enterprise security standard with encryption',
      support: 'Full warranty & post-launch support'
    },
    services: {
      title: 'Tailored digital solutions built for your goals',
      sub: 'From persuasive design to secure databases: everything engineered for maximum credibility and conversion.',
      s1Title: 'High-Converting Landing Pages',
      s1Desc: 'Sales and lead-generation pages engineered with strategic copywriting, pixel tracking and instant load times.',
      s1Point1: 'Custom UI aligned with your brand identity',
      s1Point2: 'Direct integration with WhatsApp & CRM',
      s1Point3: 'Advanced SEO and Google Analytics tracking',
      s2Title: 'Custom Web Apps & SaaS Systems',
      s2Desc: 'Admin dashboards, multi-tenant architectures, cash flow managers and automated workflows using React 19, Node.js & PostgreSQL.',
      s2Point1: 'Enterprise Auth with 2FA TOTP and JWT',
      s2Point2: 'Strict Row Level Security (RLS) data isolation',
      s2Point3: 'Scalable cloud database & analytics',
      s3Title: 'Mobile Apps & AI Automations',
      s3Desc: 'Native iOS & Android apps with React Native/Expo and intelligent AI agents powered by Google Gemini API.',
      s3Point1: 'Push notifications & camera/QR integration',
      s3Point2: 'Smart AI assistants with Google Gemini',
      s3Point3: 'App Store / Play Store automated deploy'
    },
    cases: {
      title: 'Real Production Cases & Projects',
      sub: 'Explore live digital products engineered with clean code and high performance.'
    },
    process: {
      title: 'How the development process works',
      sub: 'An agile, transparent workflow from kickoff to launch.',
      p1Title: '1. Discovery & Scope',
      p1Desc: 'Deep dive into your market, business goals and exact technical specifications.',
      p2Title: '2. UI/UX Design',
      p2Desc: 'Modern visual design engineered for user engagement and conversion psychology.',
      p3Title: '3. Engineering & Security',
      p3Desc: 'Clean, modular, high-speed coding with full responsiveness and security checks.',
      p4Title: '4. Launch & 30-day Support',
      p4Desc: 'Production deployment, domain configuration and 30 days of full warranty.'
    },
    calc: {
      title: 'Project Estimator',
      sub: 'Select your options below to get an instant scope summary and direct WhatsApp quote.',
      step1: '1. WHAT IS THE PROJECT TYPE?',
      step2: '2. WHAT IS YOUR TIMELINE EXPECTATION?',
      summaryTitle: 'ESTIMATE SUMMARY',
      summaryBadge: 'FREE DIAGNOSIS',
      selectedLabel: 'Selected Project:',
      includedLabel: 'Included in quote:',
      inc1: '✓ 100% Custom Design',
      inc2: '✓ 30 Days of Support & Warranty',
      inc3: '✓ 100% Your Source Code',
      ctaBtn: 'Get WhatsApp Quote'
    },
    faq: {
      title: 'Frequently Asked Questions',
      kicker: '// FREQUENTLY ASKED QUESTIONS'
    },
    ctaFinal: {
      badge: 'READY TO BUILD YOUR DIGITAL PRODUCT?',
      title: 'Ready to elevate your company’s digital standard?',
      desc: 'Talk directly with me on WhatsApp. Fast quotes, no bureaucracy, and direct software engineering expertise.',
      btn: 'Start WhatsApp Conversation'
    },
    footer: 'built with React + TypeScript + coffee'
  }
};
