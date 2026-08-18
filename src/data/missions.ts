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

  // ===================================================================
  // Week 3 missions.
  // Built from the Week 3 Work Skills notes (BSBXTW301 Work in a Team &
  // ICTSAS305: time management, Agile, meetings, communication; and
  // ICTICT313: principles applied in IP/ethics/privacy and policy
  // frameworks). Nothing here is invented outside those notes.
  // ===================================================================
  {
    id: 'time',
    title: 'Manage Your Time',
    subtitle: 'Prioritise work and use good time-management habits.',
    icon: '⏰',
    week: 3,
    topic: 'Time management: prioritisation and the Eisenhower Matrix',
    questions: [
      {
        kind: 'select',
        id: 'time-what',
        prompt: 'What is time management?',
        choices: [
          {
            id: 'a',
            text: 'Organising and planning how much time to spend on different activities',
          },
          { id: 'b', text: 'Doing every task at exactly the same time' },
          { id: 'c', text: 'Only working when you feel like it' },
          { id: 'd', text: 'Letting the client decide your whole day' },
        ],
        correctId: 'a',
        explanation:
          'Time management is organising and planning how much time to spend on different activities, prioritising work by urgency and importance instead of doing tasks randomly.',
      },
      {
        kind: 'select',
        id: 'time-breakdown',
        prompt:
          'Instead of one big task "Finish website", what is the better time-management habit?',
        choices: [
          { id: 'a', text: 'Leave it all until the deadline' },
          {
            id: 'b',
            text: 'Break it into smaller tasks with time estimates',
          },
          { id: 'c', text: 'Ask someone else to do it' },
          { id: 'd', text: 'Work on ten tasks at once' },
        ],
        correctId: 'b',
        explanation:
          'Estimating task duration and breaking work into smaller tasks (create homepage, design contact page, test navigation, fix bugs) makes it far easier to manage.',
      },
      {
        kind: 'select',
        id: 'time-multitask',
        prompt: 'Why should you avoid constant multitasking?',
        choices: [
          { id: 'a', text: 'It looks impressive to the boss' },
          { id: 'b', text: 'Switching between tasks reduces productivity' },
          { id: 'c', text: 'It uses less electricity' },
          { id: 'd', text: 'There is no reason to avoid it' },
        ],
        correctId: 'b',
        explanation:
          'Research shows constantly switching between tasks reduces productivity. Finish one important task before starting another, and reduce distractions to stay focused.',
      },
      {
        kind: 'select',
        id: 'time-eisenhower',
        prompt: 'The Eisenhower Matrix sorts tasks using which two questions?',
        choices: [
          { id: 'a', text: 'Is it cheap? Is it fun?' },
          { id: 'b', text: 'Is it urgent? Is it important?' },
          { id: 'c', text: 'Is it easy? Is it long?' },
          { id: 'd', text: 'Is it new? Is it old?' },
        ],
        correctId: 'b',
        explanation:
          'The Eisenhower Matrix helps you prioritise by asking "Is it urgent?" (needs immediate attention) and "Is it important?" (helps achieve your goals).',
      },
      {
        kind: 'select',
        id: 'time-blocking',
        prompt: 'What is time-blocking?',
        choices: [
          {
            id: 'a',
            text: 'Dividing your day into blocks and assigning each block to a task',
          },
          { id: 'b', text: 'Blocking coworkers from messaging you all day' },
          { id: 'c', text: 'Refusing to schedule any meetings' },
          { id: 'd', text: 'Working only in the last hour of the day' },
        ],
        correctId: 'a',
        explanation:
          'Time-blocking divides your workday into blocks and assigns each block to a task, so important work gets dedicated, focused time instead of constant task-switching.',
      },
      {
        kind: 'order',
        id: 'time-priority',
        prompt:
          'A banking app has three issues. Tap them in the correct priority order (most important first).',
        items: [
          { id: 't1', text: 'Security vulnerability' },
          { id: 't2', text: 'Colour change requested for a client deadline' },
          { id: 't3', text: 'Typo on the homepage' },
        ],
        correctOrder: ['t1', 't2', 't3'],
        explanation:
          'Prioritise by business impact and risk: fix the security vulnerability first, then the colour change if a client deadline requires it, and the low-impact typo last.',
      },
    ],
  },
  {
    id: 'agile',
    title: 'Agile & Scrum',
    subtitle: 'Deliver work in small stages using Scrum.',
    icon: '🔁',
    week: 3,
    topic: 'Agile task management: Scrum, sprints and stand-ups',
    questions: [
      {
        kind: 'select',
        id: 'agile-what',
        prompt: 'What is the Agile approach?',
        choices: [
          {
            id: 'a',
            text: 'Delivering work in small stages with continuous feedback and improvement',
          },
          { id: 'b', text: 'Planning everything upfront and never changing it' },
          { id: 'c', text: 'Working alone with no collaboration' },
          { id: 'd', text: 'Only releasing the product once, at the very end' },
        ],
        correctId: 'a',
        explanation:
          'Agile delivers work in small, manageable stages while encouraging continuous collaboration and improvement — teams deliver regularly, gather feedback and adapt to change.',
      },
      {
        kind: 'select',
        id: 'agile-scrum-roles',
        prompt: 'Which roles make up a Scrum team?',
        choices: [
          { id: 'a', text: 'Only a single project manager' },
          {
            id: 'b',
            text: 'Product Owner, Scrum Master and Development Team',
          },
          { id: 'c', text: 'Just the client and a tester' },
          { id: 'd', text: 'Sales, marketing and finance' },
        ],
        correctId: 'b',
        explanation:
          'A Scrum team usually includes a Product Owner, a Scrum Master and the Development Team, working together in repeating iterations.',
      },
      {
        kind: 'select',
        id: 'agile-sprint',
        prompt: 'What is a sprint in Scrum?',
        choices: [
          { id: 'a', text: 'A fixed period of focused work, usually 2–4 weeks' },
          { id: 'b', text: 'A single 15-minute meeting' },
          { id: 'c', text: 'The final release day only' },
          { id: 'd', text: 'A type of programming language' },
        ],
        correctId: 'a',
        explanation:
          'A sprint is a fixed period of focused work, usually 2–4 weeks. At the end, a working product is delivered, feedback is collected and improvements are planned.',
      },
      {
        kind: 'select',
        id: 'agile-standup',
        prompt:
          'At a daily stand-up, which three questions does each team member answer?',
        choices: [
          {
            id: 'a',
            text: 'What did I do yesterday? What will I do today? What is blocking me?',
          },
          { id: 'b', text: 'What did I eat? Who did I see? Where did I go?' },
          { id: 'c', text: 'How much do I earn? Who is my boss? When is lunch?' },
          { id: 'd', text: 'What will I do next year? In 5 years? In 10 years?' },
        ],
        correctId: 'a',
        explanation:
          'A stand-up is a short (about 15-minute) daily meeting where each member says what they completed yesterday, what they will do today, and what obstacles they face.',
      },
      {
        kind: 'fill',
        id: 'agile-sprint-fill',
        prompt:
          'In Scrum, the fixed 2–4 week period of focused work is called a ______.',
        acceptedAnswers: ['sprint'],
        hint: 'It ends with a working product and a review.',
        explanation:
          'A sprint is a fixed period of focused work (usually 2–4 weeks) that delivers a working product increment and gathers feedback.',
      },
      {
        kind: 'order',
        id: 'agile-workflow',
        prompt: 'Tap the Scrum workflow steps in the correct order.',
        items: [
          { id: 'w1', text: 'Sprint Planning: decide what to complete' },
          { id: 'w2', text: 'Sprint: do the planned work in a fixed time' },
          { id: 'w3', text: 'Daily Stand-ups: share progress and blockers' },
          { id: 'w4', text: 'Sprint Review: demo work and gather feedback' },
          { id: 'w5', text: 'Sprint Retrospective: reflect and improve' },
        ],
        correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5'],
        explanation:
          'Scrum flows from Sprint Planning into the Sprint (with daily stand-ups throughout), then a Sprint Review to demo and gather feedback, and a Retrospective to improve the next sprint.',
      },
    ],
  },
  {
    id: 'meetings',
    title: 'Run a Meeting',
    subtitle: 'Prepare, run and follow up on a formal client meeting.',
    icon: '🗓️',
    week: 3,
    topic: 'Meetings: stages, documentation and follow-up',
    questions: [
      {
        kind: 'select',
        id: 'meetings-formal',
        prompt: 'What is a formal meeting?',
        choices: [
          {
            id: 'a',
            text: 'A structured discussion with a clear purpose, agenda and expected outcomes',
          },
          { id: 'b', text: 'A random chat with no plan' },
          { id: 'c', text: 'A meeting where no decisions are allowed' },
          { id: 'd', text: 'A social lunch with clients' },
        ],
        correctId: 'a',
        explanation:
          'A formal meeting is a structured discussion between professionals with a clear purpose, agenda and expected outcomes — used to analyse issues, discuss solutions and agree on next steps.',
      },
      {
        kind: 'select',
        id: 'meetings-agenda',
        prompt: 'What is a meeting agenda?',
        choices: [
          { id: 'a', text: 'A written record of what happened after the meeting' },
          {
            id: 'b',
            text: 'A structured outline of topics to be discussed, prepared beforehand',
          },
          { id: 'c', text: 'The list of people who were absent' },
          { id: 'd', text: 'The bill for the meeting room' },
        ],
        correctId: 'b',
        explanation:
          'An agenda is a structured outline of the topics to be discussed. It is prepared before the meeting so attendees can prepare and the discussion stays on track.',
      },
      {
        kind: 'select',
        id: 'meetings-minutes',
        prompt: 'What are meeting minutes?',
        choices: [
          { id: 'a', text: 'How long the meeting lasted' },
          {
            id: 'b',
            text: 'A written record of discussion points, decisions and action items',
          },
          { id: 'c', text: 'A plan of future topics' },
          { id: 'd', text: 'The seating arrangement' },
        ],
        correctId: 'b',
        explanation:
          'Minutes are a written record of what happened: key discussion points, decisions made, action items and deadlines. They should be clear, concise, objective and distributed promptly.',
      },
      {
        kind: 'select',
        id: 'meetings-followup',
        prompt: 'How soon should meeting minutes usually be distributed?',
        choices: [
          { id: 'a', text: 'Within 24 hours' },
          { id: 'b', text: 'Within 3 weeks' },
          { id: 'c', text: 'Only if someone asks' },
          { id: 'd', text: 'Never — they are kept secret' },
        ],
        correctId: 'a',
        explanation:
          'Follow-up matters: distribute minutes within 24 hours to all stakeholders, then monitor action items so tasks get done and clients keep their confidence in the team.',
      },
      {
        kind: 'order',
        id: 'meetings-stages',
        prompt: 'Tap the stages of a formal meeting in the correct order.',
        items: [
          { id: 'm1', text: 'Before: set the purpose and prepare an agenda' },
          { id: 'm2', text: 'During: follow the agenda and listen actively' },
          { id: 'm3', text: 'During: agree on solutions and actions' },
          { id: 'm4', text: 'After: confirm decisions, assign tasks, set deadlines' },
        ],
        correctOrder: ['m1', 'm2', 'm3', 'm4'],
        explanation:
          'A formal meeting has three stages: preparation (purpose and agenda), execution (follow the agenda, listen, agree on actions), and closure/follow-up (confirm decisions, assign responsibilities and set deadlines).',
      },
    ],
  },
  {
    id: 'communicate',
    title: 'Communicate Well',
    subtitle: 'Listen actively, be clear and handle feedback professionally.',
    icon: '💬',
    week: 3,
    topic: 'Team communication: listening, clarity, conflict and feedback',
    questions: [
      {
        kind: 'select',
        id: 'comms-listening',
        prompt: 'What is active listening?',
        choices: [
          {
            id: 'a',
            text: 'Giving full attention, asking clarifying questions and responding thoughtfully',
          },
          { id: 'b', text: 'Waiting for your turn to talk while ignoring the speaker' },
          { id: 'c', text: 'Interrupting to give your opinion quickly' },
          { id: 'd', text: 'Listening only to the parts you agree with' },
        ],
        correctId: 'a',
        explanation:
          'Active listening means giving full attention to the speaker, avoiding interruptions, asking clarifying questions and summarising what you heard to confirm understanding.',
      },
      {
        kind: 'select',
        id: 'comms-clarity',
        prompt: 'Which instruction shows good clarity?',
        choices: [
          { id: 'a', text: '"Finish this soon."' },
          {
            id: 'b',
            text: '"Please complete the user testing report by 3:00 pm Friday."',
          },
          { id: 'c', text: '"Do the thing when you can."' },
          { id: 'd', text: '"Sort it out however."' },
        ],
        correctId: 'b',
        explanation:
          'Clear communication uses simple, direct language and is specific about deadlines and responsibilities. "Complete the report by 3:00 pm Friday" removes ambiguity.',
      },
      {
        kind: 'select',
        id: 'comms-conflict',
        prompt: 'What is a good conflict-resolution strategy in a team?',
        choices: [
          { id: 'a', text: 'Focus on the issue, not the person' },
          { id: 'b', text: 'Blame whoever spoke last' },
          { id: 'c', text: 'Ignore the disagreement and hope it disappears' },
          { id: 'd', text: 'Win the argument at any cost' },
        ],
        correctId: 'a',
        explanation:
          'Resolve conflict respectfully: focus on the issue not the person, listen to all perspectives, look at facts, and seek a solution that supports the team goal — escalating when necessary.',
      },
      {
        kind: 'select',
        id: 'comms-feedback',
        prompt: 'Which is an example of constructive, behaviour-focused feedback?',
        choices: [
          { id: 'a', text: '"You’re careless."' },
          {
            id: 'b',
            text: '"The ticket notes were incomplete, which delayed resolution. Please include detailed troubleshooting steps next time."',
          },
          { id: 'c', text: '"You always mess things up."' },
          { id: 'd', text: '"That was bad."' },
        ],
        correctId: 'b',
        explanation:
          'Effective feedback describes observable actions, not personal traits. It is specific, uses an example, suggests an improvement and keeps a respectful tone.',
      },
      {
        kind: 'order',
        id: 'comms-receiving',
        prompt: 'Tap the steps for receiving feedback well, in order.',
        items: [
          { id: 'r1', text: 'Clarify: ask questions to understand the feedback' },
          { id: 'r2', text: 'Acknowledge: thank the person and accept responsibility' },
          { id: 'r3', text: 'Action: make an improvement plan and set goals' },
          { id: 'r4', text: 'Monitor: track your progress over time' },
        ],
        correctOrder: ['r1', 'r2', 'r3', 'r4'],
        explanation:
          'Receiving feedback professionally follows Clarify → Acknowledge → Action: understand the feedback, accept it respectfully, then take steps to improve and monitor your progress.',
      },
    ],
  },
  {
    id: 'principles',
    title: 'Ethics & Privacy Principles',
    subtitle: 'Uphold the principles that protect IP and personal data.',
    icon: '⚖️',
    week: 3,
    topic: 'Principles for IP, ethics and privacy, and policy frameworks',
    questions: [
      {
        kind: 'select',
        id: 'principles-transparency',
        prompt:
          'An organisation clearly documents how personal data is collected, used and stored, and makes it easy to find. Which principle is this?',
        choices: [
          { id: 'a', text: 'Transparency' },
          { id: 'b', text: 'Minimisation' },
          { id: 'c', text: 'Flexibility' },
          { id: 'd', text: 'Multitasking' },
        ],
        correctId: 'a',
        explanation:
          'Transparency means clearly communicating how IP and personal data are used, stored and protected — through accessible policies and clear privacy notices. It builds trust and supports compliance.',
      },
      {
        kind: 'select',
        id: 'principles-accountability',
        prompt:
          'Logging systems, audit trails and defined roles link actions to individuals. Which principle does this uphold?',
        choices: [
          { id: 'a', text: 'Consent and Choice' },
          { id: 'b', text: 'Accountability' },
          { id: 'c', text: 'Fairness' },
          { id: 'd', text: 'Proportionality' },
        ],
        correctId: 'b',
        explanation:
          'Accountability assigns responsibility for actions and policy compliance. Audit trails, access tracking and defined roles reinforce it — without accountability, policy enforcement is ineffective.',
      },
      {
        kind: 'select',
        id: 'principles-minimisation',
        prompt:
          'A company decides to collect only the data it truly needs and secure it well. Which principle is this?',
        choices: [
          { id: 'a', text: 'Continuous Improvement' },
          { id: 'b', text: 'Transparency' },
          { id: 'c', text: 'Minimisation and Data Protection' },
          { id: 'd', text: 'Scope' },
        ],
        correctId: 'c',
        explanation:
          'Data minimisation collects only essential information and protects it with encryption, backups and access control. Unnecessary data creates unnecessary risk.',
      },
      {
        kind: 'select',
        id: 'principles-consent',
        prompt:
          'Which principle is about informing individuals and letting them control how their data is used?',
        choices: [
          { id: 'a', text: 'Consent and Choice' },
          { id: 'b', text: 'Enforcement' },
          { id: 'c', text: 'Proportionality' },
          { id: 'd', text: 'Time-blocking' },
        ],
        correctId: 'a',
        explanation:
          'Consent and Choice means individuals are informed about data collection and give approval, and can later modify preferences or withdraw. This protects autonomy and strengthens trust.',
      },
      {
        kind: 'match',
        id: 'principles-framework',
        prompt: 'Match each part of a policy framework to what it does.',
        pairs: [
          { id: 'f1', term: 'Purpose & Definition', meaning: 'Why the policy exists and key terms' },
          { id: 'f2', term: 'Scope', meaning: 'Who and what the policy applies to' },
          { id: 'f3', term: 'Roles & Responsibilities', meaning: 'Who enforces, monitors or follows it' },
          { id: 'f4', term: 'Enforcement & Review', meaning: 'Compliance checks and regular updates' },
        ],
        explanation:
          'A policy framework has a clear structure: Purpose defines why and key terms, Scope sets who/what it covers, Roles assign accountability, and Enforcement & Review keep it effective and up to date.',
      },
    ],
  },
  {
    id: 'terms3',
    title: 'Week 3 Terms Challenge',
    subtitle: 'Match the Week 3 IT terms to their meanings.',
    icon: '🧩',
    week: 3,
    topic: 'Week 3 key terms: time, Agile, meetings and principles',
    questions: [
      {
        kind: 'match',
        id: 'terms3-time',
        prompt: 'Match each time and Agile term to its meaning.',
        pairs: [
          { id: 'a1', term: 'Prioritisation', meaning: 'Deciding which tasks to complete first' },
          { id: 'a2', term: 'Eisenhower Matrix', meaning: 'Sorts tasks by urgent and important' },
          { id: 'a3', term: 'Sprint', meaning: 'A fixed 2–4 week burst of focused work' },
          { id: 'a4', term: 'Stand-up', meaning: 'A short daily progress meeting' },
        ],
        explanation:
          'Prioritisation decides what comes first, the Eisenhower Matrix sorts by urgent/important, a sprint is a fixed work period, and a stand-up is a short daily meeting.',
      },
      {
        kind: 'match',
        id: 'terms3-meetings',
        prompt: 'Match each meeting and communication term to its meaning.',
        pairs: [
          { id: 'b1', term: 'Agenda', meaning: 'Planned outline of topics to discuss' },
          { id: 'b2', term: 'Minutes', meaning: 'Written record of decisions and actions' },
          { id: 'b3', term: 'Active listening', meaning: 'Full attention, questions and summarising' },
          { id: 'b4', term: 'Constructive feedback', meaning: 'Specific, respectful, behaviour-focused advice' },
        ],
        explanation:
          'An agenda plans the topics, minutes record what was decided, active listening confirms understanding, and constructive feedback focuses on behaviour, not the person.',
      },
      {
        kind: 'match',
        id: 'terms3-principles',
        prompt: 'Match each principle to its meaning.',
        pairs: [
          { id: 'c1', term: 'Transparency', meaning: 'Clearly explain how data and IP are handled' },
          { id: 'c2', term: 'Accountability', meaning: 'Assign responsibility and track actions' },
          { id: 'c3', term: 'Proportionality', meaning: 'Only collect and monitor what is needed' },
          { id: 'c4', term: 'Continuous Improvement', meaning: 'Regularly review and update policies' },
        ],
        explanation:
          'Transparency explains how data is handled, accountability tracks who did what, proportionality avoids over-collecting, and continuous improvement keeps policies current.',
      },
    ],
  },

  // ===================================================================
  // Exam Revision (Week 4 section).
  // A mixed revision quiz that pulls the most testable ideas from all
  // three weeks together, as preparation for the unit quizzes and
  // assessment tasks (ICTICT313, BSBXTW301 & ICTSAS305). Every question
  // is built from the Week 1-3 study notes.
  // ===================================================================
  {
    id: 'revision',
    title: 'Exam Revision',
    subtitle: 'Mixed quiz across all three weeks — get ready for the ATs.',
    icon: '🎓',
    week: 6,
    topic: 'Whole-course revision across Weeks 1–3',
    questions: [
      {
        kind: 'select',
        id: 'rev-privacy-act',
        prompt: 'Which law governs how organisations handle personal information in Australia?',
        choices: [
          { id: 'a', text: 'The Copyright Act 1968' },
          { id: 'b', text: 'The Privacy Act 1988 (Cth)' },
          { id: 'c', text: 'The Patents Act 1990' },
          { id: 'd', text: 'The Trade Marks Act 1995' },
        ],
        correctId: 'b',
        explanation:
          'The Privacy Act 1988 (Cth) and its Australian Privacy Principles govern how personal information is collected, used, stored and disclosed.',
      },
      {
        kind: 'select',
        id: 'rev-copyright',
        prompt: 'When does copyright protection begin for original software code you write?',
        choices: [
          { id: 'a', text: 'Automatically, as soon as the work is created' },
          { id: 'b', text: 'Only after you pay a registration fee' },
          { id: 'c', text: 'Only after 12 months' },
          { id: 'd', text: 'Only if you add a patent' },
        ],
        correctId: 'a',
        explanation:
          'Copyright is automatic — it protects original works such as code, websites and documentation from the moment they are created, with no registration needed.',
      },
      {
        kind: 'select',
        id: 'rev-smart',
        prompt: 'What does the "M" in a SMART goal stand for?',
        choices: [
          { id: 'a', text: 'Measurable' },
          { id: 'b', text: 'Motivating' },
          { id: 'c', text: 'Manual' },
          { id: 'd', text: 'Mandatory' },
        ],
        correctId: 'a',
        explanation:
          'SMART goals are Specific, Measurable, Achievable, Relevant and Time-bound — the "M" is Measurable, so you can track progress.',
      },
      {
        kind: 'select',
        id: 'rev-eisenhower',
        prompt: 'The Eisenhower Matrix sorts tasks by which two qualities?',
        choices: [
          { id: 'a', text: 'Urgent and important' },
          { id: 'b', text: 'Cheap and quick' },
          { id: 'c', text: 'New and old' },
          { id: 'd', text: 'Easy and hard' },
        ],
        correctId: 'a',
        explanation:
          'The Eisenhower Matrix asks "Is it urgent?" and "Is it important?" to decide what to do first, schedule, delegate or drop.',
      },
      {
        kind: 'select',
        id: 'rev-standup',
        prompt: 'A daily Scrum stand-up mainly helps a team do what?',
        choices: [
          {
            id: 'a',
            text: 'Share progress, plan the day and surface blockers early',
          },
          { id: 'b', text: 'Write the entire project plan up front' },
          { id: 'c', text: 'Replace all written documentation' },
          { id: 'd', text: 'Decide everyone’s salary' },
        ],
        correctId: 'a',
        explanation:
          'A stand-up is a short daily meeting where each member covers what they did, will do, and what is blocking them — improving communication and catching problems early.',
      },
      {
        kind: 'select',
        id: 'rev-minimisation',
        prompt: 'An organisation collects only the data it truly needs. Which principle is this?',
        choices: [
          { id: 'a', text: 'Data minimisation' },
          { id: 'b', text: 'Multitasking' },
          { id: 'c', text: 'Escalation' },
          { id: 'd', text: 'Time-blocking' },
        ],
        correctId: 'a',
        explanation:
          'Data minimisation means collecting only essential information and protecting it well, because unnecessary data creates unnecessary risk.',
      },
      {
        kind: 'fill',
        id: 'rev-oaic-fill',
        prompt:
          'For a breach likely to cause serious harm, you must notify the affected people and the ______ (the privacy regulator — give the acronym).',
        acceptedAnswers: [
          'OAIC',
          'Office of the Australian Information Commissioner',
        ],
        hint: 'Four letters, starts with O.',
        explanation:
          'Under the Notifiable Data Breach scheme you must notify the affected individuals and the OAIC (Office of the Australian Information Commissioner).',
      },
      {
        kind: 'order',
        id: 'rev-breach',
        prompt: 'Tap the Notifiable Data Breach steps in the correct order.',
        items: [
          { id: 'b1', text: 'Notice a data breach has happened' },
          { id: 'b2', text: 'Report it promptly to your team' },
          { id: 'b3', text: 'Assess whether serious harm is likely' },
          { id: 'b4', text: 'Notify affected people and the OAIC' },
        ],
        correctOrder: ['b1', 'b2', 'b3', 'b4'],
        explanation:
          'Under the NDB scheme: notice the breach, report it promptly, assess whether serious harm is likely, then notify the affected people and the OAIC.',
      },
      {
        kind: 'match',
        id: 'rev-mixed-terms',
        prompt: 'Match each term from across the course to its meaning.',
        pairs: [
          { id: 'r1', term: 'Escalation', meaning: 'Passing an issue to a higher support tier' },
          { id: 'r2', term: 'Sprint', meaning: 'A fixed 2–4 week burst of focused work' },
          { id: 'r3', term: 'Acceptable Use Policy', meaning: 'Rules for using company networks and devices' },
          { id: 'r4', term: 'Accountability', meaning: 'Assigning responsibility and tracking actions' },
        ],
        explanation:
          'Escalation moves hard issues up a tier, a sprint is a fixed work period, an AUP sets rules for company systems, and accountability assigns and tracks responsibility.',
      },
    ],
  },
  // ===================== WEEK 4 =====================
  // All Week 4 content comes from the Week 4 Work Skills slides, covering
  // BSBXTW301 / ICTSAS305 (cross-cultural communication, listening and
  // clarifying) and ICTICT313 (identifying and responding to non-compliance
  // incidents). Nothing here is invented outside those notes.
  {
    id: 'culture',
    title: 'Communicate Across Cultures',
    subtitle: 'Work respectfully with people from different backgrounds.',
    icon: '🌏',
    week: 4,
    topic: 'Cross-cultural communication',
    questions: [
      {
        kind: 'select',
        id: 'culture-what',
        prompt: 'What is cross-cultural communication?',
        choices: [
          { id: 'a', text: 'The exchange of information between people from different cultural backgrounds' },
          { id: 'b', text: 'Only ever speaking one language' },
          { id: 'c', text: 'Avoiding talking to teammates' },
          { id: 'd', text: 'A type of network protocol' },
        ],
        correctId: 'a',
        explanation:
          'Cross-cultural communication is the exchange of information, ideas and messages between people from different cultural backgrounds — common in ICT teams spread across countries.',
      },
      {
        kind: 'select',
        id: 'culture-why',
        prompt: 'Why is cross-cultural communication important in ICT?',
        choices: [
          { id: 'a', text: 'It builds relationships, reduces misunderstandings and improves client satisfaction' },
          { id: 'b', text: 'It slows every project down' },
          { id: 'c', text: 'It replaces the need for teamwork' },
          { id: 'd', text: 'It has no benefits' },
        ],
        correctId: 'a',
        explanation:
          'Effective cross-cultural communication builds positive relationships, reduces misunderstandings, improves teamwork and productivity, and supports diversity and inclusion.',
      },
      {
        kind: 'select',
        id: 'culture-direct',
        prompt:
          'A teammate expresses opinions and feedback openly and clearly. Which communication style is this?',
        choices: [
          { id: 'a', text: 'Direct communication' },
          { id: 'b', text: 'Indirect communication' },
          { id: 'c', text: 'A language barrier' },
          { id: 'd', text: 'An audit' },
        ],
        correctId: 'a',
        explanation:
          'Direct communication is clear and straightforward. Indirect communication conveys messages more subtly to maintain harmony and avoid confrontation.',
      },
      {
        kind: 'select',
        id: 'culture-bodylanguage',
        prompt:
          'Strong eye contact can mean confidence in one culture but disrespect in another. This is a difference in...',
        choices: [
          { id: 'a', text: 'Personal space and body language' },
          { id: 'b', text: 'Software licensing' },
          { id: 'c', text: 'Patent law' },
          { id: 'd', text: 'Sprint length' },
        ],
        correctId: 'a',
        explanation:
          'Eye contact, personal space, gestures and facial expressions can carry different meanings in different cultures, so it is important to be aware and respectful.',
      },
      {
        kind: 'select',
        id: 'culture-respect',
        prompt: 'Which is a good way to work respectfully across cultures?',
        choices: [
          { id: 'a', text: 'Be curious rather than judgmental and avoid making assumptions' },
          { id: 'b', text: 'Assume everyone thinks like you' },
          { id: 'c', text: 'Use offensive jokes' },
          { id: 'd', text: 'Ignore people’s preferences' },
        ],
        correctId: 'a',
        explanation:
          'You can make a difference by treating everyone respectfully, avoiding assumptions, being curious rather than judgmental, and asking team members for their communication preferences.',
      },
    ],
  },
  {
    id: 'barriers',
    title: 'Break Down Barriers',
    subtitle: 'Overcome language barriers and communicate inclusively.',
    icon: '🗣️',
    week: 4,
    topic: 'Language barriers, cultural competence and inclusion',
    questions: [
      {
        kind: 'select',
        id: 'barriers-what',
        prompt: 'What is a language barrier?',
        choices: [
          { id: 'a', text: 'Difficulty understanding one another due to differences in language, vocabulary, accent or style' },
          { id: 'b', text: 'A firewall rule' },
          { id: 'c', text: 'A type of trademark' },
          { id: 'd', text: 'A meeting agenda' },
        ],
        correctId: 'a',
        explanation:
          'Language barriers occur when people struggle to understand each other due to differences in language, vocabulary, accent, speaking speed, idioms or slang.',
      },
      {
        kind: 'select',
        id: 'barriers-overcome',
        prompt:
          'A client can’t follow the technical terms in your email. What helps overcome this language barrier?',
        choices: [
          { id: 'a', text: 'Provide supporting diagrams, screenshots or written instructions, and confirm understanding' },
          { id: 'b', text: 'Use even more jargon' },
          { id: 'c', text: 'Speak faster' },
          { id: 'd', text: 'Assume they understood' },
        ],
        correctId: 'a',
        explanation:
          'To overcome language barriers, keep a glossary of industry terms, provide supporting materials like diagrams and screenshots, and confirm understanding rather than assuming.',
      },
      {
        kind: 'select',
        id: 'barriers-competence',
        prompt: 'What is cultural competence?',
        choices: [
          { id: 'a', text: 'The ability to communicate and work effectively with people from different cultural backgrounds' },
          { id: 'b', text: 'Knowing only your own culture' },
          { id: 'c', text: 'A programming language' },
          { id: 'd', text: 'A privacy law' },
        ],
        correctId: 'a',
        explanation:
          'Cultural competence is the ability to work effectively across cultures. It involves awareness, understanding, respect, adaptability and continuous learning.',
      },
      {
        kind: 'select',
        id: 'barriers-inclusive',
        prompt: 'What is inclusive communication?',
        choices: [
          { id: 'a', text: 'Making sure everyone feels respected, valued and able to understand and participate' },
          { id: 'b', text: 'Talking only to people like you' },
          { id: 'c', text: 'Interrupting others' },
          { id: 'd', text: 'Using inaccessible documents' },
        ],
        correctId: 'a',
        explanation:
          'Inclusive communication ensures everyone feels respected and has an equal opportunity to understand and participate, considering language, culture, gender, disability, age and experience.',
      },
      {
        kind: 'select',
        id: 'barriers-inclusive-how',
        prompt: 'Which action supports inclusive communication?',
        choices: [
          { id: 'a', text: 'Respect preferred names and pronouns, and use accessible documents' },
          { id: 'b', text: 'Tell offensive jokes' },
          { id: 'c', text: 'Interrupt people who speak slowly' },
          { id: 'd', text: 'Assume everyone understood' },
        ],
        correctId: 'a',
        explanation:
          'Inclusive communication means using respectful language, speaking clearly, encouraging everyone to contribute, respecting preferred names and pronouns, and using accessible documents.',
      },
    ],
  },
  {
    id: 'listen',
    title: 'Listen and Clarify',
    subtitle: 'Listen actively and confirm you understood the task.',
    icon: '👂',
    week: 4,
    topic: 'Active listening and clarifying instructions',
    questions: [
      {
        kind: 'select',
        id: 'listen-active',
        prompt: 'What is active listening?',
        choices: [
          { id: 'a', text: 'Fully concentrating on and understanding a speaker’s message before responding' },
          { id: 'b', text: 'Waiting for your turn to talk' },
          { id: 'c', text: 'Doing other tasks while they speak' },
          { id: 'd', text: 'Interrupting to give your view' },
        ],
        correctId: 'a',
        explanation:
          'Active listening is fully concentrating on and understanding a speaker’s message — hearing not just the words but the meaning behind them — before responding.',
      },
      {
        kind: 'match',
        id: 'listen-techniques',
        prompt: 'Match each clarifying technique to an example phrase.',
        pairs: [
          { id: 'cl1', term: 'Admit you’re unsure', meaning: '“I’m not quite sure I understand what you are saying.”' },
          { id: 'cl2', term: 'Ask for repetition', meaning: '“Could you repeat that?”' },
          { id: 'cl3', term: 'Repeat back to confirm', meaning: '“Let me see if I’ve understood you correctly. You…”' },
          { id: 'cl4', term: 'Ask for an example', meaning: '“Could you give me an example of that?”' },
        ],
        explanation:
          'Clarifying techniques include admitting when you are unsure, asking for repetition, repeating back what you heard to confirm, and asking for specific examples.',
      },
      {
        kind: 'select',
        id: 'listen-clarify',
        prompt: 'What is clarification?',
        choices: [
          { id: 'a', text: 'Confirming understanding when instructions or expectations are unclear' },
          { id: 'b', text: 'A sign of weakness' },
          { id: 'c', text: 'Ignoring instructions' },
          { id: 'd', text: 'A type of audit' },
        ],
        correctId: 'a',
        explanation:
          'Clarification is confirming understanding when things are unclear. It is not a sign of weakness — asking clarifying questions shows responsibility, attention to detail and commitment to quality.',
      },
      {
        kind: 'select',
        id: 'listen-why',
        prompt: 'Why does clarification matter?',
        choices: [
          { id: 'a', text: 'It prevents errors, avoids rework and creates shared understanding' },
          { id: 'b', text: 'It wastes time' },
          { id: 'c', text: 'It annoys the speaker' },
          { id: 'd', text: 'It hides problems' },
        ],
        correctId: 'a',
        explanation:
          'Clarification helps prevent errors, avoid rework, improve productivity, ensure accurate task completion and create shared understanding.',
      },
      {
        kind: 'select',
        id: 'listen-shared',
        prompt: 'Clear communication is whose responsibility?',
        choices: [
          { id: 'a', text: 'A shared responsibility between team members and leaders' },
          { id: 'b', text: 'Only the manager’s' },
          { id: 'c', text: 'Only the newest worker’s' },
          { id: 'd', text: 'Nobody’s' },
        ],
        correctId: 'a',
        explanation:
          'Clear communication is a shared responsibility — team members listen actively, ask questions and confirm understanding, while leaders give clear instructions and encourage feedback.',
      },
    ],
  },
  {
    id: 'noncompliance',
    title: 'Spot Non-Compliance',
    subtitle: 'Identify and monitor incidents that break the rules.',
    icon: '🚨',
    week: 4,
    topic: 'Identifying non-compliance incidents',
    questions: [
      {
        kind: 'select',
        id: 'noncompliance-what',
        prompt: 'What is a non-compliance incident?',
        choices: [
          { id: 'a', text: 'When actions, processes or systems fail to follow policies, laws or ethical standards' },
          { id: 'b', text: 'A successful project' },
          { id: 'c', text: 'A team-building activity' },
          { id: 'd', text: 'A routine software update' },
        ],
        correctId: 'a',
        explanation:
          'A non-compliance incident is when actions, processes or systems fail to follow organisational policies, legal requirements or ethical standards. It can be intentional or unintentional.',
      },
      {
        kind: 'select',
        id: 'noncompliance-example',
        prompt:
          'An employee uploads confidential customer data to an unapproved cloud platform. What is this?',
        choices: [
          { id: 'a', text: 'A non-compliance incident that violates data handling policy' },
          { id: 'b', text: 'Good practice' },
          { id: 'c', text: 'A patent' },
          { id: 'd', text: 'A sprint' },
        ],
        correctId: 'a',
        explanation:
          'Uploading confidential data to an unapproved platform violates the organisation’s data handling policy — a non-compliance incident that exposes it to legal, financial and reputational risk.',
      },
      {
        kind: 'match',
        id: 'noncompliance-methods',
        prompt: 'Match each detection method to what it does.',
        pairs: [
          { id: 'nm1', term: 'Risk assessment', meaning: 'Identify potential threats and evaluate their likelihood and impact' },
          { id: 'nm2', term: 'Auditing', meaning: 'Formal reviews of systems and processes to ensure policy adherence' },
          { id: 'nm3', term: 'Incident reporting', meaning: 'Processes that let staff report breaches or suspected issues' },
          { id: 'nm4', term: 'Data analysis & AI', meaning: 'Analytics that detect anomalies or patterns of non-compliance' },
        ],
        explanation:
          'Organisations identify and monitor non-compliance using risk assessment, auditing, incident reporting, data analysis/AI and external resources.',
      },
      {
        kind: 'select',
        id: 'noncompliance-ai',
        prompt: 'Automated monitoring detects unusual login activity and data transfers. Which method is this?',
        choices: [
          { id: 'a', text: 'Data analysis and AI' },
          { id: 'b', text: 'A team stand-up' },
          { id: 'c', text: 'A trademark search' },
          { id: 'd', text: 'A lunch break' },
        ],
        correctId: 'a',
        explanation:
          'Data analysis and AI use analytics tools to monitor large datasets, detect anomalies and identify trends humans may miss — supporting proactive prevention.',
      },
      {
        kind: 'select',
        id: 'noncompliance-external',
        prompt: 'Why consult external resources such as regulators or third-party assessments?',
        choices: [
          { id: 'a', text: 'They ensure industry alignment and provide an objective perspective' },
          { id: 'b', text: 'They make things less compliant' },
          { id: 'c', text: 'They replace all internal checks' },
          { id: 'd', text: 'They are never useful' },
        ],
        correctId: 'a',
        explanation:
          'External resources (regulatory guidance, third-party assessments, cybersecurity experts) ensure industry alignment, provide an objective perspective and support regulatory compliance.',
      },
    ],
  },
  {
    id: 'respond',
    title: 'Respond to Non-Compliance',
    subtitle: 'Take the right steps to contain and fix an incident.',
    icon: '🛠️',
    week: 4,
    topic: 'Overcoming non-compliance incidents',
    questions: [
      {
        kind: 'order',
        id: 'respond-steps',
        prompt: 'Tap the response strategies for a non-compliance incident in the correct order.',
        items: [
          { id: 'rs1', text: 'Swift and proactive response: contain the damage' },
          { id: 'rs2', text: 'Investigation and root cause analysis: find the underlying cause' },
          { id: 'rs3', text: 'Remediation and corrective measures: fix issues and restore compliance' },
          { id: 'rs4', text: 'Training and education: build staff awareness' },
          { id: 'rs5', text: 'Continuous improvement: update policies and procedures' },
        ],
        correctOrder: ['rs1', 'rs2', 'rs3', 'rs4', 'rs5'],
        explanation:
          'A structured response moves from swift containment, to investigating the root cause, to remediation, to training, and finally to continuous improvement of policies.',
      },
      {
        kind: 'select',
        id: 'respond-structured',
        prompt:
          'After detecting unauthorised software, the org removes it, investigates the cause and reinforces training. What is this?',
        choices: [
          { id: 'a', text: 'A structured response to non-compliance' },
          { id: 'b', text: 'Ignoring the problem' },
          { id: 'c', text: 'A new feature release' },
          { id: 'd', text: 'A trademark filing' },
        ],
        correctId: 'a',
        explanation:
          'Responding to non-compliance involves structured actions to manage incidents, reduce harm and restore policy alignment — while supporting organisational learning.',
      },
      {
        kind: 'select',
        id: 'respond-rootcause',
        prompt: 'What does root cause analysis do?',
        choices: [
          { id: 'a', text: 'Determines the underlying causes so the issue doesn’t recur' },
          { id: 'b', text: 'Blames one person' },
          { id: 'c', text: 'Hides the incident' },
          { id: 'd', text: 'Skips the investigation' },
        ],
        correctId: 'a',
        explanation:
          'Investigation and root cause analysis determine the underlying causes and factors, identify weaknesses, enable targeted corrective actions and prevent recurrence.',
      },
      {
        kind: 'select',
        id: 'respond-prompt',
        prompt: 'Why is prompt action important when responding to non-compliance?',
        choices: [
          { id: 'a', text: 'It prevents escalation and signals commitment to ethical practice' },
          { id: 'b', text: 'It makes the incident worse' },
          { id: 'c', text: 'It avoids all investigation' },
          { id: 'd', text: 'It ignores employee rights' },
        ],
        correctId: 'a',
        explanation:
          'Organisations must address incidents without delay while keeping investigations objective and respectful of employee rights. Prompt action prevents escalation and signals commitment to ethical practice.',
      },
      {
        kind: 'select',
        id: 'respond-improve',
        prompt: 'After an incident review, an organisation revises its procedures. Which strategy is this?',
        choices: [
          { id: 'a', text: 'Continuous improvement and policy enhancement' },
          { id: 'b', text: 'Swift response' },
          { id: 'c', text: 'A stand-up meeting' },
          { id: 'd', text: 'A language barrier' },
        ],
        correctId: 'a',
        explanation:
          'Continuous improvement and policy enhancement means updating policies and procedures to address evolving risks, keeping them relevant and strengthening compliance.',
      },
    ],
  },
  {
    id: 'terms4',
    title: 'Week 4 Terms Challenge',
    subtitle: 'Match the Week 4 IT terms to their meanings.',
    icon: '🧩',
    week: 4,
    topic: 'Week 4 IT terms and their meanings',
    questions: [
      {
        kind: 'match',
        id: 'terms4-culture',
        prompt: 'Match each communication term to its meaning.',
        pairs: [
          { id: 'u1', term: 'Cross-cultural communication', meaning: 'Exchanging messages between different cultures' },
          { id: 'u2', term: 'Cultural competence', meaning: 'Working effectively with people from other cultures' },
          { id: 'u3', term: 'Inclusive communication', meaning: 'Ensuring everyone can understand and participate' },
          { id: 'u4', term: 'Language barrier', meaning: 'Difficulty understanding due to language differences' },
        ],
        explanation:
          'Cross-cultural communication, cultural competence and inclusive communication all help teams work across differences, while language barriers are what they help overcome.',
      },
      {
        kind: 'match',
        id: 'terms4-listen',
        prompt: 'Match each listening term to its meaning.',
        pairs: [
          { id: 'v1', term: 'Active listening', meaning: 'Fully concentrating before responding' },
          { id: 'v2', term: 'Clarification', meaning: 'Confirming understanding when things are unclear' },
          { id: 'v3', term: 'Direct communication', meaning: 'Expressing opinions openly and clearly' },
          { id: 'v4', term: 'Indirect communication', meaning: 'Conveying messages subtly to keep harmony' },
        ],
        explanation:
          'Active listening and clarification build shared understanding, while direct and indirect styles describe how openly people express themselves.',
      },
      {
        kind: 'match',
        id: 'terms4-compliance',
        prompt: 'Match each compliance term to its meaning.',
        pairs: [
          { id: 'w1', term: 'Non-compliance incident', meaning: 'Failing to follow policy, law or ethics' },
          { id: 'w2', term: 'Auditing', meaning: 'Formal reviews to check policy adherence' },
          { id: 'w3', term: 'Risk assessment', meaning: 'Identifying threats and their likelihood and impact' },
          { id: 'w4', term: 'Root cause analysis', meaning: 'Finding the underlying cause to prevent recurrence' },
        ],
        explanation:
          'Non-compliance is a breach of the rules; auditing and risk assessment help detect it, and root cause analysis helps stop it happening again.',
      },
    ],
  },

  // ===================== WEEK 5 =====================
  // All Week 5 content comes from the Week 5 Work Skills slides for
  // ICTSAS305 (Providing Technical Support to Clients - Part 1): what the IT
  // team supports, investigating and documenting technical issues, diagnostic
  // tools, and communicating technical advice to clients. The later ICTICT313
  // sections in the deck are Week 6/7 reading and are held for those weeks.
  {
    id: 'support-basics',
    title: 'What IT Support Covers',
    subtitle: 'Know the hardware, software and networking you support.',
    icon: '🖥️',
    week: 5,
    topic: 'What the IT support team supports',
    questions: [
      {
        kind: 'select',
        id: 'support-basics-role',
        prompt: 'In a medium-sized organisation, what does the IT support team do?',
        choices: [
          { id: 'a', text: 'Keeps technology systems functional, secure and productive for users' },
          { id: 'b', text: 'Only makes the coffee' },
          { id: 'c', text: 'Designs the office building' },
          { id: 'd', text: 'Writes marketing copy' },
        ],
        correctId: 'a',
        explanation:
          'The IT support team keeps technology systems functional, secure and productive — maintaining equipment, managing software, troubleshooting networks and advising clients.',
      },
      {
        kind: 'select',
        id: 'support-basics-hardware',
        prompt: 'Which of these is hardware?',
        choices: [
          { id: 'a', text: 'A monitor, keyboard or printer' },
          { id: 'b', text: 'The Windows operating system' },
          { id: 'c', text: 'Microsoft Teams' },
          { id: 'd', text: 'A privacy policy' },
        ],
        correctId: 'a',
        explanation:
          'Hardware is the physical components you can touch — desktops, laptops, monitors, keyboards, printers, servers and external drives.',
      },
      {
        kind: 'select',
        id: 'support-basics-os',
        prompt: 'What is an operating system (OS)?',
        choices: [
          { id: 'a', text: 'Software that manages a computer’s hardware, memory, processes and applications' },
          { id: 'b', text: 'A physical cable' },
          { id: 'c', text: 'A type of printer' },
          { id: 'd', text: 'A network switch' },
        ],
        correctId: 'a',
        explanation:
          'The OS is the fundamental software that manages hardware, memory, processes and applications, acting as the intermediary between users and hardware (e.g. Windows, macOS, Linux, Android).',
      },
      {
        kind: 'match',
        id: 'support-basics-network',
        prompt: 'Match each networking device to its function.',
        pairs: [
          { id: 'nd1', term: 'Router', meaning: 'Directs traffic between networks' },
          { id: 'nd2', term: 'Switch', meaning: 'Connects devices within a network' },
          { id: 'nd3', term: 'Wireless Access Point', meaning: 'Provides Wi-Fi connectivity' },
          { id: 'nd4', term: 'Modem', meaning: 'Connects the network to the ISP' },
        ],
        explanation:
          'Routers direct traffic between networks, switches connect devices within a network, wireless access points provide Wi-Fi, and modems connect the network to the internet service provider.',
      },
      {
        kind: 'match',
        id: 'support-basics-components',
        prompt: 'Match each computer component to its role.',
        pairs: [
          { id: 'cc1', term: 'CPU (Processor)', meaning: 'The “brain” that executes instructions' },
          { id: 'cc2', term: 'RAM (Memory)', meaning: 'Temporary memory for data currently in use' },
          { id: 'cc3', term: 'Storage (SSD/HDD)', meaning: 'Long-term storage for the OS, apps and files' },
          { id: 'cc4', term: 'GPU', meaning: 'Handles visual rendering' },
        ],
        explanation:
          'The CPU processes instructions, RAM holds data in use for fast access, storage keeps files long-term, and the GPU handles graphics.',
      },
    ],
  },
  {
    id: 'investigate',
    title: 'Investigate the Issue',
    subtitle: 'Gather the right information before jumping to a fix.',
    icon: '🔎',
    week: 5,
    topic: 'Investigating technical issues',
    questions: [
      {
        kind: 'select',
        id: 'investigate-what',
        prompt: 'What is technical investigation?',
        choices: [
          { id: 'a', text: 'Identifying the cause of a problem by collecting information, testing assumptions and analysing evidence' },
          { id: 'b', text: 'Guessing randomly' },
          { id: 'c', text: 'Ignoring the problem' },
          { id: 'd', text: 'Restarting without thinking' },
        ],
        correctId: 'a',
        explanation:
          'Technical investigation identifies the cause of a problem by collecting information, testing assumptions, analysing evidence and determining an appropriate solution.',
      },
      {
        kind: 'select',
        id: 'investigate-symptoms',
        prompt: 'What are “symptoms” in troubleshooting?',
        choices: [
          { id: 'a', text: 'The visible signs of a problem, like freezing or an app crashing' },
          { id: 'b', text: 'The root cause' },
          { id: 'c', text: 'The final solution' },
          { id: 'd', text: 'A type of hardware' },
        ],
        correctId: 'a',
        explanation:
          'Symptoms are the visible signs of a problem — computer freezing, internet dropping out, an app crashing — and often give valuable clues about the underlying issue.',
      },
      {
        kind: 'select',
        id: 'investigate-errors',
        prompt: 'When you get an error message, what is best practice?',
        choices: [
          { id: 'a', text: 'Record the exact wording, note error codes and take screenshots' },
          { id: 'b', text: 'Ignore it' },
          { id: 'c', text: 'Try to remember it later' },
          { id: 'd', text: 'Close it immediately' },
        ],
        correctId: 'a',
        explanation:
          'Error messages provide important clues. Record the exact wording, note any error codes and take screenshots — small wording differences can reveal different causes.',
      },
      {
        kind: 'select',
        id: 'investigate-affected',
        prompt: 'Why check how many users are affected (one user, a department, or the whole org)?',
        choices: [
          { id: 'a', text: 'It helps define the scope and whether the issue is localised or widespread' },
          { id: 'b', text: 'It has no effect on the diagnosis' },
          { id: 'c', text: 'To assign blame' },
          { id: 'd', text: 'To delay the fix' },
        ],
        correctId: 'a',
        explanation:
          'Identifying affected users helps define the scope — whether the problem is localised (one device or account) or widespread (servers, networks or applications) — guiding escalation and resources.',
      },
      {
        kind: 'order',
        id: 'investigate-process',
        prompt: 'Tap the early investigation steps in the correct order.',
        items: [
          { id: 'iv1', text: 'Issue reported' },
          { id: 'iv2', text: 'Gather information' },
          { id: 'iv3', text: 'Define the scope' },
          { id: 'iv4', text: 'Analyse the problem' },
        ],
        correctOrder: ['iv1', 'iv2', 'iv3', 'iv4'],
        explanation:
          'A methodical investigation starts when the issue is reported, then gathers information, defines the scope, and analyses the problem before identifying the root cause.',
      },
    ],
  },
  {
    id: 'rootcause',
    title: 'Find the Root Cause',
    subtitle: 'Dig past the symptoms to the real underlying cause.',
    icon: '🌱',
    week: 5,
    topic: 'Root cause analysis and the 5 Whys',
    questions: [
      {
        kind: 'select',
        id: 'rootcause-what',
        prompt: 'What is root cause analysis (RCA)?',
        choices: [
          { id: 'a', text: 'Discovering the real, underlying cause of a problem rather than just treating symptoms' },
          { id: 'b', text: 'Fixing only the visible symptom' },
          { id: 'c', text: 'Rebooting the server and hoping' },
          { id: 'd', text: 'Blaming the user' },
        ],
        correctId: 'a',
        explanation:
          'RCA discovers the real, underlying cause of problems rather than just treating symptoms. Fixing only symptoms often leads to recurring incidents.',
      },
      {
        kind: 'select',
        id: 'rootcause-5whys',
        prompt: 'What is the “5 Whys” method?',
        choices: [
          { id: 'a', text: 'Asking “Why?” repeatedly to trace a problem back to its root cause' },
          { id: 'b', text: 'Asking five different people' },
          { id: 'c', text: 'Waiting five minutes' },
          { id: 'd', text: 'Trying five random fixes' },
        ],
        correctId: 'a',
        explanation:
          'The 5 Whys is an RCA method that asks “Why?” multiple times to explore the cause-and-effect chain and determine the root cause of a problem.',
      },
      {
        kind: 'select',
        id: 'rootcause-when',
        prompt: 'When is the 5 Whys method most useful?',
        choices: [
          { id: 'a', text: 'For simple to moderately difficult problems, especially those involving human error' },
          { id: 'b', text: 'Only for hardware failures' },
          { id: 'c', text: 'Never' },
          { id: 'd', text: 'Only for billing questions' },
        ],
        correctId: 'a',
        explanation:
          'The 5 Whys works best for simple to moderately difficult problems, particularly when human factors or human error are involved.',
      },
      {
        kind: 'select',
        id: 'rootcause-example',
        prompt:
          'A website crashed at peak hours from a traffic surge, caused by a viral code, caused by a typo, with no review process. What is the root cause?',
        choices: [
          { id: 'a', text: 'The lack of a review process for promotional discount entries' },
          { id: 'b', text: 'Too many customers' },
          { id: 'c', text: 'Social media' },
          { id: 'd', text: 'The website software' },
        ],
        correctId: 'a',
        explanation:
          'Following the 5 Whys chain, the true root cause was the lack of a review process for validating promotional discounts before they went live — not the traffic itself.',
      },
    ],
  },
  {
    id: 'document',
    title: 'Diagnose & Document',
    subtitle: 'Pick the right tool and record what you find.',
    icon: '📝',
    week: 5,
    topic: 'Diagnostic tools and documentation',
    questions: [
      {
        kind: 'match',
        id: 'document-tools',
        prompt: 'Match each issue to an appropriate diagnostic tool.',
        pairs: [
          { id: 'dt1', term: 'Slow computer', meaning: 'Task Manager' },
          { id: 'dt2', term: 'Network issue', meaning: 'Ping / Tracert' },
          { id: 'dt3', term: 'Application crashes', meaning: 'Event Viewer' },
          { id: 'dt4', term: 'Malware concerns', meaning: 'Antivirus Scanner' },
        ],
        explanation:
          'Choose the tool for the issue: Task Manager for a slow computer, Ping/Tracert for network problems, Event Viewer for app crashes, and an antivirus scanner for malware.',
      },
      {
        kind: 'select',
        id: 'document-verify',
        prompt: 'Before applying a recommendation from an online resource, what should you do?',
        choices: [
          { id: 'a', text: 'Verify the information from reputable sources' },
          { id: 'b', text: 'Apply it blindly' },
          { id: 'c', text: 'Ignore all documentation' },
          { id: 'd', text: 'Delete the ticket' },
        ],
        correctId: 'a',
        explanation:
          'Online resources (vendor knowledge bases, forums, manuals) can reduce investigation time, but always verify information from reputable sources before applying recommendations.',
      },
      {
        kind: 'select',
        id: 'document-why',
        prompt: 'Why does good documentation matter?',
        choices: [
          { id: 'a', text: 'It creates a historical record and saves time if the same issue recurs' },
          { id: 'b', text: 'It slows everyone down for no reason' },
          { id: 'c', text: 'It hides what was done' },
          { id: 'd', text: 'It replaces the need to fix issues' },
        ],
        correctId: 'a',
        explanation:
          'Clear, accurate documentation supports collaboration and knowledge sharing, creates historical records, assists future troubleshooting and demonstrates professionalism.',
      },
      {
        kind: 'select',
        id: 'document-report',
        prompt: 'Which belongs in a good incident report?',
        choices: [
          { id: 'a', text: 'Incident summary, symptoms, findings, root cause and solution' },
          { id: 'b', text: 'Only the technician’s lunch order' },
          { id: 'c', text: 'Nothing at all' },
          { id: 'd', text: 'A marketing plan' },
        ],
        correctId: 'a',
        explanation:
          'A good incident report includes an incident summary, client details, symptoms, investigation activities, findings, root cause, solution and follow-up.',
      },
      {
        kind: 'select',
        id: 'document-logs',
        prompt: 'Why include logs and screenshots in documentation?',
        choices: [
          { id: 'a', text: 'They provide supporting evidence and an accurate record for future reference' },
          { id: 'b', text: 'They make the report longer for no reason' },
          { id: 'c', text: 'They hide the error' },
          { id: 'd', text: 'They are never useful' },
        ],
        correctId: 'a',
        explanation:
          'Logs record events, warnings and errors, while screenshots capture error messages and settings — together they improve accuracy and provide useful reference for future investigations.',
      },
    ],
  },
  {
    id: 'explain',
    title: 'Explain It to the Client',
    subtitle: 'Turn technical findings into advice clients understand.',
    icon: '🤝',
    week: 5,
    topic: 'Communicating technical advice to clients',
    questions: [
      {
        kind: 'select',
        id: 'explain-goal',
        prompt: 'What is the goal when communicating technical advice to clients?',
        choices: [
          { id: 'a', text: 'To bridge the gap between technical knowledge and the client’s level of understanding' },
          { id: 'b', text: 'To use as much jargon as possible' },
          { id: 'c', text: 'To confuse the client' },
          { id: 'd', text: 'To avoid talking to them' },
        ],
        correctId: 'a',
        explanation:
          'The goal is to explain findings and solutions in a way clients easily understand — bridging the gap between technical knowledge and the client’s level of understanding, which builds trust.',
      },
      {
        kind: 'select',
        id: 'explain-plain',
        prompt: 'Which is the clearest way to explain a problem to a client?',
        choices: [
          { id: 'a', text: '“Your computer was unable to obtain a network address automatically.”' },
          { id: 'b', text: '“The DHCP service failed due to an IP addressing conflict.”' },
          { id: 'c', text: '“It’s a layer-3 misconfiguration.”' },
          { id: 'd', text: '“Your authentication tokens were compromised.”' },
        ],
        correctId: 'a',
        explanation:
          'Use simple, clear language that emphasises the practical impact. Say “your computer couldn’t get a network address automatically” instead of “the DHCP service failed due to an IP addressing conflict.”',
      },
      {
        kind: 'select',
        id: 'explain-empathy',
        prompt: 'A client is frustrated after clicking the wrong option. What is the empathetic response?',
        choices: [
          { id: 'a', text: '“I understand how frustrating this can be. Let’s work through it together.”' },
          { id: 'b', text: '“You clicked the wrong option.”' },
          { id: 'c', text: '“That was your mistake.”' },
          { id: 'd', text: '“You should know better.”' },
        ],
        correctId: 'a',
        explanation:
          'Being empathetic acknowledges client frustration and builds trust. Say “I understand how frustrating this can be — let’s work through it together” rather than blaming them.',
      },
      {
        kind: 'select',
        id: 'explain-familiar',
        prompt: 'Comparing computer memory to a cluttered desk helps because...',
        choices: [
          { id: 'a', text: 'Clients learn best when concepts relate to something they already know' },
          { id: 'b', text: 'It sounds clever' },
          { id: 'c', text: 'It avoids explaining anything' },
          { id: 'd', text: 'It uses more jargon' },
        ],
        correctId: 'a',
        explanation:
          'Relating concepts to familiar experiences helps clients understand — e.g. comparing computer memory to a desk that gets cluttered when too many items are on it.',
      },
      {
        kind: 'select',
        id: 'explain-nextsteps',
        prompt: 'What should you do at the end of every client interaction?',
        choices: [
          { id: 'a', text: 'Clearly explain the next steps, actions taken and timeframes for updates' },
          { id: 'b', text: 'Hang up without a word' },
          { id: 'c', text: 'Leave the client guessing' },
          { id: 'd', text: 'Delete the ticket' },
        ],
        correctId: 'a',
        explanation:
          'Always provide clear next steps: what actions were taken, any further investigation, timeframes for updates, and any steps the client should take.',
      },
    ],
  },
  {
    id: 'terms5',
    title: 'Week 5 Terms Challenge',
    subtitle: 'Match the Week 5 IT terms to their meanings.',
    icon: '🧩',
    week: 5,
    topic: 'Week 5 IT terms and their meanings',
    questions: [
      {
        kind: 'match',
        id: 'terms5-support',
        prompt: 'Match each technical support term to its meaning.',
        pairs: [
          { id: 'y1', term: 'Hardware', meaning: 'Physical components you can touch' },
          { id: 'y2', term: 'Operating system', meaning: 'Software that manages hardware and applications' },
          { id: 'y3', term: 'Router', meaning: 'Directs traffic between networks' },
          { id: 'y4', term: 'RAM', meaning: 'Temporary memory for data in use' },
        ],
        explanation:
          'Hardware is physical, the operating system manages it, routers connect networks, and RAM holds the data a computer is currently using.',
      },
      {
        kind: 'match',
        id: 'terms5-investigation',
        prompt: 'Match each investigation term to its meaning.',
        pairs: [
          { id: 'z1', term: 'Symptoms', meaning: 'The visible signs of a problem' },
          { id: 'z2', term: 'Scope', meaning: 'The extent of a problem: who and what is affected' },
          { id: 'z3', term: 'Root cause analysis', meaning: 'Finding the real underlying cause' },
          { id: 'z4', term: '5 Whys', meaning: 'Asking “Why?” repeatedly to reach the root cause' },
        ],
        explanation:
          'Symptoms are the visible signs, scope is how far a problem reaches, and root cause analysis (often using the 5 Whys) finds the real underlying cause.',
      },
      {
        kind: 'match',
        id: 'terms5-document',
        prompt: 'Match each documentation and communication term to its meaning.',
        pairs: [
          { id: 'q1', term: 'Event Viewer', meaning: 'A tool to view system events and errors' },
          { id: 'q2', term: 'Ping', meaning: 'A tool to test network connectivity' },
          { id: 'q3', term: 'Incident report', meaning: 'A structured record of an investigation' },
          { id: 'q4', term: 'Empathy', meaning: 'Acknowledging the client’s frustration' },
        ],
        explanation:
          'Event Viewer and Ping are diagnostic tools, an incident report records the investigation, and empathy keeps client communication supportive.',
      },
    ],
  },
];

/** Find a mission by its id (used by the mission screen). */
export function getMission(id: string): Mission | undefined {
  return missions.find((m) => m.id === id);
}
