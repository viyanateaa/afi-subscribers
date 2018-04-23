import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { CompanyType, BillingType } from './types';
import {CreateCompanyInput, CreateBillingInput} from './input';
import { createCompany,createBilling } from '../db';

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
    createBilling: {
      type: BillingType,
      args: {
        input: {
          type: CreateBillingInput
        },
      },
      resolve: (_,args)=> createBilling(args.input)
    },
  }
});

export default Mutation;
