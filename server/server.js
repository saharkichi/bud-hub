const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const {authMiddleware} = require('./utils/auth')
const app = express();
const { ApolloServer } = require('apollo-server-express');
// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});
// possible that we need to add a wait server.start() if graphql yells at us
server.applyMiddleware({app});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {console.log(`🌍 Now listening on localhost:${PORT}`)
console.log(`graphql running @ ${PORT} ${server.graphqlPath}`)
});

});