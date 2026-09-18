import { Language } from './translations';

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

  const milisStack = [
    'JavaScript ES6+',
    'HTML5 Semântico',
    'CSS3 Moderno',
    'Galeria de Fotos Responsiva',
    'Vercel Deploy',
  ];

  const obrStack = [
    'Next.js',
    'TypeScript',
    'Supabase Storage',
    'Tailwind CSS',
    'Vercel Deploy',
  ];

  const jvfitStack = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Dark/Light Mode',
    'Web & Mobile Responsivo',
  ];

  const lestaryStack = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Lucide Icons',
    'Vercel Deploy',
  ];

  const bentiviStack = [
    'WordPress',
    'Elementor',
    'PHP',
    'Matterport (Tour Virtual)',
    'Responsive Design',
  ];

  const desdobraStack = [
    'WordPress',
    'Elementor',
    'PHP',
    'Formulários de Captação',
    'Responsive Design',
  ];

  const petseguroStack = [
    'WordPress',
    'WooCommerce',
    'Elementor',
    'PHP',
    'E-commerce',
  ];

  const empilhadeiraStack = [
    'WordPress',
    'Elementor',
    'PHP',
    'Catálogo de Produtos',
    'Responsive Design',
  ];

  const fernandaStack = [
    'WordPress',
    'Elementor',
    'PHP',
    'Agendamento Online',
    'Responsive Design',
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
    milisStack,
    obrStack,
    jvfitStack,
    lestaryStack,
    bentiviStack,
    desdobraStack,
    petseguroStack,
    empilhadeiraStack,
    fernandaStack,
    jobs,
    skills,
  };
};
