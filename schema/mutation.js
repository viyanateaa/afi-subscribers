import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { CompanyType, BillingType, SubscriberType } from './types';
import { CreateCompanyInput, CreateBillingInput, CreateSubscriberInput ,UpdateSubscriberInput} from './input';
import { createCompany, createBilling, createSubscriber ,updateSubscriber} from '../db';

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
      resolve: (_, args) => createCompany(args.input)
    },
    createBilling: {
      type: BillingType,
      args: {
        input: {
          type: CreateBillingInput
        },
      },
      resolve: (_, args) => createBilling(args.input)
    },

    createSubscriber: {
      type: SubscriberType,
      args: {
        input: {
          type: CreateSubscriberInput
        },
      },
      resolve: (_, args) => createSubscriber(args.input)
    },
    updateSubscriber: {
      type: SubscriberType,
      args: {
        input: {
          type: UpdateSubscriberInput
        },
      },
      resolve: (_, args) => updateSubscriber(args.input)
    },
  }
});

export default Mutation;
