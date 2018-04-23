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
    bi_id: { type: GraphQLInt },
    bi_address: {type: GraphQLString},
    bi_postcode:{type: GraphQLString},
    bi_city:{type: GraphQLString},
    co_id:{type: GraphQLInt}
  }
})
