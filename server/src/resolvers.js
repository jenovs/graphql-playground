const todos = [
  {
    id: 1,
    name: 'Learn GraphQL',
    completed: false,
  },
  {
    id: 2,
    name: 'Have fun',
    completed: true,
  },
];

export const resolvers = {
  Query: {
    todos: () => todos,
  },
};
