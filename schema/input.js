import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import { BillingType, CompanyType, SubscriberType } from './types';
import { selectAll } from '../db'


export const CreateCompanyInput = new GraphQLInputObjectType({
  name: 'CreateCompanyInput',
  fields: {
    co_corporateNumber: { type: GraphQLInt },
    co_telephone: { type: GraphQLString },
    co_address: { type: GraphQLString },
    co_postcode: { type: GraphQLString },
    co_city: { type: GraphQLString },
    co_name: { type: GraphQLString }
  }
});

export const CreateBillingInput = new GraphQLInputObjectType({
  name: 'CreateBillingInput',
  fields: {
    bi_address: { type: GraphQLString},
    bi_postcode: { type: GraphQLString },
    bi_city: { type: GraphQLString },
    co_id: { type: GraphQLString }
  }
});
