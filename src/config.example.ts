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

export const DOCS = [{
  title: 'The Häppy Adventures of Hårry Pøtter',
}];

export const QUERY = {
  query: {
    match: {
      title: 'Harry Potter',
    },
  },
};
