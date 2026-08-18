import type { Mission } from '../types';

// Phase 1 missions.
// Every question and explanation below comes from the Week 1 Work Skills notes
// (BSBXTW301 Teamwork and ICTICT313 Privacy / Notifiable Data Breaches).
// Nothing here is invented outside those notes.

export const missions: Mission[] = [
  {
    id: 'plan',
    title: 'Plan the Project',
    subtitle: 'Pick the right goals, people and habits for a good IT team.',
    icon: '🧭',
    week: 1,
    topic: 'Teamwork: goals, roles and communication',
    questions: [
      {
        kind: 'select',
        id: 'plan-goals',
        prompt:
          'Your new team is starting an IT project. What does a good team need FIRST?',
        choices: [
          { id: 'a', text: 'Clear goals everyone understands' },
          { id: 'b', text: 'The newest computers' },
          { id: 'c', text: 'One person to do all the work' },
          { id: 'd', text: 'No meetings at all' },
        ],
        correctId: 'a',
        explanation:
          'Good teamwork starts with clear goals, so everyone knows what the team is trying to achieve.',
      },
      {
        kind: 'select',
        id: 'plan-people',
        prompt:
          'Who works together on an IT team to deliver services and fix issues?',
        choices: [
          { id: 'a', text: 'Only one manager' },
          {
            id: 'b',
            text: 'Technicians, developers, support staff and managers',
          },
          { id: 'c', text: 'Only people with the exact same skills' },
          { id: 'd', text: 'Customers only' },
        ],
        correctId: 'b',
        explanation:
          'In IT, teamwork brings together technicians, developers, support staff and managers who collaborate to deliver services and solve problems.',
      },
      {
        kind: 'select',
        id: 'plan-shared',
        prompt: 'What does "shared responsibility" mean in a team?',
        choices: [
          { id: 'a', text: 'Only the boss is responsible' },
          { id: 'b', text: 'Successes and failures are owned by everyone' },
          { id: 'c', text: 'Nobody is responsible' },
          { id: 'd', text: 'Each person hides their mistakes' },
        ],
        correctId: 'b',
        explanation:
          'Shared responsibility means the whole team owns both successes and failures together, not just one person.',
      },
      {
        kind: 'select',
        id: 'plan-comms',
        prompt: 'Which habit keeps a team informed and aligned each day?',
        choices: [
          { id: 'a', text: 'Regular communication, like a daily stand-up' },
          { id: 'b', text: 'Waiting until the project ends to talk' },
          { id: 'c', text: 'Emailing only when something breaks' },
          { id: 'd', text: 'Keeping information to yourself' },
        ],
        correctId: 'a',
        explanation:
          'Regular communication, such as daily or weekly stand-up meetings, keeps everyone informed, aligned and able to spot issues early.',
      },
    ],
  },
  {
    id: 'organise',
    title: 'Organise the Work',
    subtitle: 'Tap the steps in the correct order to organise the work.',
    icon: '🗂️',
    week: 1,
    topic: 'Processes: data-breach response and team problem-solving',
    questions: [
      {
        kind: 'order',
        id: 'organise-breach',
        prompt:
          'A data breach happens. Tap the steps in the correct order for a Notifiable Data Breach (NDB).',
        items: [
          { id: 's1', text: 'You notice a data breach has happened' },
          { id: 's2', text: 'Report the breach promptly to your team' },
          { id: 's3', text: 'Check if it is likely to cause serious harm' },
          { id: 's4', text: 'Notify the affected people and the OAIC' },
        ],
        correctOrder: ['s1', 's2', 's3', 's4'],
        explanation:
          'Under the NDB scheme, ICT staff report breaches promptly, then the organisation must notify affected people and the OAIC when serious harm is likely.',
      },
      {
        kind: 'order',
        id: 'organise-outage',
        prompt:
          'A network outage happens. Tap the steps a support team takes to solve it together.',
        items: [
          { id: 'o1', text: 'A network outage is reported' },
          { id: 'o2', text: 'Team members share logs and observations' },
          { id: 'o3', text: 'They discuss possible solutions together' },
          { id: 'o4', text: 'They fix the problem and restore the service' },
        ],
        correctOrder: ['o1', 'o2', 'o3', 'o4'],
        explanation:
          'This is collaboration: the team diagnoses the outage by sharing logs and observations, discussing solutions together, then restoring the service.',
      },
    ],
  },
  {
    id: 'phase1',
    title: 'Phase 1 Check',
    subtitle: 'Check the work is legally and ethically ready to begin.',
    icon: '✅',
    week: 1,
    topic: 'Being ready: policies, privacy law and ACS ethics',
    questions: [
      {
        kind: 'select',
        id: 'phase1-policies',
        prompt:
          'Before ICT work begins, an organisation should have policies to govern what?',
        choices: [
          { id: 'a', text: 'Its intellectual property use, protection and management' },
          { id: 'b', text: 'The colour of the office walls' },
          { id: 'c', text: 'Which snacks to buy' },
          { id: 'd', text: 'Nothing needs a policy' },
        ],
        correctId: 'a',
        explanation:
          'Organisations must have policies and procedures to govern their intellectual property use, protection and management.',
      },
      {
        kind: 'select',
        id: 'phase1-privacy-act',
        prompt:
          'Which Australian law sets the main rules for handling personal information?',
        choices: [
          { id: 'a', text: 'The Copyright Act 1968' },
          { id: 'b', text: 'The Privacy Act 1988 (Cth)' },
          { id: 'c', text: 'The Patents Act 1990' },
          { id: 'd', text: 'The Trade Marks Act 1995' },
        ],
        correctId: 'b',
        explanation:
          'The Privacy Act 1988 (Cth) regulates how personal information is collected, used, stored and disclosed, and includes the 13 Australian Privacy Principles (APPs).',
      },
      {
        kind: 'select',
        id: 'phase1-app11',
        prompt: 'Australian Privacy Principle 11 (APP 11) is about the ___ of personal information.',
        choices: [
          { id: 'a', text: 'security' },
          { id: 'b', text: 'colour' },
          { id: 'c', text: 'price' },
          { id: 'd', text: 'deletion date' },
        ],
        correctId: 'a',
        explanation:
          'APP 11 covers the security of personal information. ICT staff must make sure reasonable security safeguards are in place.',
      },
      {
        kind: 'select',
        id: 'phase1-acs-competence',
        prompt:
          'Which ACS Code of Ethics value means working within your skills and knowledge?',
        choices: [
          { id: 'a', text: 'Honesty' },
          { id: 'b', text: 'Competence' },
          { id: 'c', text: 'Primacy of the Public Interest' },
          { id: 'd', text: 'Professional Development' },
        ],
        correctId: 'b',
        explanation:
          'Competence means working within your skills and knowledge. It is one of the six ACS professional values.',
      },
      {
        kind: 'select',
        id: 'phase1-consent',
        prompt:
          'You need to open a user’s account to do some work. What must you have first?',
        choices: [
          { id: 'a', text: 'Their consent or proper authorisation' },
          { id: 'b', text: 'A fast internet connection' },
          { id: 'c', text: 'A new laptop' },
          { id: 'd', text: 'Nothing, just open it' },
        ],
        correctId: 'a',
        explanation:
          'Accessing user accounts without consent may breach the Privacy Act. Always have proper authorisation before accessing personal data.',
      },
    ],
  },
  {
    id: 'phase2',
    title: 'Phase 2 Check',
    subtitle: 'Review finished work and spot the mistake.',
    icon: '🔍',
    week: 1,
    topic: 'Spotting IP and privacy mistakes',
    questions: [
      {
        kind: 'select',
        id: 'phase2-copyright',
        prompt:
          'A web developer uses an image from another website without following its licence. What is this?',
        choices: [
          { id: 'a', text: 'Copyright infringement' },
          { id: 'b', text: 'Good teamwork' },
          { id: 'c', text: 'A patent' },
          { id: 'd', text: 'Nothing wrong' },
        ],
        correctId: 'a',
        explanation:
          'Copyright protects original digital works like images. Using them outside the licence conditions is copyright infringement.',
      },
      {
        kind: 'select',
        id: 'phase2-trademark',
        prompt:
          'A site shows a famous company’s logo without permission, implying an official partnership. What is this?',
        choices: [
          { id: 'a', text: 'Trademark infringement' },
          { id: 'b', text: 'A trade secret' },
          { id: 'c', text: 'An industrial design' },
          { id: 'd', text: 'Allowed for any website' },
        ],
        correctId: 'a',
        explanation:
          'Trademarks protect brand names, logos and symbols. Using a logo without permission to imply a partnership is trademark infringement.',
      },
      {
        kind: 'select',
        id: 'phase2-trade-secret',
        prompt:
          'A system administrator shares internal network diagrams with an outside party without approval. What is this?',
        choices: [
          { id: 'a', text: 'A breach of confidential trade secrets' },
          { id: 'b', text: 'A copyright' },
          { id: 'c', text: 'Good documentation' },
          { id: 'd', text: 'A public design right' },
        ],
        correctId: 'a',
        explanation:
          'Trade secrets protect confidential information like network designs. Sharing them without approval breaks confidentiality.',
      },
      {
        kind: 'select',
        id: 'phase2-design',
        prompt:
          'One company copies the unique casing shape of another company’s router. What is this?',
        choices: [
          { id: 'a', text: 'Industrial design infringement' },
          { id: 'b', text: 'A patent on an idea' },
          { id: 'c', text: 'A trademark' },
          { id: 'd', text: 'Fair and allowed' },
        ],
        correctId: 'a',
        explanation:
          'Industrial designs protect how a product looks (its shape and appearance). Copying a distinctive casing design can be design infringement.',
      },
      {
        kind: 'select',
        id: 'phase2-privacy',
        prompt:
          'A staff member opens a customer’s account without consent. What could this breach?',
        choices: [
          { id: 'a', text: 'The Privacy Act 1988' },
          { id: 'b', text: 'The Patents Act 1990' },
          { id: 'c', text: 'A trademark' },
          { id: 'd', text: 'Nothing at all' },
        ],
        correctId: 'a',
        explanation:
          'Accessing user accounts without consent may breach the Privacy Act 1988, which protects people’s personal information.',
      },
    ],
  },
  {
    id: 'test',
    title: 'Test the Project',
    subtitle: 'Find the problem in each situation and choose the right fix.',
    icon: '🧪',
    week: 1,
    topic: 'Troubleshooting: choosing the right fix',
    questions: [
      {
        kind: 'select',
        id: 'test-breach',
        prompt:
          'You find a data breach that is likely to cause serious harm. What must you do?',
        choices: [
          { id: 'a', text: 'Notify the affected people and the OAIC' },
          { id: 'b', text: 'Keep it secret to avoid trouble' },
          { id: 'c', text: 'Delete all the logs' },
          { id: 'd', text: 'Wait a few months' },
        ],
        correctId: 'a',
        explanation:
          'Under the Notifiable Data Breaches scheme, you must report the breach promptly and notify the affected people and the OAIC.',
      },
      {
        kind: 'select',
        id: 'test-licence',
        prompt: 'You want to reuse some code from the internet. What should you do first?',
        choices: [
          { id: 'a', text: 'Check and follow its licence conditions' },
          { id: 'b', text: 'Copy it and hope for the best' },
          { id: 'c', text: 'Remove the author’s name' },
          { id: 'd', text: 'Sell it as your own' },
        ],
        correctId: 'a',
        explanation:
          'Copying code without respecting its licence is IP infringement. Always check and follow the licence conditions first.',
      },
      {
        kind: 'select',
        id: 'test-least-privilege',
        prompt:
          'You want to protect personal data from unauthorised access. Which approach helps?',
        choices: [
          { id: 'a', text: 'Apply least-privilege access and security safeguards' },
          { id: 'b', text: 'Give everyone full admin access' },
          { id: 'c', text: 'Turn off all passwords' },
          { id: 'd', text: 'Email the data to everyone' },
        ],
        correctId: 'a',
        explanation:
          'ICT responsibilities include applying least-privilege access and reasonable security safeguards to protect data from unauthorised access.',
      },
      {
        kind: 'select',
        id: 'test-roles',
        prompt:
          'Your team keeps duplicating work and getting confused about who does what. What fixes this?',
        choices: [
          { id: 'a', text: 'Clear roles and responsibilities' },
          { id: 'b', text: 'Stop all communication' },
          { id: 'c', text: 'Let everyone do the same task' },
          { id: 'd', text: 'Work alone with no plan' },
        ],
        correctId: 'a',
        explanation:
          'Clear roles and responsibilities reduce confusion and duplicated work, and increase accountability and efficiency.',
      },
      {
        kind: 'select',
        id: 'test-conflict',
        prompt: 'A teammate disagrees with you during a project. What is the professional way to handle it?',
        choices: [
          { id: 'a', text: 'Address the conflict calmly and professionally' },
          { id: 'b', text: 'Ignore them completely' },
          { id: 'c', text: 'Argue loudly in front of clients' },
          { id: 'd', text: 'Quit the project' },
        ],
        correctId: 'a',
        explanation:
          'Good teams address conflicts professionally and solve problems together, which leads to a more positive work environment.',
      },
      {
        kind: 'select',
        id: 'test-nda',
        prompt: 'You need to protect a confidential algorithm. Which tool helps?',
        choices: [
          { id: 'a', text: 'A Non-Disclosure Agreement (NDA)' },
          { id: 'b', text: 'A public blog post' },
          { id: 'c', text: 'A social media share' },
          { id: 'd', text: 'A patent poster on the wall' },
        ],
        correctId: 'a',
        explanation:
          'Trade secrets like algorithms are protected through contracts such as Non-Disclosure Agreements (NDAs) and good security.',
      },
    ],
  },
  {
    id: 'terms',
    title: 'IT Terms Challenge',
    subtitle: 'Match each IT term to its correct meaning.',
    icon: '🧩',
    week: 1,
    topic: 'IT terms and their meanings',
    questions: [
      {
        kind: 'match',
        id: 'terms-ip',
        prompt: 'Match each IP term to its meaning.',
        pairs: [
          { id: 'p1', term: 'Copyright', meaning: 'Protects original works like software and images' },
          { id: 'p2', term: 'Trademark', meaning: 'Protects brand names, logos and symbols' },
          { id: 'p3', term: 'Patent', meaning: 'Protects an invention or how something works' },
          { id: 'p4', term: 'Trade Secret', meaning: 'Protects confidential information like algorithms' },
          { id: 'p5', term: 'Industrial Design', meaning: 'Protects how a product looks' },
        ],
        explanation:
          'The five main IP types: Copyright (works), Trademark (brands), Patent (inventions), Trade Secret (confidential info) and Industrial Design (appearance).',
      },
      {
        kind: 'match',
        id: 'terms-law',
        prompt: 'Match each privacy and ethics term to its meaning.',
        pairs: [
          { id: 'l1', term: 'Privacy Act 1988', meaning: 'Main law for handling personal information' },
          { id: 'l2', term: 'APP', meaning: 'One of the Australian Privacy Principles' },
          { id: 'l3', term: 'NDB Scheme', meaning: 'Rules for reporting serious data breaches' },
          { id: 'l4', term: 'ACS Code of Ethics', meaning: 'Professional values for ICT workers' },
          { id: 'l5', term: 'IP Infringement', meaning: 'Using IP without permission or licence' },
        ],
        explanation:
          'The Privacy Act 1988 and its APPs protect personal data, the NDB scheme covers breach reporting, and the ACS Code of Ethics guides professional conduct.',
      },
      {
        kind: 'match',
        id: 'terms-team',
        prompt: 'Match each teamwork term to its meaning.',
        pairs: [
          { id: 't1', term: 'Teamwork', meaning: 'Working together toward a shared goal' },
          { id: 't2', term: 'Collaboration', meaning: 'Sharing ideas and solving problems together' },
          { id: 't3', term: 'Interdependence', meaning: 'Team members relying on one another' },
          { id: 't4', term: 'Shared responsibility', meaning: 'The whole team owns success and failure' },
        ],
        explanation:
          'Good teamwork combines collaboration, interdependence and shared responsibility to reach shared goals.',
      },
    ],
  },

  // ===================== WEEK 2 =====================
  // All Week 2 content comes from the Week 2 Work Skills slides
  // (Policies & Procedures, Team Structures, Goals, and ICT Support / ICTSAS305).
  {
    id: 'policies',
    title: 'Policies & Procedures',
    subtitle: 'Learn the difference between a policy and a procedure.',
    icon: '📕',
    week: 2,
    topic: 'Policies and procedures',
    questions: [
      {
        kind: 'select',
        id: 'policies-what-policy',
        prompt: 'What is a policy?',
        choices: [
          { id: 'a', text: 'A formal statement of an organisation’s rules, principles and expectations' },
          { id: 'b', text: 'A single email to one worker' },
          { id: 'c', text: 'A type of computer virus' },
          { id: 'd', text: 'A social media post' },
        ],
        correctId: 'a',
        explanation:
          'A policy is a formal statement that sets the direction and defines what is acceptable and unacceptable behaviour.',
      },
      {
        kind: 'select',
        id: 'policies-what-procedure',
        prompt: 'What is a procedure?',
        choices: [
          { id: 'a', text: 'A step-by-step set of instructions that explains how to carry out a policy' },
          { id: 'b', text: 'A general idea with no steps' },
          { id: 'c', text: 'A brand logo' },
          { id: 'd', text: 'A yearly party' },
        ],
        correctId: 'a',
        explanation:
          'A procedure explains how a policy is carried out in practice, step by step. This keeps work consistent and reduces errors.',
      },
      {
        kind: 'select',
        id: 'policies-what-vs-how',
        prompt: 'A policy explains the “what and why”. What does a procedure explain?',
        choices: [
          { id: 'a', text: 'How, when and by whom' },
          { id: 'b', text: 'Only the price' },
          { id: 'c', text: 'Nothing useful' },
          { id: 'd', text: 'The weather' },
        ],
        correctId: 'a',
        explanation:
          'Policies explain what and why; procedures explain how, when and by whom. Together they give compliance, consistency and accountability.',
      },
      {
        kind: 'select',
        id: 'policies-aup',
        prompt: 'Which is an example of an ICT policy?',
        choices: [
          { id: 'a', text: 'An Acceptable Use Policy (AUP) for company networks, devices and data' },
          { id: 'b', text: 'A lunch menu' },
          { id: 'c', text: 'A game download' },
          { id: 'd', text: 'A blank page' },
        ],
        correctId: 'a',
        explanation:
          'An Acceptable Use Policy (AUP) outlines how employees may use company networks, devices and data.',
      },
      {
        kind: 'select',
        id: 'policies-contribute',
        prompt: 'How can an individual worker help improve policies and procedures?',
        choices: [
          { id: 'a', text: 'By reporting risks, breaches or non-compliance and giving feedback' },
          { id: 'b', text: 'By ignoring all the rules' },
          { id: 'c', text: 'By hiding problems' },
          { id: 'd', text: 'By deleting the policy' },
        ],
        correctId: 'a',
        explanation:
          'Individuals contribute by giving feedback on policy effectiveness, reporting risks or breaches, joining training and suggesting improvements.',
      },
      {
        kind: 'select',
        id: 'policies-emerging',
        prompt: 'Which is an emerging legal and ethical issue in ICT?',
        choices: [
          { id: 'a', text: 'AI ethics and algorithmic bias' },
          { id: 'b', text: 'Choosing a desk colour' },
          { id: 'c', text: 'Picking a screensaver' },
          { id: 'd', text: 'The office plant' },
        ],
        correctId: 'a',
        explanation:
          'Emerging issues include AI ethics, algorithmic bias and the ethical implications of new technologies. These need proactive attention.',
      },
    ],
  },
  {
    id: 'teams',
    title: 'Team Structures',
    subtitle: 'Match and identify the common ICT team structures.',
    icon: '🏢',
    week: 2,
    topic: 'Team structures in ICT',
    questions: [
      {
        kind: 'match',
        id: 'teams-match',
        prompt: 'Match each team structure to its meaning.',
        pairs: [
          { id: 'm1', term: 'Hierarchical Team', meaning: 'Pyramid shape with a clear chain of command' },
          { id: 'm2', term: 'Cross-Functional Team', meaning: 'Members from different departments on a shared goal' },
          { id: 'm3', term: 'Self-Managed Team', meaning: 'Shares responsibility with minimal supervision' },
        ],
        explanation:
          'Hierarchical teams have vertical layers of authority, cross-functional teams mix skills from different areas, and self-managed teams run their own work with high trust.',
      },
      {
        kind: 'select',
        id: 'teams-hierarchical',
        prompt: 'In a hierarchical team, who usually makes the decisions?',
        choices: [
          { id: 'a', text: 'Managers or team leaders' },
          { id: 'b', text: 'Nobody' },
          { id: 'c', text: 'The newest staff member only' },
          { id: 'd', text: 'A random computer' },
        ],
        correctId: 'a',
        explanation:
          'A hierarchical team has a clear chain of command, so decisions are made by managers or team leaders.',
      },
      {
        kind: 'select',
        id: 'teams-cross',
        prompt:
          'A system upgrade needs network admins, developers and cybersecurity staff working together. Which structure fits best?',
        choices: [
          { id: 'a', text: 'A cross-functional team' },
          { id: 'b', text: 'A one-person team' },
          { id: 'c', text: 'No team at all' },
          { id: 'd', text: 'A team with only managers' },
        ],
        correctId: 'a',
        explanation:
          'Cross-functional teams bring together members from different departments or skills to achieve a shared, often complex, goal.',
      },
      {
        kind: 'select',
        id: 'teams-self',
        prompt:
          'An agile software team plans and manages its own work with little supervision. What is this called?',
        choices: [
          { id: 'a', text: 'A self-managed team' },
          { id: 'b', text: 'A hierarchical team' },
          { id: 'c', text: 'A helpdesk ticket' },
          { id: 'd', text: 'A privacy breach' },
        ],
        correctId: 'a',
        explanation:
          'Self-managed teams take collective responsibility for planning and managing their own work, and rely on high trust and accountability.',
      },
    ],
  },
  {
    id: 'goals',
    title: 'Goals & Getting Work Done',
    subtitle: 'Set SMART goals and handle everyday ICT work challenges.',
    icon: '🎯',
    week: 2,
    topic: 'Setting goals and managing work',
    questions: [
      {
        kind: 'select',
        id: 'goals-smart-s',
        prompt: 'In a SMART goal, what does the “S” stand for?',
        choices: [
          { id: 'a', text: 'Specific' },
          { id: 'b', text: 'Slow' },
          { id: 'c', text: 'Secret' },
          { id: 'd', text: 'Simple' },
        ],
        correctId: 'a',
        explanation:
          'SMART stands for Specific, Measurable, Achievable, Relevant and Time-bound. “Specific” clearly defines what needs to be done.',
      },
      {
        kind: 'select',
        id: 'goals-smart-t',
        prompt: 'What does “Time-bound” mean in a SMART goal?',
        choices: [
          { id: 'a', text: 'It has a deadline or timeframe' },
          { id: 'b', text: 'It never ends' },
          { id: 'c', text: 'It has no plan' },
          { id: 'd', text: 'It is only for managers' },
        ],
        correctId: 'a',
        explanation:
          'Time-bound means the goal has a clear deadline or timeframe, so progress can be tracked.',
      },
      {
        kind: 'select',
        id: 'goals-action-plan',
        prompt: 'What should an action plan include?',
        choices: [
          { id: 'a', text: 'Tasks, assigned responsibilities, resources and deadlines' },
          { id: 'b', text: 'Only one person’s name' },
          { id: 'c', text: 'A list of snacks' },
          { id: 'd', text: 'Nothing at all' },
        ],
        correctId: 'a',
        explanation:
          'An action plan turns team goals into clear steps: tasks to complete, who is responsible, resources needed, and deadlines and milestones.',
      },
      {
        kind: 'select',
        id: 'goals-time',
        prompt:
          'A technician doing maintenance is repeatedly interrupted by urgent helpdesk calls. This is a challenge of...',
        choices: [
          { id: 'a', text: 'Time management' },
          { id: 'b', text: 'Copyright' },
          { id: 'c', text: 'A trademark' },
          { id: 'd', text: 'A screensaver' },
        ],
        correctId: 'a',
        explanation:
          'ICT staff often juggle support requests, projects and admin tasks, so multiple deadlines and urgent issues compete for attention.',
      },
      {
        kind: 'select',
        id: 'goals-miscomm',
        prompt:
          'Two technicians unknowingly work on the same client issue because task ownership was not shared. What caused this?',
        choices: [
          { id: 'a', text: 'Miscommunication' },
          { id: 'b', text: 'Good teamwork' },
          { id: 'c', text: 'A patent' },
          { id: 'd', text: 'A backup' },
        ],
        correctId: 'a',
        explanation:
          'When team members do not share their tasks and priorities, it can lead to duplicated or missed work. Open communication prevents this.',
      },
      {
        kind: 'select',
        id: 'goals-strengths',
        prompt: 'What does “leveraging strengths” mean when sharing out work?',
        choices: [
          { id: 'a', text: 'Allocating tasks based on each person’s skills and experience' },
          { id: 'b', text: 'Giving everyone the exact same task' },
          { id: 'c', text: 'Letting the computer choose randomly' },
          { id: 'd', text: 'Only the manager does all the work' },
        ],
        correctId: 'a',
        explanation:
          'Leveraging strengths means allocating tasks based on individual skills and experience, e.g. assigning complex network troubleshooting to senior technicians.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Help the Client',
    subtitle: 'Support clients using service desk tiers and ticket steps.',
    icon: '🎧',
    week: 2,
    topic: 'ICT support services and client interactions',
    questions: [
      {
        kind: 'match',
        id: 'support-tiers',
        prompt: 'Match each service desk tier to what it does.',
        pairs: [
          { id: 's0', term: 'Tier 0 (Self-Help)', meaning: 'FAQs, knowledge base and chatbots' },
          { id: 's1', term: 'Tier 1 (Level 1)', meaning: 'First contact: logging tickets and password resets' },
          { id: 's2', term: 'Tier 2 (Level 2)', meaning: 'More complex issues like network troubleshooting' },
          { id: 's4', term: 'Tier 4 (External)', meaning: 'Outside or vendor support' },
        ],
        explanation:
          'Service desks are structured into tiers by complexity: Tier 0 self-help, Tier 1 first contact, Tier 2 more complex issues, up to Tier 4 external support.',
      },
      {
        kind: 'select',
        id: 'support-tier1-example',
        prompt: 'A student cannot log into their email account. Which tier usually handles this?',
        choices: [
          { id: 'a', text: 'Tier 1 – reset the password' },
          { id: 'b', text: 'Tier 4 – external vendor' },
          { id: 'c', text: 'No tier can help' },
          { id: 'd', text: 'The client fixes the server themselves' },
        ],
        correctId: 'a',
        explanation:
          'Tier 1 is the first point of contact for simple fixes like password resets and basic troubleshooting.',
      },
      {
        kind: 'order',
        id: 'support-resolve',
        prompt: 'Tap the steps to resolve a client’s problem in the correct order.',
        items: [
          { id: 'r1', text: 'Implement the resolution' },
          { id: 'r2', text: 'Confirm the fix works' },
          { id: 'r3', text: 'Update the ticket documentation' },
          { id: 'r4', text: 'Close the ticket' },
        ],
        correctOrder: ['r1', 'r2', 'r3', 'r4'],
        explanation:
          'To resolve an issue you implement the fix, confirm it works (test with the client), update the ticket documentation, then close the ticket.',
      },
      {
        kind: 'select',
        id: 'support-escalate',
        prompt: 'A software licence issue needs the vendor’s help. What should you do when escalating?',
        choices: [
          { id: 'a', text: 'Record the steps taken, update the priority, and assign it to Tier 2 or 3' },
          { id: 'b', text: 'Delete the ticket' },
          { id: 'c', text: 'Ignore the client' },
          { id: 'd', text: 'Turn off your computer' },
        ],
        correctId: 'a',
        explanation:
          'Escalation makes sure complex or urgent issues reach the right level. You record the troubleshooting steps taken, update the priority and assign it to a higher tier.',
      },
      {
        kind: 'select',
        id: 'support-feedback-loop',
        prompt: 'What is the purpose of a feedback loop?',
        choices: [
          { id: 'a', text: 'To collect client feedback, analyse it and use it to improve services' },
          { id: 'b', text: 'To send the same reply forever' },
          { id: 'c', text: 'To avoid ever changing anything' },
          { id: 'd', text: 'To hide complaints' },
        ],
        correctId: 'a',
        explanation:
          'A feedback loop means collecting client feedback, analysing it and using it to improve services. The process is followed continually, creating the “loop”.',
      },
    ],
  },
  {
    id: 'terms2',
    title: 'Week 2 Terms Challenge',
    subtitle: 'Match the Week 2 IT terms to their meanings.',
    icon: '🧠',
    week: 2,
    topic: 'Week 2 IT terms and their meanings',
    questions: [
      {
        kind: 'match',
        id: 'terms2-policies',
        prompt: 'Match each policy and goal term to its meaning.',
        pairs: [
          { id: 'p1', term: 'Policy', meaning: 'A formal statement of rules and expectations' },
          { id: 'p2', term: 'Procedure', meaning: 'Step-by-step instructions to carry out a policy' },
          { id: 'p3', term: 'Acceptable Use Policy', meaning: 'Rules for using company networks and devices' },
          { id: 'p4', term: 'SMART goal', meaning: 'Specific, Measurable, Achievable, Relevant, Time-bound' },
        ],
        explanation:
          'A policy sets the rules (what and why), a procedure explains how to follow it, an AUP covers using company systems, and SMART goals are clear and trackable.',
      },
      {
        kind: 'match',
        id: 'terms2-teams',
        prompt: 'Match each team structure to its meaning.',
        pairs: [
          { id: 'h1', term: 'Hierarchical team', meaning: 'Clear chain of command, managers decide' },
          { id: 'h2', term: 'Cross-functional team', meaning: 'Members from different departments or skills' },
          { id: 'h3', term: 'Self-managed team', meaning: 'Runs its own work with little supervision' },
        ],
        explanation:
          'Hierarchical teams have layers of authority, cross-functional teams mix skills across departments, and self-managed teams share responsibility with high trust.',
      },
      {
        kind: 'match',
        id: 'terms2-support',
        prompt: 'Match each ICT support term to its meaning.',
        pairs: [
          { id: 's1', term: 'Ticketing system', meaning: 'Software to log and track support requests' },
          { id: 's2', term: 'Escalation', meaning: 'Passing an issue to a higher support tier' },
          { id: 's3', term: 'Feedback loop', meaning: 'Collect, analyse and use feedback to improve' },
          { id: 's4', term: 'Tier 0 (Self-Help)', meaning: 'FAQs, knowledge base and chatbots' },
        ],
        explanation:
          'Ticketing systems track requests, escalation moves hard issues up a tier, feedback loops keep improving services, and Tier 0 lets clients help themselves.',
      },
    ],
  },

  // ===================== WEEK 3 =====================
  // All Week 3 content comes from the Week 3 Work Skills slides, covering
  // BSBXTW301 / ICTSAS305 (time management, Agile, meetings, team tools and
  // communication) and ICTICT313 (ethical principles and policy frameworks).
  {
    id: 'time',
    title: 'Manage Your Time',
    subtitle: 'Plan, prioritise and keep the whole team on schedule.',
    icon: '🕒',
    week: 3,
    topic: 'Time management and prioritisation',
    questions: [
      {
        kind: 'select',
        id: 'time-what',
        prompt: 'What is time management?',
        choices: [
          { id: 'a', text: 'Organising and planning how much time to spend on different activities' },
          { id: 'b', text: 'Doing tasks in a random order' },
          { id: 'c', text: 'Working with no plan at all' },
          { id: 'd', text: 'Avoiding every deadline' },
        ],
        correctId: 'a',
        explanation:
          'Time management is the process of organising and planning how much time to spend on activities, prioritising work by urgency and importance.',
      },
      {
        kind: 'select',
        id: 'time-priority',
        prompt:
          'A banking app has a typo, a security vulnerability and a colour-change request. Which is fixed FIRST?',
        choices: [
          { id: 'a', text: 'The security vulnerability' },
          { id: 'b', text: 'The typo on the homepage' },
          { id: 'c', text: 'The colour change' },
          { id: 'd', text: 'None of them' },
        ],
        correctId: 'a',
        explanation:
          'Teams prioritise by business impact and risk, so the security vulnerability comes first, then client-deadline work, then the minor typo.',
      },
      {
        kind: 'select',
        id: 'time-eisenhower',
        prompt: 'The Eisenhower Matrix sorts tasks using which two questions?',
        choices: [
          { id: 'a', text: 'Is it urgent? Is it important?' },
          { id: 'b', text: 'Is it big? Is it small?' },
          { id: 'c', text: 'Is it cheap? Is it new?' },
          { id: 'd', text: 'Is it fun? Is it boring?' },
        ],
        correctId: 'a',
        explanation:
          'The Eisenhower Matrix prioritises work by asking whether a task is urgent (needs immediate attention) and whether it is important (linked to your goals).',
      },
      {
        kind: 'select',
        id: 'time-habits',
        prompt: 'Which is a good time-management habit in an ICT team?',
        choices: [
          { id: 'a', text: 'Break big tasks into smaller ones and avoid multitasking' },
          { id: 'b', text: 'Constantly switch between tasks' },
          { id: 'c', text: 'Leave all notifications on all day' },
          { id: 'd', text: 'Never review your priorities' },
        ],
        correctId: 'a',
        explanation:
          'Good ICT professionals estimate task duration by breaking work down, avoid multitasking, reduce distractions and regularly review priorities.',
      },
      {
        kind: 'select',
        id: 'time-impact',
        prompt:
          'A network technician delays configuring a server. What is the likely result for the team?',
        choices: [
          { id: 'a', text: 'Software installation, testing and client deployment are all delayed' },
          { id: 'b', text: 'Nothing changes' },
          { id: 'c', text: 'The project finishes early' },
          { id: 'd', text: 'The client is happier' },
        ],
        correctId: 'a',
        explanation:
          'In a team, one person’s work affects others. One missed task can delay the whole project — software can’t be installed, testing is delayed and deployment is postponed.',
      },
    ],
  },
  {
    id: 'agile',
    title: 'Work the Agile Way',
    subtitle: 'Deliver work in short sprints using Scrum.',
    icon: '🔁',
    week: 3,
    topic: 'Agile and Scrum for team task management',
    questions: [
      {
        kind: 'select',
        id: 'agile-what',
        prompt: 'What is Agile?',
        choices: [
          { id: 'a', text: 'Delivering work in small stages with continuous feedback and improvement' },
          { id: 'b', text: 'Planning everything upfront and never changing' },
          { id: 'c', text: 'Working alone with no feedback' },
          { id: 'd', text: 'A type of firewall' },
        ],
        correctId: 'a',
        explanation:
          'Agile delivers work in small, manageable stages while encouraging continuous collaboration and improvement, adapting to changes as feedback arrives.',
      },
      {
        kind: 'select',
        id: 'agile-roles',
        prompt: 'Which three roles make up a Scrum team?',
        choices: [
          { id: 'a', text: 'Product Owner, Scrum Master and Development Team' },
          { id: 'b', text: 'Only a single manager' },
          { id: 'c', text: 'Client, hacker and vendor' },
          { id: 'd', text: 'Tier 1, Tier 2 and Tier 3' },
        ],
        correctId: 'a',
        explanation:
          'A Scrum team usually includes a Product Owner, a Scrum Master and the Development Team.',
      },
      {
        kind: 'select',
        id: 'agile-sprint',
        prompt: 'What is a sprint?',
        choices: [
          { id: 'a', text: 'A fixed 2–4 week burst of focused work ending with a working product' },
          { id: 'b', text: 'A short 15-minute daily meeting' },
          { id: 'c', text: 'A type of privacy law' },
          { id: 'd', text: 'A project that never ends' },
        ],
        correctId: 'a',
        explanation:
          'A sprint is a short, fixed period of work (usually 2–4 weeks). At the end, a working product is delivered, feedback is collected and improvements are planned.',
      },
      {
        kind: 'select',
        id: 'agile-standup',
        prompt: 'In a daily stand-up, what does each team member share?',
        choices: [
          { id: 'a', text: 'What they did yesterday, what they’ll do today, and any obstacles' },
          { id: 'b', text: 'Their favourite food' },
          { id: 'c', text: 'The full project budget' },
          { id: 'd', text: 'Nothing at all' },
        ],
        correctId: 'a',
        explanation:
          'A stand-up is a short (about 15-minute) daily meeting where each member says what they completed yesterday, what they’ll work on today, and what obstacles they face.',
      },
      {
        kind: 'order',
        id: 'agile-workflow',
        prompt: 'Tap the Scrum workflow steps in the correct order.',
        items: [
          { id: 'sc1', text: 'Product Backlog: a prioritised list of all work' },
          { id: 'sc2', text: 'Sprint Planning: choose the work for the sprint' },
          { id: 'sc3', text: 'Sprint: complete the planned work' },
          { id: 'sc4', text: 'Sprint Review: demo the work and get feedback' },
          { id: 'sc5', text: 'Sprint Retrospective: reflect and improve' },
        ],
        correctOrder: ['sc1', 'sc2', 'sc3', 'sc4', 'sc5'],
        explanation:
          'Scrum flows from a prioritised Product Backlog into Sprint Planning, the Sprint itself, a Sprint Review to gather feedback, and a Retrospective to improve the next sprint.',
      },
    ],
  },
  {
    id: 'meetings',
    title: 'Meetings That Work',
    subtitle: 'Run formal meetings and keep good records.',
    icon: '📅',
    week: 3,
    topic: 'Formal meetings and documentation',
    questions: [
      {
        kind: 'order',
        id: 'meetings-stages',
        prompt: 'Tap the three stages of a formal meeting in order.',
        items: [
          { id: 'mt1', text: 'Before: prepare an agenda and send invitations' },
          { id: 'mt2', text: 'During: follow the agenda and agree on actions' },
          { id: 'mt3', text: 'After: confirm decisions, assign tasks and follow up' },
        ],
        correctOrder: ['mt1', 'mt2', 'mt3'],
        explanation:
          'A formal meeting has three stages: preparation before, execution during, and closure and follow-up after.',
      },
      {
        kind: 'select',
        id: 'meetings-agenda',
        prompt: 'What is a meeting agenda?',
        choices: [
          { id: 'a', text: 'A structured outline of the topics to be discussed' },
          { id: 'b', text: 'A written record made after the meeting' },
          { id: 'c', text: 'A brand logo' },
          { id: 'd', text: 'A software licence' },
        ],
        correctId: 'a',
        explanation:
          'An agenda is a structured outline of topics to be discussed. It helps attendees prepare and keeps the meeting on track.',
      },
      {
        kind: 'select',
        id: 'meetings-minutes',
        prompt: 'What are meeting minutes?',
        choices: [
          { id: 'a', text: 'A written record of discussions, decisions and action items' },
          { id: 'b', text: 'A list of topics to discuss next time' },
          { id: 'c', text: 'The meeting’s start time only' },
          { id: 'd', text: 'A type of firewall' },
        ],
        correctId: 'a',
        explanation:
          'Minutes are a written record of what happened: attendees, key discussion points, decisions, action items and deadlines. They should be clear, objective and distributed promptly.',
      },
      {
        kind: 'select',
        id: 'meetings-followup',
        prompt: 'Why is meeting follow-up critical?',
        choices: [
          { id: 'a', text: 'It ensures accountability and that tasks actually get done' },
          { id: 'b', text: 'It wastes everyone’s time' },
          { id: 'c', text: 'It hides decisions from the team' },
          { id: 'd', text: 'It replaces the need for an agenda' },
        ],
        correctId: 'a',
        explanation:
          'Without follow-up, tasks may not be completed, clients may lose confidence and issues may remain unresolved. Distributing minutes (ideally within 24 hours) and tracking action items keeps progress on track.',
      },
    ],
  },
  {
    id: 'teamtools',
    title: 'Team Tools & Talk',
    subtitle: 'Use the right tools and communicate clearly.',
    icon: '💬',
    week: 3,
    topic: 'Team tools and effective communication',
    questions: [
      {
        kind: 'match',
        id: 'teamtools-tools',
        prompt: 'Match each team tool or strategy to what it does.',
        pairs: [
          { id: 'tt1', term: 'Project management software', meaning: 'Assign tasks, set deadlines and track progress (e.g. Jira, Trello)' },
          { id: 'tt2', term: 'Shared calendar', meaning: 'Coordinate milestones and meetings and avoid clashes' },
          { id: 'tt3', term: 'Task tracking', meaning: 'Monitor progress, completion, delays and blockers' },
          { id: 'tt4', term: 'Time-blocking', meaning: 'Schedule dedicated blocks of time for specific tasks' },
        ],
        explanation:
          'Teams use project management software (Jira, Asana, Trello, Planner) to allocate work, shared calendars to coordinate, task tracking to monitor progress, and time-blocking to stay focused.',
      },
      {
        kind: 'select',
        id: 'teamtools-listening',
        prompt: 'What is active listening?',
        choices: [
          { id: 'a', text: 'Giving full attention, asking clarifying questions and summarising what you heard' },
          { id: 'b', text: 'Talking over the speaker' },
          { id: 'c', text: 'Checking your phone while they talk' },
          { id: 'd', text: 'Ignoring the message' },
        ],
        correctId: 'a',
        explanation:
          'Active listening means giving full attention to the speaker, avoiding interrupting, asking clarifying questions and summarising what you heard.',
      },
      {
        kind: 'select',
        id: 'teamtools-clarity',
        prompt: 'Which instruction shows good clarity?',
        choices: [
          { id: 'a', text: '“Please complete the user testing report by 3:00 pm Friday.”' },
          { id: 'b', text: '“Finish this soon.”' },
          { id: 'c', text: '“Do the thing.”' },
          { id: 'd', text: '“We’ll sort it out later.”' },
        ],
        correctId: 'a',
        explanation:
          'Clear communication is specific about deadlines, responsibilities and expectations. “Complete the report by 3pm Friday” is far clearer than “finish this soon.”',
      },
      {
        kind: 'select',
        id: 'teamtools-informed',
        prompt:
          'A technician records their investigation steps in the helpdesk system before finishing their shift. Why does this matter?',
        choices: [
          { id: 'a', text: 'The next technician can continue without restarting the process' },
          { id: 'b', text: 'It hides information from the team' },
          { id: 'c', text: 'It is against policy' },
          { id: 'd', text: 'It wastes time' },
        ],
        correctId: 'a',
        explanation:
          'Keeping the team informed with documented updates (not just verbal ones) ensures continuity, so the next person can continue troubleshooting without starting over.',
      },
      {
        kind: 'select',
        id: 'teamtools-feedback',
        prompt: 'What is constructive feedback?',
        choices: [
          { id: 'a', text: 'Specific, respectful, behaviour-focused information that supports improvement' },
          { id: 'b', text: 'Calling someone “careless”' },
          { id: 'c', text: 'A personal attack' },
          { id: 'd', text: 'Saying nothing at all' },
        ],
        correctId: 'a',
        explanation:
          'Effective feedback is clear, objective and behaviour-focused. Instead of “you’re careless”, say “the ticket notes were incomplete, which delayed resolution — please include detailed steps next time.”',
      },
    ],
  },
  {
    id: 'ethics',
    title: 'Ethics in Action',
    subtitle: 'Apply the principles behind IP, ethics and privacy.',
    icon: '⚖️',
    week: 3,
    topic: 'Principles applied in IP, ethics and privacy',
    questions: [
      {
        kind: 'match',
        id: 'ethics-principles-1',
        prompt: 'Match each ethical principle to its meaning.',
        pairs: [
          { id: 'e1', term: 'Transparency', meaning: 'Clearly communicate how data and IP are used and stored' },
          { id: 'e2', term: 'Accountability', meaning: 'Assign responsibility for actions and compliance' },
          { id: 'e3', term: 'Proportionality', meaning: 'Only collect data that matches the organisation’s need' },
          { id: 'e4', term: 'Consent and Choice', meaning: 'Individuals control how their data is used' },
        ],
        explanation:
          'Transparency, accountability, proportionality and consent (with minimisation, fairness and continuous improvement) help organisations uphold IP, ethics and privacy values.',
      },
      {
        kind: 'match',
        id: 'ethics-principles-2',
        prompt: 'Match the remaining ethical principles.',
        pairs: [
          { id: 'e5', term: 'Minimisation & Data Protection', meaning: 'Collect minimal data and secure it well' },
          { id: 'e6', term: 'Fairness & Non-Discrimination', meaning: 'Treat individuals equitably and avoid bias' },
          { id: 'e7', term: 'Continuous Improvement', meaning: 'Review and update policies as technology changes' },
        ],
        explanation:
          'Data minimisation reduces risk, fairness prevents biased outcomes, and continuous improvement keeps policies relevant through regular reviews, audits and training.',
      },
      {
        kind: 'select',
        id: 'ethics-example',
        prompt: 'Which is an example of ethical ICT practice?',
        choices: [
          { id: 'a', text: 'Refusing to install pirated software for a client' },
          { id: 'b', text: 'Sharing customer data for fun' },
          { id: 'c', text: 'Ignoring copyright on training materials' },
          { id: 'd', text: 'Bypassing acceptable use policies' },
        ],
        correctId: 'a',
        explanation:
          'Ethical practice includes refusing to install pirated software, reporting accidental data exposure, following acceptable use policies and respecting copyright.',
      },
      {
        kind: 'select',
        id: 'ethics-proportionality',
        prompt: 'Why does the principle of proportionality matter?',
        choices: [
          { id: 'a', text: 'Excessive data handling increases risk and reduces trust' },
          { id: 'b', text: 'More data is always better' },
          { id: 'c', text: 'Privacy does not matter' },
          { id: 'd', text: 'Monitoring should be unlimited' },
        ],
        correctId: 'a',
        explanation:
          'Proportionality means only collecting data necessary for legitimate purposes and not monitoring beyond operational need, because excessive data handling increases risk and reduces trust.',
      },
    ],
  },
  {
    id: 'framework',
    title: 'Build a Policy Framework',
    subtitle: 'Learn the parts that make a policy clear and enforceable.',
    icon: '🏛️',
    week: 3,
    topic: 'Policy frameworks',
    questions: [
      {
        kind: 'match',
        id: 'framework-parts-1',
        prompt: 'Match each policy-framework section to what it does.',
        pairs: [
          { id: 'f1', term: 'Purpose & Definition', meaning: 'States why the policy exists and defines key terms' },
          { id: 'f2', term: 'Scope', meaning: 'Specifies who and what the policy applies to' },
          { id: 'f3', term: 'Detailed Policies', meaning: 'Provides actionable rules (allowed vs prohibited)' },
          { id: 'f4', term: 'Roles & Responsibilities', meaning: 'Assigns who enforces, monitors and follows it' },
        ],
        explanation:
          'A policy framework defines its purpose and terms, scope, guiding principles, detailed rules, roles, enforcement and review, and flexibility.',
      },
      {
        kind: 'match',
        id: 'framework-parts-2',
        prompt: 'Match the remaining framework sections.',
        pairs: [
          { id: 'f5', term: 'Guiding Principles', meaning: 'Core values like transparency and accountability' },
          { id: 'f6', term: 'Enforcement & Review', meaning: 'Disciplinary processes and scheduled reviews' },
          { id: 'f7', term: 'Flexibility', meaning: 'Lets the policy adapt to new technology' },
        ],
        explanation:
          'Guiding principles shape decisions, enforcement and review keep the policy taken seriously and current, and flexibility lets it adapt (e.g. adopting new cloud services).',
      },
      {
        kind: 'select',
        id: 'framework-purpose',
        prompt: 'What is the purpose of a policy framework?',
        choices: [
          { id: 'a', text: 'To give structured guidance ensuring consistency, legal compliance and clarity' },
          { id: 'b', text: 'To make work more confusing' },
          { id: 'c', text: 'To replace the law' },
          { id: 'd', text: 'To store customer passwords' },
        ],
        correctId: 'a',
        explanation:
          'Policy frameworks provide structured guidance for managing IP, ethics and privacy obligations, ensuring consistency, legal compliance and organisational clarity.',
      },
      {
        kind: 'select',
        id: 'framework-scope',
        prompt: 'The Scope section of a policy defines...',
        choices: [
          { id: 'a', text: 'Who and what the policy applies to' },
          { id: 'b', text: 'The office colour scheme' },
          { id: 'c', text: 'The lunch menu' },
          { id: 'd', text: 'The Wi-Fi password' },
        ],
        correctId: 'a',
        explanation:
          'Scope specifies who (employees, contractors) and what (systems, data types) the policy applies to, preventing ambiguity.',
      },
    ],
  },
  {
    id: 'terms3',
    title: 'Week 3 Terms Challenge',
    subtitle: 'Match the Week 3 IT terms to their meanings.',
    icon: '🧩',
    week: 3,
    topic: 'Week 3 IT terms and their meanings',
    questions: [
      {
        kind: 'match',
        id: 'terms3-agile',
        prompt: 'Match each time and Agile term to its meaning.',
        pairs: [
          { id: 'a1', term: 'Time management', meaning: 'Organising how much time to spend on tasks' },
          { id: 'a2', term: 'Eisenhower Matrix', meaning: 'Sorts tasks by urgency and importance' },
          { id: 'a3', term: 'Sprint', meaning: 'A fixed 2–4 week burst of focused work' },
          { id: 'a4', term: 'Stand-up', meaning: 'A short daily meeting to share progress and blockers' },
        ],
        explanation:
          'Time management and the Eisenhower Matrix help prioritise work, while sprints and stand-ups are core parts of Agile Scrum.',
      },
      {
        kind: 'match',
        id: 'terms3-comms',
        prompt: 'Match each meeting and communication term to its meaning.',
        pairs: [
          { id: 'c1', term: 'Agenda', meaning: 'An outline of the topics to discuss' },
          { id: 'c2', term: 'Minutes', meaning: 'A written record of decisions and actions' },
          { id: 'c3', term: 'Active listening', meaning: 'Full attention, clarifying questions, summarising' },
          { id: 'c4', term: 'Time-blocking', meaning: 'Scheduling dedicated time for each task' },
        ],
        explanation:
          'Agendas and minutes keep meetings organised and recorded, while active listening and time-blocking support clear, focused teamwork.',
      },
      {
        kind: 'match',
        id: 'terms3-ethics',
        prompt: 'Match each ethics and framework term to its meaning.',
        pairs: [
          { id: 'x1', term: 'Transparency', meaning: 'Clearly communicating how data is used' },
          { id: 'x2', term: 'Accountability', meaning: 'Responsibility for actions and compliance' },
          { id: 'x3', term: 'Data minimisation', meaning: 'Collecting only essential data' },
          { id: 'x4', term: 'Policy framework', meaning: 'Structured guidance for IP, ethics and privacy' },
        ],
        explanation:
          'Transparency, accountability and data minimisation are ethical principles, and a policy framework is the structure that puts them into practice.',
      },
    ],
  },
];

/** Find a mission by its id (used by the mission screen). */
export function getMission(id: string): Mission | undefined {
  return missions.find((m) => m.id === id);
}
