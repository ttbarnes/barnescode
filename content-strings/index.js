export const API_GENERIC_ERROR_MESSAGE = 'Sorry, something has gone wrong. Please send an email to hello@barnescode.co.uk';

// TODO: just have name, email, message ?

export const FIELDS = {
  NAME: {
    LABEL: 'Name',
    ERRORS: {
      DEFAULT: 'Enter your name'
    }
  },
  EMAIL: {
    LABEL: 'Email address',
    ERRORS: {
      DEFAULT: 'Enter a valid email address',
      IS_EMPTY: 'Enter an email address',
      IS_REQUIRED: 'Enter an email address'
    }
  },
  MESSAGE: {
    LABEL: 'Message',
    ERRORS: {
      DEFAULT: 'Enter a message',
      IS_BELOW_MINIMUM: 'Enter a message with at least 10 characters',
      IS_ABOVE_MAXIMUM: 'Enter a message with less than 200 characters'
    }
  }
};

export const PAGES = {
  CONTACT: {
    PAGE_TITLE: 'Contact us',
    INTRO: {
      FOR_MORE_INFORMATION: 'For more information or to discover how we can help, email us at',
      ALTERNATIVELY: 'or fill out the form below.',
    }
  },
  CONTACT_THANK_YOU: {
    PAGE_TITLE: 'Thank you',
    BODY: 'We will respond as soon as possible. '
  }
};
