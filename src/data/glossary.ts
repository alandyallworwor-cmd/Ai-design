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
    | 'ICT Support';
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
];
