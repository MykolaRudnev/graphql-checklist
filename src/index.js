import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import App from './App';

const client = new ApolloClient({
  uri: 'https://react-todo-graphql-mykola.herokuapp.com/v1/graphql'
})



ReactDOM.render(
<ApolloProvider client={client}>
  <App />
</ApolloProvider>
, document.getElementById('root')
);

