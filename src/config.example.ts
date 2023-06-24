export const INDEX = 'books';

export const REPOSITORY_NAME = 'snapshot-repository';
export const SNAPSHOT_NAME = 'snapshot';
export const SNAPSHOT_NAME_NONCE = '0';
export const WAIT_FOR_COMPLETION = false;

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

export const DYNAMIC_SETTINGS = true;
export const SETTINGS_UPDATE = {
  settings: {
    index: {
      knn: true,
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

export const MDOCS = [{ _id: '' }];

export const UPDATE_DOC = {
  id: '',
  body: {
    doc: { title: "Hårry Pøtter and the Philosopher's Stone" },
  },
};

export const DELETE_DOC_ID = '';

export const QUERY = {
  query: {
    match: {
      title: 'Harry Potter',
    },
  },
};
