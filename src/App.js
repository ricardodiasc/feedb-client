import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './resources/App.css';


import {ApolloClient,gql, graphql,ApolloProvider, createNetworkInterface} from 'react-apollo';
import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';

//import {mockNetworkInterfaceWithSchema} from 'apollo-test-utils';


import { typeDefs } from './graphql/schema';

import AddChanel from './AddChannel';


const schema = makeExecutableSchema({typeDefs});
addMockFunctionsToSchema({schema});

//const mockNetworkInterface = mockNetworkInterfaceWithSchema({schema})

const networkInterface = createNetworkInterface({uri:'http://localhost:4000/graphql'});

const client = new ApolloClient({
  networkInterface
});

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
        id
        name
    }
  }
`;








class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Testing Apollo Client</h2>
          </div>
          <AddChanel />
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
