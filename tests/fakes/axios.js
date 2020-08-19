const create = (data) => {
  const response = { data };
  return {
    get: jest.fn(() => Promise.resolve(response)),
  };
};

export default create;
