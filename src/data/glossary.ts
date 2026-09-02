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
    | 'Communication & Culture'
    | 'Compliance & Incidents'
    | 'Technical Support'
    | 'Troubleshooting & Diagnostics'
    | 'Client Support & Communication'
    | 'Client Feedback'
    | 'Remote Collaboration';
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

  // --- Week 6: Client Support & Communication (ICTSAS305) ---
  {
    term: 'Client buy-in',
    meaning: 'A client’s acceptance, support and approval of a proposed solution, recommendation or course of action.',
    group: 'Client Support & Communication',
  },
  {
    term: 'Return on Investment (ROI)',
    meaning: 'The measurable benefits gained from an investment compared to its cost.',
    group: 'Client Support & Communication',
  },
  {
    term: 'Managing expectations',
    meaning: 'Being clear about what a solution will and will not achieve, plus timeframes, risks and limitations.',
    group: 'Client Support & Communication',
  },
  {
    term: 'Communication channel',
    meaning: 'The method used to communicate (phone, chat, video, email, meeting), chosen to suit the situation.',
    group: 'Client Support & Communication',
  },
  {
    term: 'Live communication',
    meaning: 'Real-time contact (phone, video, in person, live chat), best for urgent, complex or sensitive issues.',
    group: 'Client Support & Communication',
  },
  {
    term: 'Asynchronous communication',
    meaning: 'Messages sent and received at different times (email, ticketing, discussion boards); creates a written record.',
    group: 'Client Support & Communication',
  },
  {
    term: 'Group support session',
    meaning: 'Supporting or training many users at once, efficient when they need the same information.',
    group: 'Client Support & Communication',
  },

  // --- Week 7: Client Feedback (ICTSAS305) ---
  {
    term: 'Client feedback',
    meaning: 'Information from clients about their experiences, used to improve products and services.',
    group: 'Client Feedback',
  },
  {
    term: 'Quantitative data',
    meaning: 'Measurable numerical information, such as a 1–5 satisfaction rating (the “what”).',
    group: 'Client Feedback',
  },
  {
    term: 'Qualitative data',
    meaning: 'Descriptive information: written comments and explanations of experiences (the “why”).',
    group: 'Client Feedback',
  },
  {
    term: 'Feedback form',
    meaning: 'A survey or questionnaire that collects structured feedback from clients.',
    group: 'Client Feedback',
  },
  {
    term: 'Behavioural analytics',
    meaning: 'Feedback drawn from what users do (clicks, navigation, time on page) rather than what they say.',
    group: 'Client Feedback',
  },
  {
    term: 'Actionable insight',
    meaning: 'A specific, feasible, measurable action drawn from analysing feedback.',
    group: 'Client Feedback',
  },
  {
    term: 'Closing the feedback loop',
    meaning: 'Informing clients that their feedback has led to a change.',
    group: 'Client Feedback',
  },
  {
    term: 'Data aggregation',
    meaning: 'Gathering feedback from multiple sources into one central place for analysis.',
    group: 'Client Feedback',
  },

  // --- Week 8: Remote Collaboration (ICTSAS305) ---
  {
    term: 'Remote collaboration',
    meaning: 'Working together toward a common goal when team members are in different locations, using digital tools.',
    group: 'Remote Collaboration',
  },
  {
    term: 'Check-in',
    meaning: 'A planned communication about what is done, in progress, and any obstacles or help needed.',
    group: 'Remote Collaboration',
  },
  {
    term: 'Business continuity',
    meaning: 'Keeping the organisation operating when staff cannot attend the workplace (e.g. weather or emergencies).',
    group: 'Remote Collaboration',
  },
  {
    term: 'Video conferencing',
    meaning: 'Online face-to-face meetings using tools like Microsoft Teams, Zoom or Google Meet.',
    group: 'Remote Collaboration',
  },
  {
    term: 'Learning Management System (LMS)',
    meaning: 'A platform to deliver, manage and track learning — modules, quizzes and completion tracking.',
    group: 'Remote Collaboration',
  },
  {
    term: 'Remote training',
    meaning: 'Deliberately designed online training, since the trainer cannot physically assist the learner.',
    group: 'Remote Collaboration',
  },
  {
    term: 'CLEAR framework',
    meaning: 'A remote best-practice model: Communicate clearly, Log information, Establish expectations, Adapt, Review and respond.',
    group: 'Remote Collaboration',
  },
];
