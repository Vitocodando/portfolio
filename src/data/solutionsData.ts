import { Language } from './translations';

export interface ServiceItem {
  id: string;
  icon: string;
  badgeBg: string;
  badgeBorder: string;
  accentColor: string;
  titleKey: 's1Title' | 's2Title' | 's3Title';
  descKey: 's1Desc' | 's2Desc' | 's3Desc';
  pointsKeys: ('s1Point1' | 's1Point2' | 's1Point3')[] | ('s2Point1' | 's2Point2' | 's2Point3')[] | ('s3Point1' | 's3Point2' | 's3Point3')[];
  ctaTextPt: string;
  ctaTextEn: string;
  waMessagePt: string;
  waMessageEn: string;
}

export interface FaqItem {
  id: number;
  questionPt: string;
  questionEn: string;
  answerPt: string;
  answerEn: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: 'landing',
    icon: '🚀',
    badgeBg: '#121815',
    badgeBorder: '#23302A',
    accentColor: '#7CF29C',
    titleKey: 's1Title',
    descKey: 's1Desc',
    pointsKeys: ['s1Point1', 's1Point2', 's1Point3'],
    ctaTextPt: 'Criar Landing Page →',
    ctaTextEn: 'Build Landing Page →',
    waMessagePt: 'Olá Victor! Quero uma Landing Page de alta conversão para o meu negócio.',
    waMessageEn: 'Hello Victor! I want a high-converting landing page for my business.',
  },
  {
    id: 'system',
    icon: '💻',
    badgeBg: '#10161D',
    badgeBorder: '#1C2836',
    accentColor: '#6EA8FE',
    titleKey: 's2Title',
    descKey: 's2Desc',
    pointsKeys: ['s2Point1', 's2Point2', 's2Point3'],
    ctaTextPt: 'Desenvolver Sistema →',
    ctaTextEn: 'Build Custom System →',
    waMessagePt: 'Olá Victor! Quero desenvolver um Sistema Web ou SaaS sob medida.',
    waMessageEn: 'Hello Victor! I want to develop a custom Web App / SaaS system.',
  },
  {
    id: 'mobile-ai',
    icon: '📱',
    badgeBg: '#16121F',
    badgeBorder: '#291F38',
    accentColor: '#C084FC',
    titleKey: 's3Title',
    descKey: 's3Desc',
    pointsKeys: ['s3Point1', 's3Point2', 's3Point3'],
    ctaTextPt: 'Criar App ou Automação →',
    ctaTextEn: 'Build App or AI Agent →',
    waMessagePt: 'Olá Victor! Quero um App Mobile ou solução com Inteligência Artificial.',
    waMessageEn: 'Hello Victor! I want a Mobile App or AI automation solution.',
  },
];

export const faqList: FaqItem[] = [
  {
    id: 1,
    questionPt: '1. Quanto tempo leva para entregar uma Landing Page ou Sistema?',
    questionEn: '1. How long does it take to deliver a Landing Page or Web App?',
    answerPt: 'Landing Pages de alta conversão costumam ser entregues em prazos ágeis de <strong>5 a 10 dias úteis</strong>. Sistemas web e aplicativos sob medida variam conforme o escopo (geralmente entre <strong>15 a 45 dias</strong>). Todo o cronograma é alinhado antes do início.',
    answerEn: 'High-converting Landing Pages are typically delivered in agile sprints of <strong>5 to 10 business days</strong>. Custom web applications and mobile apps vary depending on scope (usually between <strong>15 to 45 days</strong>). The full schedule is aligned upfront.',
  },
  {
    id: 2,
    questionPt: '2. Terei custos mensais ou o código é 100% meu?',
    questionEn: '2. Are there recurring monthly fees or is the code 100% mine?',
    answerPt: '<strong>O código fonte e todos os acessos são 100% seus!</strong> Não cobro mensalidades ocultas pelo desenvolvimento. Os únicos custos recorrentes são a hospedagem/domínio da sua escolha (geralmente poucos reais por mês ou planos gratuitos para início).',
    answerEn: '<strong>The source code and all ownership rights are 100% yours!</strong> I do not charge hidden maintenance subscriptions. The only recurring costs are hosting/domain fees of your choice (often minimal or free tiers for initial traction).',
  },
  {
    id: 3,
    questionPt: '3. Como funciona o suporte após o lançamento?',
    questionEn: '3. How does post-launch support and warranty work?',
    answerPt: 'Todos os projetos acompanham <strong>30 dias de garantia e suporte técnico completo</strong> para tirar dúvidas, ajustar detalhes e garantir que tudo opere com estabilidade máxima.',
    answerEn: 'All projects include <strong>30 days of full warranty and technical support</strong> to resolve questions, fine-tune details, and ensure maximum production stability.',
  },
  {
    id: 4,
    questionPt: '4. Quais são as formas de pagamento aceitas?',
    questionEn: '4. What payment methods are accepted?',
    answerPt: 'Aceito PIX (com desconto especial à vista) e parcelamento no cartão de crédito em até 12x, com emissão de contrato claro e transparente para ambas as partes.',
    answerEn: 'Payments via Wire Transfer/PIX (with upfront discount) and credit card installments up to 12x, supported by a formal, transparent service agreement for both parties.',
  },
];

export interface SimulatorScope {
  title: string;
  scope: string;
  waType: string;
}

export const getSimulatorScope = (type: string, lang: Language): SimulatorScope => {
  const isEn = lang === 'en';

  switch (type) {
    case 'system':
      return {
        title: isEn ? 'Custom Web App / SaaS' : 'Sistema Web / SaaS Sob Medida',
        scope: isEn
          ? 'Full platform with admin dashboard, database and authentication.'
          : 'Plataforma completa com painel administrativo, banco de dados e autenticação.',
        waType: isEn ? 'Custom Web App / SaaS' : 'Sistema Web ou SaaS',
      };
    case 'mobile':
      return {
        title: isEn ? 'Mobile App (iOS & Android)' : 'Aplicativo Mobile (iOS & Android)',
        scope: isEn
          ? 'Native app built with React Native / Expo and store publishing.'
          : 'App nativo desenvolvido com React Native / Expo e publicação nas lojas.',
        waType: isEn ? 'Mobile App' : 'Aplicativo Mobile',
      };
    case 'ai':
      return {
        title: isEn ? 'AI Automation & Integration' : 'Automação & Integração com IA',
        scope: isEn
          ? 'Intelligent assistant with Google Gemini, WhatsApp bot or workflow automation.'
          : 'Assistente inteligente com Google Gemini, chatbot WhatsApp ou automações de processos.',
        waType: isEn ? 'AI Automation' : 'Automação / Inteligência Artificial',
      };
    case 'landing':
    default:
      return {
        title: isEn ? 'High-Converting Landing Page' : 'Landing Page de Alta Conversão',
        scope: isEn
          ? 'Single page focused on sales, leads, analytics and instant load speed.'
          : 'Página única focada em vendas, leads, analytics e carregamento instantâneo.',
        waType: isEn ? 'High-Converting Landing Page' : 'Landing Page de Alta Conversão',
      };
  }
};
