import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

import { typeDefs } from './src/schema';
import { resolvers } from './src/resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.cursorShape': 'line',
      'editor.theme': 'dark',
    },
  },
});

server.applyMiddleware({ app });

// mongoose.connect('mongodb://localhost/graphqlPlayground');
//
// mongoose.connection.once('open', () => {
//   console.log('connection open');
// });

app.listen({ port: 3001 }, () => {
  console.log(`Server listening on http://localhost:3001${server.graphqlPath}`);
});
