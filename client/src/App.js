import React, {Component} from "react";
import BookList from './Components/BookList';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


class App extends Component {
  render(){
      return (
        <ApolloProvider client={client}>
          <div id="main">
            <h1>Reading List</h1>
            <BookList/>
          </div>
        </ApolloProvider>
      );
  }
}

export default App;
