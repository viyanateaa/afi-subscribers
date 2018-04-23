import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { BillingType, CompanyType, SubscriberType } from './types';
import {selectAll} from '../db'


const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    billings: {
      type: new GraphQLList(BillingType),
      resolve: () => selectAll('billing')
    },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve: () => selectAll('company')
    },
    subscribers: {
      type: new GraphQLList(SubscriberType),
      resolve: () => selectAll('subscribers')
    }
  }
});

export default Query;
