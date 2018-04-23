import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { CompanyType, BillingType } from './types';
import {CreateCompanyInput} from './input';

import { createCompany } from '../db';

const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createCompany: {
      type: CompanyType,
      args: {
        input: {
          type: CreateCompanyInput
        },
      },
      resolve: (_,args)=> createCompany(args.input)
    },
  }
});

export default Mutation;
