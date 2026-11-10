export type Lang = 'en' | 'pt'

/** Language-independent data: names, links, files. */
export const profile = {
  name: 'Vitor Oliveira',
  email: 'oliveiravitor.dev@gmail.com',
  github: 'https://github.com/vitor-rbo',
  linkedin: 'https://www.linkedin.com/in/vitor-oliveira-621592389',
}

export const project = {
  name: 'Hireflow',
  tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'Vercel'],
  live: 'https://hireflow-smoky.vercel.app/',
  repo: 'https://github.com/vitor-rbo/hireflow',
  image: '/hireflow.png',
}

const en = {
  htmlLang: 'en',
  meta: {
    title: 'Vitor Oliveira — Software Developer',
    description:
      'Vitor Oliveira — full-stack developer based in London. Projects, skills and contact.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    backToTop: 'Back to top',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    language: 'Language',
  },
  hero: {
    role: 'Full-Stack Developer',
    intro:
      'I build websites end to end, with a focus on the frontend. Finishing a BSc in Computer Science, based in London.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    contact: 'Contact',
  },
  about: {
    index: '01 / About',
    title: 'A bit about me',
    bio: [
      "I'm a software developer based in London, currently finishing a BSc in Computer Science. I build websites end to end, with a focus on the frontend.",
      "I work mostly with React and TypeScript, and I'm comfortable on the backend with Node.js and NestJS. I care about clean, maintainable code and interfaces that feel considered. I've also built a few smart contracts in Solidity.",
    ],
    facts: [
      { label: 'Based in', value: 'London, UK' },
      { label: 'Studying', value: 'BSc Computer Science, University of London (expected 2028)' },
      { label: 'Languages', value: 'English, Portuguese (both fluent)' },
    ],
  },
  skills: {
    index: '02 / Skills',
    title: 'What I work with',
    groups: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'HTML', 'CSS / SCSS'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'REST APIs', 'Supabase', 'Keycloak (SSO)', 'OAuth2'] },
      { label: 'Tools', items: ['Git / GitHub', 'Vite', 'npm', 'Turbo monorepos', 'Postman'] },
      { label: 'Also worked with', items: ['Solidity', 'ERC-20', 'Foundry', 'Smart contract security'] },
    ],
  },
  projects: {
    index: '03 / Projects',
    title: 'Selected work',
    kind: 'Personal project',
    tagline: 'Job application tracker',
    description: [
      'A full-stack web app for tracking job applications from first submission to outcome. Each application records the role, company, location and status, and moves through every stage: applied, response received, interview, offer or rejection.',
      'I designed the data model and the interface around the real workflow of a job search.',
    ],
    live: 'Live site',
    source: 'Source code',
    screenshotSoon: 'screenshot coming soon',
    screenshotAlt: 'Hireflow screenshot',
  },
  contact: {
    index: '04 / Contact',
    title: 'Get in touch',
    lead: "I'm happy to hear about opportunities, or to talk about my work.",
  },
}

export type Copy = typeof en

const pt: Copy = {
  htmlLang: 'pt',
  meta: {
    title: 'Vitor Oliveira — Desenvolvimento de Software',
    description:
      'Vitor Oliveira — full-stack developer em Londres. Projetos, skills e contato.',
  },
  nav: {
    about: 'Sobre',
    skills: 'Skills',
    projects: 'Projetos',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    backToTop: 'Voltar ao topo',
    toLight: 'Mudar para o tema claro',
    toDark: 'Mudar para o tema escuro',
    language: 'Idioma',
  },
  hero: {
    role: 'Full-Stack Developer',
    intro:
      'Construo sites do início ao fim, com foco no frontend. Concluindo um bacharelado em Ciência da Computação, em Londres.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    contact: 'Contato',
  },
  about: {
    index: '01 / Sobre',
    title: 'Um pouco sobre mim',
    bio: [
      'Atuo com desenvolvimento de software em Londres e estou concluindo um bacharelado em Ciência da Computação. Construo sites do início ao fim, com foco no frontend.',
      'Trabalho principalmente com React e TypeScript e também me sinto à vontade no backend, com Node.js e NestJS. Valorizo código limpo e fácil de manter e interfaces bem pensadas. Também já desenvolvi alguns smart contracts em Solidity.',
    ],
    facts: [
      { label: 'Localização', value: 'Londres, Reino Unido' },
      { label: 'Estudando', value: 'Bacharelado em Ciência da Computação, University of London (previsão: 2028)' },
      { label: 'Idiomas', value: 'Inglês e Português (fluentes)' },
    ],
  },
  skills: {
    index: '02 / Skills',
    title: 'Com o que trabalho',
    groups: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'HTML', 'CSS / SCSS'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'REST APIs', 'Supabase', 'Keycloak (SSO)', 'OAuth2'] },
      { label: 'Ferramentas', items: ['Git / GitHub', 'Vite', 'npm', 'Turbo monorepos', 'Postman'] },
      { label: 'Também já trabalhei com', items: ['Solidity', 'ERC-20', 'Foundry', 'Segurança de smart contracts'] },
    ],
  },
  projects: {
    index: '03 / Projetos',
    title: 'Projetos selecionados',
    kind: 'Projeto pessoal',
    tagline: 'Rastreador de candidaturas a vagas',
    description: [
      'Uma aplicação web full-stack para acompanhar candidaturas a vagas, do envio ao resultado. Cada candidatura registra cargo, empresa, localização e status, e passa por todas as etapas: candidatura enviada, resposta recebida, entrevista, proposta ou recusa.',
      'Projetei o modelo de dados e a interface em torno do fluxo real de uma busca por emprego.',
    ],
    live: 'Ver site',
    source: 'Código-fonte',
    screenshotSoon: 'captura de tela em breve',
    screenshotAlt: 'Captura de tela do Hireflow',
  },
  contact: {
    index: '04 / Contato',
    title: 'Entre em contato',
    lead: 'Tenho interesse em ouvir sobre oportunidades e em conversar sobre o meu trabalho.',
  },
}

export const copy: Record<Lang, Copy> = { en, pt }
