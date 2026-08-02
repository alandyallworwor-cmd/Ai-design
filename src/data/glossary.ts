// Glossary of IT terms used in the game.
// Every term and meaning is taken from the Week 1 Work Skills notes.

export interface GlossaryTerm {
  term: string;
  meaning: string;
  /** Which topic group the term belongs to (used as a heading). */
  group:
    | 'Intellectual Property'
    | 'Privacy & Ethics'
    | 'Teamwork'
    | 'Policies & Procedures'
    | 'Teams & Goals'
    | 'ICT Support'
    | 'Time & Agile'
    | 'Meetings & Communication'
    | 'Ethics Principles';
}

export const glossary: GlossaryTerm[] = [
  // --- Intellectual Property ---
  {
    term: 'Intellectual Property (IP)',
    meaning:
      'Creations of the mind that are legally protected so creators can control how their work is used.',
    group: 'Intellectual Property',
  },
  {
    term: 'IP Infringement',
    meaning: 'Using intellectual property without permission or outside its licence conditions.',
    group: 'Intellectual Property',
  },
  {
    term: 'Copyright',
    meaning:
      'Protects original works such as software code, websites, images and documentation. Automatic, no registration needed.',
    group: 'Intellectual Property',
  },
  {
    term: 'Trademark',
    meaning:
      'Protects brand identifiers such as names, logos and symbols so customers can tell products apart.',
    group: 'Intellectual Property',
  },
  {
    term: 'Patent',
    meaning: 'Protects an invention or how something works, such as new technology or processes.',
    group: 'Intellectual Property',
  },
  {
    term: 'Trade Secret',
    meaning:
      'Protects confidential business information like algorithms, network designs and customer lists.',
    group: 'Intellectual Property',
  },
  {
    term: 'Industrial Design',
    meaning: 'Protects the visual appearance of a product, such as its shape or pattern (not how it works).',
    group: 'Intellectual Property',
  },

  // --- Privacy & Ethics ---
  {
    term: 'Privacy Act 1988 (Cth)',
    meaning:
      'The main Australian law for how personal information is collected, used, stored and disclosed.',
    group: 'Privacy & Ethics',
  },
  {
    term: 'Australian Privacy Principles (APPs)',
    meaning:
      'The 13 principles in the Privacy Act. For example, APP 11 covers the security of personal information.',
    group: 'Privacy & Ethics',
  },
  {
    term: 'Notifiable Data Breaches (NDB) Scheme',
    meaning:
      'Rules requiring organisations to notify affected people and the OAIC when a breach is likely to cause serious harm.',
    group: 'Privacy & Ethics',
  },
  {
    term: 'OAIC',
    meaning: 'The Office of the Australian Information Commissioner, which regulates the Privacy Act.',
    group: 'Privacy & Ethics',
  },
  {
    term: 'ACS Code of Ethics',
    meaning:
      'Professional values for ICT workers: public interest, quality of life, honesty, competence, professional development and professionalism.',
    group: 'Privacy & Ethics',
  },
  {
    term: 'Least-privilege access',
    meaning: 'Giving people only the access they need, to help protect data from unauthorised use.',
    group: 'Privacy & Ethics',
  },

  // --- Teamwork ---
  {
    term: 'Teamwork',
    meaning:
      'Individuals working together toward a shared goal by combining their skills, knowledge and efforts.',
    group: 'Teamwork',
  },
  {
    term: 'Collaboration',
    meaning: 'Actively working with others by sharing ideas, resources and problem-solving responsibilities.',
    group: 'Teamwork',
  },
  {
    term: 'Interdependence',
    meaning: 'Team members relying on one another to complete tasks and achieve outcomes.',
    group: 'Teamwork',
  },
  {
    term: 'Shared responsibility',
    meaning: 'Successes and failures are owned by the whole team, not just one person.',
    group: 'Teamwork',
  },
  {
    term: 'SLA (Service Level Agreement)',
    meaning: 'An agreed standard of service a support team aims to meet, often as a shared team goal.',
    group: 'Teamwork',
  },

  // --- Week 2: Policies & Procedures ---
  {
    term: 'Policy',
    meaning:
      'A formal statement of an organisation’s rules, principles and expectations. It explains the “what and why”.',
    group: 'Policies & Procedures',
  },
  {
    term: 'Procedure',
    meaning:
      'A step-by-step set of instructions that explains how to carry out a policy. It explains the “how, when and by whom”.',
    group: 'Policies & Procedures',
  },
  {
    term: 'Acceptable Use Policy (AUP)',
    meaning: 'A policy outlining how employees may use company networks, devices and data.',
    group: 'Policies & Procedures',
  },
  {
    term: 'Algorithmic bias',
    meaning:
      'An emerging ethical issue where a computer system produces unfair results. Part of AI ethics in ICT.',
    group: 'Policies & Procedures',
  },

  // --- Week 2: Teams & Goals ---
  {
    term: 'Hierarchical team',
    meaning: 'A pyramid-shaped structure with a clear chain of command; decisions are made by managers or team leaders.',
    group: 'Teams & Goals',
  },
  {
    term: 'Cross-functional team',
    meaning: 'A team of members from different departments or skills working together on a shared, often complex, goal.',
    group: 'Teams & Goals',
  },
  {
    term: 'Self-managed team',
    meaning: 'A team that shares responsibility and manages its own work with minimal supervision and high trust.',
    group: 'Teams & Goals',
  },
  {
    term: 'SMART goal',
    meaning: 'A goal that is Specific, Measurable, Achievable, Relevant and Time-bound.',
    group: 'Teams & Goals',
  },
  {
    term: 'Action plan',
    meaning: 'A plan that turns goals into clear steps: tasks, assigned responsibilities, resources and deadlines.',
    group: 'Teams & Goals',
  },

  // --- Week 2: ICT Support (ICTSAS305) ---
  {
    term: 'Service desk',
    meaning: 'A support service structured into tiers (levels) based on the complexity of the issue.',
    group: 'ICT Support',
  },
  {
    term: 'Support tiers (0–4)',
    meaning:
      'Levels of support: Tier 0 self-help, Tier 1 first contact, Tier 2 more complex, Tier 3 specialist, Tier 4 external.',
    group: 'ICT Support',
  },
  {
    term: 'Ticketing system',
    meaning: 'Software used to log, track and manage client support requests (tickets).',
    group: 'ICT Support',
  },
  {
    term: 'Escalation',
    meaning: 'Passing a complex or urgent issue to a higher tier, after recording the steps taken and updating the priority.',
    group: 'ICT Support',
  },
  {
    term: 'Feedback loop',
    meaning: 'Collecting client feedback, analysing it and using it to improve services, over and over.',
    group: 'ICT Support',
  },

  // --- Week 3: Time & Agile (BSBXTW301 / ICTSAS305) ---
  {
    term: 'Time management',
    meaning: 'Organising and planning how much time to spend on activities, prioritising by urgency and importance.',
    group: 'Time & Agile',
  },
  {
    term: 'Prioritisation',
    meaning: 'Deciding which tasks should be completed first, based on impact, deadlines, dependencies and risk.',
    group: 'Time & Agile',
  },
  {
    term: 'Eisenhower Matrix',
    meaning: 'A tool that prioritises work by asking two questions: is it urgent, and is it important?',
    group: 'Time & Agile',
  },
  {
    term: 'Time-blocking',
    meaning: 'Dividing the workday into blocks and assigning each block to a task to encourage focused work.',
    group: 'Time & Agile',
  },
  {
    term: 'Agile',
    meaning: 'An approach that delivers work in small stages with continuous collaboration, feedback and improvement.',
    group: 'Time & Agile',
  },
  {
    term: 'Scrum',
    meaning: 'A popular Agile framework using a Product Owner, Scrum Master and Development Team in repeating iterations.',
    group: 'Time & Agile',
  },
  {
    term: 'Sprint',
    meaning: 'A fixed period of focused work, usually 2–4 weeks, that ends with a working product and feedback.',
    group: 'Time & Agile',
  },
  {
    term: 'Stand-up',
    meaning: 'A short (about 15-minute) daily meeting covering what you did, will do, and any obstacles.',
    group: 'Time & Agile',
  },
  {
    term: 'Product Backlog',
    meaning: 'A prioritised list of all the work: features, fixes and improvements to be done.',
    group: 'Time & Agile',
  },

  // --- Week 3: Meetings & Communication (BSBXTW301 / ICTSAS305) ---
  {
    term: 'Formal meeting',
    meaning: 'A structured discussion with a clear purpose, agenda and expected outcomes.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Agenda',
    meaning: 'A structured outline of the topics to be discussed, prepared before a meeting.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Meeting minutes',
    meaning: 'A written record of discussion points, decisions and action items, distributed promptly after a meeting.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Active listening',
    meaning: 'Giving full attention to the speaker, asking clarifying questions and summarising what you heard.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Constructive feedback',
    meaning: 'Specific, respectful, behaviour-focused information that describes actions and suggests improvement.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Conflict resolution',
    meaning: 'Resolving disagreements respectfully by focusing on the issue, using facts and supporting the team goal.',
    group: 'Meetings & Communication',
  },

  // --- Week 3: Ethics Principles (ICTICT313) ---
  {
    term: 'Transparency',
    meaning: 'Clearly communicating how IP and personal data are collected, used, stored and protected.',
    group: 'Ethics Principles',
  },
  {
    term: 'Accountability',
    meaning: 'Assigning responsibility for actions and compliance, reinforced by roles, audit trails and access tracking.',
    group: 'Ethics Principles',
  },
  {
    term: 'Proportionality',
    meaning: 'Collecting data and monitoring only as much as the organisation genuinely needs — no overreach.',
    group: 'Ethics Principles',
  },
  {
    term: 'Consent and Choice',
    meaning: 'Informing individuals about data use, obtaining approval, and letting them change or withdraw it.',
    group: 'Ethics Principles',
  },
  {
    term: 'Data minimisation',
    meaning: 'Collecting only essential data and protecting it, because unnecessary data creates unnecessary risk.',
    group: 'Ethics Principles',
  },
  {
    term: 'Fairness & Non-Discrimination',
    meaning: 'Ensuring policies, monitoring and decision systems treat individuals equitably and avoid bias.',
    group: 'Ethics Principles',
  },
  {
    term: 'Continuous Improvement',
    meaning: 'Regularly reviewing, auditing and updating policies so they stay relevant as technology and risks change.',
    group: 'Ethics Principles',
  },
  {
    term: 'Policy framework',
    meaning: 'Structured guidance (purpose, scope, principles, rules, roles, enforcement, flexibility) for managing IP, ethics and privacy.',
    group: 'Ethics Principles',
  },
];
