import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { todosListQuery } from './TodosListWithData';

const AddTodo = ({ mutate }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    console.log(input);
    mutate({
      variables: { name: input.value },
      refetchQueries: [{ query: todosListQuery }],
    }).then(() => (input.value = ''));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="New Todo" autoFocus />
    </form>
  );
};

const addTodoMutation = gql`
  mutation addTodo($name: String!) {
    addTodo(name: $name) {
      id
      name
      completed
    }
  }
`;
export default graphql(addTodoMutation)(AddTodo);
