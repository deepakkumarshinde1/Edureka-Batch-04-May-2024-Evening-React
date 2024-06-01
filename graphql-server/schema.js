// query
// mutation
const { user } = require("./db.json");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const UserSchema = new GraphQLObjectType({
  name: "UserSchema",
  fields: () => {
    return {
      id: { type: GraphQLID },
      userName: { type: GraphQLString },
      userEmail: { type: GraphQLString },
    };
  },
});

let Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getUsersList: {
      type: new GraphQLList(UserSchema),
      resolve: () => {
        // SELECT * FROM user;
        // user.find({});
        return user;
      },
    },
  },
});

let Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserSchema,
      args: {
        userName: { type: GraphQLString },
        userEmail: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        user.push({
          id: Date.now(),
          userEmail: args.userEmail,
          userName: args.userName,
        });

        // INSERT INTO
        // user.insertOne({...})

        return { id: user.length };
      },
    },
  },
});
const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

// export default schema
module.exports = schema;
