
import App from './App';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'


const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

export default function mainSpacex() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}


