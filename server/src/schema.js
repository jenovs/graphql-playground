import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import gql from 'graphql-tag';

import { resolvers } from './resolvers';

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

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });

export { schema };
