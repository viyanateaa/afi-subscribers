import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import { BillingType, CompanyType, SubscriberType } from './types';
import { selectAll } from '../db'


export const CreateCompanyInput = new GraphQLInputObjectType({
  name: 'InputType',
  fields: {
    co_corporateNumber: { type: GraphQLInt },
    co_telephone: { type: GraphQLString },
    co_address: { type: GraphQLString },
    co_postcode: { type: GraphQLString },
    co_city: { type: GraphQLString },
    co_name: { type: GraphQLString }
  }
});
