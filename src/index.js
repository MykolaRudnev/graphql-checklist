import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {gql} from 'apollo-boost'

import App from './App';

const client = new ApolloClient({
  uri: 'https://react-todo-graphql-mykola.herokuapp.com/v1/graphql'
})

client.query({
  query: gql`
  query getTodos {
    todos {
      done
      id
      text
    }
  }
  
  `
}).then(data => console.log(data))

ReactDOM.render(<App />, document.getElementById('root')
);

