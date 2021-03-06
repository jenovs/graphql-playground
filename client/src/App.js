import React, { Component } from 'react';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { typeDefs } from './schema';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import TodosListWithData from './TodosListWithData';

import logo from './logo.png';
import './App.css';

const schema = makeExecutableSchema({ typeDefs });
// addMockFunctionsToSchema({ schema });
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const delay = () =>
  new Promise(resolve => {
    setTimeout(resolve, 500);
  });

const addLatency = setContext(operation => delay());

const link = addLatency.concat(httpLink);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Apollo</h1>
          </header>
          <TodosListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
