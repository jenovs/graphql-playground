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

let nextId = 3;

// retrieve all todos from todos array
const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    addTodo: (root, { name }) => {
      const newTodo = { id: nextId++, name, completed: false };
      todos.push(newTodo);
      return newTodo;
    },
  },
};

module.exports = { resolvers };
