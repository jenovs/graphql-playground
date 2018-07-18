const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
// const bodyParser = require('body-parser');
const cors = require('cors');
// import mongoose from 'mongoose';

const { typeDefs } = require('./src/schema');
const { resolvers } = require('./src/resolvers');

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

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use('*', (req, res, next) => {
  console.log('Request to the server');
  next();
});

// mongoose.connect('mongodb://localhost/graphqlPlayground');
//
// mongoose.connection.once('open', () => {
//   console.log('connection open');
// });

app.listen({ port: 3001 }, () => {
  console.log(`Server listening on http://localhost:3001${server.graphqlPath}`);
});
