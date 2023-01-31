const sendNoRules = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch
        verify
      }
    }
  `,
  variables: { password: '12345678', rules: [] },
};

const sendValidMinSize = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch
        verify
      }
    }
  `,
  variables: { password: '12345678', rules: [{ rule: 'minSize', value: 8 }] },
};

const sendInValidMinSize = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch
        verify
      }
    }
  `,
  variables: { password: '1234', rules: [{ rule: 'minSize', value: 8 }] },
};

const sendValidMinUppercase = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: '123456A8',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
    ],
  },
};

const sendInvalidMinUppercase = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: '12345678',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
    ],
  },
};

const sendValidMinLowercase = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: '123456Ab',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
      { rule: 'minLowercase', value: 1 },
    ],
  },
};

const sendInvalidMinLowercase = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: '123456A8',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
      { rule: 'minLowercase', value: 1 },
    ],
  },
};

const sendValidMinDigit = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: '1agtjuAb',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
      { rule: 'minLowercase', value: 1 },
      { rule: 'minDigit', value: 1 },
    ],
  },
};

const sendInvalidMinDigit = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: 'hagtjuAb',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
      { rule: 'minLowercase', value: 1 },
      { rule: 'minDigit', value: 1 },
    ],
  },
};

const sendValidMinSpecialChars = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: '1agt@uAb',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
      { rule: 'minLowercase', value: 1 },
      { rule: 'minDigit', value: 1 },
      { rule: 'minSpecialChars', value: 1 },
    ],
  },
};

const sendInvalidMinSpecialChars = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: '1agtpuAb',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
      { rule: 'minLowercase', value: 1 },
      { rule: 'minDigit', value: 1 },
      { rule: 'minSpecialChars', value: 1 },
    ],
  },
};

const sendInvalidAllCases = {
  query: `
    query verifyPassword($password: String!, $rules: [Rules]!) {
      verify(password: $password, rules: $rules) {
        noMatch,
        verify
      }
    }
  `,
  variables: {
    password: '',
    rules: [
      { rule: 'minSize', value: 8 },
      { rule: 'minUppercase', value: 1 },
      { rule: 'minLowercase', value: 1 },
      { rule: 'minDigit', value: 1 },
      { rule: 'minSpecialChars', value: 1 },
    ],
  },
};

export const queries = {
  sendNoRules,
  sendValidMinSize,
  sendInValidMinSize,
  sendValidMinUppercase,
  sendInvalidMinUppercase,
  sendValidMinLowercase,
  sendInvalidMinLowercase,
  sendValidMinDigit,
  sendInvalidMinDigit,
  sendValidMinSpecialChars,
  sendInvalidMinSpecialChars,
  sendInvalidAllCases,
};
