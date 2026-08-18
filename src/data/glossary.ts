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
    | 'Ethics Principles'
    | 'Policy Frameworks'
    | 'Communication & Culture'
    | 'Compliance & Incidents'
    | 'Technical Support'
    | 'Troubleshooting & Diagnostics';
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

  // --- Week 3: Time & Agile ---
  {
    term: 'Time management',
    meaning:
      'Organising and planning how much time to spend on different activities, prioritising work by urgency and importance.',
    group: 'Time & Agile',
  },
  {
    term: 'Prioritisation',
    meaning:
      'Deciding which tasks to complete first, based on business impact, client needs, deadlines, dependencies, risk and resources.',
    group: 'Time & Agile',
  },
  {
    term: 'Eisenhower Matrix',
    meaning: 'A tool that prioritises tasks by asking whether they are urgent and whether they are important.',
    group: 'Time & Agile',
  },
  {
    term: 'Agile',
    meaning:
      'An approach that delivers work in small stages with continuous collaboration, feedback and improvement.',
    group: 'Time & Agile',
  },
  {
    term: 'Scrum',
    meaning:
      'A widely used Agile framework with a Product Owner, Scrum Master and Development Team working in repeating cycles.',
    group: 'Time & Agile',
  },
  {
    term: 'Sprint',
    meaning: 'A fixed period of focused work (usually 2–4 weeks) ending with a working product increment.',
    group: 'Time & Agile',
  },
  {
    term: 'Stand-up',
    meaning: 'A short daily meeting (about 15 minutes) where members share progress, plans and obstacles.',
    group: 'Time & Agile',
  },

  // --- Week 3: Meetings & Communication ---
  {
    term: 'Formal meeting',
    meaning: 'A structured discussion between professionals with a clear purpose, agenda and expected outcomes.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Meeting agenda',
    meaning: 'A structured outline of the topics to be discussed, used to prepare and keep the meeting on track.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Meeting minutes',
    meaning: 'A written record of discussions, decisions, action items and deadlines, distributed promptly.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Active listening',
    meaning: 'Giving full attention to the speaker, asking clarifying questions and summarising what you heard.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Time-blocking',
    meaning: 'Dividing the workday into blocks and assigning each block to a specific task to encourage focused work.',
    group: 'Meetings & Communication',
  },
  {
    term: 'Constructive feedback',
    meaning: 'Specific, respectful, behaviour-focused information given to support improvement.',
    group: 'Meetings & Communication',
  },

  // --- Week 3: Ethics Principles (ICTICT313) ---
  {
    term: 'Transparency',
    meaning: 'Clearly communicating how IP and personal data are used, stored and protected.',
    group: 'Ethics Principles',
  },
  {
    term: 'Accountability',
    meaning: 'Assigning responsibility for actions and policy compliance, supported by logs and audit trails.',
    group: 'Ethics Principles',
  },
  {
    term: 'Proportionality',
    meaning: 'Collecting and monitoring only what matches the organisation’s legitimate need.',
    group: 'Ethics Principles',
  },
  {
    term: 'Consent and Choice',
    meaning: 'Individuals are informed about data use and can agree, change preferences or withdraw.',
    group: 'Ethics Principles',
  },
  {
    term: 'Data minimisation',
    meaning: 'Collecting only essential data and securing it, so unnecessary data does not create unnecessary risk.',
    group: 'Ethics Principles',
  },
  {
    term: 'Fairness and Non-Discrimination',
    meaning: 'Treating individuals equitably and avoiding biased outcomes in systems and decisions.',
    group: 'Ethics Principles',
  },
  {
    term: 'Continuous improvement',
    meaning: 'Regularly reviewing and updating policies so they stay relevant as technology and risks change.',
    group: 'Ethics Principles',
  },

  // --- Week 3: Policy Frameworks (ICTICT313) ---
  {
    term: 'Policy framework',
    meaning:
      'Structured guidance for managing IP, ethics and privacy obligations, ensuring consistency, compliance and clarity.',
    group: 'Policy Frameworks',
  },
  {
    term: 'Scope (of a policy)',
    meaning: 'The section that specifies who and what a policy applies to (e.g. employees, contractors and systems).',
    group: 'Policy Frameworks',
  },
  {
    term: 'Guiding principles',
    meaning: 'The core ethical or operational values that shape behaviour and decisions within a policy.',
    group: 'Policy Frameworks',
  },
  {
    term: 'Enforcement and review',
    meaning: 'Disciplinary processes and scheduled reviews that keep a policy effective and up to date.',
    group: 'Policy Frameworks',
  },

  // --- Week 4: Communication & Culture ---
  {
    term: 'Cross-cultural communication',
    meaning:
      'The exchange of information, ideas and messages between people from different cultural backgrounds.',
    group: 'Communication & Culture',
  },
  {
    term: 'Cultural competence',
    meaning:
      'The ability to communicate and work effectively with people from different cultural backgrounds.',
    group: 'Communication & Culture',
  },
  {
    term: 'Inclusive communication',
    meaning:
      'Communicating so everyone feels respected, valued and has an equal opportunity to understand and participate.',
    group: 'Communication & Culture',
  },
  {
    term: 'Language barrier',
    meaning:
      'Difficulty understanding one another due to differences in language, vocabulary, accent or communication style.',
    group: 'Communication & Culture',
  },
  {
    term: 'Direct communication',
    meaning: 'A clear, straightforward style where people express opinions and feedback openly.',
    group: 'Communication & Culture',
  },
  {
    term: 'Indirect communication',
    meaning: 'A subtle style where messages are implied to maintain harmony and avoid confrontation.',
    group: 'Communication & Culture',
  },
  {
    term: 'Clarification',
    meaning:
      'Confirming understanding when instructions or expectations are unclear, to prevent errors and rework.',
    group: 'Communication & Culture',
  },

  // --- Week 4: Compliance & Incidents (ICTICT313) ---
  {
    term: 'Non-compliance incident',
    meaning:
      'When actions, processes or systems fail to follow organisational policies, legal requirements or ethical standards.',
    group: 'Compliance & Incidents',
  },
  {
    term: 'Risk assessment',
    meaning: 'A systematic process for identifying threats to compliance and evaluating their likelihood and impact.',
    group: 'Compliance & Incidents',
  },
  {
    term: 'Auditing',
    meaning: 'Formal reviews of systems, processes and behaviours to ensure policies are being followed.',
    group: 'Compliance & Incidents',
  },
  {
    term: 'Incident reporting',
    meaning: 'Processes that allow staff to report breaches or suspected issues, enabling early detection.',
    group: 'Compliance & Incidents',
  },
  {
    term: 'Root cause analysis',
    meaning: 'Investigating the underlying causes of an incident to enable corrective action and prevent recurrence.',
    group: 'Compliance & Incidents',
  },
  {
    term: 'Remediation',
    meaning: 'Fixing issues and restoring compliance, for example by installing updated security controls.',
    group: 'Compliance & Incidents',
  },

  // --- Week 5: Technical Support (ICTSAS305) ---
  {
    term: 'Hardware',
    meaning: 'The physical components of a computer system that can be touched, such as monitors, printers and servers.',
    group: 'Technical Support',
  },
  {
    term: 'Software',
    meaning: 'Programs that run on a computer, including the operating system and applications.',
    group: 'Technical Support',
  },
  {
    term: 'Operating system (OS)',
    meaning:
      'The fundamental software that manages a computer’s hardware, memory, processes and applications (e.g. Windows, macOS, Linux).',
    group: 'Technical Support',
  },
  {
    term: 'Router',
    meaning: 'Networking equipment that directs traffic between networks.',
    group: 'Technical Support',
  },
  {
    term: 'Switch',
    meaning: 'Networking equipment that connects devices within a network.',
    group: 'Technical Support',
  },
  {
    term: 'Modem',
    meaning: 'A device that connects a network to the internet service provider (ISP).',
    group: 'Technical Support',
  },
  {
    term: 'CPU (Processor)',
    meaning: 'The “brain” of the computer that executes instructions and processes data.',
    group: 'Technical Support',
  },
  {
    term: 'RAM (Memory)',
    meaning: 'Temporary memory that stores the data currently in use for fast access.',
    group: 'Technical Support',
  },

  // --- Week 5: Troubleshooting & Diagnostics (ICTSAS305) ---
  {
    term: 'Technical investigation',
    meaning:
      'Identifying the cause of a problem by collecting information, testing assumptions and analysing evidence.',
    group: 'Troubleshooting & Diagnostics',
  },
  {
    term: 'Symptoms',
    meaning: 'The visible signs of a problem, such as freezing, dropouts or an application crashing.',
    group: 'Troubleshooting & Diagnostics',
  },
  {
    term: 'Problem scope',
    meaning: 'The extent of a problem — how many users and which systems are affected.',
    group: 'Troubleshooting & Diagnostics',
  },
  {
    term: '5 Whys',
    meaning: 'A root cause analysis method that asks “Why?” repeatedly to reach the underlying cause.',
    group: 'Troubleshooting & Diagnostics',
  },
  {
    term: 'Diagnostic tools',
    meaning: 'Utilities like Task Manager, Event Viewer and Ping used to identify, test and troubleshoot issues.',
    group: 'Troubleshooting & Diagnostics',
  },
  {
    term: 'Incident report',
    meaning: 'A structured record of an investigation: symptoms, findings, root cause and solution.',
    group: 'Troubleshooting & Diagnostics',
  },
  {
    term: 'Logs and screenshots',
    meaning: 'Supporting evidence that records system events and captures error messages and settings.',
    group: 'Troubleshooting & Diagnostics',
  },
  {
    term: 'Plain language',
    meaning: 'Explaining technical issues simply, focusing on the practical impact for the client rather than jargon.',
    group: 'Troubleshooting & Diagnostics',
  },
];
