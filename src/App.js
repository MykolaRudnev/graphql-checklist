import React from 'react';
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const GET_TODOS = gql`
query getTodos {
  todos {
    done
    id
    text
  }
}
`


function App() {
  const {data, loading, error} = useQuery(GET_TODOS)
  if(loading) return <div>loading todos..</div>
  
  if(error) return <div>Error fatching todos</div>

    return (
          <div className="vh-100 code flex flex-column items-center bg-purple white pa3 fl-1">
            <h1 className="f2-1">GraphQL Cheklist{" "}
            <span role="img" aria-label="Checkmark">✅</span>
            </h1>
            {/* Todo Form */}
            <form className="mb3"> 
              <input
                  className="pa2 f4
                  b--dashed"
                  type="text"
                  placeholder="Write youre todo"
                  />
                  <button
                  className="pa2 f4 bg-green"
                  type="submit"
                  >Create</button>
            </form>
            {/* Todo List */}
            <div className="flex items-center justify-center 
            flex-column">
            {data.todos.map(todo => (
          <p key={todo.id}>
            <span
            className="pointer 
            list pa1 f3"
            >{todo.text} </span>
            <button
            className="bg-transpare nt bn f4">
              <span className="red">
                &times; 
              </span>
              
            </button>
          </p>
          ))}
          </div>
        </div>);  
          
  return (
    <div >
      App
    </div>
  );
}

export default App;
