import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { CompanyType, BillingType } from './types';

import { createCompany } from '../db';

const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createCompany: {
      type: CompanyType,
      args: {
        co_corporateNumber: {
          name: 'name',
          type: GraphQLInt
        },
        co_telephone: {
          name: 'name',
          type: GraphQLString
        },
        co_address: {
          name: 'name',
          type: GraphQLString

        },
        co_postcode: {
          name: 'name',
          type: GraphQLString
        },
        co_city: {
          name: 'name',
          type: GraphQLString
        },
        co_name: {
          name: 'name',
          type: GraphQLString
        }
      },
      resolve: (_,args)=> createCompany(args)
    },

  }
});

export default Mutation;
