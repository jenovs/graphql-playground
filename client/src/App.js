import React, { Component } from 'react';

import ApolloClient from 'apollo-client';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema';
import { typeDefs } from './schema';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import TodosListWithData from './TodosListWithData';

import logo from './logo.png';
import './App.css';

const schema = makeExecutableSchema({ typeDefs });
// addMockFunctionsToSchema({ schema });
const link = new HttpLink({
  uri: 'http://localhost:3001/graphql',
});

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
