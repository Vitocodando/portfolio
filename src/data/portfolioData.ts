import { Language } from './translations';

export interface ArchitectureFeature {
  num: string;
  title: string;
  desc: string;
}

export interface JobExperience {
  period: string;
  role: string;
  org: string;
  points: string[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export const getPortfolioData = (lang: Language) => {
  const isEn = lang === 'en';

  const razorfyStack = [
    'Node.js 22',
    'Express',
    'Prisma 6',
    'PostgreSQL (Supabase)',
    'React 19',
    'TypeScript',
    'Tailwind CSS v4',
    'Expo SDK 56',
    'Docker',
    'WaSenderAPI (WhatsApp)',
    '2FA TOTP (AES-256)',
    'React Query',
  ];

  const delukazStack = [
    'JavaScript ES6+',
    'HTML5 Semântico',
    'CSS3 Moderno',
    'Audio Player & Galeria',
    'Vercel Deploy',
  ];

  const nlwStack = [
    'Google Gemini API',
    'JavaScript ES6+',
    'Showdown.js',
    'Prompt Engineering',
    'REST',
  ];

  const wpShieldStack = [
    'PHP',
    'WordPress Plugin API',
    'Hooks & Actions',
    'Security Hardening',
  ];

  const academicStack = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Lógica & Algoritmos',
  ];

  const feats: ArchitectureFeature[] = isEn
    ? [
        {
          num: '01',
          title: 'Multi-tenant RLS',
          desc: 'Strict per-tenant data isolation with a white-label experience per barbershop, connected via code or QR.',
        },
        {
          num: '02',
          title: 'Event-driven Bus',
          desc: 'Post-commit domain event bus with isolated listeners and persistent outbox with retry.',
        },
        {
          num: '03',
          title: 'Enterprise Security',
          desc: 'TOTP 2FA (AES-256 encrypted), IP rate limiting, JWT revocation list, Postgres RLS and anti-IDOR guards.',
        },
        {
          num: '04',
          title: 'WhatsApp Outbox',
          desc: 'Persistent outbox with backoff — appointment confirmations, reminders, win-back campaigns and OTP.',
        },
        {
          num: '05',
          title: 'Cashback & Cash Flow',
          desc: 'Accrual, hold and redemption with pessimistic locks (SELECT FOR UPDATE) and anti-overbooking constraints.',
        },
        {
          num: '06',
          title: 'Web · Mobile · Backoffice',
          desc: 'React 19 + Vite SPA, Expo/React Native app and a dedicated /platform master admin panel in production.',
        },
      ]
    : [
        {
          num: '01',
          title: 'Multi-tenant com RLS',
          desc: 'Isolamento rígido de dados por tenant, com experiência white-label por barbearia, conectada via código ou QR.',
        },
        {
          num: '02',
          title: 'Orientado a Eventos',
          desc: 'Barramento de eventos de domínio pós-commit com listeners isolados e outbox persistente com retry.',
        },
        {
          num: '03',
          title: 'Segurança & 2FA',
          desc: '2FA TOTP (cifrado em AES-256), rate limiting por IP, revogação de JWT, RLS no Postgres e guardas anti-IDOR.',
        },
        {
          num: '04',
          title: 'Notificações WhatsApp',
          desc: 'Outbox persistente com retry e backoff — confirmações de horário, lembretes, win-back e OTP via WaSenderAPI.',
        },
        {
          num: '05',
          title: 'Cashback & Financeiro',
          desc: 'Acúmulo, reserva e resgate com locks pessimistas (SELECT FOR UPDATE) e restrições anti-overbooking no Postgres.',
        },
        {
          num: '06',
          title: 'Web · Mobile · Backoffice',
          desc: 'SPA React 19 + Vite, app móvel Expo/React Native e painel de plataforma (/platform) em produção.',
        },
      ];

  const jobs: JobExperience[] = isEn
    ? [
        {
          period: 'Apr 2025 – Jun 2026',
          role: 'Front-end Web Developer',
          org: 'M2 Soluções e Tecnologia · Goiânia, GO',
          points: [
            'Built, maintained and supported WordPress sites for multiple clients.',
            'Customized themes and implemented new sections with HTML, CSS and JavaScript.',
            'Fixed bugs and shipped continuous improvements for performance and responsiveness.',
          ],
        },
        {
          period: 'Jun 2023 – Jan 2025',
          role: 'Administrative Assistant',
          org: 'RENAPSI · Senador Canedo, GO',
          points: [
            'Front-desk service, receiving and routing internal and external demands.',
            'Supported administrative routines, document organization and team assistance.',
          ],
        },
      ]
    : [
        {
          period: 'abr 2025 – jun 2026',
          role: 'Desenvolvedor Web Front-end',
          org: 'M2 Soluções e Tecnologia · Goiânia, GO',
          points: [
            'Desenvolvimento, manutenção e suporte de sites em WordPress para diferentes clientes.',
            'Personalização de temas e implementação de novas seções com HTML, CSS e JavaScript.',
            'Correção de erros e melhorias contínuas de desempenho e responsividade.',
          ],
        },
        {
          period: 'jun 2023 – jan 2025',
          role: 'Assistente Administrativo',
          org: 'RENAPSI · Senador Canedo, GO',
          points: [
            'Atendimento ao público na recepção, recebendo e direcionando demandas internas e externas.',
            'Apoio às rotinas administrativas, organização de documentos e suporte às equipes.',
          ],
        },
      ];

  const skills: SkillCategory[] = isEn
    ? [
        {
          label: 'Front-end',
          items: [
            'React 19',
            'TypeScript',
            'JavaScript (ES6+)',
            'Vite',
            'Tailwind CSS v4',
            'React Query',
            'Recharts',
            'HTML5 & CSS3',
          ],
        },
        {
          label: 'Back-end & APIs',
          items: [
            'Node.js 22',
            'Express',
            'Prisma ORM 6',
            'PostgreSQL',
            'RESTful APIs',
            'JWT & 2FA TOTP',
            'Zod Validation',
            'PHP / WordPress',
          ],
        },
        {
          label: 'Mobile App',
          items: [
            'React Native',
            'Expo SDK 56',
            'React Navigation',
            'Expo SecureStore',
            'Expo Camera',
          ],
        },
        {
          label: 'Infra & DevOps',
          items: [
            'Docker & Compose',
            'Git & GitHub',
            'Supabase (PostgreSQL)',
            'Render · Vercel',
            'Linux / Bash',
          ],
        },
      ]
    : [
        {
          label: 'Front-end',
          items: [
            'React 19',
            'TypeScript',
            'JavaScript (ES6+)',
            'Vite',
            'Tailwind CSS v4',
            'React Query',
            'Recharts',
            'HTML5 & CSS3',
          ],
        },
        {
          label: 'Back-end & APIs',
          items: [
            'Node.js 22',
            'Express',
            'Prisma ORM 6',
            'PostgreSQL',
            'APIs RESTful',
            'JWT & 2FA TOTP',
            'Validação Zod',
            'PHP / WordPress',
          ],
        },
        {
          label: 'Mobile App',
          items: [
            'React Native',
            'Expo SDK 56',
            'React Navigation',
            'Expo SecureStore',
            'Expo Camera',
          ],
        },
        {
          label: 'Infra & DevOps',
          items: [
            'Docker & Compose',
            'Git & GitHub',
            'Supabase (PostgreSQL)',
            'Render · Vercel',
            'Linux / Bash',
          ],
        },
      ];

  return {
    razorfyStack,
    delukazStack,
    nlwStack,
    wpShieldStack,
    academicStack,
    feats,
    jobs,
    skills,
  };
};
