import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql';
import {BillingType} from './types';
import {getAllBillings} from '../resolver/billings'

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    billings: {
      type: BillingType,
      resolve: () => getAllBillings()
    }
  }
});

export default Query;
