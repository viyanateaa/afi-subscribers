import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { BillingType, CompanyType, SubscriberType } from './types';
import { selectAll,selectSubscriberByID } from '../db'


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
    },
    subscribersByID: {
      type: SubscriberType,
      args: {
        id: {type: GraphQLString }
      },
      resolve: (_,args) => selectSubscriberByID(args.id)
    }
  }
});

export default Query;
