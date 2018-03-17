import gql from 'graphql-tag';

export const typeDefs = gql`
  type Todo {
    id: ID!
    name: String
    completed: Boolean
  }

  type Query {
    todos: [Todo]
  }
`;
