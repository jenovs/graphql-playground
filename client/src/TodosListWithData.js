import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AddTodo from './AddTodo';

export const todosListQuery = gql`
  query todosListQuery {
    todos {
      id
      name
      completed
    }
  }
`;

const TodosList = ({ data: { loading, error, todos } }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <React.Fragment>
      <AddTodo />
      <ul>{todos.map(todo => <li key={todo.id}>{todo.name}</li>)}</ul>
    </React.Fragment>
  );
};

const TodosListWithData = graphql(todosListQuery, {
  options: {
    // refetch queries after set timeout
    // pollInterval: 5000,
  },
})(TodosList);

export default TodosListWithData;
