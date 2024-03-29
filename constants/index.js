export * from './field-ids';
export * from './routes';

export const TITLE = 'Barnes Code - Creative software engineering';
export const DESCRIPTION =
  'Specialists in bespoke web app development, API design, database design and more.';
export const KEYWORDS =
  'Barnes code, barnescode.co.uk, Bespoke web app development, full stack development, javascript';
export const DOMAIN = 'https://barnescode.co.uk';

export const CONTACT_EMAIL = 'hello@barnescode.co.uk';

export const CARD_TEXT = {
  UX_DESIGN: (
    <p>
      Understanding user needs and potential behaviours is essential for delivering a seemless experience.
      After gaining some insights, we can start to create multiple designs for further feedback, testing and iterations.
      This also enables us to realise a vision, define a strategy and create technical requirements.
    </p>,
  ),
  ENGINEERING: (
    <p>
      We strive on creating clean and scalable technical solutions. By following a very modular approach and going above industry standards, the features and functionality we build can be easily maintained, adapted and used in different areas.
    </p>
  ),
  REPLATFORMING: (
    <p>
      We are experts at delivering re-platformed and digital transformation projects. After understanding existing processes, we can transform products or services into modern solutions with automation and greatly simplified user journeys.
    </p>
  )
};

export const MISSION = [
  {
    text: 'Build the core product or service that meets user, business and technical requirements.',
    title: 'Build',
    imgPath: '/software.svg',
  },
  {
    text: 'Enhance and build upon the core functionality. Optimise the user experience and introduce automation.',
    title: 'Iterate',
    imgPath: '/services.svg',
  },
  {
    text: 'Get results quickly by combining updates into small, releasable chunks, without a "big bang" release.',
    title: 'Package',
    imgPath: '/products.svg',
  },
];

export const PROCESS = [
  {
    text: 'Collate the needs, wants and must haves. Understand opportunities.',
    title: 'Listen and understand',
    imgPath: '/process-listen.svg',
  },
  {
    text: 'Create a list of the simplest features that could be released as a first version. Keep it simple.',
    title: 'Define MVP',
    imgPath: '/process-define.svg',
  },
  {
    text: 'Build and deliver the first version. Obtain invaluable user feedback.',
    title: 'Deliver',
    imgPath: '/process-deliver.svg',
  },
  {
    text: 'Prioritise new features and enhancements. Build and release in small chunks; Repeat.',
    title: 'Iterate',
    imgPath: '/process-iterate.svg',
  },
];
