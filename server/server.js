import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import mongoose from 'mongoose';

import { schema } from './src/schema';

const app = express();

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// mongoose.connect('mongodb://localhost/graphqlPlayground');
//
// mongoose.connection.once('open', () => {
//   console.log('connection open');
// });

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
