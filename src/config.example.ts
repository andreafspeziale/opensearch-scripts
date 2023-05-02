export const INDEX = 'books';

export const SETTINGS = {
  settings: {
    analysis: {
      analyzer: {
        asciifolding: {
          tokenizer: 'standard',
          filter: ['lowercase', 'asciifolding_filter'],
        },
      },
      filter: {
        asciifolding_filter: {
          type: 'asciifolding',
          preserve_original: true,
        },
      },
    },
  },
};

export const MAPPING = {
  mappings: {
    properties: {
      title: {
        type: 'text',
        analyzer: 'asciifolding',
      },
    },
  },
};

export const DOC = {
  title: 'The Häppy Adventures of Hårry Pøtter',
};

export const DOCS = [{
  title: "Harry Potter and the Philosopher's Stone",
}, {
  title: 'Hårry Pøtter and the Chamber of Secrets',
}, {
  title: 'Harry Potter and the Prisoner of Azkaban',
}];

export const QUERY = {
  query: {
    match: {
      title: 'Harry Potter',
    },
  },
};
