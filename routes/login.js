const { makeExecutableSchema } = require('graphql-tools');
const { graphqlConnect } = require ('apollo-server-express');

module.exports = (app) => {
  const resolvers = app.api.login;

  let typeDefs = '';
  typeDefs += app.graphql.types.login;
  typeDefs += app.graphql.types.person;
  //typeDefs += app.graphql.types.loginResponse;
  typeDefs += app.graphql.inputs.login;

  typeDefs += `
  type Query {
    login(login: LoginInput): Person
  }
  `;
  const schema = makeExecutableSchema({typeDefs, resolvers});
  app.use('/login', graphqlConnect((req,res) => ({
    schema,
    context: { req, res },
    tracing: true,
    cacheControl: true
  })));
}