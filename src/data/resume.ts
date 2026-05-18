// Source of truth: resume.md — this file is the curated site data layer.
// Update here for site changes; update resume.md for the canonical full record.

export const profile = {
  name: 'Li Chenyang',
  tagline: '',
  location: 'Singapore',
  contact: {
    email: 'li.chenyang1990@gmail.com',
    linkedin: 'https://www.linkedin.com/in/johanli1990/',
    github: 'https://github.com/JohanLi1990',
  },
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    skills: ['Java 11/17', 'Spring Boot', 'SQL', 'REST', 'SOAP'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Redux', 'TypeScript', 'JavaScript'],
  },
  {
    label: 'Trading Systems',
    skills: ['OMS', 'Smart Order Routing', 'FIX Protocol', 'Market Fees', 'Trade Settlement'],
  },
  {
    label: 'AI / Automation',
    skills: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'LLM Agents'],
  },
]

export interface Experience {
  company: string
  role: string
  period: string
  domain: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'UBS',
    role: 'Software Engineer',
    period: 'May 2023 – Present',
    domain: 'Global Order Management, Smart Order Routing, Trade Settlement',
    highlights: [
      'Build Java/Spring Boot microservices for Global Order Management and smart order routing workflows.',
      'Develop operations tools including Pricing Rule Engine, Market Fee Service, and Broker Router.',
      'Built AI agent workflows to parse and validate client order instructions from emails and messages.',
    ],
  },
  {
    company: 'Thales',
    role: 'Software Development Engineer',
    period: 'Aug 2018 – May 2023',
    domain: 'Digital Security, Card Personalization, Test Automation',
    highlights: [
      'Developed Java/Spring MVC web applications for card security configuration.',
      'Automated regression testing using Robot Framework, Gherkin, and Python.',
      'Built Jenkins CI pipelines and Python tooling to improve engineering workflows.',
    ],
  },
]

export interface Project {
  name: string
  description: string
  tags: string[]
  url?: string
  wip?: boolean
}

export const projects: Project[] = [
  {
    name: 'Nirvana / Alpaca Trading Lab',
    description:
      'A Python trading research lab built on Alpaca market data — exploring rule-based strategies, vectorized backtesting, and risk metrics like Sharpe ratio.',
    tags: ['Python', 'pandas', 'Alpaca API', 'Backtesting', 'OHLCV'],
    url: 'https://github.com/JohanLi1990/alpaca-lab',
  },
  {
    name: 'OpenClaw',
    description:
      'AI agent workflows for investing and trading research — CLI-based, built on Linux with MCP-style tooling. Human-reviewed automation, not autonomous execution. Work in progress.',
    tags: ['Python', 'LangGraph', 'LangChain', 'Linux', 'MCP'],
    wip: true,
  },
  {
    name: 'FVAnalyzer',
    description:
      'A tool for estimating fair value of stocks — because sometimes you want a number, not just a feeling.',
    tags: ['Python', 'Valuation', 'Stocks'],
    url: 'https://github.com/JohanLi1990/FVAnalyzer',
  },
  {
    name: 'buildWithJdk25',
    description:
      'Exploring modern Java with Netty and the LMAX Disruptor — high-performance concurrency patterns on JDK 25.',
    tags: ['Java', 'Netty', 'Disruptor', 'JDK 25'],
    url: 'https://github.com/JohanLi1990/buildWithJdk25',
  },
]

export const education = {
  university: 'Nanyang Technological University',
  programme: 'Renaissance Engineering Programme',
  period: '2011 – 2015',
  honours: 'First Class Honours',
  degrees: ['MSc Technology Management', 'BEng Electrical & Electronic Engineering'],
}
