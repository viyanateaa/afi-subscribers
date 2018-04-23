import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql';
import {BillingType} from './types';

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    billings: {
      type: GraphQLString,
      resolve: () => 'world'
    }
  }
});

export default Query;
