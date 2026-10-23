export const currentWork = [
  {
    id: 'current-ai-work', title: 'An AI coding harness for building complete applications.', status: 'In development',
    summary: 'I am working with Approovia Limited on an AI coding harness in the same broad category as Lovable and Cursor. It is being designed to turn a simple prompt into a tested, deployed application through a guided conversation about the product requirements.',
    paragraphs: [
      'A hospital could ask it to create a hospital management system. The harness would ask which features and specifications are needed, or work from information in the hospital website or documents if that conversation is skipped.',
      'From that information, it would define business logic and specifications, then direct a coding agent to build the application. Structured Markdown files would guide consistent development practices, security considerations, and testing.',
    ],
    steps: [['Understand', 'Start with a prompt, questions, or existing documents.'], ['Specify', 'Define business logic and application specifications.'], ['Build and test', 'Guide a coding agent with standardized Markdown processes.'], ['Deploy', 'Release through the planned Approovia cloud service after testing.']],
    note: 'The cloud service is being developed from scratch on rented data-centre infrastructure. The harness will begin as a web application, with desktop and mobile versions planned for later. These are development plans, not a claim of a launched platform.',
  },
  {
    id: 'current-safety-work', title: 'Connecting software, machine learning, and a discreet wearable.', status: 'Concept in development',
    summary: 'I am working on a software and hardware concept intended to support people in dangerous situations. The software would explore machine-learning signals for potential harm, while a ring, necklace, or bracelet would provide a manual alert trigger.',
    paragraphs: ['The planned alert flow would notify selected emergency contacts or emergency services and share location. Tracking is intended to support locating someone during an emergency, including kidnapping. These are planned capabilities, not an operational service or a replacement for emergency services.'],
    steps: [['Monitor', 'Explore signals that may point to potential danger.'], ['Trigger', 'Provide a discreet manual alert through a wearable.'], ['Notify', 'Contact selected people or services.'], ['Locate', 'Share tracking information to support a response.']],
    note: 'The final wearable form and operating model are still being explored. This is a concept in development, not an operational safety service.',
  },
] as const;
