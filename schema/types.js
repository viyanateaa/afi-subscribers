const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = graphql


export const BillingType = new GraphQLObjectType({
  name: 'Billing',
  description: '...',
  fields: {
    bi_id: { type: GraphQLString },
    bi_address: { type: GraphQLString },
    bi_postcode: { type: GraphQLString },
    bi_city: { type: GraphQLString },
    co_id: { type: GraphQLString }
  }
})


export const CompanyType = new GraphQLObjectType({
  name: 'Company',
  description: '...',
  fields: {
    co_id: { type: GraphQLString },
    co_corporateNumber: { type: GraphQLInt },
    co_name: { type: GraphQLString },
    co_telephone: { type: GraphQLString },
    co_address: { type: GraphQLString },
    co_postcode: { type: GraphQLString },
    co_city: { type: GraphQLString }
  }
})


export const SubscriberType = new GraphQLObjectType({
  name: 'Subscriber',
  description: '...',
  fields: {
    su_id: { type: GraphQLString },
    su_socialnumber: { type: GraphQLString },
    su_firstname: { type: GraphQLString },
    su_lastname: { type: GraphQLString },
    su_address: { type: GraphQLString },
    su_postcode: { type: GraphQLString },
    su_city: { type: GraphQLString },
    su_subscribtion_number: { type: GraphQLInt }
  }
})
