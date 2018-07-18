import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Todo {
    id: ID!
    name: String!
    completed: Boolean
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(name: String!): Todo
  }
`;

export { typeDefs };
